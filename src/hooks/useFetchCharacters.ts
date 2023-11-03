import { useState, useEffect } from "react";
import { useQuery } from "@apollo/client";
import { CharacterResults } from "@/types/Characters.types";
import { GET_ALL_CHARACTERS } from "@/queries/characters";

export const useFetchCharacters = (page: number, filter: {}) => {
  const [characters, setCharacters] = useState<CharacterResults[]>([]);
  const [totalItems, setTotalItems] = useState<number>(0);
  const { loading, error, data } = useQuery(GET_ALL_CHARACTERS, {
    variables: {
      page,
      filter,
    },
  });

  useEffect(() => {
    if (data) {
      setCharacters(data.characters.results);
      setTotalItems(data.characters.info.count);
    }
  }, [data, page]);

  return { characters, loading, error, totalItems };
};
