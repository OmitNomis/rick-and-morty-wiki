import { GET_ALL_EPISODES } from "@/queries/episodes";
import { EpisodeFilters, EpisodeResults } from "@/types/Episodes.types";
import { useQuery } from "@apollo/client";
import { useEffect, useState } from "react";

export const useFetchEpisodes = (page: string, filter: EpisodeFilters) => {
  const [episodes, setEpisodes] = useState<EpisodeResults[]>([]);
  const [totalItems, setTotalItems] = useState(0);

  const { data, loading, error } = useQuery(GET_ALL_EPISODES, {
    variables: {
      page: page,
      filter: filter,
    },
  });
  useEffect(() => {
    if (data) {
      setEpisodes(data.episodes.results);
      setTotalItems(data.episodes.info.count);
    }
  }, [data, page]);

  return { episodes, totalItems, loading, error };
};
