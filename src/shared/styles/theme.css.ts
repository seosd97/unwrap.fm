import { createGlobalTheme, createThemeContract } from "@vanilla-extract/css";

// ============================================================
// Color Palette
//
// Core brand colors:
//   Primary (Oxidized Cyan): #0C8A99 - Oxidized, bright, blue-leaning
//   Secondary (Fog):          #C9D4D6 - Clean neutral with subtle cool tint
// ============================================================

const palette = createGlobalTheme(":root", {
  teal: {
    50: "#EDF7F9",
    100: "#D5EEF3",
    200: "#ABDCE7",
    300: "#7AC7D8",
    400: "#45AFC6",
    500: "#2196B2",
    600: "#0C8A99",
    700: "#0A6F7B",
    800: "#085661",
    900: "#063D46",
    950: "#04252A",
  },
  fog: {
    50: "#F8FAFB",
    100: "#F1F4F5",
    200: "#E3E8EA",
    300: "#C9D4D6",
    400: "#9FACB0",
    500: "#758588",
    600: "#5A686B",
    700: "#434E50",
    800: "#2C3436",
    900: "#191F20",
    950: "#0E1213",
  },
  success: {
    50: "#F0FDF4",
    100: "#DCFCE7",
    200: "#BBF7D0",
    300: "#86EFAC",
    400: "#4ADE80",
    500: "#22C55E",
    600: "#16A34A",
    700: "#15803D",
    800: "#166534",
    900: "#14532D",
    950: "#052E16",
  },
  warning: {
    50: "#FFFBEB",
    100: "#FEF3C7",
    200: "#FDE68A",
    300: "#FCD34D",
    400: "#FBBF24",
    500: "#F59E0B",
    600: "#D97706",
    700: "#B45309",
    800: "#92400E",
    900: "#78350F",
    950: "#451A03",
  },
  danger: {
    50: "#FEF2F2",
    100: "#FEE2E2",
    200: "#FECACA",
    300: "#FCA5A5",
    400: "#F87171",
    500: "#EF4444",
    600: "#DC2626",
    700: "#B91C1C",
    800: "#991B1B",
    900: "#7F1D1D",
    950: "#450A0A",
  },
});

// ============================================================
// Semantic Color Contract
// ============================================================

const color = createThemeContract({
  bg: {
    canvas: null,
    surface: null,
    surfaceElevated: null,
    surfaceSunken: null,
    overlayScrim: null,
    selection: null,
  },
  text: {
    primary: null,
    secondary: null,
    tertiary: null,
    disabled: null,
    inverse: null,
    link: null,
    linkHover: null,
  },
  border: {
    subtle: null,
    default: null,
    strong: null,
    focusRing: null,
  },
  action: {
    primary: {
      bg: null,
      bgHover: null,
      bgActive: null,
      text: null,
      border: null,
      focusRing: null,
      disabledBg: null,
      disabledText: null,
      disabledBorder: null,
    },
    secondary: {
      bg: null,
      bgHover: null,
      bgActive: null,
      text: null,
      border: null,
      focusRing: null,
      disabledBg: null,
      disabledText: null,
      disabledBorder: null,
    },
    ghost: {
      bg: null,
      bgHover: null,
      bgActive: null,
      text: null,
      focusRing: null,
      disabledText: null,
    },
  },
  status: {
    success: null,
    warning: null,
    danger: null,
    info: null,
  },
});

// ============================================================
// Dark Theme (default)
//
// Surface hierarchy (Solid Surface 3-level):
//   Canvas  fog-950   (#0E1213) — page base
//   Surface #171E20             — card/panel
//   Raised  #212B2D             — modal/drawer
// ============================================================

createGlobalTheme(":root", color, {
  bg: {
    canvas: palette.fog[950],
    surface: "#171E20",
    surfaceElevated: "#212B2D",
    surfaceSunken: palette.fog[900],
    overlayScrim: "rgba(0, 0, 0, 0.65)",
    selection: "rgba(12, 138, 153, 0.25)",
  },
  text: {
    primary: palette.fog[50],
    secondary: palette.fog[200],
    tertiary: palette.fog[500],
    disabled: "rgba(159, 172, 176, 0.50)",
    inverse: palette.fog[950],
    link: palette.teal[400],
    linkHover: palette.teal[300],
  },
  border: {
    subtle: "#283032",
    default: "#3A4547",
    strong: "#5A686B",
    focusRing: palette.teal[400],
  },
  action: {
    primary: {
      bg: palette.teal[600],
      bgHover: palette.teal[500],
      bgActive: palette.teal[700],
      text: "#FFFFFF",
      border: palette.teal[600],
      focusRing: palette.teal[400],
      disabledBg: "#3A4547",
      disabledText: "rgba(248, 250, 251, 0.55)",
      disabledBorder: "#3A4547",
    },
    secondary: {
      bg: "#171E20",
      bgHover: "#212B2D",
      bgActive: "#283032",
      text: palette.fog[50],
      border: "#3A4547",
      focusRing: palette.teal[400],
      disabledBg: "#171E20",
      disabledText: "rgba(248, 250, 251, 0.45)",
      disabledBorder: "#283032",
    },
    ghost: {
      bg: "transparent",
      bgHover: "#212B2D",
      bgActive: "#283032",
      text: palette.fog[200],
      focusRing: palette.teal[400],
      disabledText: "rgba(248, 250, 251, 0.45)",
    },
  },
  status: {
    success: palette.success[400],
    warning: palette.warning[400],
    danger: palette.danger[400],
    info: palette.teal[400],
  },
});

