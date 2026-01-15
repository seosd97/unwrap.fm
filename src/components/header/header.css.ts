import { style } from "@vanilla-extract/css";
import { vars } from "@/styles/theme.css";

export const header = style({
  padding: vars.space[4],
  display: "flex",
  alignItems: "center",
  backgroundColor: vars.color.gray[800],
  color: vars.color.white,
  boxShadow: "0 10px 15px -3px rgb(0 0 0 / 0.1)",
});

export const menuButton = style({
  padding: vars.space[2],
  borderRadius: vars.borderRadius.lg,
  transition: vars.transition.colors,
  ":hover": {
    backgroundColor: vars.color.gray[700],
  },
});

export const title = style({
  marginLeft: vars.space[4],
  fontSize: vars.fontSize.xl,
  fontWeight: vars.fontWeight.semibold,
});

export const aside = style({
  position: "fixed",
  top: 0,
  left: 0,
  height: "100%",
  width: "20rem",
  backgroundColor: vars.color.gray[900],
  color: vars.color.white,
  boxShadow: "0 25px 50px -12px rgb(0 0 0 / 0.25)",
  zIndex: vars.zIndex[50],
  transform: "translateX(-100%)",
  transition: vars.transition.transform,
  display: "flex",
  flexDirection: "column",
});

export const asideOpen = style({
  transform: "translateX(0)",
});

export const asideHeader = style({
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  padding: vars.space[4],
  borderBottom: `1px solid ${vars.color.gray[700]}`,
});

export const asideTitle = style({
  fontSize: vars.fontSize.xl,
  fontWeight: vars.fontWeight.bold,
});

export const closeButton = style({
  padding: vars.space[2],
  borderRadius: vars.borderRadius.lg,
  transition: vars.transition.colors,
  ":hover": {
    backgroundColor: vars.color.gray[800],
  },
});

export const nav = style({
  flex: 1,
  padding: vars.space[4],
  overflowY: "auto",
});

export const navLink = style({
  display: "flex",
  alignItems: "center",
  gap: vars.space[3],
  padding: vars.space[3],
  borderRadius: vars.borderRadius.lg,
  transition: vars.transition.colors,
  marginBottom: vars.space[2],
  ":hover": {
    backgroundColor: vars.color.gray[800],
  },
});

export const navLinkActive = style({
  backgroundColor: vars.color.cyan[600],
  ":hover": {
    backgroundColor: vars.color.cyan[700],
  },
});

export const navLinkText = style({
  fontWeight: vars.fontWeight.medium,
});
