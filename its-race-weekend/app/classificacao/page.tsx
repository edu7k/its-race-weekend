import StandingCard from "../../components/standings/StandingCard";
import "../../styles/pages/standing.css";

import { mockDriverStanding } from "../../lib/mockDriverStanding";
import { mockConstructorStanding } from "../../lib/mockConstructorStanding";

export default function StandingPage() {
  return (
    <main className="standing-page">
      
      <StandingCard
        driverStanding={mockDriverStanding}
        constructorStanding={mockConstructorStanding}
      />
      
    </main>
  );
}