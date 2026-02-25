import { style, styleVariants } from "@vanilla-extract/css";
import { breakpoints } from "./breakpoints";
import { vars } from "./theme.css";

export const container = style({
  width: "100%",
  marginLeft: "auto",
  marginRight: "auto",
  paddingLeft: vars.space[4],
  paddingRight: vars.space[4],
  "@media": {
    [`(min-width: ${breakpoints.sm})`]: {
      paddingLeft: vars.space[6],
      paddingRight: vars.space[6],
    },
    [`(min-width: ${breakpoints.lg})`]: {
      paddingLeft: vars.space[8],
      paddingRight: vars.space[8],
    },
  },
});

export const containerSize = styleVariants({
  sm: { maxWidth: "640px" },
  md: { maxWidth: "768px" },
  lg: { maxWidth: "1024px" },
  xl: { maxWidth: "1280px" },
  full: { maxWidth: "100%" },
  prose: { maxWidth: "65ch" },
});

export const page = style({
  minHeight: "100vh",
  display: "flex",
  flexDirection: "column",
});

export const pageMain = style({
  flex: 1,
  display: "flex",
  flexDirection: "column",
});

export const section = style({
  paddingTop: vars.space[12],
  paddingBottom: vars.space[12],
  "@media": {
    [`(min-width: ${breakpoints.md})`]: {
      paddingTop: vars.space[16],
      paddingBottom: vars.space[16],
    },
  },
});

export const sectionSize = styleVariants({
  sm: {
    paddingTop: vars.space[8],
    paddingBottom: vars.space[8],
  },
  lg: {
    paddingTop: vars.space[20],
    paddingBottom: vars.space[20],
    "@media": {
      [`(min-width: ${breakpoints.md})`]: {
        paddingTop: vars.space[24],
        paddingBottom: vars.space[24],
      },
    },
  },
  flush: {
    paddingTop: 0,
    paddingBottom: 0,
  },
});

export const stack = style({
  display: "flex",
  flexDirection: "column",
});

export const stackGap = styleVariants({
  0: { gap: 0 },
  1: { gap: vars.space[1] },
  2: { gap: vars.space[2] },
  3: { gap: vars.space[3] },
  4: { gap: vars.space[4] },
  6: { gap: vars.space[6] },
  8: { gap: vars.space[8] },
});

export const cluster = style({
  display: "flex",
  flexWrap: "wrap",
  alignItems: "center",
});

export const clusterGap = styleVariants({
  2: { gap: vars.space[2] },
  3: { gap: vars.space[3] },
  4: { gap: vars.space[4] },
  6: { gap: vars.space[6] },
});

export const grid = style({
  display: "grid",
});

export const gridCols = styleVariants({
  2: { gridTemplateColumns: "repeat(2, minmax(0, 1fr))" },
  3: { gridTemplateColumns: "repeat(3, minmax(0, 1fr))" },
  4: { gridTemplateColumns: "repeat(4, minmax(0, 1fr))" },
  auto: { gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))" },
});

export const gridGap = styleVariants({
  4: { gap: vars.space[4] },
  6: { gap: vars.space[6] },
  8: { gap: vars.space[8] },
});

export const sidebarLayout = style({
  display: "grid",
  gridTemplateColumns: "1fr",
  gap: vars.space[6],
  "@media": {
    [`(min-width: ${breakpoints.lg})`]: {
      gridTemplateColumns: "280px 1fr",
      gap: vars.space[8],
    },
  },
});

export const sidebarLayoutWide = style({
  display: "grid",
  gridTemplateColumns: "1fr",
  gap: vars.space[6],
  "@media": {
    [`(min-width: ${breakpoints.lg})`]: {
      gridTemplateColumns: "320px 1fr",
      gap: vars.space[8],
    },
  },
});

export const center = style({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
});

export const centerVertical = style({
  display: "flex",
  alignItems: "center",
});

export const centerHorizontal = style({
  display: "flex",
  justifyContent: "center",
});

export const spacer = style({
  flex: 1,
});

export const divider = style({
  width: "100%",
  height: "1px",
  backgroundColor: vars.color.border.subtle,
  border: "none",
  margin: 0,
});

export const dividerVertical = style({
  width: "1px",
  height: "100%",
  backgroundColor: vars.color.border.subtle,
  border: "none",
  margin: 0,
  alignSelf: "stretch",
});
