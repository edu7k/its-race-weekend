import type { ConstructorStanding } from "../types/standing/constructorStanding";

import {
  mclaren,
  ferrari,
  redBull,
  mercedes,
} from "./mockConstructors";

export const mockConstructorStanding: ConstructorStanding = {
  season: 2026,
  round: 16,

  constructors: [
    {
      position: 1,
      points: 425,
      wins: 7,
      constructor: mclaren,
    },
    {
      position: 2,
      points: 345,
      wins: 3,
      constructor: ferrari,
    },
    {
      position: 3,
      points: 265,
      wins: 4,
      constructor: redBull,
    },
    {
      position: 4,
      points: 245,
      wins: 2,
      constructor: mercedes,
    },
  ],
};