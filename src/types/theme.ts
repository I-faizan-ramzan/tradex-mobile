// src/types/theme.ts
export type Theme = {
  background: string;
  surface: string;
  card: string;
  primary: string;
  muted: string;
  gradient: {
    base: string[];
    glowTop: string[];
    glowBottom: string[];
    authBackground: string[];
  };
};
