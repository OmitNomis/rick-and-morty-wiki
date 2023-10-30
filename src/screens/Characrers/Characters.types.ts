export type CharacterStatus = "Alive" | "Dead" | "unknown";

export type CharacterLocation = {
  id: string;
  name: string;
};
export type CharacterOrigin = {
  id: string;
  name: string;
};

export type CharacterResults = {
  id: string;
  name: string;
  image: string;
  location: CharacterLocation;
  origin: CharacterOrigin;
  status: CharacterStatus;
  type: string;
  species: string;
};

export type Characters = {
  info: {
    pages: number;
  };
  results: CharacterResults;
};
