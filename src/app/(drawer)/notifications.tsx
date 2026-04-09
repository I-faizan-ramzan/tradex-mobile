import { ScreenHeader } from "@/components/profile/ScreenHeader";
import { useDrawer } from "@/hooks/use-drawer";
import { router } from "expo-router";
import { SafeAreaView } from "react-native-safe-area-context";

export default function NotificationsScreen() {
  const { openDrawer } = useDrawer();
  return (
    <SafeAreaView>
      <ScreenHeader
        leftIcon={{ type: "fontawesome", name: "angle-left" }}
        title="Notifications"
        rightIcon={{ type: "ionicons", name: "menu-outline" }}
        onRightPress={openDrawer}
        onLeftPress={() => router.back()}
      />
    </SafeAreaView>
  );
}
