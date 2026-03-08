import { createSprinkles, defineProperties } from "@vanilla-extract/sprinkles";
import { breakpoints } from "./breakpoints";
import { vars } from "./theme.css";

// ============================================================
// Font Keys (shared between fontSize / lineHeight)
// ============================================================

type FontKey = keyof typeof vars.fontSize;

// ============================================================
// Responsive Properties
// ============================================================

const responsiveProperties = defineProperties({
  conditions: {
    base: {},
    sm: { "@media": `(min-width: ${breakpoints.sm})` },
    md: { "@media": `(min-width: ${breakpoints.md})` },
    lg: { "@media": `(min-width: ${breakpoints.lg})` },
    xl: { "@media": `(min-width: ${breakpoints.xl})` },
    "2xl": { "@media": `(min-width: ${breakpoints["2xl"]})` },
  },
  defaultCondition: "base",
  properties: {
    display: ["none", "flex", "grid", "block", "inline", "inline-flex"],
    flexDirection: ["row", "column", "row-reverse", "column-reverse"],
    flexWrap: ["nowrap", "wrap", "wrap-reverse"],
    justifyContent: [
      "flex-start",
      "flex-end",
      "center",
      "space-between",
      "space-around",
      "space-evenly",
    ],
    alignItems: ["flex-start", "flex-end", "center", "stretch", "baseline"],
    alignContent: [
      "flex-start",
      "flex-end",
      "center",
      "stretch",
      "space-between",
      "space-around",
    ],
    justifyItems: ["start", "end", "center", "stretch"],
    justifySelf: ["auto", "start", "end", "center", "stretch"],
    alignSelf: [
      "auto",
      "flex-start",
      "flex-end",
      "center",
      "stretch",
      "baseline",
    ],
    gap: vars.space,
    rowGap: vars.space,
    columnGap: vars.space,
    paddingTop: vars.space,
    paddingBottom: vars.space,
    paddingLeft: vars.space,
    paddingRight: vars.space,
    marginTop: vars.space,
    marginBottom: vars.space,
    marginLeft: vars.space,
    marginRight: vars.space,
    width: ["100%", "auto", "fit-content", "max-content", "min-content"],
    height: [
      "100%",
      "auto",
      "fit-content",
      "max-content",
      "min-content",
      "100vh",
    ],
    minWidth: ["0", "100%", "auto"],
    minHeight: ["0", "100%", "auto", "100vh"],
    maxWidth: ["100%", "none"],
    maxHeight: ["100%", "none"],
    position: ["static", "relative", "absolute", "fixed", "sticky"],
    top: ["0", "auto"],
    bottom: ["0", "auto"],
    left: ["0", "auto"],
    right: ["0", "auto"],
    inset: ["0", "auto"],
    textAlign: ["left", "center", "right", "justify"],
    overflow: ["visible", "hidden", "scroll", "auto"],
    overflowX: ["visible", "hidden", "scroll", "auto"],
    overflowY: ["visible", "hidden", "scroll", "auto"],
    flex: ["0", "1", "none", "auto"],
    flexGrow: ["0", "1"],
    flexShrink: ["0", "1"],
    flexBasis: ["auto", "0", "100%"],
    gridTemplateColumns: [
      "none",
      "repeat(1, minmax(0, 1fr))",
      "repeat(2, minmax(0, 1fr))",
      "repeat(3, minmax(0, 1fr))",
      "repeat(4, minmax(0, 1fr))",
      "repeat(5, minmax(0, 1fr))",
      "repeat(6, minmax(0, 1fr))",
      "repeat(auto-fit, minmax(250px, 1fr))",
      "repeat(auto-fill, minmax(250px, 1fr))",
    ],
    gridTemplateRows: [
      "none",
      "repeat(1, minmax(0, 1fr))",
      "repeat(2, minmax(0, 1fr))",
      "repeat(3, minmax(0, 1fr))",
    ],
    gridColumn: ["auto", "span 2", "span 3", "span 4"],
    gridRow: ["auto", "span 2", "span 3"],
    borderRadius: vars.borderRadius,
    opacity: ["0", "0.5", "0.75", "1"],
    visibility: ["visible", "hidden"],
    pointerEvents: ["auto", "none"],
    cursor: ["auto", "pointer", "not-allowed", "grab", "grabbing"],
    zIndex: vars.zIndex,
  },
  shorthands: {
    padding: ["paddingTop", "paddingBottom", "paddingLeft", "paddingRight"],
    paddingX: ["paddingLeft", "paddingRight"],
    paddingY: ["paddingTop", "paddingBottom"],
    margin: ["marginTop", "marginBottom", "marginLeft", "marginRight"],
    marginX: ["marginLeft", "marginRight"],
    marginY: ["marginTop", "marginBottom"],
    placeItems: ["alignItems", "justifyItems"],
  },
});

