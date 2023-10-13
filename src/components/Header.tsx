"use client";

import { FC } from "react";
import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  NavbarMenuToggle,
  NavbarMenu,
  NavbarMenuItem,
  Link,
} from "@nextui-org/react";
import { ThemeSwitcher } from "./ThemeSwitcher";
import { Text } from "./ui";
import Image from "next/image";

interface MenuItemTypes {
  label: string;
  href: string;
}

export const Header: FC = () => {
  const menuItems: MenuItemTypes[] = [
    {
      label: "Characters",
      href: "/",
    },
    {
      label: "Location",
      href: "/location",
    },
    {
      label: "Episode",
      href: "/episode",
    },
  ];

  const navigateToHome = () => {
    return () => {
      window.location.href = "/";
    };
  };

  return (
    <Navbar maxWidth="lg" shouldHideOnScroll>
      <NavbarBrand>
        <Image
          src="/logo.svg"
          className="cursor-pointer"
          alt="Rick and Morty Logo"
          width={60}
          height={60}
          onClick={navigateToHome()}
        />
      </NavbarBrand>
      <NavbarContent justify="center" className="hidden sm:flex">
        {menuItems.map((item) => {
          return (
            <NavbarItem key={item.label} className="mr-2">
              <Link href={item.href}>
                <Text
                  className={`font-semibold text-md hover:text-orange-600 hover:dark:text-orange-500 hover:scale-105 active:scale-90 transition-all duration-200`}>
                  {item.label}
                </Text>
              </Link>
            </NavbarItem>
          );
        })}
      </NavbarContent>
      <NavbarContent justify="end" className="hidden sm:flex">
        <ThemeSwitcher />
      </NavbarContent>
      <NavbarContent justify="end" className="sm:hidden">
        <NavbarMenuToggle />
      </NavbarContent>
      <NavbarMenu className="gap-5">
        {menuItems.map((item) => {
          return (
            <NavbarMenuItem
              key={item.label}
              className="w-full flex justify-center">
              <Link href={item.href}>
                <Text className=" font-semibold hover:text-orange-600 hover:dark:text-orange-500 hover:scale-105 active:scale-90 transition-all duration-200">
                  {item.label}
                </Text>
              </Link>
            </NavbarMenuItem>
          );
        })}
        <NavbarMenuItem className="w-full flex justify-center items-center">
          <ThemeSwitcher />
        </NavbarMenuItem>
      </NavbarMenu>
    </Navbar>
  );
};
