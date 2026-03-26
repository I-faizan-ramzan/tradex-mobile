import { router } from "expo-router";
import { Pressable, ScrollView, Text, View } from "react-native";

const WATCHLIST = [
  {
    ticker: "AAPL",
    name: "Apple",
    price: "$189.30",
    change: "+1.2%",
    up: true,
    bg: "bg-blue-50 dark:bg-blue-900/30",
    text: "text-blue-600 dark:text-blue-300",
  },
  {
    ticker: "TSLA",
    name: "Tesla",
    price: "$242.10",
    change: "-0.8%",
    up: false,
    bg: "bg-red-50 dark:bg-red-900/20",
    text: "text-red-500 dark:text-red-400",
  },
  {
    ticker: "NVDA",
    name: "Nvidia",
    price: "$875.40",
    change: "+3.1%",
    up: true,
    bg: "bg-green-50 dark:bg-green-900/20",
    text: "text-green-600 dark:text-green-400",
  },
  {
    ticker: "MSFT",
    name: "Microsoft",
    price: "$415.20",
    change: "+0.6%",
    up: true,
    bg: "bg-purple-50 dark:bg-purple-900/20",
    text: "text-purple-600 dark:text-purple-400",
  },
  {
    ticker: "AMZN",
    name: "Amazon",
    price: "$182.90",
    change: "-0.3%",
    up: false,
    bg: "bg-yellow-50 dark:bg-yellow-900/20",
    text: "text-yellow-600 dark:text-yellow-400",
  },
];

export function WatchlistRow() {
  return (
    <ScrollView
      horizontal
      showsHorizontalScrollIndicator={false}
      contentContainerStyle={{ paddingHorizontal: 20, gap: 10 }}
    >
      {WATCHLIST.map((s) => (
        <Pressable
          key={s.ticker}
          onPress={() => router.push(`/stock/${s.ticker}`)}
          className="w-32 bg-surface dark:bg-dark-card border border-gray-100 dark:border-white/5 rounded-2xl p-3"
        >
          {/* Logo */}
          <View className="flex-row justify-between items-start mb-3">
            <View
              className={`w-8 h-8 rounded-lg ${s.bg} items-center justify-center`}
            >
              <Text className={`text-xs font-bold ${s.text}`}>
                {s.ticker.slice(0, 2)}
              </Text>
            </View>
            <View
              className={`px-2 py-0.5 rounded-full ${s.up ? "bg-green-50 dark:bg-gain/10" : "bg-red-50 dark:bg-loss/10"}`}
            >
              <Text
                className={`text-xs font-medium ${s.up ? "text-green-600 dark:text-gain" : "text-red-500 dark:text-loss"}`}
              >
                {s.change}
              </Text>
            </View>
          </View>
          <Text className="text-sm font-semibold text-gray-900 dark:text-white">
            {s.ticker}
          </Text>
          <Text className="text-xs text-muted dark:text-gray-400 mt-0.5">
            {s.name}
          </Text>
          <Text className="text-base font-semibold text-gray-900 dark:text-white mt-2 font-mono">
            {s.price}
          </Text>
        </Pressable>
      ))}
    </ScrollView>
  );
}
