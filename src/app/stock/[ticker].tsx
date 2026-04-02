import { ASSETS } from "@/data/assets";
import { formatPercent, formatPrice } from "@/utils/format";
import { router, useLocalSearchParams } from "expo-router";
import { Image, ScrollView, Text, TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { ChevronLeft } from "lucide-react-native";
import { MiniChart } from "@/components/charts/MiniChart";
import { useStore } from "@/store/useStore";

export default function StockDetailScreen() {
  const { ticker } = useLocalSearchParams<{ ticker: string }>();
  const selectedAsset = useStore((state) => state.selectedAsset);
  const asset = selectedAsset || ASSETS.find((a) => a.ticker === ticker);

  if (!asset) {
    return (
      <SafeAreaView className="flex-1 justify-center items-center bg-white dark:bg-dark-background">
        <Text className="dark:text-white">Asset not found</Text>
      </SafeAreaView>
    );
  }

  const changeColor = asset.up
    ? "text-green-500 dark:text-green-400"
    : "text-red-500 dark:text-red-400";
  const chartColor = asset.up ? "#22c55e" : "#ef4444";

  return (
    <SafeAreaView className="flex-1 bg-white dark:bg-dark-background">
      {/* Header */}
      <View className="flex-row items-center px-4 py-3 justify-between shadow-sm bg-white dark:bg-dark-background dark:shadow-none z-10">
        <TouchableOpacity
          onPress={() => router.back()}
          className="p-2 rounded-full bg-gray-100 dark:bg-gray-800"
        >
          <ChevronLeft size={24} color={asset.up ? "#22c55e" : "gray"} />
        </TouchableOpacity>
        <Text className="text-lg font-bold text-gray-900 dark:text-white">
          {asset.ticker}
        </Text>
        <View className="w-10 h-10" />
      </View>

      <ScrollView className="flex-1">
        {/* Top Info */}
        <View className="items-center mt-6">
          <Image
            source={asset.logo}
            style={{ width: 80, height: 80, borderRadius: 40 }}
            resizeMode="contain"
          />
          <Text className="text-xl mt-4 font-semibold text-gray-900 dark:text-white">
            {asset.name}
          </Text>
          <Text className="text-4xl mt-2 font-bold text-gray-900 dark:text-white">
            {formatPrice(asset.price)}
          </Text>
          <Text className={`text-base mt-2 font-medium ${changeColor}`}>
            {formatPercent(asset.changePercent)}
          </Text>
        </View>

        {/* Big Chart Area */}
        <View className="mt-10 h-64 mx-4 bg-gray-50 dark:bg-dark-card rounded-3xl p-4 shadow-md overflow-hidden border border-gray-100 dark:border-white/5">
          <View className="w-full h-full pb-4">
            <MiniChart data={asset.chart} color={chartColor} />
          </View>
        </View>

        {/* Extra info section to fill space */}
        <View className="mt-8 mx-4 p-4 rounded-3xl bg-gray-50 dark:bg-dark-card shadow-md border border-gray-100 dark:border-white/5">
          <Text className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
            About {asset.name}
          </Text>
          <Text className="text-gray-600 dark:text-gray-400 leading-6">
            This is a dummy description for the UI design of the stock trading application.
            Currently rendering the properties and dummy chart for {asset.name}. This view
            is complete with dynamic lighting and shadows.
          </Text>
        </View>
      </ScrollView>

      {/* Sticky Bottom Button */}
      <View className="px-5 py-4 border-t border-gray-100 dark:border-white/5 bg-white dark:bg-dark-background">
        <TouchableOpacity className="bg-primary dark:bg-white w-full rounded-full py-4 shadow-lg active:opacity-80 flex-row justify-center items-center">
          <Text className="text-white dark:text-black font-bold text-lg text-center">
            Trade {asset.ticker}
          </Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}
