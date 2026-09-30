import { SeasonRace } from "@/types/seasonRace";
import ModalHeader from "./ModalHeader";
import ModalTable from "./ModalTable";

type RaceResultModalProps = {
    Race: SeasonRace;
    onClose: () => void; 
}

export default function RaceResultModal({ Race, onClose}: RaceResultModalProps) { 


    return (
        <section className="race-result-modal">
            <div className="race-result-modal-content">
                
                <ModalHeader seasonRaces={Race} 
                onClose={onClose}/>

                <ModalTable seasonRaces={Race} />

            </div>

            
        </section>
    )
}