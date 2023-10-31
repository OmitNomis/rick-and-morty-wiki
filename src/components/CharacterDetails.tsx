import { capitalizeFirstLetter } from "@/lib/utils";
import { CharacterDetailsMapItem } from "@/screens/CharacterProfile/CharacterProfile";
import React, { FC } from "react";
import { Link } from "react-router-dom";

interface CharacterDetailsProps {
  characterDetailsMap: CharacterDetailsMapItem[];
  image: string;
}

export const CharacterDetails: FC<CharacterDetailsProps> = ({
  characterDetailsMap,
  image,
}) => {
  return (
    <div className="flex flex-col sm:flex-row ">
      <div className="flex justify-center sm:justify-start">
        <img
          src={image}
          alt={`${name} image`}
          className="rounded-xl object-cover min-w-[300px]"
        />
      </div>
      <div className="flex mt-10 flex-col gap-4  flex-grow justify-center sm:mt-0">
        {characterDetailsMap.map(
          (
            characterDetails: {
              label: string;
              value: string;
              navigateTo?: string;
            },
            index: number
          ) => {
            return (
              <React.Fragment key={index}>
                {characterDetails.navigateTo ? (
                  <Link
                    to={characterDetails.navigateTo}
                    key={`${characterDetails.label}, ${characterDetails.value}`}>
                    <CoreDetailsComponent
                      label={characterDetails.label}
                      value={characterDetails.value}
                    />
                  </Link>
                ) : (
                  <CoreDetailsComponent
                    label={characterDetails.label}
                    value={characterDetails.value}
                  />
                )}
              </React.Fragment>
            );
          }
        )}
      </div>
    </div>
  );
};

const CoreDetailsComponent = ({
  label,
  value,
}: {
  label: string;
  value: string;
}) => {
  return (
    <React.Fragment>
      {value !== "" && (
        <div className="flex mx-5 border-b-border/50 border-b-2 pb-2">
          <div className="flex-1 justify-start text-primary">{label}</div>
          <div className=" flex-1 text-end sm:text-start">
            {capitalizeFirstLetter(value)}
          </div>
        </div>
      )}
    </React.Fragment>
  );
};
