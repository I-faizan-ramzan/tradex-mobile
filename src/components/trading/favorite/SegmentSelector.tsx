import { useTheme } from "@/hooks/use-theme";
import { LinearGradient } from "expo-linear-gradient";

import { Pressable, View } from "react-native";
import { SegmentCard } from "./SegmentCard";

export type Option = {
  value: string;
  label: string;
  title?: string;
  icon: string;
};

type Props = {
  options: Option[];
  active: string;
  setActive: (value: string) => void;
};

export function SegmentSelector({ options, active, setActive }: Props) {
  const { isDark } = useTheme();

  return (
    <View className="flex-row  mx-5 gap-2">
      {options.map((item) => {
        const isActive = active === item.value;

        return (
          <View
            key={item.value}
            className="
         "
            style={{ width: 110 }}
          >
            <Pressable onPress={() => setActive(item.value)}>
              {isActive ? (
                // ✅ Active (Gradient Card)
                <LinearGradient
                  colors={["#7c3aed", "#4f8ef7"]}
                  start={{ x: 0, y: 0 }}
                  end={{ x: 1, y: 1 }}
                  style={{
                    borderRadius: 16,
                    paddingVertical: 14,
                  }}
                >
                  <SegmentCard
                    label={item.label}
                    icon={
                      isActive
                        ? (item.icon.replace("-outline", "") as any)
                        : item.icon
                    }
                    iconColor="#fff"
                    textColor="#fff"
                  />
                </LinearGradient>
              ) : (
                // ✅ Inactive (Normal Card)
                <View
                  style={{
                    borderRadius: 16,
                    paddingVertical: 14,

                    backgroundColor: isDark ? "#181b22" : "#f4f5f7",
                    borderWidth: 0.5,
                    borderColor: isDark
                      ? "rgba(255,255,255,0.07)"
                      : "rgba(0,0,0,0.07)",
                  }}
                >
                  <SegmentCard
                    label={item.label}
                    icon={
                      isActive
                        ? (item.icon.replace("-outline", "") as any)
                        : item.icon
                    }
                    iconColor={isDark ? "#9ca3af" : "#6b7280"}
                    textColor={isDark ? "#6b7280" : "#9ca3af"}
                  />
                </View>
              )}
            </Pressable>
          </View>
        );
      })}
    </View>
  );
}
