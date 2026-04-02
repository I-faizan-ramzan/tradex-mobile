// src/components/profile/SettingsList.tsx
import { AppIcon } from "@/components/ui/AppIcon";
import { useTheme } from "@/hooks/use-theme";
import { router } from "expo-router";
import { Pressable, Switch, Text, View } from "react-native";

type SettingItem = {
  label: string;
  icon: any; // AppIcon expects string keys from Ionicons
  route?: string;
  isLogout?: boolean;
  isThemeToggle?: boolean;
};

const SETTINGS: SettingItem[] = [
  {
    label: "Profile Setting",
    icon: "person-outline",
    route: "/profile/settings",
  },
  { label: "Payment Method", icon: "card-outline", route: "/profile/payment" },
  {
    label: "Security",
    icon: "lock-closed-outline",
    route: "/profile/security",
  },
  {
    label: "Help And Support",
    icon: "help-circle-outline",
    route: "/profile/support",
  },
  { label: "Dark Mode", icon: "moon-outline", isThemeToggle: true },
  { label: "System Theme Sync", icon: "sync-outline", route: "system_sync" },
  { label: "Log Out", icon: "log-out-outline", isLogout: true },
];

type Props = {
  title: string;
  onLogoutPress?: () => void;
};

export function SettingsList({ title, onLogoutPress }: Props) {
  const { isDark, colorScheme, setColorScheme } = useTheme();

  const handlePress = (item: SettingItem) => {
    if (item.isLogout) {
      if (onLogoutPress) {
        onLogoutPress();
      } else {
        router.replace("/(auth)/welcome");
      }
      return;
    }
    if (item.route) router.push(item.route as any);
  };

  return (
    <View className="px-5 mt-4">
      {/* Title */}
      <Text className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
        {title}
      </Text>

      {/* Card */}
      <View className="bg-white dark:bg-dark-card rounded-2xl border border-gray-100 dark:border-white/5 overflow-hidden shadow-sm dark:shadow-none">
        {SETTINGS.map((item, index) => {
          const isLast = index === SETTINGS.length - 1;
          const borderColor = isDark
            ? "rgba(255,255,255,0.06)"
            : "rgba(0,0,0,0.06)";
          const iconBg = item.isLogout ? "bg-loss/10" : "bg-accent/10";
          const iconColor = item.isLogout ? "#ff5252" : "#4f8ef7";
          const textColor = item.isLogout
            ? "text-loss"
            : "text-gray-900 dark:text-white";
          const chevronColor = item.isLogout
            ? "#ff5252"
            : isDark
              ? "#6b7280"
              : "#9ca3af";

          return (
            <Pressable
              key={item.label}
              onPress={() => {
                if (item.isThemeToggle) {
                  // Handled by the Switch
                } else if (item.route === "system_sync") {
                  setColorScheme("system");
                } else {
                  handlePress(item);
                }
              }}
              className="flex-row items-center px-4 py-4"
              style={{
                borderBottomWidth: !isLast ? 0.5 : 0,
                borderBottomColor: !isLast ? borderColor : undefined,
              }}
            >
              {/* Left Icon */}
              <View className={`w-8 h-8  items-center justify-center mr-3 `}>
                <AppIcon name={item.icon} size={24} color={iconColor} />
              </View>

              {/* Label */}
              <Text
                className={`flex-1 mx-3  text-lg font-semi-bold ${textColor}`}
              >
                {item.label}
              </Text>

              {/* Right chevron or Switch */}
              {item.isThemeToggle ? (
                <Switch
                  value={isDark}
                  onValueChange={() =>
                    setColorScheme(isDark ? "light" : "dark")
                  }
                  trackColor={{ false: "#767577", true: "#4f8ef7" }}
                />
              ) : (
                <AppIcon
                  name="chevron-forward-sharp"
                  size={24}
                  color={
                    item.route === "system_sync"
                      ? (colorScheme as string) === "system"
                        ? "#4f8ef7"
                        : iconColor
                      : iconColor
                  }
                />
              )}
            </Pressable>
          );
        })}
      </View>
    </View>
  );
}
