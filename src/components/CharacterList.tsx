import { CharacterResults } from "@/screens/Characrers/Characters.types";
import { Loader } from "./Loader";
import { CharacterCard } from "./CharacterCard";
import { useFetchCharacters } from "@/hooks/useFetchCharacters";
import { useState } from "react";
import { CustomPagination } from "./ui/CustomPagination";

export const initialFilters = {
  name: "",
  status: "",
  species: "",
  gender: "",
};

export const CharacterList = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [filterOptions, setFilterOptions] = useState(initialFilters);
  const { characters, loading, error, totalItems } = useFetchCharacters(
    currentPage,
    filterOptions
  );

  if (loading) {
    return <Loader />;
  }
  if (error) {
    return <>Err</>;
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
