import { useState } from "react";
import { Link } from "react-router-dom";

type CharacterEpisodesType = {
  id: string;
  name: string;
  episode: string;
};
interface CharacterEpisodeProps {
  episodes: CharacterEpisodesType[];
}

export const CharacterEpisodes = ({ episodes }: CharacterEpisodeProps) => {
  const [showAll, setShowAll] = useState(false);

  const visibleEpisodes = showAll ? episodes : episodes.slice(0, 10);
  const enoughEpisodes = episodes.length > 10;

  const toggleShowLessMore = () => {
    setShowAll(!showAll);
  };

  return (
    <div className="flex m-10 flex-col">
      <div>
        <h2 className="text-2xl font-bold text-primary">Episodes</h2>
      </div>
      <div className="mt-5">
        {visibleEpisodes.map((episode) => (
          <Link
            to={`/episodes/${episode.id}`}
            className="flex w-full px-5 py-5 rounded-xl border-2 border-transparent hover:border-primary/80 group/title justify-between items-center"
            key={episode.id}>
            <div className="group/title group-hover/title:text-primary/80 flex-grow mr-5">
              {episode?.name}
            </div>
            <div>{episode?.episode}</div>
          </Link>
        ))}
      </div>
      {enoughEpisodes && (
        <div className="mt-5 flex justify-center">
          <button
            onClick={toggleShowLessMore}
            className="flex w-full border-primary/80 border-2 p-3 rounded-xl justify-center hover:bg-primary/80">
            {showAll ? "Show Less" : "Show More"}
          </button>
        </div>
      )}
    </div>
  );
};
