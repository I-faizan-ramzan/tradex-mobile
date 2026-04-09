import { FormInput } from "@/components/inputs/FormInput";
import { useTheme } from "@/hooks/use-theme";
import { FontAwesome } from "@expo/vector-icons";
import { router } from "expo-router";
import { useState } from "react";
import { ScrollView, Text, TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function SignUpScreen() {
  const [agree, setAgree] = useState(false);
  const { isDark } = useTheme();

  return (
    <SafeAreaView className="flex-1 bg-white dark:bg-[#0A0A0A]">
      <ScrollView
        className="flex-1 px-6 pt-6"
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ paddingBottom: 40 }}
      >
        <Text className="text-gray-900 dark:text-white text-3xl font-bold mb-8">
          Sign Up
        </Text>

        {/* Form Fields */}
        <FormInput label="First Name" placeholder="First Name" />
        <FormInput label="Last Name" placeholder="Last Name" />
        <FormInput label="Username" placeholder="Username" />
        <FormInput label="Email" placeholder="Email" />

        <FormInput label="Phone Number" placeholder="Phone Number" />
        <FormInput label="Password" placeholder="Password" secureTextEntry />
        <FormInput
          label="Confirm Password"
          placeholder="Confirm Password"
          secureTextEntry
        />

        {/* Terms agreement */}
        <View className="flex-row items-center justify-center mb-8">
          <Text className="text-gray-500 dark:text-gray-300 text-sm mr-3">
            I agree to all Term, Privacy Policy and fees
          </Text>
          <TouchableOpacity
            onPress={() => setAgree(!agree)}
            className="w-5 h-5 rounded-full border border-gray-400 items-center justify-center bg-white"
          >
            {agree && <View className="w-3 h-3 rounded-full bg-black" />}
          </TouchableOpacity>
        </View>

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
          <View className="flex-row justify-center mt-6">
            <Text className="text-gray-500 dark:text-gray-300 text-sm">
              Already have an account?{" "}
            </Text>
            <TouchableOpacity onPress={() => router.push("/(auth)/login")}>
              <Text className="text-[#1E50FF] text-sm font-semibold">
                Login
              </Text>
            </TouchableOpacity>
          </View>
        </View>

        <View className="flex-row gap-4 mt-2">
          <TouchableOpacity
            className="flex-1 bg-[#1DB954] py-4 rounded-full items-center shadow-lg"
            onPress={() => router.replace("/(auth)/login")}
          >
            <Text className="text-white font-semibold">Sign Up</Text>
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
