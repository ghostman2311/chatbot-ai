import { useTheme } from "next-themes";

export const useThemeMode = () => {
  const { theme, setTheme } = useTheme();
  return {
    theme,
    setTheme,
  };
};
