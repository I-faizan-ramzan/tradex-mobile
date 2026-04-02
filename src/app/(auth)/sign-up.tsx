import { useTheme } from "@/hooks/use-theme";
import { FontAwesome } from "@expo/vector-icons";
import { router } from "expo-router";
import { useState } from "react";
import {
  ScrollView,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
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
        <View className="mb-4">
          <Text className="text-sm text-gray-500 dark:text-gray-300 mb-2 ml-1">
            First Name
          </Text>
          <TextInput
            placeholder="First Name"
            placeholderTextColor="#6B7280"
            className="w-full bg-gray-50 dark:bg-[#131313] border border-gray-200 dark:border-white/5 rounded-xl px-4 py-3.5 text-gray-900 dark:text-white"
          />
        </View>
        <View className="mb-4">
          <Text className="text-sm text-gray-500 dark:text-gray-300 mb-2 ml-1">
            Last Name
          </Text>
          <TextInput
            placeholder="Last Name"
            placeholderTextColor="#6B7280"
            className="w-full bg-gray-50 dark:bg-[#131313] border border-gray-200 dark:border-white/5 rounded-xl px-4 py-3.5 text-gray-900 dark:text-white"
          />
        </View>
        <View className="mb-4">
          <Text className="text-sm text-gray-500 dark:text-gray-300 mb-2 ml-1">
            Username
          </Text>
          <TextInput
            placeholder="Username"
            placeholderTextColor="#6B7280"
            className="w-full bg-gray-50 dark:bg-[#131313] border border-gray-200 dark:border-white/5 rounded-xl px-4 py-3.5 text-gray-900 dark:text-white"
          />
        </View>
        <View className="mb-4">
          <Text className="text-sm text-gray-500 dark:text-gray-300 mb-2 ml-1">
            Email
          </Text>
          <TextInput
            placeholder="Email"
            placeholderTextColor="#6B7280"
            className="w-full bg-gray-50 dark:bg-[#131313] border border-gray-200 dark:border-white/5 rounded-xl px-4 py-3.5 text-gray-900 dark:text-white"
          />
        </View>
        <View className="mb-4">
          <Text className="text-sm text-gray-500 dark:text-gray-300 mb-2 ml-1">
            Phone Number
          </Text>
          <View className="w-full bg-gray-50 dark:bg-[#131313] border border-gray-200 dark:border-white/5 rounded-xl flex-row items-center px-4 py-1">
            <Text className="text-gray-900 dark:text-white font-bold mr-4 my-2.5">
              +1
            </Text>
            <TextInput
              placeholder="Input text"
              placeholderTextColor="#6B7280"
              className="flex-1 text-gray-900 dark:text-white py-2.5"
              keyboardType="phone-pad"
            />
          </View>
        </View>
        <View className="mb-4">
          <Text className="text-sm text-gray-500 dark:text-gray-300 mb-2 ml-1">
            Password
          </Text>
          <TextInput
            placeholder="Password"
            secureTextEntry
            placeholderTextColor="#6B7280"
            className="w-full bg-gray-50 dark:bg-[#131313] border border-gray-200 dark:border-white/5 rounded-xl px-4 py-3.5 text-gray-900 dark:text-white"
          />
        </View>
        <View className="mb-6">
          <Text className="text-sm text-gray-500 dark:text-gray-300 mb-2 ml-1">
            Confirm Password
          </Text>
          <TextInput
            placeholder="Confirm Password"
            secureTextEntry
            placeholderTextColor="#6B7280"
            className="w-full bg-gray-50 dark:bg-[#131313] border border-gray-200 dark:border-white/5 rounded-xl px-4 py-3.5 text-gray-900 dark:text-white"
          />
        </View>

        {/* Terms agreement */}
        <TouchableOpacity
          className="flex-row items-center justify-center mb-8"
          onPress={() => setAgree(!agree)}
        >
          <Text className="text-gray-500 dark:text-gray-300 text-sm mr-3 flex-shrink">
            I agree to all Term, Privacy Policy and fees
          </Text>
          <View className="w-5 h-5 rounded-full border border-gray-400 items-center justify-center bg-white flex-shrink-0">
            {agree && <View className="w-3 h-3 rounded-full bg-black" />}
          </View>
        </TouchableOpacity>

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
