import { useTheme } from "@/hooks/use-theme";
import { Moon, Sun } from "lucide-react-native";
import { Pressable } from "react-native";

export function ThemeToggle() {
  const { isDark, toggleTheme, border, card } = useTheme();

  return (
    <Pressable
      onPress={toggleTheme}
      style={{ borderColor: border, backgroundColor: card }}
      className="w-9 h-9 rounded-full items-center justify-center border"
    >
      {isDark ? (
        <Sun size={16} color="#f0f2f7" strokeWidth={1.8} />
      ) : (
        <Moon size={16} color="#0a0c10" strokeWidth={1.8} />
      )}
    </Pressable>
  );
}
