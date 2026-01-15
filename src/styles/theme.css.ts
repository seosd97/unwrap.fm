import { createGlobalTheme } from "@vanilla-extract/css";

export const vars = createGlobalTheme(":root", {
  color: {
    white: "#ffffff",
    gray: {
      300: "#d1d5db",
      400: "#9ca3af",
      700: "#374151",
      800: "#1f2937",
      900: "#111827",
    },
    slate: {
      800: "#1e293b",
      900: "#0f172a",
    },
    cyan: {
      400: "#22d3ee",
      500: "#06b6d4",
      600: "#0891b2",
      700: "#0e7490",
    },
  },
  space: {
    0: "0",
    1: "0.25rem",
    2: "0.5rem",
    3: "0.75rem",
    4: "1rem",
    5: "1.25rem",
    6: "1.5rem",
    8: "2rem",
    10: "2.5rem",
    12: "3rem",
    16: "4rem",
    20: "5rem",
  },
  fontSize: {
    sm: "0.875rem",
    base: "1rem",
    lg: "1.125rem",
    xl: "1.25rem",
    "2xl": "1.5rem",
    "3xl": "1.875rem",
    "4xl": "2.25rem",
    "5xl": "3rem",
  },
  fontWeight: {
    normal: "400",
    medium: "500",
    semibold: "600",
    bold: "700",
  },
  borderRadius: {
    md: "0.375rem",
    lg: "0.5rem",
  },
  transition: {
    colors: "color 0.15s ease, background-color 0.15s ease",
    transform: "transform 0.3s ease-in-out",
  },
  zIndex: {
    50: "50",
  },
});
