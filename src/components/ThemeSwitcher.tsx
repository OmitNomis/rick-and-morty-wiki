import { useTheme } from "@/providers/ThemeProvider";
import { LightButton, DarkButton } from "@/assets/images";
import { useEffect } from "react";

export const ThemeSwitcher = () => {
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    // preload images
    const images = [LightButton, DarkButton];
    images.map((image) => {
      const img = new Image();
      img.src = image;
    });
  }, []);

  const handleThemeSwitch = () => {
    if (theme === "light") {
      setTheme("dark");
    } else {
      setTheme("light");
    }
  };
  return (
    <button
      onClick={handleThemeSwitch}
      className="hover:bg-accent  py-1 px-5 rounded-lg box-border">
      <img
        className="max-w-[80px] md:max-w-[100px]"
        src={theme === "light" ? LightButton : DarkButton}
        alt="Switch Theme"
      />
    </button>
  );
};
