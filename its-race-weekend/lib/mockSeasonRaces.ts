import type { SeasonRace } from "@/types/seasonRace";

export const mockSeasonRaces: SeasonRace[] = [
  {
    round: 1,
    name: "Grande Prêmio do Japão",
    country: "Japão",
    circuit: "Circuito de Suzuka",
    date: "15/03/2026",
    grid: [
      { position: 1, driver: "Lando Norris", team: "McLaren" },
      { position: 2, driver: "Max Verstappen", team: "Red Bull" },
      { position: 3, driver: "Charles Leclerc", team: "Ferrari" },
      { position: 4, driver: "Oscar Piastri", team: "McLaren" },
      { position: 5, driver: "George Russell", team: "Mercedes" },
    ],
  },
  {
    round: 2,
    name: "Grande Prêmio da Itália",
    country: "Itália",
    circuit: "Autódromo Nacional de Monza",
    date: "22/03/2026",
    grid: [
      { position: 1, driver: "Charles Leclerc", team: "Ferrari" },
      { position: 2, driver: "Oscar Piastri", team: "McLaren" },
      { position: 3, driver: "George Russell", team: "Mercedes" },
      { position: 4, driver: "Lando Norris", team: "McLaren" },
      { position: 5, driver: "Max Verstappen", team: "Red Bull" },
    ],
  },
  {
    round: 3,
    name: "Grande Prêmio de São Paulo",
    country: "Brasil",
    circuit: "Autódromo de Interlagos",
    date: "29/03/2026",
    grid: [
      { position: 1, driver: "Oscar Piastri", team: "McLaren" },
      { position: 2, driver: "George Russell", team: "Mercedes" },
      { position: 3, driver: "Max Verstappen", team: "Red Bull" },
      { position: 4, driver: "Charles Leclerc", team: "Ferrari" },
      { position: 5, driver: "Lando Norris", team: "McLaren" },
    ],
  },
];