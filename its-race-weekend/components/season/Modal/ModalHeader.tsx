import type {SeasonRace} from "../../../types/seasonRace";



type modalHeaderProps = {
    seasonRaces: SeasonRace;
    onClose: () => void;
}


export default function ModalHeader({ seasonRaces, onClose }: modalHeaderProps){

    return(

        <header className="race-result-modal-header">
            <div>
                <h2>Resultado da corrida</h2>
                <p>{seasonRaces.name}</p>
                <p>{seasonRaces.round}</p>

            </div>
            <div>
                <button type="button" onClick={onClose}> Fechar </button>

            </div>
        </header>


    )

}