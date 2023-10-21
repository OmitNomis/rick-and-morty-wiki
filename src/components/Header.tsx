import { HamburgerMenuIcon } from "@radix-ui/react-icons";
import { ThemeSwitcher } from "./ThemeSwitcher";
import { MaxWidthComponent } from "./ui/MaxWidthComponent";
import { Link } from "react-router-dom";
import { Button } from "./ui/button";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTrigger,
  SheetClose,
} from "@/components/ui/sheet";

const routes = [
  {
    name: "Characters",
    path: "/characters",
  },
  {
    name: "Episodes",
    path: "/episodes",
  },
  {
    name: "Locations",
    path: "/locations",
  },
];

export const Header = () => {
  return (
    <MaxWidthComponent
      as="header"
      className="flex justify-between items-center border-b-2">
      <div className="  flex items-start flex-col">
        <Link to="/characters">
          <img
            src="/logo.png"
            alt="logo"
            className="max-w-[150px] sm:max-w-[170px] md:max-w-[200px] cursor-pointer"
          />
        </Link>
      </div>
      <div className="hidden flex-grow sm:flex gap-5 justify-center ">
        {routes.map((route) => (
          <Link
            key={route.name}
            to={route.path}
            className="font-bold
          hover:text-gray-500 transition-colors duration-300
          ">
            {route.name}
          </Link>
        ))}
      </div>
      <div className="hidden sm:flex  justify-end items-center">
        <ThemeSwitcher />
      </div>
      <div className="sm:hidden flex  justify-end items-center">
        <Sheet>
          <SheetTrigger>
            <Button size={"icon"} variant={"ghost"}>
              <HamburgerMenuIcon className="w-6 h-6" />
            </Button>
          </SheetTrigger>
          <SheetContent side={"top"}>
            <SheetHeader>
              <img
                src="/logo.png"
                alt="logo"
                className="max-w-[150px] sm:max-w-[170px] md:max-w-[200px] cursor-pointer"
              />
            </SheetHeader>
            <div className="flex flex-col gap-5 items-center mt-5 w-full">
              {routes.map((route) => (
                <SheetClose asChild key={route.name}>
                  <Link
                    to={route.path}
                    className="font-bold
                    hover:text-gray-500 transition-colors duration-300">
                    {route.name}
                  </Link>
                </SheetClose>
              ))}
              <ThemeSwitcher />
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </MaxWidthComponent>
  );
};
