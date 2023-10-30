import { FC } from "react";
import { CharacterResults } from "@/screens/Characrers/Characters.types";
import { CharacterStatusTag } from "./CharacterStatusTag";
import { Link } from "react-router-dom";

interface CharacterCardProps {
  character: CharacterResults;
}

export const CharacterCard: FC<CharacterCardProps> = ({ character }) => {
  const { id, name, image, status, location, origin, species, type } =
    character;

  return (
    <article
      className="flex flex-col sm:flex-row rounded-lg bg-secondary"
      key={id}>
      <div className="w-full sm:w-[40%] max-h-[300px]">
        <img
          src={image}
          alt={`${name} image`}
          className="object-cover h-full w-full rounded-tl-lg rounded-tr-lg sm:rounded-tr-none sm:rounded-bl-lg"
        />
      </div>
      <div className="flex flex-col p-5 gap-5 w-full sm:w-[60%]">
        <div>
          <Link to={id}>
            <div className="text-xl font-bold sm:text-2xl">{name}</div>
          </Link>
          <CharacterStatusTag status={status} species={species} type={type} />
        </div>
        <div>
          <div className="text-gray-400">Last known location:</div>
          <div>{location.name}</div>
        </div>
        <div>
          <div className="text-gray-400">Character Origin:</div>
          <div>{origin.name}</div>
        </div>
      </div>
    </article>
  );
};