// ============================================================
// Light Theme
//
// Surface hierarchy (Solid Surface 3-level):
//   Canvas  fog-50   (#F8FAFB) — page base
//   Surface #FFFFFF             — card/panel
//   Raised  #FFFFFF             — modal/drawer (separated by border/shadow)
// ============================================================

createGlobalTheme(":root[data-theme='light']", color, {
  bg: {
    canvas: palette.fog[50],
    surface: "#FFFFFF",
    surfaceElevated: "#FFFFFF",
    surfaceSunken: palette.fog[100],
    overlayScrim: "rgba(14, 18, 19, 0.60)",
    selection: palette.teal[100],
  },
  text: {
    primary: palette.fog[950],
    secondary: palette.fog[700],
    tertiary: palette.fog[500],
    disabled: palette.fog[400],
    inverse: "#FFFFFF",
    link: palette.teal[600],
    linkHover: palette.teal[500],
  },
  border: {
    subtle: palette.fog[200],
    default: palette.fog[300],
    strong: palette.fog[500],
    focusRing: palette.teal[500],
  },
  action: {
    primary: {
      bg: palette.teal[600],
      bgHover: palette.teal[500],
      bgActive: palette.teal[700],
      text: "#FFFFFF",
      border: palette.teal[600],
      focusRing: palette.teal[500],
      disabledBg: palette.fog[200],
      disabledText: palette.fog[400],
      disabledBorder: palette.fog[200],
    },
    secondary: {
      bg: "#FFFFFF",
      bgHover: palette.fog[50],
      bgActive: palette.fog[100],
      text: palette.fog[950],
      border: palette.fog[300],
      focusRing: palette.teal[500],
      disabledBg: "#FFFFFF",
      disabledText: palette.fog[400],
      disabledBorder: palette.fog[200],
    },
    ghost: {
      bg: "transparent",
      bgHover: palette.fog[100],
      bgActive: palette.fog[200],
      text: palette.fog[700],
      focusRing: palette.teal[500],
      disabledText: palette.fog[400],
    },
  },
  status: {
    success: palette.success[600],
    warning: palette.warning[600],
    danger: palette.danger[600],
    info: palette.teal[600],
  },
});

// ============================================================
// Static Design Tokens
// ============================================================

const tokens = createGlobalTheme(":root", {
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
    24: "6rem",
  },
  fontSize: {
    xs: "0.75rem",
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
  lineHeight: {
    tight: "1.25",
    normal: "1.5",
    relaxed: "1.75",
  },
  borderRadius: {
    sm: "0.25rem",
    md: "0.375rem",
    lg: "0.5rem",
    xl: "0.75rem",
    full: "9999px",
  },
  shadow: {
    sm: "0 1px 2px 0 rgba(0, 0, 0, 0.15)",
    md: "0 2px 4px -1px rgba(0, 0, 0, 0.20)",
    lg: "0 4px 12px -2px rgba(0, 0, 0, 0.25)",
  },
  transition: {
    colors:
      "color 0.15s ease, background-color 0.15s ease, border-color 0.15s ease",
    transform: "transform 0.2s ease",
    opacity: "opacity 0.15s ease",
    fast: "0.1s ease",
    normal: "0.2s ease",
  },
  zIndex: {
    10: "10",
    20: "20",
    30: "30",
    40: "40",
    50: "50",
  },
  letterSpacing: {
    tight: "-0.025em",
    normal: "0",
    wide: "0.025em",
    wider: "0.05em",
    widest: "0.1em",
  },
  size: {
    iconSm: "1rem",
    iconMd: "1.25rem",
    iconLg: "1.5rem",
  },
});

// ============================================================
// Exports
// ============================================================

export const vars = {
  palette,
  color,
  ...tokens,
};
