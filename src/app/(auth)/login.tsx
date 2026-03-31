import { AssetRow } from "@/components/home/AssetRow";
import { SegmentSelector } from "@/components/trading/favorite/SegmentSelector";
import { ASSETS } from "@/data/assets";
import { useTheme } from "@/hooks/use-theme";
import { Feather } from "@expo/vector-icons";
const SlidersHorizontal = (props: any) => <Feather name="sliders" {...props} />;
import { useState } from "react";
import { Pressable, ScrollView, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function TradingScreen() {
  const [active, setActive] = useState("favorites");
  const { isDark } = useTheme();
  const options: Option[] = [
    {
      label: "All",
      value: "deposit",
      icon: "home-outline",
    },
    {
      label: "Favorite",
      value: "favorite",
      icon: "star-outline",
    },
    {
      label: "Major",
      value: "major",
      icon: "caret-down",
    },
  ];

  return (
    <SafeAreaView className="flex-1 bg-white dark:bg-dark-background">
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ paddingBottom: 32 }}
      >
        {/* Header */}
        <View className="flex-row items-center justify-between px-5 pt-2 pb-5">
          <Text className="text-2xl font-semibold text-gray-900 dark:text-white">
            Trading
          </Text>
          <Pressable className="w-9 h-9 rounded-full bg-surface dark:bg-dark-card border border-gray-100 dark:border-white/10 items-center justify-center">
            <SlidersHorizontal
              size={16}
              color={isDark ? "#f0f2f7" : "#0a0c10"}
              strokeWidth={1.6}
            />
          </Pressable>
        </View>

        {/* Favorite tab */}

        <View>
          <SegmentSelector
            options={options}
            active={active}
            setActive={setActive}
          />
        </View>

        {/* Assets list */}
        <View className="px-5">
          <Text className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
            Top Market
          </Text>
          <View className="bg-surface dark:bg-dark-card rounded-2xl border border-gray-100 dark:border-white/5 overflow-hidden">
            {ASSETS.map((asset, i) => (
              <AssetRow key={asset.ticker} asset={asset} />
            ))}
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
