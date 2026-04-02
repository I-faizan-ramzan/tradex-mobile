import { ScreenHeader } from "@/components/profile/ScreenHeader";
import { useTheme } from "@/hooks/use-theme";
import { Feather } from "@expo/vector-icons";
import { router } from "expo-router";
import { View, Text, TouchableOpacity, ScrollView, TextInput } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useState } from "react";
const SlidersHorizontal = (props: any) => <Feather name="sliders" {...props} />;

export default function ProfilePaymentMethodScreen() {
  const { isDark } = useTheme();
  const [activeMethod, setActiveMethod] = useState<string | null>(null);

  const getMethodStyle = (methodId: string) => {
      const isActive = activeMethod === methodId;
      if (isActive) {
          return "bg-[#EDF2FF] dark:bg-[#1E50FF]/20 border-[#1E50FF]/30 dark:border-[#1E50FF]/50";
      }
      return "bg-surface dark:bg-[#1C1C1E] border-gray-100 dark:border-white/5";
  };

  const getRadioStyle = (methodId: string) => {
      const isActive = activeMethod === methodId;
      if (isActive) {
          return (
              <View className="w-5 h-5 rounded-full border-2 border-[#1E50FF] items-center justify-center">
                  <View className="w-2.5 h-2.5 rounded-full bg-[#1E50FF]"></View>
              </View>
          );
      }
      return (
          <View className="w-5 h-5 rounded-full border border-gray-300 dark:border-gray-600 bg-transparent items-center justify-center">
          </View>
      );
  };

  return (
    <SafeAreaView className="flex-1 bg-white dark:bg-dark-background">
      <ScreenHeader
        leftIcon={{ type: "fontawesome", name: "angle-left" }}
        title="Payment Method"
        rightIcon={{ type: "ionicons", name: "menu-outline" }}
        onRightPress={() => console.log("Pressed")}
        onLeftPress={() => router.back()}
      />

      <ScrollView className="flex-1 px-5 mt-6" showsVerticalScrollIndicator={false} contentContainerStyle={{ paddingBottom: 40 }}>
        
        {/* Paypal */}
        <TouchableOpacity 
            onPress={() => setActiveMethod(activeMethod === 'paypal' ? null : 'paypal')}
            className={`p-4 rounded-2xl mb-4 flex-row items-center border ${getMethodStyle('paypal')}`}
        >
            <View className="w-10 h-10 rounded-full bg-[#1E50FF]/10 items-center justify-center mr-4">
                <Text className="text-[#1E50FF] font-black italic">P</Text> 
            </View>
            <View className="flex-1">
                <Text className="text-gray-900 dark:text-white font-bold text-base">Paypal</Text>
                <Text className="text-gray-500 text-sm mt-0.5">emailname@gmail.com</Text>
            </View>
            {getRadioStyle('paypal')}
        </TouchableOpacity>

        {/* Paypal Form */}
        {activeMethod === 'paypal' && (
            <View className="bg-white dark:bg-[#1C1C1E] p-6 rounded-3xl mb-6 border border-gray-100 dark:border-white/5 shadow-sm">
                <Text className="text-lg font-bold text-gray-900 dark:text-white mb-6 text-center">Paypal Setting</Text>
                
                <Text className="text-xs font-semibold text-gray-500 mb-2 ml-1">Name</Text>
                <TextInput placeholder="Frist Name" placeholderTextColor="#9CA3AF" className="w-full bg-white dark:bg-[#0A0A0A] border border-gray-200 dark:border-white/10 rounded-xl px-4 py-3 mb-4 text-gray-900 dark:text-white" />

                <Text className="text-xs font-semibold text-gray-500 mb-2 ml-1">Email</Text>
                <TextInput placeholder="Email" placeholderTextColor="#9CA3AF" className="w-full bg-white dark:bg-[#0A0A0A] border border-gray-200 dark:border-white/10 rounded-xl px-4 py-3 mb-4 text-gray-900 dark:text-white" />

                <Text className="text-xs font-semibold text-gray-500 mb-2 ml-1">Email Confrim</Text>
                <TextInput placeholder="Email Confrim" placeholderTextColor="#9CA3AF" className="w-full bg-white dark:bg-[#0A0A0A] border border-gray-200 dark:border-white/10 rounded-xl px-4 py-3 mb-6 text-gray-900 dark:text-white" />

                <View className="flex-row gap-4 mb-2">
                    <TouchableOpacity className="flex-1 bg-[#1E50FF] py-3.5 rounded-full items-center shadow-md">
                        <Text className="text-white font-bold">Save</Text>
                    </TouchableOpacity>
                    <TouchableOpacity className="flex-1 bg-gray-200 dark:bg-gray-800 py-3.5 rounded-full items-center" onPress={() => setActiveMethod(null)}>
                        <Text className="text-gray-900 dark:text-white font-bold">Cancel</Text>
                    </TouchableOpacity>
                </View>
            </View>
        )}

        {/* Credit Card */}
        <TouchableOpacity 
            onPress={() => setActiveMethod(activeMethod === 'card' ? null : 'card')}
            className={`p-4 rounded-2xl mb-4 flex-row items-center border ${getMethodStyle('card')}`}
        >
            <View className="w-10 h-10 rounded-full justify-center items-center mr-4 bg-[#FF5F00]/10">
                <View className="flex-row items-center w-6 h-6">
                    <View className="w-4 h-4 bg-[#EB001B] rounded-full absolute left-0 opacity-90"></View>
                    <View className="w-4 h-4 bg-[#F79E1B] rounded-full absolute right-0 opacity-90"></View>
                </View>
            </View>
            <View className="flex-1">
                <Text className="text-gray-900 dark:text-white font-bold text-base">Creadit Card</Text>
                <Text className="text-gray-500 text-sm mt-0.5">xxx-4374-239B-00</Text>
            </View>
            {getRadioStyle('card')}
        </TouchableOpacity>

        {/* Credit Card Form */}
        {activeMethod === 'card' && (
            <View className="bg-white dark:bg-[#1C1C1E] p-6 rounded-3xl mb-6 border border-gray-100 dark:border-white/5 shadow-sm">
                <Text className="text-lg font-bold text-gray-900 dark:text-white mb-6 text-center">Creadit Card</Text>
                
                <Text className="text-xs font-semibold text-gray-500 mb-2 ml-1">Business Name</Text>
                <TextInput placeholder="Frist Name" placeholderTextColor="#9CA3AF" className="w-full bg-white dark:bg-[#0A0A0A] border border-gray-200 dark:border-white/10 rounded-xl px-4 py-3 mb-4 text-gray-900 dark:text-white" />

                <Text className="text-xs font-semibold text-gray-500 mb-2 ml-1">Name Card</Text>
                <TextInput placeholder="Email" placeholderTextColor="#9CA3AF" className="w-full bg-white dark:bg-[#0A0A0A] border border-gray-200 dark:border-white/10 rounded-xl px-4 py-3 mb-4 text-gray-900 dark:text-white" />

                <Text className="text-xs font-semibold text-gray-500 mb-2 ml-1">Expiry</Text>
                <TextInput placeholder="06/24" placeholderTextColor="#9CA3AF" className="w-full bg-white dark:bg-[#0A0A0A] border border-gray-200 dark:border-white/10 rounded-xl px-4 py-3 mb-4 text-gray-900 dark:text-white" />

                <Text className="text-xs font-semibold text-gray-500 mb-2 ml-1">Card Number</Text>
                <TextInput placeholder="123 0086 098236 1862" keyboardType="number-pad" placeholderTextColor="#9CA3AF" className="w-full bg-white dark:bg-[#0A0A0A] border border-gray-200 dark:border-white/10 rounded-xl px-4 py-3 mb-4 text-gray-900 dark:text-white" />

                <Text className="text-xs font-semibold text-gray-500 mb-2 ml-1">CVV</Text>
                <TextInput placeholder="06/24" keyboardType="number-pad" placeholderTextColor="#9CA3AF" className="w-full bg-white dark:bg-[#0A0A0A] border border-gray-200 dark:border-white/10 rounded-xl px-4 py-3 mb-6 text-gray-900 dark:text-white" />

                <View className="flex-row gap-4 mb-2">
                    <TouchableOpacity className="flex-1 bg-[#1E50FF] py-3.5 rounded-full items-center shadow-md">
                        <Text className="text-white font-bold">Save</Text>
                    </TouchableOpacity>
                    <TouchableOpacity className="flex-1 bg-gray-200 dark:bg-gray-800 py-3.5 rounded-full items-center" onPress={() => setActiveMethod(null)}>
                        <Text className="text-gray-900 dark:text-white font-bold">Cancel</Text>
                    </TouchableOpacity>
                </View>
            </View>
        )}

        {/* Banking Method */}
        <TouchableOpacity 
            className={`p-4 rounded-2xl mb-4 flex-row items-center border ${getMethodStyle('bank')}`}
            onPress={() => setActiveMethod(activeMethod === 'bank' ? null : 'bank')}
        >
            <View className="w-10 h-10 rounded-full justify-center items-center mr-4 bg-[#FF8C00]/10">
                <Text className="text-[#FF8C00] font-black text-xl">🏦</Text>
            </View>
            <View className="flex-1">
                <Text className="text-gray-900 dark:text-white font-bold text-base">Banking Method</Text>
                <Text className="text-gray-500 text-sm mt-0.5">xxx-4374-2398-00</Text>
            </View>
            {getRadioStyle('bank')}
        </TouchableOpacity>
        
      </ScrollView>
    </SafeAreaView>
  );
}
