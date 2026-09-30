import type {SeasonRace} from "../../../types/seasonRace";
type modalTableProps = {
    seasonRaces: SeasonRace;
}

export default function ModalTable({ seasonRaces }: modalTableProps) {


    return (
        <section>
            <table>
                <thead>
                    <th>Pos.</th>

                    <th>Piloto</th>
                    <th>Numero</th>
                    <th>Equipe</th>
                    <th>Pontos</th>

                </thead>

                <tbody>   
                    {seasonRaces.grid.map((driver) => (
                        <tr key={driver.position}>
                            <td>{driver.position}</td>
                            <td>{driver.number}</td>
                            <td>{driver.driver}</td>
                            <td>{driver.team}</td>
                        </tr>
                    ))}
                </tbody>
            </table>

        </section>
    )
}