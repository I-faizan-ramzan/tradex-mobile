import { ThemeToggle } from "@/components/ThemeToggle";
import { useTheme } from "@/hooks/use-theme";
import { Feather } from "@expo/vector-icons";
const Bell = (props: any) => <Feather name="bell" {...props} />;
import { ReactNode } from "react";
import { Image, Pressable, Text, View } from "react-native";

type AppHeaderProps = {
  name: string;
  greeting?: string;
  avatar?: any; // require() image
  rightContent?: ReactNode; // optional override
  onNotificationPress?: () => void;
};

export function AppHeader({
  name,
  greeting = "Good morning,",
  avatar,
  rightContent,
  onNotificationPress,
}: AppHeaderProps) {
  const { isDark } = useTheme();

  return (
    <View className="flex-row items-center justify-between px-5 pt-2 pb-4">
      {/* Left Section */}
      <View className="flex-row items-center gap-3">
        <View className="w-9 h-9 rounded-full bg-accent items-center justify-center overflow-hidden">
          {avatar ? (
            <Image source={avatar} className="w-full h-full" />
          ) : (
            <Text className="text-white text-sm font-semibold">
              {name?.charAt(0)}
            </Text>
          )}
        </View>

        <View>
          <Text className="text-base font-semibold text-gray-900 dark:text-white">
            {name}
          </Text>
          <Text className="text-xs text-muted dark:text-gray-400">
            {greeting}
          </Text>
        </View>
      </View>

      {/* Right Section */}
      {rightContent ? (
        rightContent
      ) : (
        <View className="flex-row items-center gap-2">
          <ThemeToggle />

          <Pressable
            onPress={onNotificationPress}
            className="w-9 h-9 rounded-full bg-surface dark:bg-dark-card items-center justify-center border border-gray-100 dark:border-white/10"
          >
            <Bell
              size={16}
              color={isDark ? "#f0f2f7" : "#0a0c10"}
              strokeWidth={1.6}
            />
          </Pressable>
        </View>
      )}
    </View>
  );
}
