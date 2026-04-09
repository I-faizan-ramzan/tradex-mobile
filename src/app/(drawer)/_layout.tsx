import { ProfileHeader } from "@/components/profile/ProfileHeader";
import { Colors } from "@/constants/theme";
import { useTheme } from "@/hooks/use-theme";
import { Ionicons } from "@expo/vector-icons";
import {
  DrawerContentScrollView,
  DrawerItemList,
} from "@react-navigation/drawer";
import { Drawer } from "expo-router/drawer";
import { Text, View } from "react-native";

function CustomDrawerContent(props: any) {
  const { isDark } = useTheme();
  const theme = Colors[isDark ? "dark" : "light"];

  return (
    <DrawerContentScrollView
      {...props}
      style={{ backgroundColor: theme.background, flex: 1 }}
    >
      {/* Profile Header */}
      <View
        style={{
          paddingHorizontal: 20,
          paddingVertical: 24,
          borderBottomWidth: 0.5,
          borderBottomColor: isDark
            ? "rgba(255,255,255,0.08)"
            : "rgba(0,0,0,0.08)",
          marginBottom: 8,
        }}
      >
        {/* Avatar */}
        <ProfileHeader
          name="Faizan Ramzan"
          email="faizan.ramzan@tradx.com"
          avatarUrl={require("@/assets/images/avatar.jpg")}
        />

        {/* Balance pill */}
        <View
          style={{
            marginTop: 14,
            alignSelf: "flex-start",
            backgroundColor: isDark
              ? "rgba(86,63,194,0.18)"
              : "rgba(86,63,194,0.1)",
            borderRadius: 20,
            paddingHorizontal: 12,
            paddingVertical: 5,
            flexDirection: "row",
            alignItems: "center",
            gap: 6,
          }}
        >
          <Ionicons name="wallet-outline" size={13} color="#563fc2" />
          <Text style={{ color: "#563fc2", fontSize: 13, fontWeight: "600" }}>
            $106,000
          </Text>
        </View>
      </View>

      {/* Nav items */}
      <DrawerItemList {...props} />

      {/* Footer */}
      <View
        style={{
          marginTop: 24,
          marginHorizontal: 16,
          paddingTop: 16,
          borderTopWidth: 0.5,
          borderTopColor: isDark
            ? "rgba(255,255,255,0.08)"
            : "rgba(0,0,0,0.08)",
        }}
      >
        <Text style={{ color: theme.muted, fontSize: 11 }}>TradeX v1.0.0</Text>
      </View>
    </DrawerContentScrollView>
  );
}

export default function DrawerLayout() {
  const { isDark } = useTheme();
  const theme = Colors[isDark ? "dark" : "light"];

  return (
    <Drawer
      drawerContent={(props) => <CustomDrawerContent {...props} />}
      screenOptions={{
        drawerPosition: "right",
        swipeEnabled: false,
        headerShown: false,
        drawerStyle: {
          backgroundColor: theme.background,
          width: 280,
        },
        drawerActiveTintColor: "#563fc2",
        drawerInactiveTintColor: theme.muted,
        drawerActiveBackgroundColor: isDark
          ? "rgba(86,63,194,0.15)"
          : "rgba(86,63,194,0.08)",
        drawerLabelStyle: {
          fontSize: 14,
          fontWeight: "500",
          marginLeft: -8,
        },
        drawerItemStyle: {
          borderRadius: 10,
          marginHorizontal: 8,
          marginVertical: 1,
        },
      }}
    >
      <Drawer.Screen
        name="(tabs)"
        options={{
          drawerLabel: "Home",
          drawerIcon: ({ color }) => (
            <Ionicons name="grid-outline" size={20} color={color} />
          ),
        }}
      />
      <Drawer.Screen
        name="notifications"
        options={{
          drawerLabel: "Notifications",
          drawerIcon: ({ color }) => (
            <Ionicons name="notifications-outline" size={20} color={color} />
          ),
        }}
      />
      <Drawer.Screen
        name="transactions"
        options={{
          drawerLabel: "Transaction History",
          drawerIcon: ({ color }) => (
            <Ionicons name="receipt-outline" size={20} color={color} />
          ),
        }}
      />
      <Drawer.Screen
        name="account"
        options={{
          drawerLabel: "Account",
          drawerIcon: ({ color }) => (
            <Ionicons name="shield-checkmark-outline" size={20} color={color} />
          ),
        }}
      />
      <Drawer.Screen
        name="help"
        options={{
          drawerLabel: "Help & Support",
          drawerIcon: ({ color }) => (
            <Ionicons name="help-circle-outline" size={20} color={color} />
          ),
        }}
      />
      <Drawer.Screen
        name="settings"
        options={{
          drawerLabel: "Settings",
          drawerIcon: ({ color }) => (
            <Ionicons name="settings-outline" size={20} color={color} />
          ),
        }}
      />
    </Drawer>
  );
}
