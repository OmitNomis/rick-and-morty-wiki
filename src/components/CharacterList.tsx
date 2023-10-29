import { useQuery } from "@apollo/client";
import { GET_ALL_CHARACTERS } from "@/queries/characters";

export const CharacterList = () => {
  const { data, loading, error } = useQuery(GET_ALL_CHARACTERS);

  if (loading) {
    return <div>Loading...</div>;
  }

  const {
    characters: { results: characters },
  } = data;

  console.log(characters);

  return (
    <div>
      {characters.map((character) => {
        return (
          <div key={character.id}>
            <div>Last seen: {character.location.name}</div>
            <div>Origin: {character.origin.name}</div>
            <div>{character.name}</div>
            <img src={character.image} alt={character.name} />
          </div>
        );
      })}
    </div>
  );
};
