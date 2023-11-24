import { FC } from "react";
import { useParams } from "react-router-dom";
import { useFetchSingleLocation } from "@/hooks/useFetchSingleLocation";
import { Loader } from "@/components/Loader";
import { LocationResidentsList } from "@/components/LocationResidentsList";
import { ErrorInfo } from "@/components/ErrorInfo";

export const LocationProfile: FC = () => {
  const { id } = useParams();

  const { data, loading, error } = useFetchSingleLocation(id);

  if (loading) {
    return <Loader />;
  }
  if (error) {
    return <ErrorInfo variant="data" />;
  }

  const {
    location: { name, dimension, type, residents },
  } = data;

  document.title = `${name} | Rick and Morty`;

  return (
    <section>
      <div className="flex flex-col gap-3">
        <h2 className="text-3xl font-extrabold sm:text-4xl">{name}</h2>
        <div className="flex flex-col justify-between w-full text-gray-500 sm:flex-row">
          <p>{dimension}</p>
          <p>{type}</p>
        </div>
      </div>
      <LocationResidentsList residents={residents} />
    </section>
  );
};
