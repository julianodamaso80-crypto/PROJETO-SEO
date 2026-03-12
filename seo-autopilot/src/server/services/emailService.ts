import { Resend } from "resend";

const resend = process.env.RESEND_API_KEY
  ? new Resend(process.env.RESEND_API_KEY)
  : null;

const FROM_EMAIL = "SEO Inteligente <noreply@seointeligente.site>";

async function sendEmail(input: {
  to: string;
  subject: string;
  html: string;
}): Promise<boolean> {
  if (!resend) {
    console.log(
      `[Email skip] Resend não configurado. Para: ${input.to}, Assunto: ${input.subject}`
    );
    return false;
  }

  try {
    await resend.emails.send({
      from: FROM_EMAIL,
      to: input.to,
      subject: input.subject,
      html: input.html,
    });
    return true;
  } catch (error) {
    console.error("[Email error]", error);
    return false;
  }
}

// ========== TEMPLATES ==========

export async function sendWelcomeEmail(email: string, name: string) {
  return sendEmail({
    to: email,
    subject: "Bem-vindo ao SEO Inteligente!",
    html: `
      <div style="font-family: 'DM Sans', Arial, sans-serif; max-width: 600px; margin: 0 auto; background: #09090b; color: #fff; padding: 40px; border-radius: 12px;">
        <div style="width: 40px; height: 40px; border-radius: 10px; background: #00ff88; display: flex; align-items: center; justify-content: center; font-weight: 800; font-size: 18px; color: #000; margin-bottom: 24px; text-align: center; line-height: 40px;">S</div>
        <h1 style="color: #00ff88; font-size: 24px; margin: 0 0 16px;">Bem-vindo, ${escapeHtml(name)}!</h1>
        <p style="color: #a1a1aa; font-size: 16px; line-height: 1.6; margin: 0 0 24px;">
          Sua conta no SEO Inteligente foi criada com sucesso. Você já pode começar a cadastrar clientes e gerar conteúdo SEO de alta qualidade com IA.
        </p>
        <a href="https://seointeligente.site/dashboard"
           style="display: inline-block; background: #00ff88; color: #000; padding: 12px 24px; border-radius: 8px; text-decoration: none; font-weight: bold;">
          Acessar Dashboard
        </a>
        <hr style="border: none; border-top: 1px solid #27272a; margin: 32px 0;" />
        <p style="color: #52525b; font-size: 12px; margin: 0;">SEO Inteligente — Automação SEO com IA</p>
      </div>
    `,
  });
}

export async function sendOnboardingCompleteEmail(
  email: string,
  clientName: string
) {
  return sendEmail({
    to: email,
    subject: `Onboarding completo: ${clientName}`,
    html: `
      <div style="font-family: 'DM Sans', Arial, sans-serif; max-width: 600px; margin: 0 auto; background: #09090b; color: #fff; padding: 40px; border-radius: 12px;">
        <div style="width: 40px; height: 40px; border-radius: 10px; background: #00ff88; display: flex; align-items: center; justify-content: center; font-weight: 800; font-size: 18px; color: #000; margin-bottom: 24px; text-align: center; line-height: 40px;">S</div>
        <h1 style="color: #00ff88; font-size: 24px; margin: 0 0 16px;">Onboarding Concluído!</h1>
        <p style="color: #a1a1aa; font-size: 16px; line-height: 1.6; margin: 0 0 8px;">
          O cliente <strong style="color: #fff;">${escapeHtml(clientName)}</strong> completou o questionário de onboarding.
        </p>
        <p style="color: #a1a1aa; font-size: 16px; line-height: 1.6; margin: 0 0 24px;">
          Próximo passo: revise as respostas e gere o plano de conteúdo.
        </p>
        <a href="https://seointeligente.site/clients"
           style="display: inline-block; background: #00ff88; color: #000; padding: 12px 24px; border-radius: 8px; text-decoration: none; font-weight: bold;">
          Ver Clientes
        </a>
        <hr style="border: none; border-top: 1px solid #27272a; margin: 32px 0;" />
        <p style="color: #52525b; font-size: 12px; margin: 0;">SEO Inteligente — Automação SEO com IA</p>
      </div>
    `,
  });
}

export async function sendPlanGeneratedEmail(
  email: string,
  clientName: string,
  totalPages: number,
  planId: string
) {
  return sendEmail({
    to: email,
    subject: `Plano gerado: ${clientName} (${totalPages} páginas)`,
    html: `
      <div style="font-family: 'DM Sans', Arial, sans-serif; max-width: 600px; margin: 0 auto; background: #09090b; color: #fff; padding: 40px; border-radius: 12px;">
        <div style="width: 40px; height: 40px; border-radius: 10px; background: #00ff88; display: flex; align-items: center; justify-content: center; font-weight: 800; font-size: 18px; color: #000; margin-bottom: 24px; text-align: center; line-height: 40px;">S</div>
        <h1 style="color: #00ff88; font-size: 24px; margin: 0 0 16px;">Plano de Conteúdo Pronto!</h1>
        <p style="color: #a1a1aa; font-size: 16px; line-height: 1.6; margin: 0 0 8px;">
          O plano para <strong style="color: #fff;">${escapeHtml(clientName)}</strong> foi gerado com <strong style="color: #00ff88;">${totalPages} páginas</strong>.
        </p>
        <p style="color: #a1a1aa; font-size: 16px; line-height: 1.6; margin: 0 0 24px;">
          Revise o plano e aprove para iniciar a produção de conteúdo.
        </p>
        <a href="https://seointeligente.site/plans/${encodeURIComponent(planId)}"
           style="display: inline-block; background: #00ff88; color: #000; padding: 12px 24px; border-radius: 8px; text-decoration: none; font-weight: bold;">
          Ver Plano
        </a>
        <hr style="border: none; border-top: 1px solid #27272a; margin: 32px 0;" />
        <p style="color: #52525b; font-size: 12px; margin: 0;">SEO Inteligente — Automação SEO com IA</p>
      </div>
    `,
  });
}

export async function sendPublicationCompleteEmail(
  email: string,
  clientName: string,
  publishedCount: number
) {
  return sendEmail({
    to: email,
    subject: `${publishedCount} páginas publicadas: ${clientName}`,
    html: `
      <div style="font-family: 'DM Sans', Arial, sans-serif; max-width: 600px; margin: 0 auto; background: #09090b; color: #fff; padding: 40px; border-radius: 12px;">
        <div style="width: 40px; height: 40px; border-radius: 10px; background: #00ff88; display: flex; align-items: center; justify-content: center; font-weight: 800; font-size: 18px; color: #000; margin-bottom: 24px; text-align: center; line-height: 40px;">S</div>
        <h1 style="color: #00ff88; font-size: 24px; margin: 0 0 16px;">Publicação Concluída!</h1>
        <p style="color: #a1a1aa; font-size: 16px; line-height: 1.6; margin: 0 0 8px;">
          <strong style="color: #00ff88;">${publishedCount} páginas</strong> foram publicadas no WordPress de <strong style="color: #fff;">${escapeHtml(clientName)}</strong>.
        </p>
        <p style="color: #a1a1aa; font-size: 16px; line-height: 1.6; margin: 0 0 24px;">
          As páginas já estão no ar e serão indexadas pelo Google nos próximos dias.
        </p>
        <hr style="border: none; border-top: 1px solid #27272a; margin: 32px 0;" />
        <p style="color: #52525b; font-size: 12px; margin: 0;">SEO Inteligente — Automação SEO com IA</p>
      </div>
    `,
  });
}

function escapeHtml(str: string): string {
  return str
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}
