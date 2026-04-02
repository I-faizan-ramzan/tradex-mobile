import { useTheme } from "@/hooks/use-theme";
import { Ionicons } from "@expo/vector-icons";
import { Pressable } from "react-native";

export function ThemeToggle() {
  const { isDark, toggleTheme, card } = useTheme();

  const iconColor = isDark ? "#f0f2f7" : "#0a0c10";

  return (
    <Pressable
      onPress={toggleTheme}
      style={{ backgroundColor: card }}
      className="w-9 h-9 rounded-full items-center justify-center border border-gray-100 dark:border-white/10"
    >
      <Ionicons
        name={isDark ? "sunny-outline" : "moon-outline"}
        size={24}
        color={iconColor}
      />
    </Pressable>
  );
}
