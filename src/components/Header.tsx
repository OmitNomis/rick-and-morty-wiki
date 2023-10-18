import { MaxWidthComponent } from "./ui/MaxWidthComponent";
import { Link } from "react-router-dom";

export const Header = () => {
  return (
    <MaxWidthComponent
      as="header"
      className="flex justify-between items-center">
      <div className=" flex-1 flex-grow flex items-start flex-col">
        <img
          src="/logo.png"
          alt="logo"
          className="max-w-[150px] sm:max-w-[200px]"
        />
      </div>
      <div className="hidden flex-1 sm:flex items-center gap-5 ">
        <div>
          <Link to="/">Characters</Link>
        </div>
        <div>
          <Link to="/episodes">Episodes</Link>
        </div>
        <div>
          <Link to="/locations">Locations</Link>
        </div>
      </div>
      <div className="hidden sm:flex flex-1 justify-end"></div>
    </MaxWidthComponent>
  );
};
