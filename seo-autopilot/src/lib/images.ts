// ---- POLLINATIONS (grátis, IA) ----
async function generatePollinations(keyword: string): Promise<string> {
  const prompt = encodeURIComponent(
    `professional blog header image about ${keyword}, high quality, modern, clean design, no text`
  );
  const url = `https://image.pollinations.ai/prompt/${prompt}?width=1200&height=630&nologo=true`;

  // Testa se a URL responde em até 10 segundos
  const controller = new AbortController();
  const timeout = setTimeout(() => controller.abort(), 10000);

  const res = await fetch(url, { signal: controller.signal });
  clearTimeout(timeout);

  if (!res.ok) throw new Error("Pollinations falhou");
  return url;
}

// ---- UNSPLASH (grátis, foto real) ----
async function searchUnsplash(keyword: string): Promise<string> {
  const res = await fetch(
    `https://api.unsplash.com/search/photos?query=${encodeURIComponent(keyword)}&per_page=1&orientation=landscape`,
    {
      headers: {
        Authorization: `Client-ID ${process.env.UNSPLASH_ACCESS_KEY}`,
      },
    }
  );

  if (!res.ok) throw new Error("Unsplash falhou");
  const data = await res.json();

  if (!data.results?.length) throw new Error("Sem resultados Unsplash");
  return data.results[0].urls.regular;
}

// ---- FUNÇÃO PRINCIPAL COM FALLBACK ----
export async function getArticleImage(keyword: string): Promise<{
  url: string;
  source: "pollinations" | "unsplash" | "none";
  alt: string;
}> {
  const alt = `Imagem sobre ${keyword}`;

  // Tenta 1: Pollinations (IA grátis)
  try {
    console.log(`[images] Tentando Pollinations para: ${keyword}`);
    const url = await generatePollinations(keyword);
    console.log(`[images] Pollinations OK`);
    return { url, source: "pollinations", alt };
  } catch (e) {
    console.log(`[images] Pollinations falhou, tentando Unsplash...`);
  }

  // Tenta 2: Unsplash (foto real grátis)
  try {
    const url = await searchUnsplash(keyword);
    console.log(`[images] Unsplash OK`);
    return { url, source: "unsplash", alt };
  } catch (e) {
    console.log(`[images] Unsplash falhou, sem imagem`);
  }

  // Sem imagem
  return { url: "", source: "none", alt };
}
