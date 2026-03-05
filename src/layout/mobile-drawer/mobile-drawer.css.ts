import { style } from "@vanilla-extract/css";
import { vars } from "@/shared/styles/theme.css";

export const overlay = style({
  position: "fixed",
  inset: 0,
  backgroundColor: vars.color.bg.overlayScrim,
  zIndex: vars.zIndex[40],
  opacity: 0,
  visibility: "hidden",
  transition: `opacity ${vars.transition.normal}, visibility ${vars.transition.normal}`,
});

export const overlayOpen = style({
  opacity: 1,
  visibility: "visible",
});

export const drawer = style({
  position: "fixed",
  top: 0,
  left: 0,
  width: "280px",
  height: "100%",
  backgroundColor: vars.color.bg.surface,
  borderRight: `1px solid ${vars.color.border.subtle}`,
  zIndex: vars.zIndex[50],
  transform: "translateX(-100%)",
  transition: `transform ${vars.transition.transform}`,
  display: "flex",
  flexDirection: "column",
  overflowY: "auto",
});

export const drawerOpen = style({
  transform: "translateX(0)",
});

export const header = style({
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  padding: vars.space[4],
  borderBottom: `1px solid ${vars.color.border.subtle}`,
});

export const logo = style({
  fontSize: vars.fontSize.xl,
  fontWeight: vars.fontWeight.bold,
  color: vars.color.text.primary,
  letterSpacing: vars.letterSpacing.tight,
  display: "flex",
  alignItems: "center",
  gap: vars.space[1],
});

export const logoAccent = style({
  color: vars.color.border.focusRing,
});

export const closeButton = style({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  width: "40px",
  height: "40px",
  borderRadius: vars.borderRadius.lg,
  color: vars.color.text.secondary,
  transition: vars.transition.colors,
  ":hover": {
    backgroundColor: vars.color.bg.surfaceElevated,
    color: vars.color.text.primary,
  },
});

export const inner = style({
  display: "flex",
  flexDirection: "column",
  padding: vars.space[4],
  gap: vars.space[1],
});
