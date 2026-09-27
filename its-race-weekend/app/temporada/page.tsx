import "../../styles/pages/temporada.css";
import type {Metadata} from "next";
import SeasonHeader from "../../components/season/SeasonHeader"
import CalendarCard from "@/components/season/CalendarCard";

export const metadata: Metadata = {
  title: "Temporada",
  description: "Consulte o calendário da temporada de Fórmula 1.",
};

export default function TemporadaPage() {

    return(
      <main id="temporadaPage">
        <SeasonHeader/>

        <section className="calendarioPlaceholder">
          <h2>Calendário da temporada</h2>
          <p>As corridas serão apresentadas aqui.</p>
        </section>
    </main>
    )
}