import { AssetRow } from "@/components/home/AssetRow";
import { SegmentedToggle } from "@/components/wallet/SegmentedToggle";
import { ASSETS } from "@/data/assets";
import { useTheme } from "@/hooks/use-theme";
import { Feather } from "@expo/vector-icons";
import { LinearGradient } from "expo-linear-gradient";
import { useState } from "react";
import { Pressable, ScrollView, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
const SlidersHorizontal = (props: any) => <Feather name="sliders" {...props} />;

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
            <Text className="text-white text-xl font-bold mb-1">Portfolio</Text>
            <Text className="text-white text-xs mb-2">Holding value</Text>
            <Text className="text-white text-4xl font-semibold tracking-tight mb-4">
              $106.000
            </Text>
            <View className="flex-row gap-8">
              <View>
                <Text className="text-white text-xs mb-1">Invested value</Text>
                <Text className="text-white text-lg font-bold">$1,000</Text>
              </View>
              <View>
                <Text className="text-white text-xs mb-1">Available INR</Text>
                <Text className="text-white text-lg font-bold">$1,050</Text>
              </View>
            </View>
          </LinearGradient>
        </View>

        {/* Deposit / Withdraw toggle */}

        <SegmentedToggle
          className="mx-5"
          options={[
            { label: "Deposit", value: "deposit" },
            { label: "Withdraw", value: "withdraw" },
          ]}
          value={active}
          onChange={setActive}
        />

        {/* Assets list */}
        <View className="mx-5">
          <Text className="text-lg font-semibold text-gray-900 dark:text-white my-4 ">
            Your Asset
          </Text>
          <View className=" bg-surface dark:bg-dark-card rounded-2xl border border-gray-100 dark:border-white/5 overflow-hidden ">
            {ASSETS.map((asset, i) => (
              <AssetRow key={asset.ticker} asset={asset} className="" />
            ))}
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
