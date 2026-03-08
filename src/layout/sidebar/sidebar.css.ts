import { style } from "@vanilla-extract/css";
import { breakpoints, vars } from "@/shared/styles";

export const root = style({
  display: "none",
  "@media": {
    [`(min-width: ${breakpoints.lg})`]: {
      display: "flex",
      flexDirection: "column",
      position: "sticky",
      top: "56px",
      height: "calc(100vh - 56px)",
      backgroundColor: vars.color.bg.surface,
      borderRight: `1px solid ${vars.color.border.subtle}`,
      overflowY: "auto",
    },
  },
});

export const inner = style({
  display: "flex",
  flexDirection: "column",
  padding: vars.space[4],
  gap: vars.space[1],
});

export const section = style({
  display: "flex",
  flexDirection: "column",
  gap: vars.space[1],
  marginTop: vars.space[4],
  paddingTop: vars.space[4],
  borderTop: `1px solid ${vars.color.border.subtle}`,
  selectors: {
    "&:first-of-type": {
      marginTop: 0,
      paddingTop: 0,
      borderTop: "none",
    },
  },
});

export const sectionTitle = style({
  fontSize: vars.fontSize.caption100,
  fontWeight: vars.fontWeight.semibold,
  color: vars.color.text.tertiary,
  letterSpacing: vars.letterSpacing.wider,
  textTransform: "uppercase",
  padding: `${vars.space[2]} ${vars.space[3]}`,
});

export const navItem = style({
  display: "flex",
  alignItems: "center",
  gap: vars.space[3],
  padding: `${vars.space[3]} ${vars.space[3]}`,
  borderRadius: vars.borderRadius.lg,
  color: vars.color.text.secondary,
  transition: vars.transition.colors,
  textDecoration: "none",
  ":hover": {
    backgroundColor: vars.color.bg.surfaceElevated,
    color: vars.color.text.primary,
  },
  ":focus-visible": {
    outline: `2px solid ${vars.color.border.focusRing}`,
    outlineOffset: "2px",
  },
});

export const navItemActive = style({
  backgroundColor: vars.color.bg.selection,
  color: vars.color.text.primary,
  fontWeight: vars.fontWeight.medium,
  ":hover": {
    backgroundColor: vars.color.bg.selection,
  },
});

export const navItemIcon = style({
  flexShrink: 0,
  width: "20px",
  height: "20px",
});

export const navItemLabel = style({
  fontSize: vars.fontSize.body100,
  whiteSpace: "nowrap",
  overflow: "hidden",
  textOverflow: "ellipsis",
});
