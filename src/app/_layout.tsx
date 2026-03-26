import { Stack } from "expo-router";
import "../global.css";

export default function RootLayout() {
  return (
    <Stack screenOptions={{ headerShown: false }}>
      <Stack.Screen name="(tabs)" />
      <Stack.Screen
        name="stock/[ticker]"
        options={{ animation: "slide_from_right" }}
      />
    </Stack>
  );
}
