import { useTheme } from "@/providers/ThemeProvider";

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
    <div>
      <button
        onClick={handleThemeSwitch}
        className="hover:bg-accent  py-1 px-5 rounded-lg box-border">
        <img
          className="max-w-[80px] md:max-w-[100px]"
          src={theme === "light" ? "/lightbutton.png" : "/darkbutton.png"}
          alt="Switch Theme"
        />
      </button>
    </div>
  );
};
