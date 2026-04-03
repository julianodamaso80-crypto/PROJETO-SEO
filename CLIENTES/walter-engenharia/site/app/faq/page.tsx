import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Perguntas Frequentes",
  description:
    "Tire suas dúvidas sobre serviços de engenharia civil, prazos, garantia, pagamento e acompanhamento técnico da WSSJ Engenharia no Rio de Janeiro.",
};

const FAQ_ITEMS = [
  {
    question: "Qual é o valor do serviço?",
    answer:
      "O valor varia de acordo com o tipo de serviço, a metragem do imóvel, o padrão de acabamento e a complexidade da obra. Realizamos uma visita técnica gratuita para avaliar o local e entender suas necessidades. Em seguida, enviamos um orçamento detalhado por escrito, discriminando materiais, mão de obra e prazo de execução. Não trabalhamos com valores genéricos — cada orçamento é personalizado para garantir transparência e justiça no preço.",
  },
  {
    question: "Qual o prazo para execução da obra?",
    answer:
      "O prazo depende da complexidade e do porte do serviço. Uma reforma de banheiro simples pode levar de 7 a 15 dias, enquanto uma reforma completa de apartamento pode variar de 45 a 90 dias. Construções do zero seguem cronograma específico, que é detalhado na proposta. Antes do início da obra, apresentamos um cronograma com todas as etapas e datas previstas, para que você acompanhe o andamento com total clareza.",
  },
  {
    question: "A empresa possui engenheiro responsável?",
    answer:
      "Sim. A WSSJ Engenharia possui engenheiro civil registrado no CREA-RJ, que assina a Anotação de Responsabilidade Técnica (ART) de cada obra. Isso garante que todos os serviços são executados sob supervisão técnica qualificada, em conformidade com as normas da ABNT e com a legislação vigente. A ART é sua garantia de que a obra tem responsável técnico identificado.",
  },
  {
    question: "Vocês oferecem garantia do serviço?",
    answer:
      "Sim, todos os nossos serviços contam com garantia. O prazo de garantia varia conforme o tipo de serviço executado, seguindo as diretrizes do Código de Defesa do Consumidor e as normas técnicas aplicáveis. Impermeabilização, por exemplo, conta com garantia de 5 anos. Os detalhes da garantia são especificados em contrato antes do início da obra, para sua total segurança.",
  },
  {
    question: "Quais serviços estão inclusos no orçamento?",
    answer:
      "Nosso orçamento é detalhado e discrimina exatamente o que está incluso: materiais (com marca e especificação), mão de obra, serviços de demolição (quando necessário), descarte de entulho, acabamentos e limpeza final. Qualquer item não previsto inicialmente será comunicado e aprovado por você antes da execução. Não há custos ocultos — o que está no orçamento é o que você paga.",
  },
  {
    question: "A empresa possui referências ou obras realizadas?",
    answer:
      "Sim. A WSSJ Engenharia possui um portfólio de obras realizadas em diversas regiões do Rio de Janeiro, incluindo reformas residenciais, comerciais, construções do zero e manutenção predial. Podemos fornecer contatos de clientes anteriores como referência, além de fotos e detalhes de obras concluídas. Estamos preparando nosso portfólio digital para que você possa visualizar nossos trabalhos online em breve.",
  },
  {
    question: "Como funciona a forma de pagamento?",
    answer:
      "Trabalhamos com condições de pagamento flexíveis, que são definidas na proposta comercial. Em geral, utilizamos o modelo de pagamento por medição: você paga conforme as etapas da obra são concluídas e aprovadas. Para serviços menores, podemos trabalhar com entrada + parcelas. Aceitamos transferência bancária, PIX e, em alguns casos, parcelamento. As condições são sempre negociadas antes do início do serviço.",
  },
  {
    question: "Vocês cuidam da compra de materiais?",
    answer:
      "Sim, podemos cuidar da compra de todos os materiais necessários para a obra. Trabalhamos com fornecedores de confiança e negociamos preços competitivos, repassando o benefício para o cliente. Todas as notas fiscais dos materiais são apresentadas para total transparência. Se preferir, você também pode comprar os materiais por conta própria — nesse caso, orientamos sobre especificações e quantidades.",
  },
  {
    question: "A obra terá acompanhamento técnico?",
    answer:
      "Sim, todas as nossas obras contam com acompanhamento técnico do engenheiro responsável. Ele realiza visitas periódicas ao local, verifica a qualidade da execução, a conformidade com o projeto e o cumprimento do cronograma. Além disso, mantemos comunicação constante com o cliente, enviando fotos e relatórios de progresso. Você tem acesso direto ao responsável técnico durante toda a obra.",
  },
  {
    question: "Como é feito o cronograma da obra?",
    answer:
      "Após a aprovação do orçamento, elaboramos um cronograma detalhado com todas as etapas da obra, datas de início e conclusão previstas para cada fase, e os marcos principais. O cronograma é compartilhado com você antes do início da obra e atualizado conforme o andamento. Caso ocorra qualquer imprevisto que impacte o prazo, comunicamos imediatamente e apresentamos a solução para minimizar o atraso.",
  },
];

export default function FaqPage() {
  return (
    <>
      {/* ── Hero ──────────────────────────────────────── */}
      <section
        style={{ background: "var(--navy)", color: "var(--white)" }}
        className="section"
      >
        <div className="container" style={{ maxWidth: 800, textAlign: "center" }}>
          <span className="eyebrow" style={{ justifyContent: "center" }}>
            Dúvidas
          </span>
          <h1
            style={{
              fontSize: "clamp(2rem, 5vw, 3rem)",
              fontWeight: 800,
              marginTop: 16,
              marginBottom: 16,
              lineHeight: 1.15,
            }}
          >
            Perguntas Frequentes
          </h1>
          <p
            style={{
              color: "rgba(255,255,255,.7)",
              fontSize: "1.125rem",
              maxWidth: 560,
              margin: "0 auto",
            }}
          >
            Respostas para as dúvidas mais comuns sobre nossos serviços de
            engenharia civil, reformas e manutenção.
          </p>
        </div>
      </section>

      {/* ── FAQ Accordion ─────────────────────────────── */}
      <section className="section" style={{ background: "var(--concrete)" }}>
        <div className="container" style={{ maxWidth: 800 }}>
          <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
            {FAQ_ITEMS.map((item, i) => (
              <details key={i} className="faq-item">
                <summary>{item.question}</summary>
                <div className="faq-answer">
                  <p>{item.answer}</p>
                </div>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ───────────────────────────────────────── */}
      <section
        className="section"
        style={{ background: "var(--white)", textAlign: "center" }}
      >
        <div className="container" style={{ maxWidth: 640 }}>
          <h2
            style={{
              fontSize: "1.5rem",
              fontWeight: 700,
              color: "var(--text-primary)",
              marginBottom: 16,
            }}
          >
            Ainda tem dúvidas?
          </h2>
          <p style={{ color: "var(--text-muted)", marginBottom: 28, lineHeight: 1.7 }}>
            Fale diretamente com nossa equipe pelo WhatsApp. Respondemos
            rapidamente e sem compromisso.
          </p>
          <a
            href="https://wa.me/5521999999999"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary"
          >
            Falar pelo WhatsApp
          </a>
        </div>
      </section>
    </>
  );
}
