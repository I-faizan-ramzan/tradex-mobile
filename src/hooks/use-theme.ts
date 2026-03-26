import { Colors } from "@/constants/theme";
import { useColorScheme } from "nativewind";
export function useTheme() {
  const { colorScheme, setColorScheme } = useColorScheme();
  const isDark = colorScheme === "dark";

  return {
    ...Colors[isDark ? "dark" : "light"],
    isDark,
    colorScheme,
    toggleTheme: () => setColorScheme(isDark ? "light" : "dark"),
  };
}
