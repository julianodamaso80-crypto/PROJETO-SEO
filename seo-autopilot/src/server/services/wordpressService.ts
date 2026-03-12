// ─── WordPress Publishing Service ─────────────────────────────
// REST API client for WordPress wp-json/wp/v2/

// ─── Auth Helper ─────────────────────────────────────────────

function getAuthHeader(wpUser: string, wpAppPassword: string): string {
  const credentials = Buffer.from(`${wpUser}:${wpAppPassword}`).toString("base64");
  return `Basic ${credentials}`;
}

function normalizeUrl(wpUrl: string): string {
  return wpUrl.replace(/\/+$/, "");
}

// ─── Test Connection ─────────────────────────────────────────

export async function testConnection(
  wpUrl: string,
  wpUser: string,
  wpAppPassword: string,
): Promise<{ success: boolean; wpVersion?: string; error?: string }> {
  try {
    const baseUrl = normalizeUrl(wpUrl);

    const response = await fetch(`${baseUrl}/wp-json/wp/v2/users/me`, {
      headers: {
        Authorization: getAuthHeader(wpUser, wpAppPassword),
        "Content-Type": "application/json",
      },
      signal: AbortSignal.timeout(15000),
    });

    if (!response.ok) {
      if (response.status === 401) return { success: false, error: "Credenciais inválidas" };
      if (response.status === 403) return { success: false, error: "Sem permissão. Verifique se o usuário é admin ou editor." };
      if (response.status === 404) return { success: false, error: "REST API não encontrada. Verifique se o WordPress está atualizado (5.6+)." };
      return { success: false, error: `Erro ${response.status}: ${response.statusText}` };
    }

    // Fetch WP version
    let wpVersion = "5.6+";
    try {
      const siteResponse = await fetch(`${baseUrl}/wp-json/`, {
        signal: AbortSignal.timeout(10000),
      });
      if (siteResponse.ok) {
        const siteData = await siteResponse.json();
        if (siteData?.name) {
          wpVersion = siteData.description ? `${siteData.name}` : wpVersion;
        }
      }
    } catch {
      // Non-critical, keep default version
    }

    return { success: true, wpVersion };
  } catch (error) {
    const msg = error instanceof Error ? error.message : "Erro de conexão";
    return {
      success: false,
      error: msg.includes("fetch") || msg.includes("abort")
        ? "Não foi possível conectar. Verifique a URL do site."
        : msg,
    };
  }
}

// ─── Check SEO Plugin ────────────────────────────────────────

export async function checkSeoPlugin(
  wpUrl: string,
  wpUser: string,
  wpAppPassword: string,
): Promise<{ hasYoast: boolean; hasRankMath: boolean }> {
  try {
    const baseUrl = normalizeUrl(wpUrl);
    const response = await fetch(`${baseUrl}/wp-json/`, {
      headers: { Authorization: getAuthHeader(wpUser, wpAppPassword) },
      signal: AbortSignal.timeout(10000),
    });
    const data = await response.json();
    const namespaces: string[] = data.namespaces || [];

    return {
      hasYoast: namespaces.some((n) => n.includes("yoast")),
      hasRankMath: namespaces.some((n) => n.includes("rankmath")),
    };
  } catch {
    return { hasYoast: false, hasRankMath: false };
  }
}

// ─── Publish Page ────────────────────────────────────────────

