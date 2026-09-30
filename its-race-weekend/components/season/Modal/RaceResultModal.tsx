import { SeasonRace } from "@/types/seasonRace";
import ModalHeader from "./ModalHeader";
import ModalTable from "./ModalTable";

type RaceResultModalProps = {
    Race: SeasonRace;
}

export default function RaceResultModal({ Race }: RaceResultModalProps) { 


    return (
        <section>
            <ModalHeader seasonRaces={Race} />
            <ModalTable seasonRaces={Race} />

            
        </section>
    )
}