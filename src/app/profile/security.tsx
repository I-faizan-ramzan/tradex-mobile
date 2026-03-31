import { ProfileHeader } from "@/components/profile/ProfileHeader";
import { ScreenHeader } from "@/components/profile/ScreenHeader";
import { useTheme } from "@/hooks/use-theme";
import { router } from "expo-router";
import { Feather } from "@expo/vector-icons";
const ChevronLeft = (props: any) => <Feather name="chevron-left" {...props} />;
const SlidersHorizontal = (props: any) => <Feather name="sliders" {...props} />;
import { SafeAreaView } from "react-native-safe-area-context";

export default function ProfileSecurityScreen() {
  const { isDark } = useTheme();

  return (
    <SafeAreaView className="flex-1 bg-white dark:bg-dark-background">
      <ScreenHeader
        leftIcon={ChevronLeft}
        title="Security"
        rightIcon={SlidersHorizontal}
        onRightPress={() => console.log("Pressed")}
        onLeftPress={() => router.back()}
      />
      {/* build out content here */}
      <ProfileHeader
        name="John Wekintem"
        email="john@email.com"
        phone="+123456789"
        showChangePhoto={true}
        onChangePhotoPress={() => console.log("Change Photo")}
      />
    </SafeAreaView>
  );
}
