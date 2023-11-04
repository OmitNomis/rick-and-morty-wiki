import { CharacterResults } from "@/types/Characters.types";
import { Loader } from "../../components/Loader";
import { CharacterCard } from "../../components/CharacterCard";
import { useFetchCharacters } from "@/hooks/useFetchCharacters";
import { useEffect, useState } from "react";
import { CustomPagination } from "../../components/ui/CustomPagination";
import { ErrorInfo } from "@/components/ErrorInfo";

export const initialFilters = {
  name: "",
  status: "",
  species: "",
  gender: "",
};

export const Characters = () => {
  const urlParams = new URLSearchParams(window.location.search);
  const pageFromUrl = Number(urlParams.get("page"));
  const [currentPage, setCurrentPage] = useState(pageFromUrl || 1);
  // implement with filter component
  // const [filterOptions, setFilterOptions] = useState(initialFilters);
  const { characters, error, loading, totalItems } = useFetchCharacters(
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
    return <ErrorInfo variant="data" />;
  }

  return (
    <section className="flex flex-col gap-5">
      <div>
        <h1 className="text-3xl sm:text-4xl font-extrabold">Characters</h1>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        {characters.map((character: CharacterResults) => {
          return <CharacterCard key={character.id} character={character} />;
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
