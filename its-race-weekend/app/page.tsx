import RaceWeekendCard from "../components/home/RaceWeekendCard";
import { mockNextRaceWeekend } from "../lib/mock-race-weekend";
import "../styles/pages/home.css";


export default function HomePage() {
  return (
    <main className="home-page">
      <section className="home-hero" aria-labelledby="home-title">
        <div className="home-hero-content">
          <p className="home-eyebrow">Próxima etapa</p>

          <h1 id="home-title">{mockNextRaceWeekend.name}</h1>

          <p>{mockNextRaceWeekend.circuit}</p>
        </div>
      </section>

      
      <RaceWeekendCard raceWeekend={mockNextRaceWeekend} />
    </main>
  );
}
