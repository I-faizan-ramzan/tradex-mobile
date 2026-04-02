import { MiniChart } from "@/components/charts/MiniChart";
import { Asset } from "@/types/asset";
import { formatPercent, formatPrice } from "@/utils/format";
import { Image, Pressable, Text, View } from "react-native";

type Props = {
  asset: Asset;
  onPress?: (asset: Asset) => void;
  className?: string; // ✅ optional now
};

export function AssetRow({ asset, onPress, className = "" }: Props) {
  const changeColor = asset.up
    ? "text-green-500 dark:text-green-400"
    : "text-red-500 dark:text-red-400";
  const chartColor = asset.up ? "#22c55e" : "#ef4444";

  return (
    <Pressable
      onPress={() => onPress?.(asset)}
      className={`flex-row items-center justify-between px-4 py-3 active:opacity-70 ${className}`} // ✅ fixed template literal + removed hardcoded border
    >
      {/* Left */}
      <View className="flex-row items-center gap-2 flex-1">
        <Image
          source={asset.logo}
          className="w-12 h-12 rounded-full overflow-hidden"
          style={{ width: 48, height: 48 }}
          resizeMode="contain"
        />
        <View>
          <Text className="text-gray-900 dark:text-white font-semibold">
            {asset.ticker}
          </Text>
          <Text className="text-xs text-gray-500 dark:text-gray-400">
            {asset.name}
          </Text>
        </View>
      </View>

      {/* Center Chart */}
      <View className="h-10 w-24 mx-2">
        <MiniChart data={asset.chart} color={chartColor} />
      </View>

      {/* Right */}
      <View className="items-end">
        <Text className="text-gray-900 dark:text-white font-semibold">
          {formatPrice(asset.price)}
        </Text>
        <Text className={`text-xs ${changeColor}`}>
          {formatPercent(asset.changePercent)}
        </Text>
      </View>
    </Pressable>
  );
}
