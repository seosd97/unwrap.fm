import { style } from "@vanilla-extract/css";
import { vars } from "@/shared/styles/theme.css";

export const card = style({
  backgroundColor: vars.color.bg.surface,
  borderRadius: vars.borderRadius.xl,
  border: `1px solid ${vars.color.border.subtle}`,
  overflow: "hidden",
});

export const cardHeader = style({
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  padding: `${vars.space[4]} ${vars.space[5]}`,
  borderBottom: `1px solid ${vars.color.border.subtle}`,
});

export const cardTitle = style({
  fontSize: vars.fontSize.lg,
  fontWeight: vars.fontWeight.semibold,
  color: vars.color.text.primary,
});

export const cardBody = style({
  padding: vars.space[3],
});
