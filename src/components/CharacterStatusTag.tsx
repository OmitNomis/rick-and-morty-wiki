import { FC } from "react";
import { CharacterStatus } from "@/screens/Characrers/Characters.types";

interface CharacterStatusTagProps {
  status: CharacterStatus;
}

export const CharacterStatusTag: FC<CharacterStatusTagProps> = ({ status }) => {
  return <div>{status}</div>;
};
