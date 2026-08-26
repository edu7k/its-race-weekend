import type { Metadata } from "next";
import "../../styles/pages/classificacao.css";

export const metadata: Metadata = {
  title: "Classificação",
  description:
    "Consulte as classificações de pilotos e construtores da Fórmula 1.",
};

export default function ClassificacaoPage() {
  return (
    <main id="classificacaoPage">
      <section id="cabecalhoClassificacao">
        <p className="subtituloClassificacao">
          Campeonato de Fórmula 1
        </p>

        <h1>Classificação</h1>

        <p>
          Consulte a classificação de pilotos e construtores após cada etapa
          da temporada.
        </p>
      </section>

      <section className="containerClassificacoes">
        <div className="classificacaoPlaceholder">
          <h2>Pilotos</h2>

          <p>
            A classificação do campeonato de pilotos será apresentada aqui.
          </p>
        </div>

        <div className="classificacaoPlaceholder">
          <h2>Construtores</h2>

          <p>
            A classificação do campeonato de construtores será apresentada
            aqui.
          </p>
        </div>
      </section>
    </main>
  );
}