// ============================================================
// Font Properties (fontSize + lineHeight shorthand)
// ============================================================

const fontProperties = defineProperties({
  properties: {
    font: (Object.keys(vars.fontSize) as FontKey[]).reduce(
      (acc, key) => {
        acc[key] = {
          fontSize: vars.fontSize[key],
          lineHeight: vars.lineHeight[key],
        };
        return acc;
      },
      {} as Record<FontKey, { fontSize: string; lineHeight: string }>,
    ),
  },
});

// ============================================================
// Color Properties
// ============================================================

const colorProperties = defineProperties({
  properties: {
    color: {
      primary: vars.color.text.primary,
      secondary: vars.color.text.secondary,
      tertiary: vars.color.text.tertiary,
      disabled: vars.color.text.disabled,
      inverse: vars.color.text.inverse,
      link: vars.color.text.link,
      linkHover: vars.color.text.linkHover,
      success: vars.color.status.success,
      warning: vars.color.status.warning,
      danger: vars.color.status.danger,
      info: vars.color.status.info,
    },
    background: {
      canvas: vars.color.bg.canvas,
      surface: vars.color.bg.surface,
      surfaceElevated: vars.color.bg.surfaceElevated,
      surfaceSunken: vars.color.bg.surfaceSunken,
      selection: vars.color.bg.selection,
      transparent: "transparent",
    },
    borderColor: {
      subtle: vars.color.border.subtle,
      default: vars.color.border.default,
      strong: vars.color.border.strong,
      focusRing: vars.color.border.focusRing,
      transparent: "transparent",
    },
  },
});

// ============================================================
// Static Properties
// ============================================================

const staticProperties = defineProperties({
  properties: {
    fontWeight: vars.fontWeight,
    letterSpacing: vars.letterSpacing,
    border: {
      none: "none",
      subtle: `1px solid ${vars.color.border.subtle}`,
      default: `1px solid ${vars.color.border.default}`,
      strong: `1px solid ${vars.color.border.strong}`,
      focusRing: `2px solid ${vars.color.border.focusRing}`,
    },
    borderTop: {
      none: "none",
      subtle: `1px solid ${vars.color.border.subtle}`,
      default: `1px solid ${vars.color.border.default}`,
    },
    borderBottom: {
      none: "none",
      subtle: `1px solid ${vars.color.border.subtle}`,
      default: `1px solid ${vars.color.border.default}`,
    },
    borderLeft: {
      none: "none",
      subtle: `1px solid ${vars.color.border.subtle}`,
      default: `1px solid ${vars.color.border.default}`,
      accent: `2px solid ${vars.color.border.focusRing}`,
    },
    borderRight: {
      none: "none",
      subtle: `1px solid ${vars.color.border.subtle}`,
      default: `1px solid ${vars.color.border.default}`,
    },
    boxShadow: {
      none: "none",
      sm: vars.shadow.sm,
      md: vars.shadow.md,
      lg: vars.shadow.lg,
    },
    transition: {
      none: "none",
      colors: vars.transition.colors,
      transform: vars.transition.transform,
      opacity: vars.transition.opacity,
      all: `all ${vars.transition.normal}`,
    },
  },
});

// ============================================================
// Composed Sprinkles
// ============================================================

export const sprinkles = createSprinkles(
  responsiveProperties,
  fontProperties,
  colorProperties,
  staticProperties,
);

export type Sprinkles = Parameters<typeof sprinkles>[0];
