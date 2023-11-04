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

export type SingleEpisodeData = {
  title: string;
  characters: CharacterResults[];
  image: string;
  duration: string;
  season: string;
  episode: string;
  imdbRating: string;
  imdbId: string;
  rated: string;
  plot: string;
};

export type ImdbData = {
  Poster: string;
  Runtime: string;
  Season: string;
  Episode: string;
  imdbRating: string;
  imdbID: string;
  Rated: string;
  Plot: string;
};
