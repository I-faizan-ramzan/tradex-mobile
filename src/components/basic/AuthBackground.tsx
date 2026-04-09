import { Colors } from "@/constants/theme";
import { useTheme } from "@/hooks/use-theme";
import { LinearGradient } from "expo-linear-gradient";
import { View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

type Props = {
  children: React.ReactNode;
};

export function AuthBackground({ children }: Props) {
  const { isDark } = useTheme();
  const theme = Colors[isDark ? "dark" : "light"];

  return (
    <SafeAreaView style={{ flex: 1 }}>
      {/* Top Half */}
      <View style={{ flex: 1, backgroundColor: theme.background }} />

      {/* Bottom Half Gradient */}
      <LinearGradient
        colors={theme.gradient.authBackground as [string, string, ...string[]]}
        style={{ flex: 1 }}
      />

      {/* Content (overlay but inside flow) */}
      <View
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
        }}
      >
        {children}
      </View>
    </SafeAreaView>
  );
}
