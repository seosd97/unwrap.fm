import { style } from "@vanilla-extract/css";
import { breakpoints } from "@/shared/styles";

export const root = style({
  display: "grid",
  gridTemplateColumns: "1fr",
  gridTemplateRows: "auto 1fr",
  minHeight: "100vh",
  "@media": {
    [`(min-width: ${breakpoints.lg})`]: {
      gridTemplateColumns: "200px 1fr",
      gridTemplateRows: "auto 1fr",
    },
  },
});
