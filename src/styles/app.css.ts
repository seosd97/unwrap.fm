import { style, styleVariants } from "@vanilla-extract/css";
import { breakpoints } from "./breakpoints";
import { vars } from "./theme.css";

export const appShell = style({
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

export const topNav = style({
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

export const topNavLeft = style({
  display: "flex",
  alignItems: "center",
  gap: vars.space[4],
});

export const topNavCenter = style({
  flex: 1,
  maxWidth: "400px",
  margin: `0 ${vars.space[8]}`,
  "@media": {
    [`(max-width: ${breakpoints.md})`]: {
      display: "none",
    },
  },
});

export const topNavRight = style({
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

export const sidebar = style({
  display: "none",
  "@media": {
    [`(min-width: ${breakpoints.lg})`]: {
      display: "flex",
      flexDirection: "column",
      position: "sticky",
      top: "56px",
      height: "calc(100vh - 56px)",
      backgroundColor: vars.color.bg.surface,
      borderRight: `1px solid ${vars.color.border.subtle}`,
      overflowY: "auto",
    },
  },
});

export const sidebarInner = style({
  display: "flex",
  flexDirection: "column",
  padding: vars.space[4],
  gap: vars.space[1],
});

export const sidebarSection = style({
  display: "flex",
  flexDirection: "column",
  gap: vars.space[1],
  marginTop: vars.space[4],
  paddingTop: vars.space[4],
  borderTop: `1px solid ${vars.color.border.subtle}`,
  selectors: {
    "&:first-of-type": {
      marginTop: 0,
      paddingTop: 0,
      borderTop: "none",
    },
  },
});

export const sidebarSectionTitle = style({
  fontSize: vars.fontSize.xs,
  fontWeight: vars.fontWeight.semibold,
  color: vars.color.text.tertiary,
  letterSpacing: vars.letterSpacing.wider,
  textTransform: "uppercase",
  padding: `${vars.space[2]} ${vars.space[3]}`,
});

export const navItem = style({
  display: "flex",
  alignItems: "center",
  gap: vars.space[3],
  padding: `${vars.space[3]} ${vars.space[3]}`,
  borderRadius: vars.borderRadius.lg,
  color: vars.color.text.secondary,
  transition: vars.transition.colors,
  textDecoration: "none",
  ":hover": {
    backgroundColor: vars.color.bg.surfaceElevated,
    color: vars.color.text.primary,
  },
  ":focus-visible": {
    outline: `2px solid ${vars.color.border.focusRing}`,
    outlineOffset: "2px",
  },
});

export const navItemActive = style({
  backgroundColor: vars.color.bg.selection,
  color: vars.color.text.primary,
  fontWeight: vars.fontWeight.medium,
  ":hover": {
    backgroundColor: vars.color.bg.selection,
  },
});

export const navItemIcon = style({
  flexShrink: 0,
  width: "20px",
  height: "20px",
});

export const navItemLabel = style({
  fontSize: vars.fontSize.sm,
  whiteSpace: "nowrap",
  overflow: "hidden",
  textOverflow: "ellipsis",
});

export const main = style({
  display: "flex",
  flexDirection: "column",
  minHeight: 0,
  overflowY: "auto",
  backgroundColor: vars.color.bg.canvas,
});

export const mainContent = style({
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

export const moodTimeline = style({
  display: "flex",
  flexDirection: "column",
  gap: vars.space[3],
  padding: vars.space[5],
  backgroundColor: vars.color.bg.surface,
  borderRadius: vars.borderRadius.xl,
  border: `1px solid ${vars.color.border.subtle}`,
});

export const moodTimelineHeader = style({
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
});

export const moodTimelineTitle = style({
  fontSize: vars.fontSize.sm,
  fontWeight: vars.fontWeight.medium,
  color: vars.color.text.secondary,
});

export const moodTimelineBars = style({
  display: "flex",
  gap: vars.space[2],
});

export const moodBarItem = style({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  gap: vars.space[2],
  flex: 1,
  padding: vars.space[3],
  borderRadius: vars.borderRadius.lg,
  backgroundColor: vars.color.bg.canvas,
  transition: vars.transition.colors,
  ":hover": {
    backgroundColor: vars.color.bg.surfaceElevated,
  },
});

export const moodBarEmoji = style({
  fontSize: vars.fontSize.lg,
});

export const moodBarLabel = style({
  fontSize: vars.fontSize.xs,
  fontWeight: vars.fontWeight.medium,
  color: vars.color.text.secondary,
  textAlign: "center",
});

export const moodBarTime = style({
  fontSize: vars.fontSize.xs,
  color: vars.color.text.tertiary,
});

export const visualHero = style({
  position: "relative",
  display: "flex",
  flexDirection: "column",
  justifyContent: "flex-end",
  padding: vars.space[8],
  borderRadius: vars.borderRadius.xl,
  overflow: "hidden",
  minHeight: "240px",
  "@media": {
    [`(min-width: ${breakpoints.md})`]: {
      padding: vars.space[10],
      minHeight: "280px",
    },
  },
});

export const visualHeroGradient = styleVariants({
  cyan: {
    background: `linear-gradient(135deg, ${vars.palette.teal[800]} 0%, ${vars.palette.teal[600]} 50%, ${vars.palette.teal[500]} 100%)`,
  },
  purple: {
    background: `linear-gradient(135deg, #1e1b4b 0%, #4c1d95 50%, #7c3aed 100%)`,
  },
  warm: {
    background: `linear-gradient(135deg, #451a03 0%, #92400e 50%, #d97706 100%)`,
  },
  cool: {
    background: `linear-gradient(135deg, #0c4a6e 0%, #0369a1 50%, #0ea5e9 100%)`,
  },
});

export const visualHeroOverlay = style({
  position: "absolute",
  inset: 0,
  background:
    "linear-gradient(to top, rgba(0,0,0,0.6) 0%, rgba(0,0,0,0.2) 50%, transparent 100%)",
});

export const visualHeroContent = style({
  position: "relative",
  zIndex: 1,
});

export const visualHeroTag = style({
  display: "inline-flex",
  alignItems: "center",
  gap: vars.space[2],
  padding: `${vars.space[1]} ${vars.space[3]}`,
  marginBottom: vars.space[3],
  backgroundColor: "rgba(255,255,255,0.15)",
  backdropFilter: "blur(4px)",
  borderRadius: vars.borderRadius.full,
  fontSize: vars.fontSize.xs,
  fontWeight: vars.fontWeight.medium,
  color: "#FFFFFF",
});

export const visualHeroHeadline = style({
  fontSize: vars.fontSize["3xl"],
  fontWeight: vars.fontWeight.bold,
  color: "#FFFFFF",
  marginBottom: vars.space[2],
  lineHeight: vars.lineHeight.tight,
  "@media": {
    [`(min-width: ${breakpoints.md})`]: {
      fontSize: vars.fontSize["4xl"],
    },
  },
});

export const visualHeroSubheadline = style({
  fontSize: vars.fontSize.base,
  color: "rgba(255,255,255,0.85)",
  lineHeight: vars.lineHeight.relaxed,
});

export const bigStats = style({
  display: "grid",
  gridTemplateColumns: "repeat(2, 1fr)",
  gap: vars.space[4],
  "@media": {
    [`(min-width: ${breakpoints.md})`]: {
      gridTemplateColumns: "repeat(4, 1fr)",
    },
  },
});

export const bigStatItem = style({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  padding: vars.space[5],
  backgroundColor: vars.color.bg.surface,
  borderRadius: vars.borderRadius.xl,
  border: `1px solid ${vars.color.border.subtle}`,
  textAlign: "center",
});

export const bigStatValue = style({
  fontSize: vars.fontSize["3xl"],
  fontWeight: vars.fontWeight.bold,
  color: vars.color.text.primary,
  lineHeight: 1,
  marginBottom: vars.space[2],
  fontVariantNumeric: "tabular-nums",
});

export const bigStatLabel = style({
  fontSize: vars.fontSize.sm,
  color: vars.color.text.secondary,
  marginBottom: vars.space[1],
});

export const bigStatSublabel = style({
  fontSize: vars.fontSize.xs,
  color: vars.color.text.tertiary,
});

export const contentGrid = style({
  display: "grid",
  gridTemplateColumns: "1fr",
  gap: vars.space[6],
  "@media": {
    [`(min-width: ${breakpoints.md})`]: {
      gridTemplateColumns: "repeat(2, 1fr)",
    },
  },
});

export const contentCard = style({
  backgroundColor: vars.color.bg.surface,
  borderRadius: vars.borderRadius.xl,
  border: `1px solid ${vars.color.border.subtle}`,
  overflow: "hidden",
});

export const contentCardHeader = style({
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  padding: `${vars.space[4]} ${vars.space[5]}`,
  borderBottom: `1px solid ${vars.color.border.subtle}`,
});

export const contentCardTitle = style({
  fontSize: vars.fontSize.lg,
  fontWeight: vars.fontWeight.semibold,
  color: vars.color.text.primary,
});

export const contentCardBody = style({
  padding: vars.space[3],
});

export const rankingList = style({
  display: "flex",
  flexDirection: "column",
});

export const rankingItem = style({
  display: "flex",
  alignItems: "center",
  gap: vars.space[4],
  padding: vars.space[3],
  borderRadius: vars.borderRadius.lg,
  transition: vars.transition.colors,
  ":hover": {
    backgroundColor: vars.color.bg.surfaceElevated,
  },
});

export const rankingNumber = style({
  width: "24px",
  fontSize: vars.fontSize.sm,
  fontWeight: vars.fontWeight.semibold,
  color: vars.color.text.tertiary,
  textAlign: "center",
  flexShrink: 0,
});

export const rankingArt = style({
  width: "48px",
  height: "48px",
  borderRadius: vars.borderRadius.md,
  backgroundColor: vars.color.bg.surfaceElevated,
  flexShrink: 0,
  overflow: "hidden",
});

export const rankingInfo = style({
  flex: 1,
  minWidth: 0,
});

export const rankingName = style({
  fontSize: vars.fontSize.sm,
  fontWeight: vars.fontWeight.medium,
  color: vars.color.text.primary,
  whiteSpace: "nowrap",
  overflow: "hidden",
  textOverflow: "ellipsis",
});

export const rankingMeta = style({
  fontSize: vars.fontSize.xs,
  color: vars.color.text.tertiary,
  marginTop: vars.space[1],
});

export const rankingPlays = style({
  display: "flex",
  alignItems: "center",
  gap: vars.space[1],
  fontSize: vars.fontSize.xs,
  color: vars.color.text.secondary,
  flexShrink: 0,
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

export const drawerOverlay = style({
  position: "fixed",
  inset: 0,
  backgroundColor: vars.color.bg.overlayScrim,
  zIndex: vars.zIndex[40],
  opacity: 0,
  visibility: "hidden",
  transition: `opacity ${vars.transition.normal}, visibility ${vars.transition.normal}`,
});

export const drawerOverlayOpen = style({
  opacity: 1,
  visibility: "visible",
});

export const drawerHeader = style({
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  padding: vars.space[4],
  borderBottom: `1px solid ${vars.color.border.subtle}`,
});

export const drawerClose = style({
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

export const iconButton = style({
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

export const avatar = style({
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
