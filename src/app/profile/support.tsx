import { useTheme } from "@/hooks/use-theme";
import { router } from "expo-router";
import { Feather } from "@expo/vector-icons";
const ChevronLeft = (props: any) => <Feather name="chevron-left" {...props} />;
import { Pressable, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function ProfileSupportScreen() {
  const { isDark } = useTheme();

  return (
    <SafeAreaView className="flex-1 bg-white dark:bg-dark-background">
      <View className="flex-row items-center gap-3 px-5 pt-2 pb-6">
        <Pressable
          onPress={() => router.back()}
          className="w-9 h-9 rounded-xl bg-surface dark:bg-dark-card border border-gray-100 dark:border-white/10 items-center justify-center"
        >
          <ChevronLeft
            size={18}
            color={isDark ? "#f0f2f7" : "#0a0c10"}
            strokeWidth={2}
          />
        </Pressable>
        <Text className="text-lg font-semibold text-gray-900 dark:text-white">
          Help and Support
        </Text>
      </View>
      {/* build out content here */}
    </SafeAreaView>
  );
}
