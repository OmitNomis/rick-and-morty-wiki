import { FC, useMemo } from "react";
import { MaxWidthComponent } from "./ui/MaxWidthComponent";

const animationsList = [
  "https://media.giphy.com/media/dz6NpfESnqqcnJH1MY/giphy.gif",
  "https://media.giphy.com/media/g04poZxA1nAyTs9DQY/giphy.gif",
  "https://media.giphy.com/media/QyKKSidc5rd0Y1Iw3z/giphy.gif",
  "https://media.giphy.com/media/l378w2NKt3URm6w5W/giphy.gif",
];

export const Loader: FC = () => {
  const randomNumber = Math.floor(Math.random() * animationsList.length);

  return useMemo(() => {
    const generateAnimation = (list: string[], id: number): string => {
      return list[id];
    };
    return (
      <MaxWidthComponent className="flex flex-col justify-center items-center">
        <img
          src={generateAnimation(animationsList, randomNumber)}
          alt="loader"
        />
        <span className="font-bold">Loading ...</span>
      </MaxWidthComponent>
    );
  }, []);
};
