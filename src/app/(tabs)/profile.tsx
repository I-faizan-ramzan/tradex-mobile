import { TabHeader } from "@/components/basic/TabHeader";
import { ProfileHeader } from "@/components/profile/ProfileHeader";
import { SettingsList } from "@/components/profile/SettingsList";

import { useTheme } from "@/hooks/use-theme";
import { router } from "expo-router";
import { CreditCard, HelpCircle, Lock, User } from "lucide-react-native";
import { useState } from "react";
import { Modal, Text, TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const SETTINGS = [
  { label: "Profile Setting", icon: User, route: "/profile/settings" },
  { label: "Payment Method", icon: CreditCard, route: "/profile/payment" },
  { label: "Security", icon: Lock, route: "/profile/security" },
  { label: "Help And Support", icon: HelpCircle, route: "/profile/support" },
];

export default function ProfileScreen() {
  const { isDark } = useTheme();
  const [showLogoutModal, setShowLogoutModal] = useState(false);

  const handleLogOut = () => {
    setShowLogoutModal(false);
    // clear auth state here if you have it
    router.replace("/(auth)/welcome");
  };

  return (
    <SafeAreaView className="flex-1 bg-white dark:bg-dark-background">
      {/* Header */}

      <TabHeader
        title="Profile"
        onRightPress={() => router.push("/(tabs)")}
        iconName={"close-outline"}
        color="red"
      />
      {/* Avatar + info */}
      <ProfileHeader
        avatarUrl={require("@/assets/images/avatar.jpg")}
        name="Johan Wekitem"
        email="Johanwekitem@email.com"
        phone="+00742874082328"
      />

      {/* Settings */}
      <View className=" bg-card dark:bg-dark-card rounded-2xl border border-gray-100 dark:border-white/5 overflow-hidden shadow-md dark:shadow-none mx-5">
        <SettingsList
          title="Settings"
          onLogoutPress={() => setShowLogoutModal(true)}
        />
      </View>

      {/* Logout Modal */}
      <Modal visible={showLogoutModal} transparent animationType="fade">
        <View className="flex-1 bg-black/40 justify-center items-center">
          <View className="bg-white dark:bg-[#1C1C1E] w-[85%] rounded-3xl p-6 items-center shadow-lg">
            <Text className="text-xl font-bold text-gray-900 dark:text-white mb-4 mt-2">
              Log Out
            </Text>
            <Text className="text-gray-500 mb-8 text-center text-[15px]">
              Are you sure you want to leave
            </Text>

            <TouchableOpacity
              className="w-[90%] bg-[#1E50FF] py-3.5 rounded-full items-center mb-4"
              onPress={handleLogOut}
            >
              <Text className="text-white font-bold text-[15px]">Yes</Text>
            </TouchableOpacity>

            <TouchableOpacity
              className="w-[90%] bg-gray-200 dark:bg-[#2C2C2E] py-3.5 rounded-full items-center mb-2"
              onPress={() => setShowLogoutModal(false)}
            >
              <Text className="text-gray-900 dark:text-white font-bold text-[15px]">
                No
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    </SafeAreaView>
  );
}
