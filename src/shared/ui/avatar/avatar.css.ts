import { style } from "@vanilla-extract/css";
import { vars } from "@/shared/styles";

export const root = style({
  width: "36px",
  height: "36px",
  borderRadius: "50%",
  backgroundColor: vars.color.bg.surfaceElevated,
  border: `1px solid ${vars.color.border.subtle}`,
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  fontSize: vars.fontSize.sm,
  fontWeight: vars.fontWeight.medium,
  color: vars.color.text.secondary,
  overflow: "hidden",
  cursor: "pointer",
  transition: vars.transition.colors,
  ":hover": {
    borderColor: vars.color.border.default,
  },
});
