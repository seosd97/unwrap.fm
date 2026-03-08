import { style } from "@vanilla-extract/css";
import { vars } from "@/shared/styles/theme.css";
import { breakpoints } from "@/shared/styles/breakpoints";

export const container = style({
  display: "flex",
  flexDirection: "column",
  gap: vars.space[10],
});

// ─── Hero ────────────────────────────────────────────────

export const hero = style({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  textAlign: "center",
  gap: vars.space[6],
  paddingTop: vars.space[12],
  paddingBottom: vars.space[12],
});

export const heroLabel = style({
  fontSize: vars.fontSize.caption100,
  fontWeight: vars.fontWeight.semibold,
  color: vars.color.text.tertiary,
  letterSpacing: vars.letterSpacing.widest,
  textTransform: "uppercase",
});

export const heroTitle = style({
  fontSize: vars.fontSize.heading300,
  fontWeight: vars.fontWeight.bold,
  lineHeight: vars.lineHeight.heading300,
  color: vars.color.text.primary,
  letterSpacing: vars.letterSpacing.tight,
  maxWidth: "600px",
  "@media": {
    [`(min-width: ${breakpoints.md})`]: {
      fontSize: vars.fontSize.display200,
    },
  },
});

export const heroAccent = style({
  color: vars.color.text.link,
});

export const heroDescription = style({
  fontSize: vars.fontSize.title200,
  lineHeight: vars.lineHeight.relaxed,
  color: vars.color.text.secondary,
  maxWidth: "480px",
});

export const heroCta = style({
  display: "inline-flex",
  alignItems: "center",
  gap: vars.space[2],
  paddingTop: vars.space[3],
  paddingBottom: vars.space[3],
  paddingLeft: vars.space[6],
  paddingRight: vars.space[6],
  backgroundColor: vars.color.action.primary.bg,
  color: vars.color.action.primary.text,
  fontSize: vars.fontSize.body200,
  fontWeight: vars.fontWeight.semibold,
  borderRadius: vars.borderRadius.lg,
  border: "none",
  cursor: "pointer",
  transition: vars.transition.colors,
  ":hover": {
    backgroundColor: vars.color.action.primary.bgHover,
  },
  ":active": {
    backgroundColor: vars.color.action.primary.bgActive,
  },
});

// ─── Stats ───────────────────────────────────────────────

export const statsGrid = style({
  display: "grid",
  gridTemplateColumns: "repeat(2, 1fr)",
  gap: vars.space[4],
  "@media": {
    [`(min-width: ${breakpoints.md})`]: {
      gridTemplateColumns: "repeat(4, 1fr)",
    },
  },
});

export const statCard = style({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  gap: vars.space[1],
  padding: vars.space[6],
  backgroundColor: vars.color.bg.surface,
  border: `1px solid ${vars.color.border.subtle}`,
  borderRadius: vars.borderRadius.xl,
  transition: vars.transition.colors,
});

export const statNumber = style({
  fontSize: vars.fontSize.heading200,
  fontWeight: vars.fontWeight.bold,
  lineHeight: vars.lineHeight.heading200,
  color: vars.color.text.primary,
  fontVariantNumeric: "tabular-nums",
  "@media": {
    [`(min-width: ${breakpoints.md})`]: {
      fontSize: vars.fontSize.display100,
    },
  },
});

export const statLabel = style({
  fontSize: vars.fontSize.body100,
  color: vars.color.text.tertiary,
  fontWeight: vars.fontWeight.medium,
});

// ─── Features ────────────────────────────────────────────

export const featuresSection = style({
  display: "flex",
  flexDirection: "column",
  gap: vars.space[6],
});

export const featuresSectionTitle = style({
  fontSize: vars.fontSize.caption100,
  fontWeight: vars.fontWeight.semibold,
  color: vars.color.text.tertiary,
  letterSpacing: vars.letterSpacing.widest,
  textTransform: "uppercase",
  textAlign: "center",
});

export const featuresGrid = style({
  display: "grid",
  gridTemplateColumns: "1fr",
  gap: vars.space[4],
  "@media": {
    [`(min-width: ${breakpoints.md})`]: {
      gridTemplateColumns: "repeat(3, 1fr)",
    },
  },
});

export const featureCard = style({
  display: "flex",
  flexDirection: "column",
  gap: vars.space[3],
  padding: vars.space[6],
  backgroundColor: vars.color.bg.surface,
  border: `1px solid ${vars.color.border.subtle}`,
  borderRadius: vars.borderRadius.xl,
});

export const featureIcon = style({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  width: "40px",
  height: "40px",
  borderRadius: vars.borderRadius.lg,
  backgroundColor: vars.color.bg.surfaceElevated,
  color: vars.color.text.link,
});

export const featureTitle = style({
  fontSize: vars.fontSize.title100,
  fontWeight: vars.fontWeight.semibold,
  color: vars.color.text.primary,
});

export const featureDescription = style({
  fontSize: vars.fontSize.body100,
  lineHeight: vars.lineHeight.body100,
  color: vars.color.text.secondary,
});
