import ClassificationCard from "../../components/standings/StandingCard";

import { mockDriverStanding } from "../../lib/mockDriverStanding";
import { mockConstructorStanding } from "../../lib/mockConstructorStanding";

export default function ClassificationPage() {
  return (
    <main>
      <ClassificationCard
        driverStanding={mockDriverStanding}
        constructorStanding={mockConstructorStanding}
      />
    </main>
  );
}