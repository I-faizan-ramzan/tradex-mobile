// components/ui/Gradient.tsx
import { Colors } from "@/constants/theme";
import { useTheme } from "@/hooks/use-theme";
import { LinearGradient } from "expo-linear-gradient";
import { ViewStyle } from "react-native";

type GradientVariant = "auth" | "base" | "glowTop" | "glowBottom";

type Props = {
  variant?: GradientVariant;
  style?: ViewStyle;
  children?: React.ReactNode;
};

export function Gradient({ variant = "base", style, children }: Props) {
  const { isDark } = useTheme();
  const theme = Colors[isDark ? "dark" : "light"];

  const gradientMap = {
    auth: theme.gradient.authBackground,
    base: theme.gradient.base,
    glowTop: theme.gradient.glowTop,
    glowBottom: theme.gradient.glowBottom,
  };

  return (
    <LinearGradient
      colors={gradientMap[variant] as [string, string, ...string[]]}
      style={style}
    >
      {children}
    </LinearGradient>
  );
}
