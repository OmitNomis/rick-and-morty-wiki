import { FC, useState } from "react";
import { useFetchLocations } from "@/hooks/useFetchLocations";
import { Loader } from "@/components/Loader";
import { CustomPagination } from "@/components/ui/CustomPagination";
import { LocationCard } from "@/components/LocationCard";
import { LocationsResult } from "@/types/Location.types";

const initialFilters = {
  name: "",
  type: "",
  dimension: "",
};
export const Locations: FC = () => {
  const [currentPage, setCurrentPage] = useState(1);
  // todo: add filters with form
  // const [filters, setFilters] = useState({});
  const { locations, error, loading, totalItems } = useFetchLocations(
    currentPage,
    initialFilters
  );

  if (loading) {
    return <Loader />;
  }

  if (error) {
    return <>ERr</>;
  }

  return (
    <section className="flex flex-col gap-5">
      <div>
        <h1 className="text-3xl sm:text-4xl font-extrabold">Locations</h1>
      </div>
      <div className="mt-5 w-full">
        {locations.map((location: LocationsResult) => {
          return <LocationCard key={location.id} location={location} />;
        })}
      </div>
      <div>
        <CustomPagination
          currentPage={currentPage}
          totalItems={totalItems}
          showNextPrevButtons
          handleChange={setCurrentPage}
        />
      </div>
    </section>
  );
};
