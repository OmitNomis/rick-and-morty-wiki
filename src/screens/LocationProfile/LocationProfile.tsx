import { FC } from "react";
import { useParams } from "react-router-dom";
import { useFetchSingleLocation } from "@/hooks/useFetchSingleLocation";
import { Loader } from "@/components/Loader";
import { LocationResidentsList } from "@/components/LocationResidentsList";

export const LocationProfile: FC = () => {
  const { id } = useParams();

  const { data, loading, error } = useFetchSingleLocation(id);

  if (loading) {
    return <Loader />;
  }
  if (error) {
    return <>Err</>;
  }

  const {
    location: { name, dimension, type, residents },
  } = data;

  return (
    <section>
      <div className="flex flex-col gap-3">
        <h2 className="text-3xl sm:text-4xl font-extrabold">{name}</h2>
        <div className="flex flex-col sm:flex-row w-full justify-between text-gray-500">
          <p>{dimension}</p>
          <p>{type}</p>
        </div>
      </div>
      <LocationResidentsList residents={residents} />
    </section>
  );
};
