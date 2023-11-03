import { useState, useEffect } from "react";
import { useQuery } from "@apollo/client";
import { LocationsResult } from "@/types/Location.types";
import { GET_ALL_LOCATION } from "@/queries/locations";

export const useFetchLocations = (
  page: number,
  filter: Record<string, string>
) => {
  const [locations, setLoactions] = useState<LocationsResult[]>([]);
  const [totalItems, setTotalItems] = useState<number>(0);
  const { loading, error, data } = useQuery(GET_ALL_LOCATION, {
    variables: {
      page,
      filter,
    },
  });

  useEffect(() => {
    if (data) {
      setLoactions(data.locations.results);
      setTotalItems(data.locations.info.count);
    }
  }, [data, page]);

  return { locations, loading, error, totalItems };
};
