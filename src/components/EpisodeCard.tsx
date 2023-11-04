import { EpisodeResults } from "@/types/Episodes.types";
import { FC } from "react";
import { Link } from "react-router-dom";

interface EpisodeCardProps {
  episode: EpisodeResults;
}

export const EpisodeCard: FC<EpisodeCardProps> = ({ episode }) => {
  return (
    <Link
      to={`/episodes/${episode.id}`}
      className="flex w-full px-5 py-6 rounded-xl border-2 border-transparent hover:border-primary/80 group/title justify-between items-center"
      key={episode.id}>
      <div className="group/title group-hover/title:text-primary/80 flex-grow mr-5">
        {episode?.name}
      </div>
      <div>{episode?.episode}</div>
    </Link>
  );
};
