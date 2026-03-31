import { Feather } from "@expo/vector-icons";
import { Text, View } from "react-native";
import { GlassCard } from "../ui/GlassCard";
const TrendingUp = (props: any) => <Feather name="trending-up" {...props} />;

export function PortfolioCard() {
  return (
    <GlassCard>
      <Text className="text-xs text-bold text-muted dark:text-gray-400 mb-1">
        Total portfolio value
      </Text>
      <Text className="text-4xl font-semibold text-gray-900 dark:text-white tracking-tight">
        $84,291.40
      </Text>

      {/* Change badge */}
      <View className="flex-row items-center gap-1 mt-2 self-start bg-green-50 dark:bg-gain/10 px-3 py-1 rounded-full">
        <TrendingUp size={12} color="#00e676" strokeWidth={2} />
        <Text className="text-xs font-medium text-green-600 dark:text-gain">
          +$1,204.30 (1.45%)
        </Text>
      </View>

      {/* Divider */}
      <View className="h-px bg-gray-100 dark:bg-background dark:bg-dark-background/5 my-4" />

      {/* Meta row */}
      <View className="flex-row gap-6">
        <View>
          <Text className="text-xs text-muted dark:text-gray-400 mb-1">
            Invested
          </Text>
          <Text className="text-sm font-semibold text-gray-900 dark:text-white">
            $71,500.00
          </Text>
        </View>
        <View>
          <Text className="text-xs text-muted dark:text-gray-400 mb-1">
            Returns
          </Text>
          <Text className="text-sm font-semibold text-gain">+$12,791.40</Text>
        </View>
        <View>
          <Text className="text-xs text-muted dark:text-gray-400 mb-1">
            Day P&L
          </Text>
          <Text className="text-sm font-semibold text-gain">+$1,204.30</Text>
        </View>
      </View>
    </GlassCard>
  );
}
