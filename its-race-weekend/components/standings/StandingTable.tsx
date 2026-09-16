import type { DriverStanding } from "../../types/standing/driverStanding";
import type { ConstructorStanding } from "../../types/standing/constructorStanding";

type StandingTableProps = {
  activeStanding: "driver" | "constructor";
  driverStanding: DriverStanding;
  constructorStanding: ConstructorStanding;
};

export default function StandingTable({
  activeStanding,
  driverStanding,
  constructorStanding,
}: StandingTableProps) {
  const showingDrivers = activeStanding === "driver";

  return (
    <div>
      <table>
        <thead>
          <tr>
            <th>Pos.</th>

            <th>
              {showingDrivers ? "Piloto" : "Construtor"}
            </th>

            {showingDrivers && <th>Equipe</th>}

            <th>Vitórias</th>
            <th>Pontos</th>
          </tr>
        </thead>

        <tbody>
          {showingDrivers
            ? driverStanding.drivers.map((standingItem) => (
                <tr key={standingItem.driver.id}>
                  <td>{standingItem.position}</td>

                  <td>
                    <div>
                      <span>
                        {standingItem.driver.abbreviation}
                      </span>

                      <div>
                        <strong>
                          {standingItem.driver.name}
                        </strong>

                        <span>
                          {standingItem.driver.nationality} ·{" "}
                          {standingItem.driver.number}
                        </span>
                      </div>
                    </div>
                  </td>

                  <td>{standingItem.constructor.name}</td>
                  <td>{standingItem.wins}</td>
                  <td>{standingItem.points}</td>
                </tr>
              ))
            : constructorStanding.constructors.map((standingItem) => (
                <tr key={standingItem.constructor.id}>
                  <td>{standingItem.position}</td>
                  <td>{standingItem.constructor.name}</td>
                  <td>{standingItem.wins}</td>
                  <td>{standingItem.points}</td>
                </tr>
              ))}
        </tbody>
      </table>
    </div>
  );
}