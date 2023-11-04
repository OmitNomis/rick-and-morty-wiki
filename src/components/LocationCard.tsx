import { LocationsResult } from "@/types/Location.types";
import { FC } from "react";
import { Link } from "react-router-dom";
import { Users2 } from "lucide-react";

interface LocationCardProps {
  location: LocationsResult;
}

export const LocationCard: FC<LocationCardProps> = ({
  location: { id, name, residents, dimension, type },
}) => {
  return (
    <Link
      to={id}
      className="flex flex-col sm:flex-row justify-between mb-5 p-5 border-border border-2 rounded-lg group/title hover:border-primary/80">
      <div className="flex flex-col gap-5 flex-[3]">
        <h3 className="text-xl font-bold sm:text-2xl group/title group-hover/title:text-primary/80 ">
          {name}
        </h3>
        <p>Dimension: {dimension}</p>
      </div>
      <div className="flex flex-[1.5] flex-col gap-5 sm:mt-0 mt-5">
        {residents && (
          <div className="flex">
            <Users2 className="mr-2" />
            <span>Known Residents: {residents.length}</span>
          </div>
        )}
        <p>Type: {type}</p>
      </div>
    </Link>
  );
};
