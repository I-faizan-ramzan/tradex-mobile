// hooks/use-theme.ts
import { Colors } from "@/constants/theme";
import { useColorScheme } from "nativewind";

type ColorScheme = "light" | "dark" | "system";

export function useTheme() {
  const { colorScheme, setColorScheme } = useColorScheme();

  const isDark = colorScheme === "dark";

  return {
    ...Colors[isDark ? "dark" : "light"],
    isDark,
    colorScheme,
    setColorScheme,
    toggleTheme: () => setColorScheme(isDark ? "light" : "dark"),
  };
}
