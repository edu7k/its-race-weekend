import "../../styles/pages/temporada.css";
import type {Metadata} from "next";
import { mockSeasonRaces } from "../../lib/mockSeasonRaces";
import SeasonHeader from "../../components/season/SeasonHeader"
import SeasonCard from "@/components/season/SeasonCard";

export const metadata: Metadata = {
  title: "Temporada",
  description: "Consulte o calendário da temporada de Fórmula 1.",
};

export default function TemporadaPage() {

    return(
      <main id="temporadaPage">
        <SeasonHeader/>

        <SeasonCard seasonRaces={mockSeasonRaces}/>
    </main>
    )
}