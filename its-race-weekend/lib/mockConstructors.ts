import type { Constructor } from "../types/constructor";

export const mclaren: Constructor = {
  id: "mclaren",
  name: "McLaren",
  nationality: "Britânica",
  logoUrl: "/images/constructors/mclaren.png",
};

export const ferrari: Constructor = {
  id: "ferrari",
  name: "Ferrari",
  nationality: "Italiana",
  logoUrl: "/images/constructors/ferrari.png",
};

export const redBull: Constructor = {
  id: "red-bull",
  name: "Red Bull Racing",
  nationality: "Austríaca",
  logoUrl: "/images/constructors/red-bull.png",
};

export const mercedes: Constructor = {
  id: "mercedes",
  name: "Mercedes",
  nationality: "Alemã",
  logoUrl: "/images/constructors/mercedes.png",
};

export const mockConstructors: Constructor[] = [
  mclaren,
  ferrari,
  redBull,
  mercedes,
];