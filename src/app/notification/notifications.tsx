import { useTheme } from "@/hooks/use-theme";
import { Ionicons } from "@expo/vector-icons";
import { router } from "expo-router";
import { Pressable, SectionList, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

type Notification = {
  id: string;
  title: string;
  message: string;
  time: string;
  type: "price" | "news" | "portfolio" | "security" | "system";
  read: boolean;
};

const NOTIFICATIONS: { title: string; data: Notification[] }[] = [
  {
    title: "Today",
    data: [
      {
        id: "1",
        title: "AAPL hit your target",
        message: "Apple Inc. reached your price alert of $190.00",
        time: "2m ago",
        type: "price",
        read: false,
      },
      {
        id: "2",
        title: "Portfolio up 2.4%",
        message: "Your portfolio gained $1,204 today. Tap to see breakdown.",
        time: "1h ago",
        type: "portfolio",
        read: false,
      },
      {
        id: "3",
        title: "Breaking: Fed holds rates",
        message: "Federal Reserve keeps interest rates unchanged for Q2 2026.",
        time: "3h ago",
        type: "news",
        read: false,
      },
    ],
  },
  {
    title: "Yesterday",
    data: [
      {
        id: "4",
        title: "New login detected",
        message: "A new login was detected from Lahore, PK. Was this you?",
        time: "Yesterday, 9:41 PM",
        type: "security",
        read: true,
      },
      {
        id: "5",
        title: "TSLA dropped 3.1%",
        message: "Tesla fell below your alert threshold of $245.00",
        time: "Yesterday, 4:15 PM",
        type: "price",
        read: true,
      },
      {
        id: "6",
        title: "Dividend received",
        message: "You received a $12.40 dividend from MSFT.",
        time: "Yesterday, 10:00 AM",
        type: "portfolio",
        read: true,
      },
    ],
  },
  {
    title: "Earlier",
    data: [
      {
        id: "7",
        title: "App update available",
        message: "TradeX v2.1 is available with new charting features.",
        time: "Mar 30",
        type: "system",
        read: true,
      },
      {
        id: "8",
        title: "NVDA earnings beat",
        message: "Nvidia reported EPS of $5.98, beating estimates by 12%.",
        time: "Mar 29",
        type: "news",
        read: true,
      },
    ],
  },
];

const TYPE_CONFIG = {
  price: {
    icon: "trending-up-outline",
    color: "#4f8ef7",
    bg: "rgba(79,142,247,0.12)",
  },
  news: {
    icon: "newspaper-outline",
    color: "#f59e0b",
    bg: "rgba(245,158,11,0.12)",
  },
  portfolio: {
    icon: "pie-chart-outline",
    color: "#00e676",
    bg: "rgba(0,230,118,0.12)",
  },
  security: {
    icon: "shield-outline",
    color: "#ff5252",
    bg: "rgba(255,82,82,0.12)",
  },
  system: {
    icon: "settings-outline",
    color: "#9ca3af",
    bg: "rgba(156,163,175,0.12)",
  },
} as const;

export default function NotificationsScreen() {
  const { isDark, muted, card, surface, primary } = useTheme();

  const borderColor = isDark ? "rgba(255,255,255,0.05)" : "rgba(0,0,0,0.06)";
  const unreadBg = isDark ? "rgba(79,142,247,0.05)" : "rgba(79,142,247,0.04)";

  return (
    <SafeAreaView
      style={{ flex: 1, backgroundColor: isDark ? "#0a0c10" : "#ffffff" }}
    >
      {/* Header */}
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-between",
          paddingHorizontal: 20,
          paddingTop: 8,
          paddingBottom: 16,
        }}
      >
        <Pressable
          onPress={() => router.back()}
          style={{
            width: 36,
            height: 36,
            borderRadius: 12,
            backgroundColor: isDark ? "#181b22" : "#f4f5f7",
            borderWidth: 0.5,
            borderColor,
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Ionicons
            name="chevron-back"
            size={18}
            color={isDark ? "#f0f2f7" : "#0a0c10"}
          />
        </Pressable>

        <Text
          style={{
            fontSize: 17,
            fontWeight: "600",
            color: isDark ? "#f0f2f7" : "#0a0c10",
            fontFamily: "OpenSans_600SemiBold",
          }}
        >
          Notifications
        </Text>

        {/* Mark all read */}
        <Pressable>
          <Text
            style={{
              fontSize: 13,
              color: "#4f8ef7",
              fontFamily: "OpenSans_500Medium",
            }}
          >
            Mark all read
          </Text>
        </Pressable>
      </View>

      <SectionList
        sections={NOTIFICATIONS}
        keyExtractor={(item) => item.id}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ paddingBottom: 32 }}
        stickySectionHeadersEnabled={false}
        renderSectionHeader={({ section }) => (
          <Text
            style={{
              fontSize: 12,
              fontWeight: "600",
              color: muted,
              paddingHorizontal: 20,
              paddingTop: 20,
              paddingBottom: 8,
              textTransform: "uppercase",
              letterSpacing: 0.6,
              fontFamily: "OpenSans_600SemiBold",
            }}
          >
            {section.title}
          </Text>
        )}
        renderItem={({ item, index, section }) => {
          const config = TYPE_CONFIG[item.type];
          const isLast = index === section.data.length - 1;
          const isFirst = index === 0;

          return (
            <Pressable
              style={{
                flexDirection: "row",
                alignItems: "flex-start",
                gap: 12,
                paddingHorizontal: 20,
                paddingVertical: 14,
                backgroundColor: item.read ? "transparent" : unreadBg,
                borderBottomWidth: isLast ? 0 : 0.5,
                borderBottomColor: borderColor,
                borderTopWidth: isFirst ? 0.5 : 0,
                borderTopColor: borderColor,
              }}
            >
              {/* Icon */}
              <View
                style={{
                  width: 40,
                  height: 40,
                  borderRadius: 12,
                  backgroundColor: config.bg,
                  alignItems: "center",
                  justifyContent: "center",
                  flexShrink: 0,
                  marginTop: 2,
                }}
              >
                <Ionicons
                  name={config.icon as any}
                  size={18}
                  color={config.color}
                />
              </View>

              {/* Text */}
              <View style={{ flex: 1 }}>
                <View
                  style={{
                    flexDirection: "row",
                    justifyContent: "space-between",
                    alignItems: "center",
                    marginBottom: 3,
                  }}
                >
                  <Text
                    style={{
                      fontSize: 14,
                      fontWeight: "600",
                      color: isDark ? "#f0f2f7" : "#0a0c10",
                      fontFamily: "OpenSans_600SemiBold",
                      flex: 1,
                    }}
                    numberOfLines={1}
                  >
                    {item.title}
                  </Text>
                  <Text
                    style={{
                      fontSize: 11,
                      color: muted,
                      fontFamily: "OpenSans_400Regular",
                      marginLeft: 8,
                    }}
                  >
                    {item.time}
                  </Text>
                </View>
                <Text
                  style={{
                    fontSize: 13,
                    color: muted,
                    lineHeight: 18,
                    fontFamily: "OpenSans_400Regular",
                  }}
                  numberOfLines={2}
                >
                  {item.message}
                </Text>
              </View>

              {/* Unread dot */}
              {!item.read && (
                <View
                  style={{
                    width: 8,
                    height: 8,
                    borderRadius: 4,
                    backgroundColor: "#4f8ef7",
                    marginTop: 6,
                    flexShrink: 0,
                  }}
                />
              )}
            </Pressable>
          );
        }}
      />
    </SafeAreaView>
  );
}
