"use client";
import { useState } from "react";
import type {SeasonRace} from "../../types/seasonRace";
import RaceResultModal from "./Modal/RaceResultModal";


type CarouselProps = {
    seasonRaces: SeasonRace[];
}


export default function SeasonCarousel( {seasonRaces} : CarouselProps){
    const [selectedRace, setSelectedRace] = useState<SeasonRace | null>(null);

    return(


        <section className="season-carousel">
            {seasonRaces.map((race) => (
                <button className="season-race-card" 
                key={race.round} type="button" onClick={ () => {setSelectedRace(race)}} 
                >
                    <p>Round: {race.round}</p>
                    <p>{race.name}</p>
                </button>
            ))}

            {selectedRace && (
                <RaceResultModal Race={selectedRace}
                onClose={() =>{setSelectedRace(null)}} />
            )}
        </section>
    )

}