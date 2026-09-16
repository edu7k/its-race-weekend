import type { Driver } from "../types/driver";

export const landoNorris: Driver = {
  id: "lando-norris",
  name: "Lando Norris",
  abbreviation: "NOR",
  number: 4,
  nationality: "Britânico",
  imageUrl: "/images/drivers/lando-norris.png",
};

export const oscarPiastri: Driver = {
  id: "oscar-piastri",
  name: "Oscar Piastri",
  abbreviation: "PIA",
  number: 81,
  nationality: "Australiano",
  imageUrl: "/images/drivers/oscar-piastri.png",
};

export const maxVerstappen: Driver = {
  id: "max-verstappen",
  name: "Max Verstappen",
  abbreviation: "VER",
  number: 3,
  nationality: "Holandês",
  imageUrl: "/images/drivers/max-verstappen.png",
};

export const charlesLeclerc: Driver = {
  id: "charles-leclerc",
  name: "Charles Leclerc",
  abbreviation: "LEC",
  number: 16,
  nationality: "Monegasco",
  imageUrl: "/images/drivers/charles-leclerc.png",
};

export const lewisHamilton: Driver = {
  id: "lewis-hamilton",
  name: "Lewis Hamilton",
  abbreviation: "HAM",
  number: 44,
  nationality: "Britânico",
  imageUrl: "/images/drivers/lewis-hamilton.png",
};

export const georgeRussell: Driver = {
  id: "george-russell",
  name: "George Russell",
  abbreviation: "RUS",
  number: 63,
  nationality: "Britânico",
  imageUrl: "/images/drivers/george-russell.png",
};

export const mockDrivers: Driver[] = [
  landoNorris,
  oscarPiastri,
  maxVerstappen,
  charlesLeclerc,
  lewisHamilton,
  georgeRussell,
];