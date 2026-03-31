import { ProfileHeader } from "@/components/profile/ProfileHeader";
import { ScreenHeader } from "@/components/profile/ScreenHeader";
import { useTheme } from "@/hooks/use-theme";
import { router } from "expo-router";
import { Feather } from "@expo/vector-icons";
const ChevronRight = (props: any) => <Feather name="circle" {...props} />;
const CreditCard = (props: any) => <Feather name="circle" {...props} />;
const HelpCircle = (props: any) => <Feather name="circle" {...props} />;
const Lock = (props: any) => <Feather name="circle" {...props} />;
const LogOut = (props: any) => <Feather name="circle" {...props} />;
const SlidersHorizontal = (props: any) => <Feather name="sliders" {...props} />;
const User = (props: any) => <Feather name="user" {...props} />;
import { Pressable, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const SETTINGS = [
  { label: "Profile Setting", icon: User, route: "/profile/settings" },
  { label: "Payment Method", icon: CreditCard, route: "/profile/payment" },
  { label: "Security", icon: Lock, route: "/profile/security" },
  { label: "Help And Support", icon: HelpCircle, route: "/profile/support" },
];

export default function ProfileScreen() {
  const { isDark } = useTheme();

  const handleLogOut = () => {
    // clear auth state here if you have it
    router.replace("/(tabs)");
  };

  return (
    <SafeAreaView className="flex-1 bg-white dark:bg-dark-background">
      {/* Header */}
      <ScreenHeader
        title="Profile"
        rightIcon={SlidersHorizontal}
        onRightPress={() => console.log("Pressed")}
      />

      {/* Avatar + info */}
      <ProfileHeader
        name="John Wekintem"
        email="Johnwekintem@email.com"
        phone="+00742874082328"
      />

      {/* Settings */}
      <View className="px-5">
        <Text className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
          Settings
        </Text>
        <View className="bg-surface dark:bg-dark-card rounded-2xl border border-gray-100 dark:border-white/5 overflow-hidden">
          {SETTINGS.map((item, i) => {
            const Icon = item.icon;
            return (
              <Pressable
                key={item.label}
                onPress={() => router.push(item.route as any)}
                className="flex-row items-center px-4 py-4"
                style={{
                  borderBottomWidth: i < SETTINGS.length - 1 ? 0.5 : 0,
                  borderBottomColor: isDark
                    ? "rgba(255,255,255,0.06)"
                    : "rgba(0,0,0,0.06)",
                }}
              >
                <View className="w-8 h-8 rounded-lg bg-accent/10 items-center justify-center mr-3">
                  <Icon size={16} color="#4f8ef7" strokeWidth={1.6} />
                </View>
                <Text className="flex-1 text-sm font-medium text-gray-900 dark:text-white">
                  {item.label}
                </Text>
                <ChevronRight
                  size={16}
                  color={isDark ? "#6b7280" : "#9ca3af"}
                  strokeWidth={1.6}
                />
              </Pressable>
            );
          })}
          <Pressable
            onPress={handleLogOut}
            className="flex-row items-center px-4 py-4 mt-3 bg-surface dark:bg-dark-card rounded-2xl border border-gray-100 dark:border-white/5"
          >
            <View className="w-8 h-8 rounded-lg bg-loss/10 items-center justify-center mr-3">
              <LogOut size={16} color="#ff5252" strokeWidth={1.6} />
            </View>
            <Text className="flex-1 text-sm font-medium text-loss">
              Log Out
            </Text>
            <ChevronRight size={16} color="#ff5252" strokeWidth={1.6} />
          </Pressable>
        </View>

        {/* Log Out — separate card */}
      </View>
    </SafeAreaView>
  );
}
