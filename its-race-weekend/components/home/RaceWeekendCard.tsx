import type {
    RaceWeekend,
    RaceWeekendStatus,
} from "../../types/race-weekend"

type RaceWeekendCardProps = {
    raceWeekend: RaceWeekend;
};

function getWeekendStatus(status: RaceWeekendStatus){
    if (status === "upcoming")
        return "Próxima etapa";
    if(status === "in progress")
        return "Em andamento";

    return "Encerrada"
}

export default function RaceWeekendCard({raceWeekend, }: RaceWeekendCardProps ) {
    const weekendPeriod = 
        raceWeekend.startDate !== null && raceWeekend.endDate !== null ? ` ${raceWeekend.startDate} até ${raceWeekend.endDate}`:
        "Data a Definir";
    
    return (
        <section className="home-content weekend-card"
      aria-labelledby="next-weekend-title">
            <header className="weekend-card-header">
                <span className="weekend-status">
                    {raceWeekend.status}
                </span>

                <h2 id="next-weekend-title">{raceWeekend.name}</h2>

                <p>{raceWeekend.circuit}</p>
            </header>

            <div className="weekend-information">
                <div className="weekend-information-item">
                    <span>País: </span>
                    <strong>{raceWeekend.country}</strong>
                </div>
            
                
                <div className="weekend-information-item">
                    <span>Etapa: </span> 
                    <strong>{raceWeekend.round}</strong>
                </div>
                

                <div className="weekend-information-item">
                    <span>Período: </span>
                    <strong>{weekendPeriod}</strong>
                </div>
                
            </div>
            

        </section>
    )
}