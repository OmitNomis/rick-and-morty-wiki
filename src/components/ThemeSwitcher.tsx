import { useTheme } from "@/providers/ThemeProvider";
import { LightButton, DarkButton } from "@/assets/images";

export const ThemeSwitcher = () => {
  const { theme, setTheme } = useTheme();

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
