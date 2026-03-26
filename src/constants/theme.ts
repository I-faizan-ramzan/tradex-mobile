export type ThemeColor = keyof typeof Colors.light;

export const Colors = {
  light: {
    text: "#0a0c10",
    background: "#ffffff",
    surface: "#f4f5f7",
    card: "#ffffff",
    muted: "#6b7280",
    accent: "#4f8ef7",
    gain: "#00e676",
    loss: "#ff5252",
    border: "rgba(0,0,0,0.07)",
  },
  dark: {
    text: "#f0f2f7",
    background: "#0a0c10",
    surface: "#111318",
    card: "#181b22",
    muted: "#6b7280",
    accent: "#4f8ef7",
    gain: "#00e676",
    loss: "#ff5252",
    border: "rgba(255,255,255,0.07)",
  },
};

export const Fonts = {
  sans: "DM-Sans",
  mono: "DM-Mono",
};
