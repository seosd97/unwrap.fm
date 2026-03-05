import { style } from "@vanilla-extract/css";
import { breakpoints } from "@/shared/styles/breakpoints";
import { vars } from "@/shared/styles/theme.css";

export const root = style({
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  height: "56px",
  padding: `0 ${vars.space[6]}`,
  backgroundColor: vars.color.bg.surface,
  borderBottom: `1px solid ${vars.color.border.subtle}`,
  position: "sticky",
  top: 0,
  zIndex: vars.zIndex[10],
  "@media": {
    [`(min-width: ${breakpoints.lg})`]: {
      padding: `0 ${vars.space[8]}`,
    },
  },
});

export const left = style({
  display: "flex",
  alignItems: "center",
  gap: vars.space[4],
});

export const center = style({
  flex: 1,
  maxWidth: "400px",
  margin: `0 ${vars.space[8]}`,
  "@media": {
    [`(max-width: ${breakpoints.md})`]: {
      display: "none",
    },
  },
});

export const right = style({
  display: "flex",
  alignItems: "center",
  gap: vars.space[3],
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

export const searchBox = style({
  display: "flex",
  alignItems: "center",
  gap: vars.space[3],
  width: "100%",
  padding: `${vars.space[2]} ${vars.space[4]}`,
  backgroundColor: vars.color.bg.canvas,
  border: `1px solid ${vars.color.border.subtle}`,
  borderRadius: vars.borderRadius.full,
  transition: vars.transition.colors,
  ":focus-within": {
    borderColor: vars.color.border.focusRing,
  },
});

export const searchInput = style({
  flex: 1,
  backgroundColor: "transparent",
  border: "none",
  outline: "none",
  fontSize: vars.fontSize.sm,
  color: vars.color.text.primary,
  "::placeholder": {
    color: vars.color.text.tertiary,
  },
});

export const mobileMenuButton = style({
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
  "@media": {
    [`(min-width: ${breakpoints.lg})`]: {
      display: "none",
    },
  },
});
