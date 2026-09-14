import type {
    RaceWeekend,
    RaceWeekendStatus,
} from "../../types/race-weekend"

type RaceWeekendInfoProps = {
    raceWeekend: RaceWeekend;
};

function getWeekendStatus(status: RaceWeekendStatus){
    if (status === "upcoming")
        return "Próxima etapa";
    if(status === "in progress")
        return "Em andamento";

    return "Encerrada"
}

export default function RaceWeekendInfo({raceWeekend, }: RaceWeekendInfoProps ) {
    const weekendPeriod = 
        raceWeekend.startDate !== null && raceWeekend.endDate !== null ? ` ${raceWeekend.startDate} até ${raceWeekend.endDate}`:
        "Data a Definir";
    
    return (   
            
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
            
    )
}