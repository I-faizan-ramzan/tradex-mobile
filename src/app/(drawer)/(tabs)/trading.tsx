import { AssetRow } from "@/components/asset/AssetRow";
import { TabHeader } from "@/components/basic/TabHeader";
import { SegmentSelector } from "@/components/trading/favorite/SegmentSelector";

import { ASSETS } from "@/data/assets";
import { useDrawer } from "@/hooks/use-drawer";
import { useTheme } from "@/hooks/use-theme";
import { useStore } from "@/store/useStore";
import { Feather } from "@expo/vector-icons";
import { router } from "expo-router";
import { useState } from "react";
import { ScrollView, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
const SlidersHorizontal = (props: any) => <Feather name="sliders" {...props} />;

export default function TradingScreen() {
  const [active, setActive] = useState("all");
  const { isDark } = useTheme();
  const setSelectedAsset = useStore((state) => state.setSelectedAsset);
  const { openDrawer } = useDrawer();
  const titleMap = {
    all: "All Assets",
    favorite: "Favorites",
    major: "Top Market",
  };
  const options = [
    {
      label: "All",
      title: "All Assets",
      value: "all",
      icon: "home-outline",
    },
    {
      label: "Favorite",
      title: "Favorites",
      value: "favorite",
      icon: "star-outline",
    },
    {
      label: "Major",
      title: "Top Market",
      value: "major",
      icon: "arrow-up-right-box-outline",
    },
  ];
  const activeOption = options.find((opt) => opt.value === active);
  return (
    <SafeAreaView className="flex-1 bg-white dark:bg-dark-background">
      <TabHeader
        title="Trading"
        onRightPress={openDrawer}
        iconName={"menu-outline"}
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
            {activeOption?.title}
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
