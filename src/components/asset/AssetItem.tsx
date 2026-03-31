import { useTheme } from "@/hooks/use-theme";
import { Asset } from "@/types/asset";
import { formatPercent, formatPrice } from "@/utils/format";
import { Image, Pressable, Text, View } from "react-native";

type Props = {
  asset: Asset;
};

export function AssetItem({ asset }: Props) {
  const { isDark } = useTheme();

  return (
    <Pressable
      onPress={asset.onPress}
      className="w-36 rounded-2xl p-4 mx-5 rounded-2xl dark:bg-dark-card border border-gray-100 dark:border-white/5 bg-surface"
    >
      {/* Top Row */}
      <View className="flex-row items-center justify-between mb-4">
        {/* Logo */}
        <View
          className="w-28
       h-28 rounded-xl  dark: items-center justify-center overflow-hidden"
        >
          {asset.logo ? (
            <Image source={asset.logo} className="w-28 h-28" />
          ) : (
            <Text className="text-xl font-bold text-gray-700 dark:text-white">
              {asset.ticker.slice(0, 2)}
            </Text>
          )}
        </View>
      </View>

      {/* Ticker */}
      <Text className="text-sm font-semibold text-gray-900 dark:text-white">
        {asset.ticker}
      </Text>

      {/* Name */}
      <Text className="text-xs text-gray-400 mt-0.5">{asset.name}</Text>

      {/* Price */}
      <Text className="text-lg font-semibold mt-3 text-gray-900 dark:text-white">
        {formatPrice(asset.price)}
      </Text>
      {/* Change Badge */}
      <View className={`px-2 py-0.5 rounded-full`}>
        <Text
          className={`text-[10px] font-semibold ${
            asset.up
              ? "text-green-600 dark:text-green-400"
              : "text-red-500 dark:text-red-400"
          }`}
        >
          {formatPercent(asset.changePercent)}
        </Text>
      </View>
    </Pressable>
  );
}
