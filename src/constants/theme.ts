// constants/theme.ts
import { Theme } from "@/types/theme";

export const Colors: { light: Theme; dark: Theme } = {
  light: {
    background: "#ffffff",
    surface: "#f4f5f7",
    card: "#ffffff",
    primary: "#0a0c10",
    muted: "#6b7280",
    gradient: {
      base: ["#ffffff", "#f0f2f7", "#e5e9f2"],
      glowTop: [
        "rgba(255,255,255,0.9)",
        "rgba(255,255,255,0.3)",
        "transparent",
      ],
      glowBottom: ["rgba(200,220,255,0.25)", "transparent"],
      authBackground: ["#eef0f8", "#e8eaf6", "#dde0f0"],
    },
  },

  dark: {
    background: "#0a0c10",
    surface: "#111318",
    card: "#181b22",
    primary: "#f0f2f7",
    muted: "#9ca3af",
    gradient: {
      base: ["#0a0c10", "#0f1218", "#151922"],
      glowTop: ["rgba(255,255,255,0.05)", "transparent"],
      glowBottom: ["rgba(79,142,247,0.15)", "transparent"],
      authBackground: ["#0a0c10", "#0f1218", "#151922"], // ← same as base for dark
    },
  },
};
