

import SeasonCarousel from "./SeasonCarousel";
import type {SeasonRace} from "../../types/seasonRace";

type SeasonCardProps = {
    seasonRaces: SeasonRace[];
};


export default function SeasonCard({ seasonRaces }: SeasonCardProps){
    
    return(
        <section className="calendarioPlaceholder">
            <h2>Calendário da temporada</h2>
            
            <SeasonCarousel
                seasonRaces={seasonRaces}
            />

            

        </section>



    )
}