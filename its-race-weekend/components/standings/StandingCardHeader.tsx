
type StandingCardHeaderProps = {
    activeStanding: "driver" | "constructor";
    round: number;
    onStandingChange: (standing: "driver" | "constructor") => void;
};



export default function StandingCardHeader({ activeStanding, round, onStandingChange }: StandingCardHeaderProps) {


    const title= activeStanding === "driver" ? "Campeonato de Pilotos" : "Campeonato de Construtores";

    return(
        <header className="standing-card-header">
            
            <div className="standing-card-heading">   
                <h1 className="standing-card-title">{title}</h1>
                <p className="standing-card-round">Round: {round}</p>
            </div>

            <div >
                <button type="button" className={`standing-tab ${activeStanding === "driver" ? "active" : ""}`}
                 onClick={() => onStandingChange("driver")}>
                    Pilotos
                </button>

                <button type="button" className={`standing-tab ${activeStanding === "constructor" ? "active" : ""}`}
                 onClick={() => onStandingChange("constructor")}>
                    Construtores
                </button>
            </div>

        </header>
    )
}