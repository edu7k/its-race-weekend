import type {Metadata} from "next";

export const metadata: Metadata = {
  title: "Temporada",
  description: "Consulte o calendário da temporada de Fórmula 1.",
};

export default function TemporadaPage() {

    return(
        <main>
            <section>
               <p>Calendário da Fórmula 1</p>

                <h1>Temporada</h1>

                <p>
                As corridas da temporada serão apresentadas nesta página.
                </p> 
            </section>
        </main>
    )
}