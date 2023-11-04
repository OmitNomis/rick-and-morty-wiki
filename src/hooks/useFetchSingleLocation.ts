import { GET_SINGLE_LOCATION } from "@/queries/locations";
import { useQuery } from "@apollo/client";

export const useFetchSingleLocation = (id: string | undefined) => {
  const { data, error, loading } = useQuery(GET_SINGLE_LOCATION, {
    variables: {
      id: id,
    },
  });

  return { data, error, loading };
};
