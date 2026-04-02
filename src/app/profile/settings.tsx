import { FormButton } from "@/components/inputs/FormButton";
import { FormInput } from "@/components/inputs/FormInput";
import { ScreenHeader } from "@/components/profile/ScreenHeader";
import { useTheme } from "@/hooks/use-theme";
import { Feather } from "@expo/vector-icons";
import { router } from "expo-router";
import { Image, ScrollView, Text, TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
const SlidersHorizontal = (props: any) => <Feather name="sliders" {...props} />;

export default function ProfileSettingsScreen() {
  const { isDark } = useTheme();

  return (
    <SafeAreaView className="flex-1 bg-white dark:bg-dark-background">
      <ScreenHeader
        leftIcon={{ type: "fontawesome", name: "angle-left" }}
        title="Profile Setting"
        rightIcon={{ type: "ionicons", name: "menu-outline" }}
        onRightPress={() => router.push("/(tabs)/profile")}
        onLeftPress={() => router.back()}
      />
      <ScrollView className="flex-1 px-5 mt-4">
        {/* Profile Header Block */}
        <View className="items-center mb-8 mt-4">
          <Image
            source={require("@/assets/images/avatar.jpg")}
            className="w-24 h-24 rounded-full mb-4 border border-white/10"
          />
          <TouchableOpacity className="bg-accent px-10 p-4 rounded-full mb-4 shadow-sm">
            <Text className="text-white text-xs font-bold">Change Photo</Text>
          </TouchableOpacity>
          <Text className="text-gray-900 dark:text-white font-bold text-xl mb-1">
            John Wekintem
          </Text>
          <Text className="text-gray-500 font-medium mb-1">
            Johnwekintem@email.com
          </Text>
          <Text className="text-gray-500 font-medium">+00742874082328</Text>
        </View>

        {/* Input Form Block */}
        <View className="bg-surface dark:bg-[#1C1C1E] p-6 rounded-3xl mb-10 shadow-sm border border-gray-100 dark:border-white/5">
          <Text className="text-gray-900 dark:text-white font-bold text-xl mb-6 text-center">
            Profile Setting
          </Text>

          <View className="mb-4">
            <FormInput label="First Name" placeholder="First Name" />
            <FormInput label="Last Name" placeholder="Last Name" />
            <FormInput label="Username" placeholder="Username" />
            <FormInput
              label="Email"
              placeholder="Email"
              keyboardType="email-address"
              autoCapitalize="none"
            />
            <FormInput
              label="Phone Number"
              placeholder="Phone Number"
              keyboardType="phone-pad"
            />
          </View>
          <View className="gap-4 pb-10">
            <View className="gap-4 pb-10">
              <FormButton
                label="Save"
                variant="primary"
                onPress={() => router.push("/(tabs)")}
              />
              <FormButton
                label="Cancel"
                variant="secondary"
                onPress={() => router.back()}
              />
            </View>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
