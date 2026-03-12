import OpenAI from "openai";

let _client: OpenAI | null = null;

function getClient() {
  if (!_client) {
    _client = new OpenAI({
      baseURL: "https://openrouter.ai/api/v1",
      apiKey: process.env.OPENROUTER_API_KEY,
      defaultHeaders: {
        "HTTP-Referer": "https://projeto-seo-production.up.railway.app",
        "X-Title": "SEO Inteligente",
      },
    });
  }
  return _client;
}

export const MODELS = {
  fast: "google/gemini-2.0-flash-001",
  smart: "anthropic/claude-sonnet-4",
  cheap: "google/gemini-2.0-flash-lite-001",
};

export { getClient as openrouter };

export async function generateText(
  prompt: string,
  model = MODELS.smart,
  maxTokens = 4000,
  temperature = 0.7,
) {
  const client = getClient();
  const response = await client.chat.completions.create({
    model,
    messages: [{ role: "user", content: prompt }],
    max_tokens: maxTokens,
    temperature,
  });
  return response.choices[0].message.content ?? "";
}

/**
 * Generate structured JSON from AI. Retries up to maxRetries on parse failure.
 */
export async function generateJSON<T = unknown>(
  prompt: string,
  model = MODELS.smart,
  maxTokens = 16000,
  maxRetries = 2,
): Promise<T> {
  const client = getClient();

  for (let attempt = 0; attempt <= maxRetries; attempt++) {
    const response = await client.chat.completions.create({
      model,
      messages: [{ role: "user", content: prompt }],
      max_tokens: maxTokens,
      temperature: 0.3,
    });

    let raw = response.choices[0].message.content ?? "";

    // Strip markdown code fences if present
    raw = raw.replace(/^```(?:json)?\s*\n?/i, "").replace(/\n?```\s*$/i, "").trim();

    try {
      return JSON.parse(raw) as T;
    } catch {
      if (attempt === maxRetries) {
        throw new Error(`AI returned invalid JSON after ${maxRetries + 1} attempts. Raw: ${raw.slice(0, 500)}`);
      }
    }
  }

  throw new Error("Unreachable");
}
