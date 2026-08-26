import "../../styles/pages/temporada.css";
import type {Metadata} from "next";


export const metadata: Metadata = {
  title: "Temporada",
  description: "Consulte o calendário da temporada de Fórmula 1.",
};

export default function TemporadaPage() {

    return(
        <main id="temporadaPage">
      <section id="cabecalhoTemporada">
        <p className="subtituloTemporada">Calendário da Fórmula 1</p>

        <h1>Temporada</h1>

        <p>
          Consulte todas as etapas da temporada e acompanhe quais corridas já
          foram finalizadas.
        </p>
      </section>

      <section className="calendarioPlaceholder">
        <h2>Calendário da temporada</h2>
        <p>As corridas serão apresentadas aqui.</p>
      </section>
    </main>
    )
}