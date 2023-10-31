import { useFetchSingleCharacter } from "@/hooks/useFetchSingleCharacter";
import React, { FC } from "react";
import { useParams } from "react-router-dom";
import { Loader } from "@/components/Loader";
import { capitalizeFirstLetter } from "@/lib/utils";

export const CharacterProfile: FC = () => {
  const { id } = useParams();
  const { data, loading, error } = useFetchSingleCharacter(id);
  if (loading) {
    return <Loader />;
  }
  const {
    character: {
      id: characterId,
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

  const CharacterDetailsMap = [
    {
      label: "Name:",
      value: name,
    },
    {
      label: "Status:",
      value: status,
    },
    {
      label: "Spcies:",
      value: species,
    },
    {
      label: "Type:",
      value: type,
    },
    {
      label: "Gender:",
      value: gender,
    },
    {
      label: "Origin Location:",
      value: origin.name,
    },
    {
      label: "Last seen at:",
      value: location.name,
    },
  ];

  return (
    <div>
      <div className="flex flex-col sm:flex-row ">
        <div className="flex justify-center sm:justify-start">
          <img
            src={image}
            alt={`${name} image`}
            className="rounded-xl object-cover min-w-[300px]"
          />
        </div>
        <div className="flex mt-10 flex-col gap-4  flex-grow justify-center sm:mt-0">
          {CharacterDetailsMap.map((characterDetails) => {
            return (
              <React.Fragment
                key={`${characterDetails.label}, ${characterDetails.value}`}>
                {characterDetails.value !== "" && (
                  <div className="flex px-5">
                    <div className="flex-1 justify-start">
                      {characterDetails.label}
                    </div>
                    <div className=" flex-1 text-end sm:text-start">
                      {capitalizeFirstLetter(characterDetails.value)}
                    </div>
                  </div>
                )}
              </React.Fragment>
            );
          })}
        </div>
      </div>
      {/* episodes */}
      <div></div>
    </div>
  );
};
