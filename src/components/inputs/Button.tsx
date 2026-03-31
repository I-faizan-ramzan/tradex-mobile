import { Colors } from "@/constants/theme";
import { useTheme } from "@/hooks/use-theme";
import { ActivityIndicator, Pressable, Text, ViewStyle } from "react-native";

type Variant = "primary" | "outline" | "ghost";

type Props = {
  title: string;
  onPress: () => void;
  variant?: Variant;
  loading?: boolean;
  fullWidth?: boolean;
  bgClass?: string; // optional Tailwind background override
};

export function Button({
  title,
  onPress,
  variant = "primary",
  loading = false,
  fullWidth = false,
  bgClass,
}: Props) {
  const { isDark } = useTheme();
  const theme = isDark ? Colors.dark : Colors.light;

  const getBackgroundColor = (): string => {
    if (bgClass) return "transparent"; // let Tailwind class handle it
    if (variant === "primary") {
      return isDark ? theme.primary : "#ffffff"; // white in light theme
    }
    return "transparent";
  };

  const getTextColor = (): string => {
    if (variant === "primary") {
      return isDark ? "#ffffff" : "#f0f2f7"; // light text on white for light theme
    }
    return theme.primary;
  };

  const getBorder = (): ViewStyle => {
    if (variant === "outline")
      return { borderWidth: 1, borderColor: theme.primary };
    return { borderWidth: 0 };
  };

  return (
    <Pressable
      onPress={onPress}
      disabled={loading}
      style={({ pressed }) => [
        {
          opacity: pressed ? 0.85 : 1,
          transform: [{ scale: pressed ? 0.97 : 1 }],
          borderRadius: 999, // fully rounded pill
          overflow: "hidden",
        },
      ]}
      className={`${fullWidth ? "w-full" : ""} ${bgClass || ""}`}
    >
      <Pressable
        style={[
          {
            paddingVertical: 10,
            paddingHorizontal: 20,
            alignItems: "center",
            justifyContent: "center",
            backgroundColor: getBackgroundColor(),
          },
          getBorder(),
        ]}
      >
        {loading ? (
          <ActivityIndicator color={getTextColor()} />
        ) : (
          <Text
            style={{
              color: getTextColor(),
              fontWeight: "600",
              fontSize: 14,
            }}
          >
            {title}
          </Text>
        )}
      </Pressable>
    </Pressable>
  );
}
