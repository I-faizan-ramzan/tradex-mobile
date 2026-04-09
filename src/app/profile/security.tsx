import { FormButton } from "@/components/inputs/FormButton";
import { FormInput } from "@/components/inputs/FormInput";
import { ScreenHeader } from "@/components/profile/ScreenHeader";
import { useDrawer } from "@/hooks/use-drawer";
import { useTheme } from "@/hooks/use-theme";
import { router } from "expo-router";
import { Image, ScrollView, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function ProfileSecurityScreen() {
  const { isDark } = useTheme();
  const { openDrawer } = useDrawer();
  return (
    <SafeAreaView className="flex-1 bg-white dark:bg-dark-background">
      <ScreenHeader
        leftIcon={{ type: "fontawesome", name: "angle-left" }}
        title="Security"
        rightIcon={{ type: "ionicons", name: "menu-outline" }}
        onRightPress={openDrawer}
        onLeftPress={() => router.back()}
      />
      <ScrollView className="flex-1 px-5 mt-4">
        {/* Profile Header Block */}
        <View className="items-center mb-8 mt-4">
          <Image
            source={require("@/assets/images/avatar.jpg")}
            className="w-24 h-24 rounded-full mb-4 border border-white/10"
          />
          <FormButton
            label="Change Photo"
            variant="primary"
            className="w-1/2 py-3 my-3"
            onPress={() => console.log("change photo")}
          />
          <Text className="text-gray-900 dark:text-white font-bold text-xl mb-1">
            John Wekintem
          </Text>
          <Text className="text-gray-500 font-medium mb-1">
            Johnwekintem@email.com
          </Text>
          <Text className="text-gray-500 font-medium">+00742874082328</Text>
        </View>

        {/* Input Form Block */}
        <View className="bg-surface dark:bg-[#1C1C1E] p-6 rounded-3xl mb-6 shadow-sm border border-gray-100 dark:border-white/5">
          <Text className="text-gray-900 dark:text-white font-bold text-xl mb-6 text-center">
            Help and Suppport
          </Text>

          <FormInput
            label="Email"
            placeholder="Email"
            keyboardType="email-address"
            autoCapitalize="none"
          />

          <FormInput label="Password" placeholder="Password" secureTextEntry />

          <FormInput
            label="Message"
            placeholder="Place your text here"
            multiline
            numberOfLines={4}
            className="w-full h-32 bg-white dark:bg-[#0A0A0A] border border-gray-100 dark:border-white/10 rounded-xl px-4 py-3 text-gray-900 dark:text-white"
            textAlignVertical="top"
          />

          <View className="gap-4  my-10">
            <FormButton
              label="Save"
              variant="primary"
              onPress={() => router.push("/(drawer)/(tabs)")}
              className="py-4"
            />
            <FormButton
              label="Cancel"
              variant="secondary"
              onPress={() => router.back()}
              className="py-4"
            />
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
