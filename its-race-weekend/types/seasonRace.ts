export type SeasonRace = {
  round: number;
  name: string;
  country: string;
  circuit: string;
  date: string;
  grid: {
    position: number;
    driver: string;
    number: number;
    team: string;
  }[];
};
