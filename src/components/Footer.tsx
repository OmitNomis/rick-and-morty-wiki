import { Link } from "react-router-dom";
import { MaxWidthComponent } from "./ui/MaxWidthComponent";

export const Footer = () => {
  return (
    <MaxWidthComponent as="footer" className="flex justify-center border-t-2">
      Made with <span className="text-red-400 px-1">{"<3"}</span> by{" "}
      <span className="px-1 text-teal-500 dark:text-lime-500">
        <Link to="https://github.com/OmitNomis" target="_blank">
          OmitNomis
        </Link>
      </span>
    </MaxWidthComponent>
  );
};
