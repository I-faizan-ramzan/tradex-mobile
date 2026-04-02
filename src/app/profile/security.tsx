import { Feather } from "@expo/vector-icons";
import { router } from "expo-router";
import { View, Text, TextInput, ScrollView, Image, TouchableOpacity } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { ScreenHeader } from "@/components/profile/ScreenHeader";
import { useTheme } from "@/hooks/use-theme";

export default function ProfileSecurityScreen() {
  const { isDark } = useTheme();

  return (
    <SafeAreaView className="flex-1 bg-white dark:bg-dark-background">
      <ScreenHeader
        leftIcon={{ type: "fontawesome", name: "angle-left" }}
        title="Security"
        rightIcon={{ type: "ionicons", name: "menu-outline" }}
        onRightPress={() => console.log("Pressed")}
        onLeftPress={() => router.back()}
      />
      <ScrollView className="flex-1 px-5 mt-4">
        {/* Profile Header Block */}
        <View className="items-center mb-8 mt-4">
            <Image 
                source={{ uri: "https://i.pravatar.cc/150?u=john" }} 
                className="w-24 h-24 rounded-full mb-4 border border-white/10" 
            />
            <TouchableOpacity className="bg-[#1E50FF] px-6 py-2 rounded-full mb-4 shadow-sm">
                <Text className="text-white text-xs font-bold">Change Photo</Text>
            </TouchableOpacity>
            <Text className="text-gray-900 dark:text-white font-bold text-xl mb-1">John Wekintem</Text>
            <Text className="text-gray-500 font-medium mb-1">Johnwekintem@email.com</Text>
            <Text className="text-gray-500 font-medium">+00742874082328</Text>
        </View>

        {/* Input Form Block */}
        <View className="bg-surface dark:bg-[#1C1C1E] p-6 rounded-3xl mb-6 shadow-sm border border-gray-100 dark:border-white/5">
            <Text className="text-gray-900 dark:text-white font-bold text-xl mb-6 text-center">Help and Suppport</Text>
            
            <View className="mb-4">
                <Text className="text-sm text-gray-500 mb-2 ml-1 font-medium">Email</Text>
                <TextInput 
                    placeholder="Email" 
                    placeholderTextColor="#6B7280" 
                    className="w-full bg-white dark:bg-[#0A0A0A] border border-gray-100 dark:border-white/10 rounded-xl px-4 py-3 text-gray-900 dark:text-white" 
                />
            </View>
            <View className="mb-4">
                <Text className="text-sm text-gray-500 mb-2 ml-1 font-medium">Password</Text>
                <TextInput 
                    placeholder="Password" 
                    secureTextEntry
                    placeholderTextColor="#6B7280" 
                    className="w-full bg-white dark:bg-[#0A0A0A] border border-gray-100 dark:border-white/10 rounded-xl px-4 py-3 text-gray-900 dark:text-white" 
                />
            </View>
            <View className="mb-4">
                <TextInput 
                    placeholder="Place your text here" 
                    multiline
                    numberOfLines={4}
                    placeholderTextColor="#6B7280" 
                    className="w-full h-32 bg-white dark:bg-[#0A0A0A] border border-gray-100 dark:border-white/10 rounded-xl px-4 py-3 text-gray-900 dark:text-white pt-3 align-top" 
                />
            </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
