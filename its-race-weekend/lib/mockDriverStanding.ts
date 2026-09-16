import type { DriverStanding } from "../types/standing/driverStanding";

import {
  landoNorris,
  oscarPiastri,
  maxVerstappen,
  charlesLeclerc,
  lewisHamilton,
  georgeRussell,
} from "./mockDrivers";

import {
  mclaren,
  ferrari,
  redBull,
  mercedes,
} from "./mockConstructors";

export const mockDriverStanding: DriverStanding = {
  season: 2026,
  round: 16,

  drivers: [
    {
      position: 1,
      points: 220,
      wins: 4,
      driver: landoNorris,
      constructor: mclaren,
    },
    {
      position: 2,
      points: 205,
      wins: 3,
      driver: oscarPiastri,
      constructor: mclaren,
    },
    {
      position: 3,
      points: 195,
      wins: 4,
      driver: maxVerstappen,
      constructor: redBull,
    },
    {
      position: 4,
      points: 180,
      wins: 2,
      driver: charlesLeclerc,
      constructor: ferrari,
    },
    {
      position: 5,
      points: 165,
      wins: 1,
      driver: lewisHamilton,
      constructor: ferrari,
    },
    {
      position: 6,
      points: 150,
      wins: 2,
      driver: georgeRussell,
      constructor: mercedes,
    },
  ],
};