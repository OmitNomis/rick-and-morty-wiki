import { FC, useMemo } from "react";
import { MaxWidthComponent } from "./ui/MaxWidthComponent";

const animationsList = [
  "https://www.icegif.com/wp-content/uploads/2023/04/icegif-1320.gif",
];
interface ErrorProps {
  variant?: "page" | "data";
}
export const ErrorInfo: FC<ErrorProps> = ({ variant = "page" }) => {
  const randomNumber = Math.floor(Math.random() * animationsList.length);
  let error1: string;
  let error2: string;
  if (variant === "data") {
    error1 = "OOPS! ERROR OCCURED!";
    error2 = "COULD NOT RETRIVE DATA!";
  }
  if (variant === "page") {
    error1 = "404!";
    error2 = "PAGE NOT FOUND";
  }
  return useMemo(() => {
    const generateAnimation = (list: string[], id: number): string => {
      return list[id];
    };
    return (
      <MaxWidthComponent className="flex flex-col justify-center items-center">
        <img
          src={generateAnimation(animationsList, randomNumber)}
          alt="error"
          className="max-h-[300px]"
        />
        <h2 className="text-2xl sm:text-3xl mt-5 text-destructive font-extrabold">
          {error1}
        </h2>
        <h2 className="text-2xl sm:text-3xl mt-5 text-destructive font-extrabold">
          {error2}
        </h2>
      </MaxWidthComponent>
    );
  }, []);
};
