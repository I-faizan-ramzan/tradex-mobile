import { ThemeToggle } from "@/components/ThemeToggle";
import { useTheme } from "@/hooks/use-theme";
import { Ionicons } from "@expo/vector-icons";
import { Pressable, Text, View } from "react-native";

type Props = {
  title: string;
  onRightPress?: () => void;
};

export function TabHeader({ title, onRightPress }: Props) {
  const { isDark } = useTheme();

  const iconColor = isDark ? "#f0f2f7" : "#0a0c10";

  return (
    <View className="flex-row items-center justify-between px-5 pt-2 pb-5">
      {/* Title */}
      <Text className="text-2xl font-semibold text-gray-900 dark:text-white">
        {title}
      </Text>

      {/* Right Section */}
      <View className="flex-row items-center gap-2">
        {/* Theme Toggle */}
        <ThemeToggle />

        {/* Right Icon Button */}

        <Pressable
          onPress={onRightPress}
          className="w-9 h-9 rounded-full  items-center justify-center"
        >
          <Ionicons name="menu-sharp" size={24} color={iconColor} />
        </Pressable>
      </View>
    </View>
  );
}
