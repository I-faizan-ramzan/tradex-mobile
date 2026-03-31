import { AssetRow } from "@/components/home/AssetRow";
import { ASSETS } from "@/data/assets";
import { useTheme } from "@/hooks/use-theme";
import { LinearGradient } from "expo-linear-gradient";
import { Feather } from "@expo/vector-icons";
const SlidersHorizontal = (props: any) => <Feather name="sliders" {...props} />;
import { useState } from "react";
import { Pressable, ScrollView, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function WalletScreen() {
  const [active, setActive] = useState<"deposit" | "withdraw">("deposit");
  const { isDark } = useTheme();

  return (
    <SafeAreaView className="flex-1 bg-white dark:bg-dark-background">
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ paddingBottom: 32 }}
      >
        {/* Header */}
        <View className="flex-row items-center justify-between px-5 pt-2 pb-5">
          <Text className="text-2xl font-semibold text-gray-900 dark:text-white">
            Wallet
          </Text>
          <Pressable className="w-9 h-9 rounded-full bg-surface dark:bg-dark-card border border-gray-100 dark:border-white/10 items-center justify-center">
            <SlidersHorizontal
              size={16}
              color={isDark ? "#f0f2f7" : "#0a0c10"}
              strokeWidth={1.6}
            />
          </Pressable>
        </View>

        {/* Portfolio gradient card */}
        <View className="mx-5 rounded-2xl overflow-hidden mb-5">
          <LinearGradient
            colors={["#7c3aed", "#4f8ef7"]}
            start={{ x: 0, y: 0 }}
            end={{ x: 1, y: 1 }}
            style={{ padding: 22, borderRadius: 16 }}
          >
            <Text className="text-white/80 text-sm font-medium mb-1">
              Portfolio
            </Text>
            <Text className="text-white/70 text-xs mb-2">Holding value</Text>
            <Text className="text-white text-4xl font-semibold tracking-tight mb-4">
              $106.000
            </Text>
            <View className="flex-row gap-8">
              <View>
                <Text className="text-white/60 text-xs mb-1">
                  Invested value
                </Text>
                <Text className="text-white text-lg font-semibold">$1,000</Text>
              </View>
              <View>
                <Text className="text-white/60 text-xs mb-1">
                  Available INR
                </Text>
                <Text className="text-white text-lg font-semibold">$1,050</Text>
              </View>
            </View>
          </LinearGradient>
        </View>

        {/* Deposit / Withdraw toggle */}
        <View className="flex-row mx-5 mb-6 bg-surface dark:bg-dark-card rounded-full p-1 border border-gray-100 dark:border-white/5">
          <Pressable
            onPress={() => setActive("deposit")}
            className="flex-1 py-3 rounded-full items-center"
            style={{
              backgroundColor: active === "deposit" ? "#4f8ef7" : "transparent",
            }}
          >
            <Text
              style={{
                color:
                  active === "deposit"
                    ? "#fff"
                    : isDark
                      ? "#6b7280"
                      : "#9ca3af",
                fontWeight: "600",
                fontSize: 14,
              }}
            >
              Deposit
            </Text>
          </Pressable>
          <Pressable
            onPress={() => setActive("withdraw")}
            className="flex-1 py-3 rounded-full items-center"
            style={{
              backgroundColor:
                active === "withdraw" ? "#4f8ef7" : "transparent",
            }}
          >
            <Text
              style={{
                color:
                  active === "withdraw"
                    ? "#fff"
                    : isDark
                      ? "#6b7280"
                      : "#9ca3af",
                fontWeight: "600",
                fontSize: 14,
              }}
            >
              Withdraw
            </Text>
          </Pressable>
        </View>

        {/* Assets list */}
        <View className="px-5">
          <Text className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
            Your Asset
          </Text>
          <View className="bg-surface dark:bg-dark-card rounded-2xl border border-gray-100 dark:border-white/5 overflow-hidden">
            {ASSETS.map((asset, i) => (
              <AssetRow key={asset.ticker} asset={asset} />
            ))}
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
