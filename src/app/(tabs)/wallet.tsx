import { AssetRow } from "@/components/asset/AssetRow";
import { TabHeader } from "@/components/basic/TabHeader";
import { ASSETS } from "@/data/assets";
import { useTheme } from "@/hooks/use-theme";
import { useStore } from "@/store/useStore";
import { Feather } from "@expo/vector-icons";
import { LinearGradient } from "expo-linear-gradient";
import { router } from "expo-router";
import { ScrollView, Text, TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
const SlidersHorizontal = (props: any) => <Feather name="sliders" {...props} />;

export default function WalletScreen() {
  const { isDark } = useTheme();
  const setSelectedAsset = useStore((state) => state.setSelectedAsset);

  return (
    <SafeAreaView className="flex-1 bg-white dark:bg-dark-background">
      {/* Header */}
      <TabHeader
        title="Wallet"
        onRightPress={() => router.push("/(tabs)/profile")}
      />
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ paddingBottom: 32 }}
      >
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

        {/* Deposit / Withdraw Action Buttons */}
        <View className="flex-row gap-4 mx-5 mb-5 mt-2">
          <TouchableOpacity
            onPress={() => router.push("/wallet/deposit")}
            className="flex-1 bg-accent dark:bg-white p-4 rounded-full items-center shadow-md dark:shadow-none"
          >
            <Text className="text-white dark:text-black font-bold text-base">
              Deposit
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => router.push("/wallet/withdraw")}
            className="flex-1 bg-primary dark:bg-dark-card border border-gray-100 dark:border-white/5 p-4 rounded-full items-center shadow-md dark:shadow-none"
          >
            <Text className="text-gray-900 dark:text-white font-bold text-white">
              Withdraw
            </Text>
          </TouchableOpacity>
        </View>

        {/* Assets list */}
        <View className="mt-2 pb-5">
          <Text className="px-5 text-lg font-semibold text-gray-900 dark:text-white mb-4">
            Your Asset
          </Text>
          <View className="mb-2">
            {ASSETS.map((asset, index) => (
              <View
                key={asset.ticker}
                className={`mx-5 bg-card dark:bg-dark-card shadow-sm dark:shadow-none
                 ${index === 0 ? "rounded-t-2xl" : ""}
                 ${index === ASSETS.length - 1 ? "rounded-b-2xl" : ""}
                 border-x border-gray-100 dark:border-white/5
                 ${index === 0 ? "border-t" : ""}
                 ${index === ASSETS.length - 1 ? "border-b" : ""}
                 `}
              >
                <AssetRow
                  asset={asset}
                  onPress={() => {
                    setSelectedAsset(asset);
                    router.push(`/stock/${asset.ticker}`);
                  }}
                />
                {index !== ASSETS.length - 1 && (
                  <View className="border-b border-gray-100 dark:border-white/5" />
                )}
              </View>
            ))}
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
