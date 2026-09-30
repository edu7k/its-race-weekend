import type {SeasonRace} from "../../../types/seasonRace";



type modalHeaderProps = {
    seasonRaces: SeasonRace;
}


export default function ModalHeader({ seasonRaces }: modalHeaderProps){

    return(

        <header>
            <div>
                <h2>Resultado da corrida</h2>
                <p>{seasonRaces.name}</p>
                <p>{seasonRaces.round}</p>

            </div>
            <div>
                <button type="button">Fechar</button>

            </div>
        </header>


    )

}