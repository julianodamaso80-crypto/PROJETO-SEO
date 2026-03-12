// ─── Image Service ──────────────────────────────────────────────
// Unsplash search + Pollinations fallback for featured images

export interface ImageResult {
  id: string;
  url: string;
  urlSmall: string;
  urlThumb: string;
  downloadUrl: string;
  alt: string;
  photographer: string;
  photographerUrl: string;
  source: "unsplash" | "generated";
}

// ─── Unsplash Search ────────────────────────────────────────────

export async function searchImages(query: string, count: number = 3): Promise<ImageResult[]> {
  const key = process.env.UNSPLASH_ACCESS_KEY;
  if (!key || key === "placeholder") return [];

  try {
    const response = await fetch(
      `https://api.unsplash.com/search/photos?query=${encodeURIComponent(query)}&per_page=${count}&orientation=landscape&lang=pt`,
      {
        headers: { Authorization: `Client-ID ${key}` },
        signal: AbortSignal.timeout(10000),
      },
    );

    if (!response.ok) return [];

    const data = await response.json();
    return (data.results || []).map((img: Record<string, unknown>) => {
      const urls = img.urls as Record<string, string>;
      const links = img.links as Record<string, string>;
      const user = img.user as Record<string, unknown>;
      const userLinks = user.links as Record<string, string>;

      return {
        id: img.id as string,
        url: urls.regular,
        urlSmall: urls.small,
        urlThumb: urls.thumb,
        downloadUrl: links.download_location,
        alt: (img.alt_description as string) || query,
        photographer: user.name as string,
        photographerUrl: userLinks.html,
        source: "unsplash" as const,
      };
    });
  } catch {
    return [];
  }
}

// ─── Pollinations Fallback ──────────────────────────────────────

export async function generateImage(prompt: string): Promise<ImageResult | null> {
  const encoded = encodeURIComponent(prompt);
  const url = `https://image.pollinations.ai/prompt/${encoded}?width=1200&height=630&nologo=true`;

  try {
    const res = await fetch(url, {
      method: "HEAD",
      signal: AbortSignal.timeout(30000),
    });
    if (!res.ok) return null;

    return {
      id: `gen_${Date.now()}`,
      url,
      urlSmall: url,
      urlThumb: url,
      downloadUrl: url,
      alt: prompt.substring(0, 100),
      photographer: "AI Generated",
      photographerUrl: "",
      source: "generated",
    };
  } catch {
    return null;
  }
}

// ─── Generate Image for Page ────────────────────────────────────

export async function generateImageForPage(page: {
  title: string;
  type: string;
  targetKeyword: string;
  businessData: { segment?: string | null; businessName?: string | null };
}): Promise<ImageResult | null> {
  const query = buildImageQuery(page);

  // Try Unsplash first
  const unsplashResults = await searchImages(query, 1);
  if (unsplashResults.length > 0) {
    // Track download per Unsplash TOS (non-blocking)
    const key = process.env.UNSPLASH_ACCESS_KEY;
    if (key) {
      fetch(unsplashResults[0].downloadUrl, {
        headers: { Authorization: `Client-ID ${key}` },
      }).catch(() => {});
    }
    return unsplashResults[0];
  }

  // Fallback to Pollinations
  const segment = page.businessData?.segment || "business";
  return generateImage(
    `Professional ${segment} concept, ${page.targetKeyword}, modern clean, no text, high quality`,
  );
}

function buildImageQuery(page: {
  type: string;
  targetKeyword: string;
  businessData: { segment?: string | null };
}): string {
  const niche = page.businessData?.segment || "";
  if (page.type === "service_area") return `${niche} office professional`;
  return `${page.targetKeyword || niche} concept professional`;
}
