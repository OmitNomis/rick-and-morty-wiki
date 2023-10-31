import { FC } from "react";
import { CharacterStatus } from "@/screens/Characrers/Characters.types";

interface CharacterStatusTagProps {
  status: CharacterStatus;
  species: string;
  type: string;
}

export const CharacterStatusTag: FC<CharacterStatusTagProps> = ({
  status,
  type,
  species,
}) => {
  const getStatusIcon = () => {
    switch (status) {
      case "Alive":
        return <div className="h-2 w-2 rounded-full bg-green-500" />;
      case "Dead":
        return <div className="h-2 w-2 rounded-full bg-red-500" />;
      default:
        return <div className="h-2 w-2 rounded-full bg-gray-500" />;
    }
  };
  return (
    <div className="flex items-center gap-1">
      <div className="flex justify-start">{getStatusIcon()}</div>
      <span>
        <span>{status}</span>- {species} {type !== "" && `(${type})`}
      </span>
    </div>
  );
};
