import { useTheme } from "@/hooks/use-theme";
import { Feather } from "@expo/vector-icons";
type LucideIcon = any;
import { Pressable, Text, View } from "react-native";

type Props = {
  title: string;

  // Left side
  leftIcon?: LucideIcon;
  onLeftPress?: () => void;

  // Right side
  rightIcon?: LucideIcon;
  onRightPress?: () => void;
};

export function ScreenHeader({
  title,
  leftIcon: LeftIcon,
  onLeftPress,
  rightIcon: RightIcon,
  onRightPress,
}: Props) {
  const { isDark } = useTheme();

  return (
    <View className="flex-row items-center justify-between px-5 pt-2 pb-6">
      {/* Left */}
      {LeftIcon ? (
        <Pressable
          onPress={onLeftPress}
          className="w-9 h-9 rounded-full bg-surface dark:bg-dark-card border border-gray-100 dark:border-white/10 items-center justify-center"
        >
          <LeftIcon
            size={16}
            color={isDark ? "#f0f2f7" : "#0a0c10"}
            strokeWidth={1.6}
          />
        </Pressable>
      ) : (
        <View className="w-9 h-9" />
      )}

      {/* Title */}
      <Text className="text-lg font-semibold text-gray-900 dark:text-white">
        {title}
      </Text>

      {/* Right */}
      {RightIcon ? (
        <Pressable
          onPress={onRightPress}
          className="w-9 h-9 rounded-full bg-surface dark:bg-dark-card border border-gray-100 dark:border-white/10 items-center justify-center"
        >
          <RightIcon
            size={16}
            color={isDark ? "#f0f2f7" : "#0a0c10"}
            strokeWidth={1.6}
          />
        </Pressable>
      ) : (
        <View className="w-9 h-9" />
      )}
    </View>
  );
}
