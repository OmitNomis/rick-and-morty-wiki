export type CharacterStatus = "Alive" | "Dead" | "unknown";

export type Info = {
  count?: number;
  pages?: number;
  next?: number;
  prev?: number;
};

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
  name?: string;
  status?: CharacterStatus;
  species?: string;
  type?: string;
  gender?: string;
  location?: CharacterLocation;
  origin?: CharacterOrigin;
  image?: string;
  episode?: CharacterEpisodes;
};

export type CharacterEpisodes = {
  id: number;
  name?: string;
  episode?: string;
  characters?: CharacterResults[];
};

export type Characters = {
  info: Info;
  results: CharacterResults;
};
