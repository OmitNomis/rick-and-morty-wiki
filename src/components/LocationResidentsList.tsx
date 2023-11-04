import { FC, useState } from "react";
import { CharacterResults } from "@/types/Characters.types";
import { Link } from "react-router-dom";

interface LocationResidentsListProps {
  residents: CharacterResults[];
}

export const LocationResidentsList: FC<LocationResidentsListProps> = ({
  residents,
}) => {
  const [showAll, setShowAll] = useState(false);

  const visibleResidents = showAll ? residents : residents.slice(0, 10);
  const enoughResidents = residents.length > 10;

  const toggleVisible = () => {
    setShowAll((prev) => {
      return !prev;
    });
  };

  return (
    <div className="flex flex-col">
      <h3 className="text-lg sm:text-xl mt-10 text-primary/80">
        Known Residents:
      </h3>
      <div className="mt-5">
        {visibleResidents.map((resident: CharacterResults) => {
          return (
            <Link
              to={`/characters/${resident.id}`}
              className="flex w-full p-5 rounded-xl border-2 border-transparent hover:border-primary/80 group/title items-center"
              key={resident.id}>
              <div className="h-10 w-10 rounded-full mr-5">
                <img
                  src={resident.image}
                  alt={`${resident.name} image`}
                  className="h-full w-full rounded-full"
                />
              </div>
              <p className="group/title group-hover/title:text-primary/80">
                {resident?.name}
              </p>
            </Link>
          );
        })}
      </div>
      {enoughResidents && (
        <div className="mt-5 flex justify-center">
          <button
            onClick={toggleVisible}
            className="flex w-full border-primary/80 border-2 p-3 rounded-xl justify-center hover:bg-primary/80">
            {showAll ? "Show Less" : "Show More"}
          </button>
        </div>
      )}
    </div>
  );
};
