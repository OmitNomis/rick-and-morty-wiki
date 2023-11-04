import { FC } from "react";
import { useParams } from "react-router-dom";
import { useFetchSingleLocation } from "@/hooks/useFetchSingleLocation";
import { Loader } from "@/components/Loader";

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
        <h2 className="text-xl sm:text-2xl font-bold">{name}</h2>
        <div className="flex flex-col sm:flex-row w-full justify-between text-gray-500">
          <p>{dimension}</p>
          <p>{type}</p>
        </div>
      </div>
      <div className="flex flex-col gap-5">
        <h3 className="text-lg sm:text-xl mt-10 text-primary/80">
          Known Residents:
        </h3>
      </div>
    </section>
  );
};
