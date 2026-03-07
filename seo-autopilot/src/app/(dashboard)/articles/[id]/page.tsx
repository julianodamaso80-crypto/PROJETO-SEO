export default function ArticleDetailPage({
  params,
}: {
  params: { id: string };
}) {
  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-bold text-white">Artigo: {params.id}</h1>
      <p className="text-sm text-neutral-400">
        Detalhes do artigo serao carregados aqui.
      </p>
    </div>
  );
}
