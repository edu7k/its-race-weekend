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


        <section>
            {seasonRaces.map((race) => (
                <button key={race.round} type="button" onClick={ () => {setSelectedRace(race)}}>
                    <p>{race.round}</p>
                    <p>{race.name}</p>
                </button>
            ))}

            {selectedRace && (
                <RaceResultModal Race={selectedRace} />
            )}
        </section>
    )

}