import type { Constructor } from "../constructor";

export type ConstructorStandingItem = {
  position: number;
  points: number;
  wins: number;
  constructor: Constructor;
};

export type ConstructorStanding = {
  season: number;
  round: number;
  constructors: ConstructorStandingItem[];
};