import { type ClassValue, clsx } from "clsx";
import { episodeNameReg } from "@/constants/regex";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function capitalizeFirstLetter(text: string) {
  return text.charAt(0).toUpperCase() + text.slice(1);
}

export const separateEpisodeNumber = (
  episode: string
): [number, number] | [string, string] => {
  if (!episodeNameReg.test(episode)) {
    return ["", ""];
  }
  const splittedEpisode = episode
    .split(episodeNameReg)
    .filter(Boolean)
    .map((str) => Number(str));
  return [splittedEpisode[0], splittedEpisode[1]];
};
