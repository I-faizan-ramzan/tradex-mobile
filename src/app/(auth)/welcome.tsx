import { router } from "expo-router";
import { Text, TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function WelcomeScreen() {
  return (
    <SafeAreaView className="flex-1 bg-white dark:bg-dark-background justify-between p-6">
      <View className="mt-20">
        <Text className="text-gray-900 dark:text-white text-4xl font-extrabold leading-tight">
          Join the Trading{"\n"}Community,{"\n"}Start Investing{"\n"}Today
        </Text>
      </View>

      <View className="gap-4 pb-10">
        <TouchableOpacity
          className="w-full bg-[#1E50FF] py-4 rounded-full items-center shadow-sm"
          onPress={() => router.push("/(auth)/login")}
        >
          <Text className="text-white font-semibold text-base">Login</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => router.push("/(auth)/sign-up")}
          className="w-full bg-[#1DB954] py-4 rounded-full items-center shadow-sm"
        >
          <Text className="text-white font-semibold text-base">Sign Up</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}
