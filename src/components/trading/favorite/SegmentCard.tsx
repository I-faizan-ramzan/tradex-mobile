import { Ionicons } from "@expo/vector-icons";
import { Text, View } from "react-native";

type Props = {
  label: string;
  icon: keyof typeof Ionicons.glyphMap; // 👈 type-safe icon names
  iconColor: string;
  textColor: string;
};

export function SegmentCard({ label, icon, iconColor, textColor }: Props) {
  return (
    <View className="mx-5 items-start gap-3">
      {/* Icon */}
      <Ionicons name={icon} size={28} color={iconColor} />

      {/* Label */}
      <Text className="text-sm font-medium" style={{ color: textColor }}>
        {label}
      </Text>
    </View>
  );
}
