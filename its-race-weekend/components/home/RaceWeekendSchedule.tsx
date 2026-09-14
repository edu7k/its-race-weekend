
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
                
                <div className="schedule-item">
                    <strong>Treino Livre 1</strong>
                    <h2>T1 | horario</h2>
                </div>
            
                <div className="schedule-item">
                    <strong>Treino Livre 2</strong>
                    <h2>T2 | horario</h2>
                </div>
                
                <div className="schedule-item">
                    <strong>Treino Livre 3</strong>
                    <h2>T3 | horario</h2>
                </div>
                
                <div className="schedule-item">
                    <strong>Qualify</strong>
                    <h2>Qualify | horario</h2>
                </div>
                
                <div className="schedule-item race-session">
                    <strong>Race</strong>
                    <h2>Race | horario</h2>
                </div>
                
            </div>

        </div>
    )

}