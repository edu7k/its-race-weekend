import type {
    RaceWeekend,
    RaceWeekendStatus,
} from "../../types/raceWeekend"

import RaceWeekendInfo from "./RaceWeekendInfo";
import RaceWeekendSchedule from "./RaceWeekendSchedule";

type RaceWeekendCardProps = {
    raceWeekend: RaceWeekend;
};

export default function RaceWeekendCard({raceWeekend, }: RaceWeekendCardProps ) {

    return(

        <section className="home-content weekend-card">
             <header className="weekend-card-header">
                <span className="weekend-status">
                    {raceWeekend.status}
                </span>


                <h2>{raceWeekend.name}</h2>

                <p>{raceWeekend.circuit}</p>
            </header>
            <RaceWeekendInfo raceWeekend={raceWeekend} />
            
            <RaceWeekendSchedule raceWeekend={raceWeekend} />
        </ section>
    )
}