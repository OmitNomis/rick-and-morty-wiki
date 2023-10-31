import { useQuery } from "@apollo/client";
import { GET_CHARACTER } from "@/queries/characters";

export const useFetchSingleCharacter = (id: string | undefined) => {
  const { data, error, loading } = useQuery(GET_CHARACTER, {
    variables: {
      id: id,
    },
  });

  return { data, loading, error };
};
