import { AssetRow } from "@/components/asset/AssetRow";
import { TabHeader } from "@/components/basic/TabHeader";
import { SegmentSelector } from "@/components/trading/favorite/SegmentSelector";

import { ASSETS } from "@/data/assets";
import { useTheme } from "@/hooks/use-theme";
import { useStore } from "@/store/useStore";
import { Feather } from "@expo/vector-icons";
import { router } from "expo-router";
import { useState } from "react";
import { ScrollView, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
const SlidersHorizontal = (props: any) => <Feather name="sliders" {...props} />;

export default function TradingScreen() {
  const [active, setActive] = useState("favorites");
  const { isDark } = useTheme();
  const setSelectedAsset = useStore((state) => state.setSelectedAsset);
  const options = [
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
      <TabHeader
        title="Trading"
        onRightPress={() => router.push("/(tabs)/profile")}
      />
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ paddingBottom: 32 }}
      >
        {/* Header */}

        {/* Favorite tab */}

        <View>
          <SegmentSelector
            options={options}
            active={active}
            setActive={setActive}
          />
        </View>

        {/* Assets list */}
        <View className="mt-2 pb-5">
          <Text className="px-5 text-lg font-semibold text-gray-900 dark:text-white mb-4">
            Top Market
          </Text>
          <View className="mb-2">
            {ASSETS.map((asset, index) => (
              <View
                key={asset.ticker}
                className={`mx-5 bg-card dark:bg-dark-card shadow-sm dark:shadow-none
                 ${index === 0 ? "rounded-t-2xl" : ""}
                 ${index === ASSETS.length - 1 ? "rounded-b-2xl" : ""}
                 border-x border-gray-100 dark:border-white/5
                 ${index === 0 ? "border-t" : ""}
                 ${index === ASSETS.length - 1 ? "border-b" : ""}
                 `}
              >
                <AssetRow
                  asset={asset}
                  onPress={() => {
                    setSelectedAsset(asset);
                    router.push(`/stock/${asset.ticker}`);
                  }}
                />
                {index !== ASSETS.length - 1 && (
                  <View className="border-b border-gray-100 dark:border-white/5" />
                )}
              </View>
            ))}
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
