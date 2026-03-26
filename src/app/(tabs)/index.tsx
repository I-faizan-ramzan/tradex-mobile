import { PortfolioCard } from "@/components/home/PortfolioCard";
import { TopMoverRow } from "@/components/home/TopMoverRow";
import { WatchlistRow } from "@/components/home/WatchlistRow";
import { useTheme } from "@/components/ThemeProvider";
import { ThemeToggle } from "@/components/ThemeToggle";
import { Bell } from "lucide-react-native";
import { Pressable, ScrollView, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function HomeScreen() {
  const { isDark } = useTheme();

  return (
    <SafeAreaView className="flex-1 bg-white dark:bg-dark-background">
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ paddingBottom: 32 }}
      >
        {/* Header */}
        <View className="flex-row items-center justify-between px-5 pt-2 pb-4">
          <View className="flex-row items-center gap-3">
            <View className="w-9 h-9 rounded-full bg-accent items-center justify-center">
              <Text className="text-white text-sm font-semibold">AK</Text>
            </View>
            <View>
              <Text className="text-xs text-muted dark:text-gray-400">
                Good morning,
              </Text>
              <Text className="text-base font-semibold text-gray-900 dark:text-white">
                Alex Kim
              </Text>
            </View>
          </View>
          <View className="flex-row items-center gap-2">
            <ThemeToggle />
            <Pressable className="w-9 h-9 rounded-full bg-surface dark:bg-dark-card items-center justify-center border border-gray-100 dark:border-white/10">
              <Bell
                size={16}
                color={isDark ? "#f0f2f7" : "#0a0c10"}
                strokeWidth={1.6}
              />
            </Pressable>
          </View>
        </View>

        {/* Portfolio summary card */}
        <PortfolioCard />

        {/* Watchlist */}
        <View className="mt-6">
          <View className="flex-row justify-between items-center px-5 mb-3">
            <Text className="text-base font-semibold text-gray-900 dark:text-white">
              Watchlist
            </Text>
            <Text className="text-xs text-accent">See all</Text>
          </View>
          <WatchlistRow />
        </View>

        {/* Top movers */}
        <View className="mt-6">
          <View className="flex-row justify-between items-center px-5 mb-2">
            <Text className="text-base font-semibold text-gray-900 dark:text-white">
              Top movers
            </Text>
            <Text className="text-xs text-accent">See all</Text>
          </View>
          <TopMoverRow />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
