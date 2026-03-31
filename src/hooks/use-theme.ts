// hooks/use-theme.ts
import { Colors } from "@/constants/theme";
import { useColorScheme } from "nativewind";

type ColorScheme = "light" | "dark";

export function useTheme() {
  const { colorScheme, setColorScheme } = useColorScheme();

  const scheme = (colorScheme ?? "light") as ColorScheme;
  const isDark = scheme === "dark";

  return {
    ...Colors[isDark ? "dark" : "light"],
    isDark,
    colorScheme: scheme,
    toggleTheme: () => setColorScheme(isDark ? "light" : "dark"),
  };
}
