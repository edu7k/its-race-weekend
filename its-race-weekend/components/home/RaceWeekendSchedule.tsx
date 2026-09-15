
import type {
    RaceWeekend,
    RaceWeekendStatus,
} from "../../types/race-weekend"

type RaceWeekendScheduleProps = {
    raceWeekend: RaceWeekend;
};



export default function RaceWeekendSchedule({raceWeekend }: RaceWeekendScheduleProps) {

    return (
        <div className="weekend-schedule">
            <div className="schedule-header">
                <h2>Programação da Semana</h2>
                <p>Horários do fim de semana</p>
            </div>


            <div className="schedule-list">
                
                {raceWeekend.sessions.map( (session) => (
                    <div className={session.name === "Corrida" ? "schedule-item race-session" : "schedule-item"}
                    key={session.name}>

                        <div>
                            <strong>{session.name}</strong>
                            
                            <p>{session.date !== null ? session.date : "Data a definir"}</p>
                        </div>

                        <span className="schedule-time">{session.time !== null ? session.time : "Horário a definir"}</span>
                    </div>
                    )
                )}
                
            
                

            </div>

        </div>
    )

}