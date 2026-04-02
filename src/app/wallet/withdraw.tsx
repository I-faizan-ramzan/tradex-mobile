import { ScreenHeader } from "@/components/profile/ScreenHeader";
import { router } from "expo-router";
import { Text, TextInput, TouchableOpacity, View, ScrollView, Modal, Image } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useTheme } from "@/hooks/use-theme";
import { Feather } from "@expo/vector-icons";
import { useState } from "react";

const getMethodDetails = (method: string) => {
  switch (method) {
    case 'paypal': return { name: 'Paypal', logo: 'https://www.google.com/s2/favicons?sz=128&domain=paypal.com' };
    case 'creditcard': return { name: 'Credit Card', logo: 'https://www.google.com/s2/favicons?sz=128&domain=mastercard.com' };
    case 'bank': return { name: 'Bank Transfer', logo: 'https://www.google.com/s2/favicons?sz=128&domain=bankofamerica.com' };
    default: return { name: 'Paypal', logo: 'https://www.google.com/s2/favicons?sz=128&domain=paypal.com' };
  }
};

export default function WithdrawScreen() {
  const { isDark } = useTheme();
  const [showModal, setShowModal] = useState(false);
  const [selectedMethod, setSelectedMethod] = useState("paypal");

  return (
    <SafeAreaView className="flex-1 bg-white dark:bg-dark-background">
      <ScreenHeader
        leftIcon={{ type: "fontawesome", name: "angle-left" }}
        title="Witdraw"
        rightIcon={{ type: "ionicons", name: "menu-outline" }}
        onRightPress={() => console.log("menu")}
        onLeftPress={() => router.back()}
      />
      <ScrollView className="flex-1 px-5 pt-4">
        <View className="flex-row justify-between mb-2">
            <Text className="text-gray-900 dark:text-white font-semibold text-lg">Amount to Withdraw</Text>
            <Text className="text-gray-500 font-medium">Avail: $1,050</Text>
        </View>
        <View className="flex-row items-center bg-surface dark:bg-dark-card rounded-2xl p-4 border border-gray-100 dark:border-white/5 shadow-sm dark:shadow-none mb-6">
          <Text className="text-2xl text-gray-900 dark:text-white font-bold mr-2">$</Text>
          <TextInput 
            placeholder="0.00"
            keyboardType="numeric"
            placeholderTextColor={isDark ? "#6B7280" : "#9CA3AF"}
            className="flex-1 text-2xl text-gray-900 dark:text-white font-bold"
          />
        </View>

        {/* Withdraw Target Element (Matching screenshot exactly) */}
        <View className="flex-row items-center justify-between p-5 bg-white dark:bg-[#1C1C1E] rounded-[24px] mb-8 mt-2 border border-gray-100 dark:border-white/5 shadow-sm dark:shadow-none">
           <View className="flex-row items-center">
              <View className="mr-4 w-10 h-10 rounded-full items-center justify-center bg-gray-50 dark:bg-black/20 overflow-hidden">
                  <Image source={{ uri: getMethodDetails(selectedMethod).logo }} className="w-6 h-6" style={{width: 24, height: 24}} resizeMode="contain" />
              </View>
              <Text className="text-gray-900 dark:text-white font-bold text-[17px]">
                  {getMethodDetails(selectedMethod).name}
              </Text>
           </View>
           
           <TouchableOpacity onPress={() => setShowModal(true)} className="flex-row items-center border border-gray-300 dark:border-gray-600 rounded-full px-4 py-1.5">
               <Text className="text-gray-900 dark:text-white font-medium text-[13px] mr-1.5">Change</Text>
               <Feather name="chevron-down" size={16} color={isDark ? "#A1A1aa" : "#52525B"} />
           </TouchableOpacity>
        </View>

      </ScrollView>
      <View className="p-5 border-t border-gray-100 dark:border-white/5">
        <TouchableOpacity className="w-full py-4 rounded-full bg-primary dark:bg-white items-center shadow-lg">
          <Text className="text-white dark:text-black font-bold text-lg">Confirm Withdraw</Text>
        </TouchableOpacity>
      </View>

      {/* Payment Selection Modal */}
      <Modal visible={showModal} transparent animationType="slide">
        <View className="flex-1 bg-black/50 justify-end">
          <View className="bg-white dark:bg-[#1C1C1E] rounded-t-[32px] p-6 pb-10">
            <View className="flex-row justify-between items-center mb-6">
              <Text className="text-xl font-bold text-gray-900 dark:text-white">Select Method</Text>
              <TouchableOpacity onPress={() => setShowModal(false)} className="p-2 bg-gray-100 dark:bg-white/5 rounded-full">
                <Feather name="x" size={20} color={isDark ? "white" : "black"} />
              </TouchableOpacity>
            </View>

            <TouchableOpacity 
              onPress={() => { setSelectedMethod('paypal'); setShowModal(false); }}
              className={`p-4 rounded-2xl mb-4 flex-row items-center border ${selectedMethod === 'paypal' ? 'border-[#1E50FF] bg-[#EDF2FF] dark:bg-[#1E50FF]/20' : 'border-gray-100 dark:border-white/5 bg-surface dark:bg-[#2C2C2E]'}`}
            >
              <View className="mr-4 w-10 h-10 rounded-full items-center justify-center bg-gray-50 dark:bg-black/20 overflow-hidden">
                  <Image source={{ uri: getMethodDetails('paypal').logo }} className="w-6 h-6" style={{width: 24, height: 24}} resizeMode="contain" />
              </View>
              <Text className="flex-1 text-gray-900 dark:text-white font-bold text-base">Paypal</Text>
              {selectedMethod === 'paypal' && <View className="w-5 h-5 rounded-full border-2 border-[#1E50FF] items-center justify-center"><View className="w-2.5 h-2.5 rounded-full bg-[#1E50FF]"></View></View>}
            </TouchableOpacity>

            <TouchableOpacity 
              onPress={() => { setSelectedMethod('creditcard'); setShowModal(false); }}
              className={`p-4 rounded-2xl mb-4 flex-row items-center border ${selectedMethod === 'creditcard' ? 'border-[#1E50FF] bg-[#EDF2FF] dark:bg-[#1E50FF]/20' : 'border-gray-100 dark:border-white/5 bg-surface dark:bg-[#2C2C2E]'}`}
            >
              <View className="mr-4 w-10 h-10 rounded-full items-center justify-center bg-gray-50 dark:bg-black/20 overflow-hidden">
                  <Image source={{ uri: getMethodDetails('creditcard').logo }} className="w-6 h-6" style={{width: 24, height: 24}} resizeMode="contain" />
              </View>
              <Text className="flex-1 text-gray-900 dark:text-white font-bold text-base">Credit Card</Text>
              {selectedMethod === 'creditcard' && <View className="w-5 h-5 rounded-full border-2 border-[#1E50FF] items-center justify-center"><View className="w-2.5 h-2.5 rounded-full bg-[#1E50FF]"></View></View>}
            </TouchableOpacity>

            <TouchableOpacity 
              onPress={() => { setSelectedMethod('bank'); setShowModal(false); }}
              className={`p-4 rounded-2xl mb-4 flex-row items-center border ${selectedMethod === 'bank' ? 'border-[#1E50FF] bg-[#EDF2FF] dark:bg-[#1E50FF]/20' : 'border-gray-100 dark:border-white/5 bg-surface dark:bg-[#2C2C2E]'}`}
            >
              <View className="mr-4 w-10 h-10 rounded-full items-center justify-center bg-gray-50 dark:bg-black/20 overflow-hidden">
                  <Image source={{ uri: getMethodDetails('bank').logo }} className="w-6 h-6" style={{width: 24, height: 24}} resizeMode="contain" />
              </View>
              <Text className="flex-1 text-gray-900 dark:text-white font-bold text-base">Bank Transfer</Text>
              {selectedMethod === 'bank' && <View className="w-5 h-5 rounded-full border-2 border-[#1E50FF] items-center justify-center"><View className="w-2.5 h-2.5 rounded-full bg-[#1E50FF]"></View></View>}
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    </SafeAreaView>
  );
}
