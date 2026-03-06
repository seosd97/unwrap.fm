import { style } from "@vanilla-extract/css";
import { breakpoints, vars } from "@/shared/styles";

export const main = style({
  display: "flex",
  flexDirection: "column",
  minHeight: 0,
  overflowY: "auto",
  backgroundColor: vars.color.bg.canvas,
});

export const content = style({
  padding: vars.space[6],
  display: "flex",
  flexDirection: "column",
  gap: vars.space[8],
  "@media": {
    [`(min-width: ${breakpoints.md})`]: {
      padding: vars.space[8],
    },
  },
});
