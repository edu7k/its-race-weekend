import type { Driver } from "../driver";
import type { Constructor } from "../constructor";

export type DriverStandingItem = {
  position: number;
  points: number;
  wins: number;
  driver: Driver;
  constructor: Constructor;
};

export type DriverStanding = {
  season: number;
  round: number;
  drivers: DriverStandingItem[];
};