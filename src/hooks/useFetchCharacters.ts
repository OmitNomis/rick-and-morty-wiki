import { useState, useEffect } from "react";
import { useLazyQuery, useQuery } from "@apollo/client";
import {
  CharacterResults,
  Characters,
} from "@/screens/Characrers/Characters.types";
import { GET_ALL_CHARACTERS } from "@/queries/characters";

export const useFetchCharacters = (page: number, filter: {}) => {
  const [characters, setCharacters] = useState<CharacterResults[]>([]);
  const [totalPages, setTotalPages] = useState<number>(0);
  const { loading, error, data } = useQuery(GET_ALL_CHARACTERS, {
    variables: {
      page,
      filter,
    },
  });

  useEffect(() => {
    if (data) {
      setCharacters(data.characters.results);
      setTotalPages(data.characters.info.pages);
    }
  }, [data, page]);

  return { characters, loading, error, totalPages };
};
