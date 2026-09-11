import type { RaceWeekend } from "../types/race-weekend";

export const mockNextRaceWeekend: RaceWeekend = {
  name: "Grande Prêmio da Itália",
  country: "Itália",
  circuit: "Autódromo Nacional de Monza",
  round: 16,
  startDate: "04/09/2026",
  endDate: "06/09/2026",
  status: "upcoming",
  sessions: [
    {
      name: "Treino Livre 1",
      date: "04/09/2026",
      time: "08:30",
    },
    {
      name: "Treino Livre 2",
      date: "04/09/2026",
      time: "12:00",
    },
    {
      name: "Treino Livre 3",
      date: "05/09/2026",
      time: "07:30",
    },
    {
      name: "Classificação",
      date: "05/09/2026",
      time: null,
    },
    {
      name: "Corrida",
      date: "06/09/2026",
      time: "10:00",
    },
  ],
};