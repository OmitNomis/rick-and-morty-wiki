import { FC } from "react";
import { CharacterResults } from "@/types/Characters.types";
import { CharacterStatusTag } from "./CharacterStatusTag";
import { useNavigate } from "react-router-dom";

interface CharacterCardProps {
  character: CharacterResults;
}

export const CharacterCard: FC<CharacterCardProps> = ({ character }) => {
  const { id, name, image, status, location, origin, species, type } =
    character;
  const navigate = useNavigate();

  const handleCharacterClicked = () => {
    navigate(id);
  };

  return (
    <article
      className="flex cursor-pointer flex-col group/title sm:flex-row rounded-lg bg-secondary"
      key={id}
      onClick={handleCharacterClicked}>
      <div className="w-full sm:w-[40%] max-h-[300px]">
        <img
          src={image}
          alt={`${name} image`}
          className="object-cover h-full w-full rounded-tl-lg rounded-tr-lg sm:rounded-tr-none sm:rounded-bl-lg"
        />
      </div>
      <div className="flex flex-col p-5 gap-5 w-full sm:w-[60%]">
        <div>
          <h3 className="text-xl font-bold sm:text-2xl group-hover/title:text-primary">
            {name}
          </h3>
          <CharacterStatusTag status={status} species={species} type={type} />
        </div>
        {location && (
          <div>
            <div className="text-gray-400">Last known location:</div>
            <div>{location.name}</div>
          </div>
        )}
        {origin && (
          <div>
            <div className="text-gray-400">Character Origin:</div>
            <div>{origin.name}</div>
          </div>
        )}
      </div>
    </article>
  );
};
