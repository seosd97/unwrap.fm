import { style } from "@vanilla-extract/css";
import { vars } from "./theme.css";

export const container = style({
  minHeight: "100vh",
  background: `linear-gradient(to bottom, ${vars.color.slate[900]}, ${vars.color.slate[800]}, ${vars.color.slate[900]})`,
});

export const section = style({
  paddingTop: vars.space[20],
  paddingBottom: vars.space[20],
  paddingLeft: vars.space[6],
  paddingRight: vars.space[6],
  textAlign: "center",
});

export const content = style({
  maxWidth: "48rem",
  marginLeft: "auto",
  marginRight: "auto",
});

export const heading = style({
  fontSize: vars.fontSize["5xl"],
  fontWeight: vars.fontWeight.bold,
  color: vars.color.white,
  marginBottom: vars.space[6],
});

export const description = style({
  fontSize: vars.fontSize.xl,
  color: vars.color.gray[400],
});
