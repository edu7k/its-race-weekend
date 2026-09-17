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
    <div className="standing-table-container">
      <table className="standing-table">
        <thead>
          <tr>
            <th className="position-column">Pos.</th>

            <th>
              {showingDrivers ? "Piloto" : "Construtor"}
            </th>

            {showingDrivers && <th>Equipe</th>}

            <th className="number-column">Vitórias</th>
            <th className="number-column">Pontos</th>
          </tr>
        </thead>

        <tbody>
          {showingDrivers
            ? driverStanding.drivers.map((standingItem) => (
                <tr className="standing-row" key={standingItem.driver.id}>
                  <td className="standing-position">{standingItem.position}</td>

                  <td>
                    <div className="driver-info">
                      <span className="driver-abbreviation">
                        {standingItem.driver.abbreviation}
                      </span>

                      <div className="driver-details">
                        <strong className="driver-name">
                          {standingItem.driver.name}
                        </strong>

                        <span className="driver-meta">
                          {standingItem.driver.nationality} ·{" "}
                          {standingItem.driver.number}
                        </span>
                      </div>
                    </div>
                  </td>

                  <td className="standing-team">{standingItem.constructor.name}</td>
                  <td className="standing-number">{standingItem.wins}</td>
                  <td className="standing-number standing-points">{standingItem.points}</td>
                </tr>
              ))
            : constructorStanding.constructors.map((standingItem) => (
                <tr className="standing-row" key={standingItem.constructor.id}>
                  <td className="standing-position">{standingItem.position}</td>
                  <td className="standing-name">{standingItem.constructor.name}</td>
                  <td className="standing-number">{standingItem.wins}</td>
                  <td className="standing-number standing-points">{standingItem.points}</td>
                </tr>
              ))}
        </tbody>
      </table>
    </div>
  );
}