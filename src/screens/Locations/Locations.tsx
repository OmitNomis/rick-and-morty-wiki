import { FC, useEffect, useState } from "react";
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
  const urlParams = new URLSearchParams(window.location.search);
  const pageFromUrl = Number(urlParams.get("page"));
  const [currentPage, setCurrentPage] = useState(pageFromUrl || 1);
  // implement with filter component
  // const [filterOptions, setFilterOptions] = useState(initialFilters);
  const { locations, error, loading, totalItems } = useFetchLocations(
    currentPage,
    initialFilters
  );

  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search);
    urlParams.set("page", currentPage.toString() || "");
    window.history.replaceState(
      null,
      "",
      `${window.location.pathname}?${urlParams.toString()}`
    );
  }, [currentPage]);

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
      <div className="w-full">
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
