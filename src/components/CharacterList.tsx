import { useQuery } from "@apollo/client";
import { GET_ALL_CHARACTERS } from "@/queries/characters";
import { CharacterResults } from "@/screens/Characrers/Characters.types";
import { Loader } from "./Loader";
import { CharacterCard } from "./CharacterCard";

export const CharacterList = () => {
  const { data, loading, error } = useQuery(GET_ALL_CHARACTERS);

  if (loading) {
    return <Loader />;
  }
  if (error) {
  }

  const {
    characters: { results: characters },
  } = data;

  return (
    <section className="flex flex-col gap-5">
      <div>
        <h1 className="text-3xl sm:text-4xl font-extrabold">Characters</h1>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        {characters.map((character: CharacterResults) => {
          return <CharacterCard character={character} />;
        })}
      </div>
    </section>
  );
};
