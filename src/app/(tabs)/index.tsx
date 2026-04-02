import { AppHeader } from "@/components/AppHeader";
import { AssetRow } from "@/components/asset/AssetRow";
import { AssetsCarousel } from "@/components/asset/AssetsCarousel";
import { useTheme } from "@/components/ThemeProvider";
import { SearchBar } from "@/components/ui/SearchBar";
import { ASSETS } from "@/data/assets";
import { useStore } from "@/store/useStore";
import { router } from "expo-router";
import { useState } from "react";
import { Keyboard, Pressable, ScrollView, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function HomeScreen() {
  const { isDark } = useTheme();
  const [search, setSearch] = useState("");
  const [activeTab, setActiveTab] = useState(0);
  const setSelectedAsset = useStore((state) => state.setSelectedAsset);

  let displayedAssets: typeof ASSETS = [];
  if (activeTab === 0) {
    displayedAssets = ASSETS.filter((item) =>
      item.name.toLowerCase().includes(search.toLowerCase()),
    );
  }

  const HOME_TABS = ["Trending", "News", "Top Market"];

  return (
    <SafeAreaView className="flex-1 bg-white dark:bg-dark-background ">
      <AppHeader
        name="Johan Wekitem"
        avatar={require("@/assets/images/avatar.jpg")}
        onNotificationPress={() => router.push("/notification/notifications")}
      />
      <ScrollView
        keyboardShouldPersistTaps="handled"
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ paddingBottom: 32 }}
      >
        <View className="py-5 mx-5  ">
          <SearchBar
            value={search}
            onChangeText={setSearch}
            placeholder="Find stocks..."
            onSubmit={() => Keyboard.dismiss()}
          />
        </View>

        <View className="mt-2">
          <View className="flex-row justify-between items-center px-5 mb-3">
            <Text className="text-base font-semibold text-gray-900 dark:text-white">
              Portfolio
            </Text>
          </View>
          <AssetsCarousel />
        </View>

        {/* Inline Segmented Control */}
        <View className="mt-5 w-full items-center">
          <View className="flex-row rounded-2xl dark:bg-dark-card border border-gray-100 dark:border-white/5 bg-gray-100 p-1 w-[80%] dark:shadow-none">
            {HOME_TABS.map((tab, index) => {
              const isActive = activeTab === index;
              return (
                <Pressable
                  key={tab}
                  className={`flex-1 items-center justify-center py-2 rounded-full ${
                    isActive ? "bg-white  dark:bg-gray-700" : "bg-transparent"
                  }`}
                  onPress={() => setActiveTab(index)}
                >
                  <Text
                    className={`text-sm font-semibold ${
                      isActive
                        ? "text-gray-900 dark:text-white"
                        : "text-gray-500 dark:text-gray-400"
                    }`}
                  >
                    {tab}
                  </Text>
                </Pressable>
              );
            })}
          </View>
        </View>

        <View className="mt-6 px-5 mb-2">
          <Text className="text-base font-semibold text-gray-900 dark:text-white">
            {HOME_TABS[activeTab]}
          </Text>
        </View>

        {/* Conditional Component Rendering */}
        {activeTab === 0 && (
          <View>
            {displayedAssets.length === 0 ? (
              <View className="py-10 px-5 items-center justify-center">
                <Text className="text-gray-500 dark:text-gray-400 font-medium">
                  No assets found.
                </Text>
              </View>
            ) : (
              displayedAssets.map((item, index) => (
                <View key={item.id} className="mb-0">
                  <View
                    className={`mx-5 bg-card dark:bg-dark-card shadow-sm dark:shadow-none
                    ${index === 0 ? "rounded-t-2xl" : ""}
                    ${index === displayedAssets.length - 1 ? "rounded-b-2xl" : ""}
                    border-x border-gray-100 dark:border-white/5
                    ${index === 0 ? "border-t" : ""}
                    ${index === displayedAssets.length - 1 ? "border-b" : ""}
                  `}
                  >
                    <AssetRow
                      asset={item}
                      onPress={() => {
                        setSelectedAsset(item);
                        router.push(`/stock/${item.ticker}`);
                      }}
                    />
                  </View>
                  {index < displayedAssets.length - 1 && (
                    <View className="mx-5 border-b border-gray-100 dark:border-white/5" />
                  )}
                </View>
              ))
            )}
          </View>
        )}

        {activeTab === 1 && (
          <View className="py-10 px-5 items-center justify-center">
            <Text className="text-gray-500 dark:text-gray-400 font-medium">
              News updates will appear here.
            </Text>
          </View>
        )}

        {activeTab === 2 && (
          <View className="py-10 px-5 items-center justify-center">
            <Text className="text-gray-500 dark:text-gray-400 font-medium">
              Top Market statistics will appear here.
            </Text>
          </View>
        )}
      </ScrollView>
    </SafeAreaView>
  );
}
