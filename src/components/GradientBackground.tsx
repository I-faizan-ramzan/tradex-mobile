import { useTheme } from "@/hooks/use-theme";
import { LinearGradient } from "expo-linear-gradient";
import { ReactNode } from "react";
import { View } from "react-native";

export function GradientBackground({ children }: { children: ReactNode }) {
  const { gradient } = useTheme() as any;

  return (
    <View className="flex-1">
      <LinearGradient
        colors={gradient.base}
        style={{ position: "absolute", width: "100%", height: "100%" }}
      />

      <LinearGradient
        colors={gradient.glowTop}
        style={{
          position: "absolute",
          top: -120,
          left: -60,
          width: 400,
          height: 400,
          borderRadius: 200,
        }}
      />

      <LinearGradient
        colors={gradient.glowBottom}
        style={{
          position: "absolute",
          bottom: -120,
          right: -60,
          width: 300,
          height: 300,
          borderRadius: 150,
        }}
      />

      {children}
    </View>
  );
}
