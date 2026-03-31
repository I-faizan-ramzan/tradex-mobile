import { MiniChart } from "@/components/charts/MiniChart";
import { Asset } from "@/types/asset";
import { formatPercent, formatPrice } from "@/utils/format";
import { Image, Pressable, Text, View } from "react-native";

type Props = {
  asset: Asset;
  onPress?: (asset: Asset) => void;
  className: string;
};

export function AssetRow({ asset, onPress, className }: Props) {
  const changeColor = asset.up
    ? "text-green-500 dark:text-green-400"
    : "text-red-500 dark:text-red-400";
  const chartColor = asset.up ? "#22c55e" : "#ef4444"; // MiniChart still uses raw color

  return (
    <Pressable
      onPress={() => onPress?.(asset)}
      className={`flex-row items-center ${className} justify-between px-4 py-3 border-b border-gray-200 dark:border-white/10 active:opacity-70`}
    >
      <>
        {/* Left */}
        <View className="flex-row items-center gap-3 flex-1">
          <Image
            source={asset.logo}
            className="w-8 h-8 rounded-full"
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
        <View className="mx-2">
          <MiniChart data={asset.chart} color={chartColor} />
        </View>

        {/* Right */}
        <View className="items-end min-w-[80px]">
          <Text className="text-gray-900 dark:text-white font-semibold">
            {formatPrice(asset.price)}
          </Text>
          <Text className={`text-xs ${changeColor}`}>
            {formatPercent(asset.changePercent)}
          </Text>
        </View>
      </>
    </Pressable>
  );
}
