import { ScreenHeader } from "@/components/profile/ScreenHeader";
import { router } from "expo-router";
import { Text, TextInput, TouchableOpacity, View, ScrollView, Modal, Image } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useTheme } from "@/hooks/use-theme";
import { CreditCard, Landmark } from "lucide-react-native";
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

export default function DepositScreen() {
  const { isDark } = useTheme();
  const [showModal, setShowModal] = useState(false);
  const [selectedMethod, setSelectedMethod] = useState("paypal");

  return (
    <SafeAreaView className="flex-1 bg-white dark:bg-dark-background">
      <ScreenHeader
        leftIcon={{ type: "fontawesome", name: "angle-left" }}
        title="Deposit Funds"
        onLeftPress={() => router.back()}
      />
      <ScrollView className="flex-1 px-5 pt-4">
        
        {/* Payment Method Selector */}
        <View className="bg-surface dark:bg-[#1C1C1E] rounded-2xl p-4 mb-6 shadow-sm border border-gray-100 dark:border-white/5 flex-row items-center justify-between">
            <View className="flex-row items-center">
                <View className="w-10 h-10 rounded-full mr-3 items-center justify-center bg-gray-50 dark:bg-black/20 overflow-hidden">
                    <Image source={{ uri: getMethodDetails(selectedMethod).logo }} className="w-6 h-6" style={{width: 24, height: 24}} resizeMode="contain" />
                </View>
                <Text className="text-gray-900 dark:text-white font-bold">{getMethodDetails(selectedMethod).name}</Text>
            </View>
            <TouchableOpacity onPress={() => setShowModal(true)} className="border border-gray-300 dark:border-gray-600 rounded-full py-1.5 px-4 flex-row items-center">
                <Text className="text-gray-500 dark:text-gray-300 text-sm font-medium mr-1.5">Change</Text>
                <Feather name="chevron-down" size={16} color={isDark ? "#A1A1aa" : "#52525B"} />
            </TouchableOpacity>
        </View>

        {/* Amount Card */}
        <View className="bg-surface dark:bg-[#1C1C1E] rounded-3xl p-6 shadow-sm border border-gray-100 dark:border-white/5 items-center">
            <Text className="text-gray-500 mb-6 font-medium">Enter Amount In USD</Text>
            <Text className="text-gray-900 dark:text-white text-6xl font-bold mb-6 tracking-tighter">$0</Text>
            
            <Text className="text-gray-500 text-sm mb-4 font-medium">Min $100 - Max $10000</Text>
            <Text className="text-gray-500 font-bold mb-8 text-base">Current Balance: $12.000.00</Text>
            
            {/* Mock slider */}
            <View className="w-full h-2 bg-gray-200 dark:bg-black rounded-full flex-row items-center mb-8">
                <View className="h-3 w-1/2 bg-[#1E50FF] rounded-full"></View>
                <View className="w-5 h-5 rounded-full bg-[#3D6BFF] -ml-2 shadow-sm border-2 border-[#1E50FF]"></View>
            </View>

            {/* Quick amounts */}
            <View className="flex-row gap-4 mb-8 w-full justify-center">
                <TouchableOpacity className="border border-[#1E50FF] rounded-full py-1 px-4 bg-[#1E50FF]/10">
                    <Text className="text-[#1E50FF] font-bold text-sm">$100</Text>
                </TouchableOpacity>
                <TouchableOpacity className="py-1 px-4">
                    <Text className="text-gray-500 font-bold text-sm">$500</Text>
                </TouchableOpacity>
                <TouchableOpacity className="py-1 px-4">
                    <Text className="text-gray-500 font-bold text-sm">$5000</Text>
                </TouchableOpacity>
            </View>

            <TouchableOpacity className="bg-[#1E50FF] w-[80%] py-4 rounded-full items-center shadow-lg">
                <Text className="text-white font-bold text-base">Deposit</Text>
            </TouchableOpacity>
        </View>
      </ScrollView>
      
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
