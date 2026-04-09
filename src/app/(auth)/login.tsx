import { FormInput } from "@/components/inputs/FormInput";
import { useTheme } from "@/hooks/use-theme";
import { FontAwesome } from "@expo/vector-icons";
import { router } from "expo-router";
import { useState } from "react";
import { ScrollView, Text, TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function LoginScreen() {
  const [agree, setAgree] = useState(false);
  const { isDark } = useTheme();

  return (
    <SafeAreaView className="flex-1 bg-white dark:bg-[#0A0A0A]">
      <ScrollView
        className="flex-1 px-6 pt-10"
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ paddingBottom: 40 }}
      >
        <Text className="text-gray-900 dark:text-white text-3xl font-bold mb-10 text-center">
          Login
        </Text>

        {/* Inputs */}
        <FormInput label="Username" placeholder="Username" />
        <FormInput label="Email" placeholder="Email" />
        <FormInput label="Password" placeholder="Password" secureTextEntry />

        {/* Terms agreement */}

        {/* Social Buttons */}
        <View className="gap-3 mb-8">
          <TouchableOpacity className="w-full flex-row items-center justify-center py-3.5 rounded-full bg-black dark:bg-[#131313] border border-transparent dark:border-white/10 shadow-sm">
            <FontAwesome
              name="apple"
              size={18}
              color="white"
              style={{ position: "absolute", left: 24 }}
            />
            <Text className="text-white font-semibold text-[15px]">
              Continue with Apple
            </Text>
          </TouchableOpacity>

          <TouchableOpacity className="w-full flex-row items-center justify-center py-3.5 rounded-full bg-white dark:bg-[#F3F4F6] border border-gray-200 dark:border-transparent shadow-sm">
            <FontAwesome
              name="google"
              size={18}
              color="#EA4335"
              style={{ position: "absolute", left: 24 }}
            />
            <Text className="text-gray-900 font-semibold text-[15px]">
              Continue with Google
            </Text>
          </TouchableOpacity>

          <TouchableOpacity className="w-full flex-row items-center justify-center py-3.5 rounded-full bg-[#1877F2] shadow-sm">
            <FontAwesome
              name="facebook"
              size={18}
              color="white"
              style={{ position: "absolute", left: 24 }}
            />
            <Text className="text-white font-semibold text-[15px]">
              Continue with Facebook
            </Text>
          </TouchableOpacity>
        </View>

        {/* Bottom Links */}
        <View className="flex-row justify-center mb-6">
          <Text className="text-gray-500 dark:text-gray-300 text-sm">
            Not have an account?{" "}
          </Text>
          <TouchableOpacity onPress={() => router.push("/(auth)/sign-up")}>
            <Text className="text-[#1E50FF] text-sm font-semibold">
              Register
            </Text>
          </TouchableOpacity>
        </View>

        <View className="flex-row gap-4 mb-4">
          <TouchableOpacity
            className="flex-1 bg-[#1E50FF] py-4 rounded-full items-center shadow-lg"
            onPress={() => router.replace("/(drawer)/(tabs)")}
          >
            <Text className="text-white font-semibold">Login</Text>
          </TouchableOpacity>
          <TouchableOpacity
            className="flex-1 bg-[#2C2C2E] py-4 rounded-full items-center"
            onPress={() => router.back()}
          >
            <Text className="text-white font-semibold">Cancel</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
