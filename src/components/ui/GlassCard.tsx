import { useTheme } from "@/hooks/use-theme";
import { BlurView } from "expo-blur";
import { ReactNode } from "react";
import { View } from "react-native";

type Props = {
  children: ReactNode;
  className?: string;
};

export function GlassCard({ children, className = "" }: Props) {
  const { isDark } = useTheme();

  return (
    <View
      className={`mx-5 rounded-2xl border border-gray-100 dark:border-white/5 bg-surface dark:bg-dark-card ${className}`}
    >
      <BlurView
        intensity={40}
        tint={isDark ? "dark" : "light"}
        style={{ padding: 16 }}
      >
        {children}
      </BlurView>
    </View>
  );
}
