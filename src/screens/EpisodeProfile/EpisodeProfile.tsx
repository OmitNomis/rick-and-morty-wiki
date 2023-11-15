import { useFetchSingleEpisode } from "@/hooks/useFetchSingleEpisode";
import { Loader } from "@/components/Loader";
import { FC } from "react";
import { Link, useParams } from "react-router-dom";
import { Clock } from "lucide-react";
import { ImbdLogo } from "@/assets/images";
import { LocationResidentsList } from "@/components/LocationResidentsList";
import { ErrorInfo } from "@/components/ErrorInfo";

export const EpisodeProfile: FC = () => {
  const { id } = useParams();

  const { error, episodeData, loading } = useFetchSingleEpisode(id);

  if (loading) {
    return <Loader />;
  }

  if (error) {
    return <ErrorInfo variant="data" />;
  }
  const {
    title,
    characters,
    duration,
    episode,
    image,
    imdbId,
    imdbRating,
    rated,
    season,
    plot,
  } = episodeData ?? {};
  // new title
  document.title = `${title} | Rick and Morty`;

  return (
    <section className="flex flex-col gap-5">
      <div className="flex flex-col gap-1">
        <h2 className="text-3xl font-extrabold sm:text-4xl">{title}</h2>
        <div className="text-lg text-primary/80">
          Season: {season} | Episode: {episode}
        </div>
        <div className="flex gap-2 text-gray-500">
          <Clock /> <p>{duration}</p>
        </div>
      </div>
      <div className="flex flex-col items-center justify-center w-full">
        <img
          src={image}
          className="w-full sm:w-[80%] object-cover rounded-xl bg-gray-300"
          style={{ aspectRatio: "16/9" }}
          alt={`${title} image`}
        />
        <div className="flex justify-between w-full mt-5">
          <Link to={`https://imdb.com/title/${imdbId}`} target="_blank">
            <div className="flex gap-2">
              <img src={ImbdLogo} alt="imdb logo" className="h-5 " />
              <p>{imdbRating} / 10</p>
            </div>
          </Link>
          <p>Rating: {rated}</p>
        </div>
      </div>
      <div>
        <h3 className="mb-2 text-xl sm:text-3xl text-primary/80">Plot:</h3>
        <p>{plot}</p>
      </div>

      {characters && (
        <div>
          <LocationResidentsList
            title={"Characters: "}
            residents={characters}
          />
        </div>
      )}
    </section>
  );
};
