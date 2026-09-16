
type StandingCardHeaderProps = {
    activeStanding: "driver" | "constructor";
    round: number;
    onStandingChange: (standing: "driver" | "constructor") => void;
};



export default function StandingCardHeader({ activeStanding, round, onStandingChange }: StandingCardHeaderProps) {


    const title= activeStanding === "driver" ? "Campeonato de Pilotos" : "Campeonato de Construtores";

    return(
        <header>
            <h1>{title}</h1>
            <p>Round: {round}</p>

            <div>
                <button type="button" onClick={() => onStandingChange("driver")}>
                    Pilotos
                </button>

                <button type="button" onClick={() => onStandingChange("constructor")}>
                    Construtores
                </button>
            </div>

        </header>
    )
}