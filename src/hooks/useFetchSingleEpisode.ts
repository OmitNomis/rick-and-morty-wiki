import { GET_SINGLE_EPISODE } from "@/queries/episodes";
import { useQuery } from "@apollo/client";
import { useEffect, useState } from "react";
import { separateEpisodeNumber } from "@/lib/utils";
import { SingleEpisodeData, ImdbData } from "@/types/Episodes.types";
export const useFetchSingleEpisode = (id: string | undefined) => {
  const [episodeData, setEpisodeData] = useState<SingleEpisodeData>();
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const { data, error: gqlError } = useQuery(GET_SINGLE_EPISODE, {
    variables: {
      id: id,
    },
  });

  useEffect(() => {
    const fetchImdbData = async () => {
      const [season, episode] = separateEpisodeNumber(data.episode.episode);
      try {
        const res = await fetch(
          // TODO: move api key to ENV
          `https://www.omdbapi.com/?apikey=3efc64ca&i=tt2861424&Season=${season}&Episode=${episode}`
        );
        const dataImdb: ImdbData = await res.json();
        let gqlResult = data.episode;
        let combinedData;
        combinedData = {
          title: gqlResult.name,
          characters: gqlResult.characters,
          image: dataImdb.Poster,
          duration: dataImdb.Runtime,
          season: dataImdb.Season,
          episode: dataImdb.Episode,
          imdbId: dataImdb.imdbID,
          imdbRating: dataImdb.imdbRating,
          rated: dataImdb.Rated,
          plot: dataImdb.Plot,
        };
        setEpisodeData(combinedData);
        setLoading(false);
        setError(false);
      } catch {
        setError(true);
      }
    };
    if (gqlError) {
      setError(true);
    }
    if (data) {
      fetchImdbData();
    }
  }, [data, error]);

  return { error, loading, episodeData };
};
