import { CharacterResults, Info } from "./Characters.types";

export type Locations = {
  info: Info;
  results: LocationsResult[];
};

export type LocationsResult = {
  id: string;
  name?: string;
  type?: string;
  dimension?: string;
  residents?: CharacterResults[];
};
