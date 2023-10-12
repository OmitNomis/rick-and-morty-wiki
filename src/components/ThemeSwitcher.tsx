"use client";
import { FC, useState, useEffect } from "react";
import { useTheme } from "next-themes";
import { Switch } from "@nextui-org/react";
import { SunIcon, MoonIcon } from "@radix-ui/react-icons";

enum ThemeTypes {
  LIGHT = "light",
  DARK = "dark",
}

export const ThemeSwitcher: FC = () => {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  });

  const toggleTheme = () => {
    setTheme(theme === ThemeTypes.DARK ? ThemeTypes.LIGHT : ThemeTypes.DARK);
  };

  if (!mounted) return null;

  return (
    <Switch
      isSelected={theme === ThemeTypes.DARK}
      onValueChange={toggleTheme}
      size="md"
      color="secondary"
      thumbIcon={({ isSelected, className }) =>
        isSelected ? (
          <MoonIcon className={className} />
        ) : (
          <SunIcon className={className} />
        )
      }
    />
  );
};
