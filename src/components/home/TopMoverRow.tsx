import { router } from "expo-router";
import { TrendingDown, TrendingUp } from "lucide-react-native";
import { Pressable, Text, View } from "react-native";

const MOVERS = [
  {
    ticker: "NVDA",
    name: "Nvidia",
    price: "$875.40",
    change: "+3.1%",
    up: true,
  },
  { ticker: "META", name: "Meta", price: "$512.80", change: "+2.4%", up: true },
  {
    ticker: "TSLA",
    name: "Tesla",
    price: "$242.10",
    change: "-0.8%",
    up: false,
  },
  {
    ticker: "NFLX",
    name: "Netflix",
    price: "$628.50",
    change: "-1.2%",
    up: false,
  },
];

export function TopMoverRow() {
  return (
    <View className="px-5">
      {MOVERS.map((s, i) => (
        <Pressable
          key={s.ticker}
          onPress={() => router.push(`/stock/${s.ticker}`)}
          className={`flex-row items-center py-3 ${i < MOVERS.length - 1 ? "border-b border-gray-100 dark:border-white/5" : ""}`}
        >
          {/* Logo */}
          <View className="w-10 h-10 rounded-xl bg-surface dark:bg-dark-card border border-gray-100 dark:border-white/5 items-center justify-center mr-3">
            <Text className="text-xs font-bold text-gray-700 dark:text-gray-300">
              {s.ticker.slice(0, 2)}
            </Text>
          </View>

          {/* Info */}
          <View className="flex-1">
            <Text className="text-sm font-semibold text-gray-900 dark:text-white">
              {s.ticker}
            </Text>
            <Text className="text-xs text-muted dark:text-gray-400 mt-0.5">
              {s.name}
            </Text>
          </View>

          {/* Price + change */}
          <View className="items-end">
            <Text className="text-sm font-semibold text-gray-900 dark:text-white font-mono">
              {s.price}
            </Text>
            <View className="flex-row items-center gap-1 mt-0.5">
              {s.up ? (
                <TrendingUp size={11} color="#00e676" strokeWidth={2} />
              ) : (
                <TrendingDown size={11} color="#ff5252" strokeWidth={2} />
              )}
              <Text
                className={`text-xs font-medium ${s.up ? "text-green-600 dark:text-gain" : "text-red-500 dark:text-loss"}`}
              >
                {s.change}
              </Text>
            </View>
          </View>
        </Pressable>
      ))}
    </View>
  );
}
