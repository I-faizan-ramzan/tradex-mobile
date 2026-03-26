module.exports = {
  content: [
    "./src/app/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
  ],
  presets: [require("nativewind/preset")],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        // Light
        background: "#ffffff",
        surface: "#f4f5f7",
        card: "#ffffff",
        primary: "#0a0c10",
        muted: "#6b7280",
        // Dark (reference only — applied via dark: prefix)
        "dark-background": "#0a0c10",
        "dark-surface": "#111318",
        "dark-card": "#181b22",
        accent: "#4f8ef7",
        gain: "#00e676",
        loss: "#ff5252",
      },
    },
  },
};
