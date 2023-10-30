import { FC } from "react";
import { CharacterResults } from "@/screens/Characrers/Characters.types";
import { CharacterStatusTag } from "./CharacterStatusTag";

interface CharacterCardProps {
  character: CharacterResults;
}

export const CharacterCard: FC<CharacterCardProps> = ({ character }) => {
  console.log(character);
  const { id, name, image, status, location, origin } = character;

  return (
    <div className="flex flex-col sm:flex-row rounded-lg bg-secondary" key={id}>
      <div className="w-full sm:w-[40%] max-h-[300px]">
        <img
          src={image}
          alt={`${name} image`}
          className="object-cover h-full w-full rounded-tl-lg rounded-tr-lg sm:rounded-tr-none sm:rounded-bl-lg"
        />
      </div>
      <div className="flex flex-col my-5 mx-5 gap-5">
        <div>
          <div>{name}</div>
          <CharacterStatusTag />
        </div>
        <div>
          <div>Last known location</div>
          <div>{location.name}</div>
        </div>
        <div>
          <div>Character Origin</div>
          <div>{origin.name}</div>
        </div>
      </div>
    </div>
  );
};
