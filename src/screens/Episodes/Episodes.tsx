import { useState, useEffect, FC } from "react";
import { useFetchEpisodes } from "@/hooks/useFetchEpisodes";
import { Loader } from "@/components/Loader";
import { EpisodeFilters, EpisodeResults } from "@/types/Episodes.types";
import { CustomPagination } from "@/components/ui/CustomPagination";
import { EpisodeCard } from "@/components/EpisodeCard";
import { ErrorInfo } from "@/components/ErrorInfo";
import { useTitle } from "@/hooks/useTitle";

const initialFilters: EpisodeFilters = {
  name: "",
  episode: "",
};

export const Episodes: FC = () => {
  const urlParams = new URLSearchParams(window.location.search);
  const pageFromUrl = Number(urlParams.get("page"));
  const [currentPage, setCurrentPage] = useState(pageFromUrl || 1);
  // implement with filter component
  // const [filterOptions, setFilterOptions] = useState(initialFilters);
  const { episodes, loading, error, totalItems } = useFetchEpisodes(
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
  useTitle("Episodes | Rick and Morty");
  if (loading) {
    return <Loader />;
  }
  if (error) {
    return <ErrorInfo variant="data" />;
  }

  return (
    <section className="flex flex-col gap-5">
      <div>
        <h1 className="text-3xl font-extrabold sm:text-4xl">Episodes</h1>
      </div>
      <div className="flex flex-col gap-5">
        {episodes.map((episode: EpisodeResults) => {
          return <EpisodeCard key={episode.id} episode={episode} />;
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
