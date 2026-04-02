import { ScreenHeader } from "@/components/profile/ScreenHeader";
import { useTheme } from "@/hooks/use-theme";
import { Feather } from "@expo/vector-icons";
import { router } from "expo-router";
import { View, Text, TouchableOpacity } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function ProfileSupportScreen() {
  const { isDark } = useTheme();

  return (
    <SafeAreaView className="flex-1 bg-white dark:bg-dark-background">
      <ScreenHeader
        leftIcon={{ type: "fontawesome", name: "angle-left" }}
        title="Help and Support"
        rightIcon={{ type: "ionicons", name: "menu-outline" }}
        onRightPress={() => console.log("Pressed")}
        onLeftPress={() => router.back()}
      />
      <View className="flex-1 px-5 mt-4">
         <View className="bg-surface dark:bg-dark-card p-4 rounded-2xl shadow-sm border border-gray-100 dark:border-white/5 mb-6">
            <Text className="text-gray-900 dark:text-white font-bold text-lg mb-2">How can we help?</Text>
            <Text className="text-gray-500 mb-4">Search our knowledge base or get in touch with a specialist.</Text>
            <TouchableOpacity className="bg-primary dark:bg-white w-full rounded-full py-3 items-center">
              <Text className="text-white dark:text-black font-bold">Contact Support</Text>
            </TouchableOpacity>
         </View>

         <Text className="text-gray-900 dark:text-white font-bold text-lg mb-4">Frequently Asked Questions</Text>
         {[
           "How long do withdrawals take?",
           "Why did my deposit fail?",
           "How are trading fees calculated?",
           "What are margin requirements?"
         ].map(q => (
             <TouchableOpacity key={q} className="flex-row justify-between items-center py-4 border-b border-gray-100 dark:border-white/5">
                <Text className="text-gray-900 dark:text-white font-medium">{q}</Text>
                <Feather name="chevron-right" size={20} color={isDark ? "#9ca3af" : "#6b7280"} />
             </TouchableOpacity>
         ))}
      </View>
    </SafeAreaView>
  );
}
