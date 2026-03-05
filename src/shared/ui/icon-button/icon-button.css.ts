import { style } from "@vanilla-extract/css";
import { vars } from "@/shared/styles/theme.css";

export const root = style({
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
  ":focus-visible": {
    outline: `2px solid ${vars.color.border.focusRing}`,
    outlineOffset: "2px",
  },
});