export async function publishPage(input: {
  wpUrl: string;
  wpUser: string;
  wpAppPassword: string;
  title: string;
  slug: string;
  contentHtml: string;
  metaTitle?: string;
  metaDescription?: string;
  schemaJson?: unknown;
  faqHtml?: string;
  status?: "draft" | "publish";
  type?: "page" | "post";
  featuredMediaId?: number;
}): Promise<{ success: boolean; wpPostId?: number; wpUrl?: string; error?: string }> {
  try {
    const baseUrl = normalizeUrl(input.wpUrl);
    const endpoint =
      input.type === "post"
        ? `${baseUrl}/wp-json/wp/v2/posts`
        : `${baseUrl}/wp-json/wp/v2/pages`;

    // Build full content
    let fullContent = input.contentHtml;

    // Append FAQ HTML
    if (input.faqHtml) {
      fullContent += `\n\n${input.faqHtml}`;
    }

    // Append Schema JSON-LD scripts
    if (input.schemaJson) {
      const schemaItems = Array.isArray(input.schemaJson) ? input.schemaJson : [input.schemaJson];
      const schemaScripts = schemaItems
        .map((s) => `<script type="application/ld+json">${JSON.stringify(s)}</script>`)
        .join("\n");
      fullContent += `\n\n<!-- Schema Markup -->\n${schemaScripts}`;
    }

    const body: Record<string, unknown> = {
      title: input.title,
      slug: input.slug,
      content: fullContent,
      status: input.status || "draft",
      ...(input.featuredMediaId ? { featured_media: input.featuredMediaId } : {}),
    };

    // Yoast SEO meta fields (if plugin installed)
    if (input.metaTitle || input.metaDescription) {
      body.meta = {
        _yoast_wpseo_title: input.metaTitle || "",
        _yoast_wpseo_metadesc: input.metaDescription || "",
      };
    }

    const response = await fetch(endpoint, {
      method: "POST",
      headers: {
        Authorization: getAuthHeader(input.wpUser, input.wpAppPassword),
        "Content-Type": "application/json",
      },
      body: JSON.stringify(body),
      signal: AbortSignal.timeout(30000),
    });

    if (!response.ok) {
      const error = await response.json().catch(() => ({}));
      return {
        success: false,
        error: (error as { message?: string }).message || `Erro ${response.status}: ${response.statusText}`,
      };
    }

    const result = (await response.json()) as { id: number; link: string };

    return {
      success: true,
      wpPostId: result.id,
      wpUrl: result.link,
    };
  } catch (error) {
    return { success: false, error: error instanceof Error ? error.message : "Erro ao publicar" };
  }
}

// ─── Update Existing Page ────────────────────────────────────

export async function updatePage(input: {
  wpUrl: string;
  wpUser: string;
  wpAppPassword: string;
  wpPostId: number;
  title?: string;
  contentHtml?: string;
  status?: "draft" | "publish";
  type?: "page" | "post";
}): Promise<{ success: boolean; error?: string }> {
  try {
    const baseUrl = normalizeUrl(input.wpUrl);
    const endpoint =
      input.type === "post"
        ? `${baseUrl}/wp-json/wp/v2/posts/${input.wpPostId}`
        : `${baseUrl}/wp-json/wp/v2/pages/${input.wpPostId}`;

    const body: Record<string, unknown> = {};
    if (input.title) body.title = input.title;
    if (input.contentHtml) body.content = input.contentHtml;
    if (input.status) body.status = input.status;

    const response = await fetch(endpoint, {
      method: "PUT",
      headers: {
        Authorization: getAuthHeader(input.wpUser, input.wpAppPassword),
        "Content-Type": "application/json",
      },
      body: JSON.stringify(body),
      signal: AbortSignal.timeout(30000),
    });

    if (!response.ok) {
      const error = await response.json().catch(() => ({}));
      return { success: false, error: (error as { message?: string }).message || `Erro ${response.status}` };
    }

    return { success: true };
  } catch (error) {
    return { success: false, error: error instanceof Error ? error.message : "Erro ao atualizar" };
  }
}

// ─── Upload Image ────────────────────────────────────────────

export async function uploadImage(input: {
  wpUrl: string;
  wpUser: string;
  wpAppPassword: string;
  imageBuffer: Buffer;
  filename: string;
  mimeType: string;
}): Promise<{ success: boolean; mediaId?: number; mediaUrl?: string; error?: string }> {
  try {
    const baseUrl = normalizeUrl(input.wpUrl);

    const response = await fetch(`${baseUrl}/wp-json/wp/v2/media`, {
      method: "POST",
      headers: {
        Authorization: getAuthHeader(input.wpUser, input.wpAppPassword),
        "Content-Disposition": `attachment; filename="${input.filename}"`,
        "Content-Type": input.mimeType,
      },
      body: new Uint8Array(input.imageBuffer),
      signal: AbortSignal.timeout(60000),
    });

    if (!response.ok) {
      return { success: false, error: `Erro ${response.status}` };
    }

    const result = (await response.json()) as { id: number; source_url: string };
    return {
      success: true,
      mediaId: result.id,
      mediaUrl: result.source_url,
    };
  } catch (error) {
    return { success: false, error: error instanceof Error ? error.message : "Erro no upload" };
  }
}

// ─── FAQ to HTML Helper ──────────────────────────────────────

export function faqToHtml(faqs: { question: string; answer: string }[]): string {
  if (!faqs?.length) return "";

  let html = `<div class="faq-section">\n<h2>Perguntas Frequentes</h2>\n`;
  for (const faq of faqs) {
    html += `<details>\n  <summary><strong>${escapeHtml(faq.question)}</strong></summary>\n  <p>${escapeHtml(faq.answer)}</p>\n</details>\n`;
  }
  html += `</div>`;
  return html;
}

// ─── Escape HTML Helper ─────────────────────────────────────

function escapeHtml(text: string): string {
  return text
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}
