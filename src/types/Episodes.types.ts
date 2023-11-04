import { CharacterResults, Info } from "./Characters.types";

export type Episodes = {
  info: Info;
  results: EpisodeResults[];
};

export type EpisodeResults = {
  id: string;
  name: string;
  air_date: string;
  episode: string;
  characters: CharacterResults[];
};

export type EpisodeFilters = {
  name: string;
  episode: string;
};
