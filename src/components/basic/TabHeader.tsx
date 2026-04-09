import { useTheme } from "@/hooks/use-theme";
import { Text, TouchableOpacity, View } from "react-native";
import { AppIcon } from "../ui/AppIcon";

type Props = {
  color?: string;
  iconName?: any;
  title: string;
  onRightPress?: () => void;
};

export function TabHeader({ title, onRightPress, iconName, color }: Props) {
  const { isDark } = useTheme();

  const iconColor = isDark ? "#f0f2f7" : "#0a0c10";

  return (
    <View className="flex-row items-center justify-between px-5 pt-2 pb-5">
      {/* Title */}
      <Text className="text-2xl font-semibold text-gray-900 dark:text-white">
        {title}
      </Text>

      {/* Right Section */}
      <TouchableOpacity
        className="flex-row items-center gap-2"
        onPress={onRightPress}
      >
        {/* Theme Toggle */}
        {/* <ThemeToggle /> */}

        {/* Right Icon Button */}

        <AppIcon name={iconName} color={iconColor} />
      </TouchableOpacity>
    </View>
  );
}
