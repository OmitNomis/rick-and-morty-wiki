import { useFetchSingleCharacter } from "@/hooks/useFetchSingleCharacter";
import { FC } from "react";
import { useParams } from "react-router-dom";
import { Loader } from "@/components/Loader";
import { CharacterDetails } from "@/components/CharacterDetails";
import { CharacterEpisodes } from "@/components/CharacterEpisodes";
import { ErrorInfo } from "@/components/ErrorInfo";

export type CharacterDetailsMapItem = {
  label: string;
  value: string;
  navigateTo?: string;
};

export const CharacterProfile: FC = () => {
  const { id } = useParams();
  const { data, loading, error } = useFetchSingleCharacter(id);
  if (loading) {
    return <Loader />;
  }
  if (error) {
    return <ErrorInfo variant="data" />;
  }
  const {
    character: {
      name,
      status,
      species,
      type,
      gender,
      origin,
      location,
      image,
      episode,
    },
  } = data ?? {};

  const CharacterDetailsMap: CharacterDetailsMapItem[] = [
    {
      label: "NAME:",
      value: name,
    },
    {
      label: "STATUS:",
      value: status,
    },
    {
      label: "SPECIES:",
      value: species,
    },
    {
      label: "TYPE:",
      value: type,
    },
    {
      label: "GENDER:",
      value: gender,
    },
    {
      label: "ORIGIN LOCATION:",
      value: origin.name,
      navigateTo: `/locations/${origin.id}`,
    },
    {
      label: "LAST SEEN LOCATION:",
      value: location.name,
      navigateTo: `/locations/${location.id}`,
    },
  ];

  return (
    <div>
      <CharacterDetails
        characterDetailsMap={CharacterDetailsMap}
        image={image}
      />
      <CharacterEpisodes episodes={episode} />
    </div>
  );
};
