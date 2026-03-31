import { AppHeader } from "@/components/AppHeader";
import { AssetsCarousel } from "@/components/asset/AssetsCarousel";
import { GradientBackground } from "@/components/GradientBackground";
import { AssetRowCard } from "@/components/home/AssetRowCard";
import SegmentedControl from "@/components/home/SegmentedControl";
import { useTheme } from "@/components/ThemeProvider";
import { SearchBar } from "@/components/ui/SearchBar";
import { useState } from "react";
import { ScrollView, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function HomeScreen() {
  const { isDark } = useTheme();
  const [search, setSearch] = useState("");
  return (
    <GradientBackground>
      <SafeAreaView className="flex-1 bg-white dark:bg-dark-background">
        <ScrollView
          showsVerticalScrollIndicator={false}
          contentContainerStyle={{ paddingBottom: 32 }}
        >
          {/* Header */}
          <AppHeader name="Johan Wekitem" />
          <View className="flex-1 py-5 mx-5">
            <SearchBar
              value={search}
              onChangeText={setSearch}
              placeholder="Find stocks..."
              onSubmit={() => console.log("Search:", search)}
            />
          </View>
          {/* Portfolio summary card */}

          {/* Watchlist */}
          <View className="mt-6">
            <View className="flex-row justify-between items-center px-5 mb-3">
              <Text className="text-base font-semibold text-gray-900 dark:text-white">
                Portfolio
              </Text>
              {/* <Text className="text-xs text-accent">See all</Text> */}
            </View>
            <AssetsCarousel />
          </View>
          <SegmentedControl />
          {/* Top Market */}
          <View className="mt-6">
            <View className="flex-row justify-between items-center px-5 mb-2">
              <Text className="text-base font-semibold text-gray-900 dark:text-white">
                Top Market
              </Text>
              {/* <Text className="text-xs text-accent">See all</Text> */}
            </View>
            <AssetRowCard />
          </View>
        </ScrollView>
      </SafeAreaView>
    </GradientBackground>
  );
}
