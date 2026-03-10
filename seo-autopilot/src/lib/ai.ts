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

export async function generateText(prompt: string, model = MODELS.smart) {
  const client = getClient();
  const response = await client.chat.completions.create({
    model,
    messages: [{ role: "user", content: prompt }],
    max_tokens: 4000,
  });
  return response.choices[0].message.content ?? "";
}
