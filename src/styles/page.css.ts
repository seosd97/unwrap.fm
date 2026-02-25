import { keyframes, style, styleVariants } from "@vanilla-extract/css";
import { breakpoints } from "./breakpoints";
import { vars } from "./theme.css";

const spin = keyframes({
  "0%": { transform: "rotate(0deg)" },
  "100%": { transform: "rotate(360deg)" },
});

export const heroSection = style({
  minHeight: "60vh",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  padding: `${vars.space[16]} ${vars.space[6]}`,
  textAlign: "center",
  "@media": {
    [`(min-width: ${breakpoints.md})`]: {
      minHeight: "70vh",
      padding: `${vars.space[20]} ${vars.space[8]}`,
    },
  },
});

export const heroContent = style({
  maxWidth: "48rem",
  marginLeft: "auto",
  marginRight: "auto",
});

export const heroTitle = style({
  fontSize: vars.fontSize["4xl"],
  fontWeight: vars.fontWeight.bold,
  color: vars.color.text.primary,
  marginBottom: vars.space[6],
  lineHeight: vars.lineHeight.tight,
  letterSpacing: vars.letterSpacing.tight,
  "@media": {
    [`(min-width: ${breakpoints.md})`]: {
      fontSize: vars.fontSize["5xl"],
      marginBottom: vars.space[8],
    },
  },
});

export const heroSubtitle = style({
  fontSize: vars.fontSize.xl,
  color: vars.color.text.secondary,
  lineHeight: vars.lineHeight.relaxed,
  marginBottom: vars.space[8],
  "@media": {
    [`(min-width: ${breakpoints.md})`]: {
      fontSize: vars.fontSize["2xl"],
      marginBottom: vars.space[10],
    },
  },
});

export const contentSection = style({
  padding: `${vars.space[12]} ${vars.space[6]}`,
  "@media": {
    [`(min-width: ${breakpoints.md})`]: {
      padding: `${vars.space[16]} ${vars.space[8]}`,
    },
  },
});

export const contentNarrow = style({
  maxWidth: "42rem",
  marginLeft: "auto",
  marginRight: "auto",
});

export const contentWide = style({
  maxWidth: "72rem",
  marginLeft: "auto",
  marginRight: "auto",
});

export const contentFull = style({
  maxWidth: "100%",
  marginLeft: "auto",
  marginRight: "auto",
});

export const pageTitle = style({
  fontSize: vars.fontSize["3xl"],
  fontWeight: vars.fontWeight.bold,
  color: vars.color.text.primary,
  marginBottom: vars.space[2],
});

export const pageDescription = style({
  fontSize: vars.fontSize.lg,
  color: vars.color.text.secondary,
  lineHeight: vars.lineHeight.relaxed,
});

export const sectionTitle = style({
  fontSize: vars.fontSize["2xl"],
  fontWeight: vars.fontWeight.semibold,
  color: vars.color.text.primary,
  marginBottom: vars.space[6],
});

export const emptyState = style({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  padding: vars.space[12],
  textAlign: "center",
  minHeight: "200px",
});

export const emptyStateIcon = style({
  color: vars.color.text.tertiary,
  marginBottom: vars.space[4],
});

export const emptyStateTitle = style({
  fontSize: vars.fontSize.lg,
  fontWeight: vars.fontWeight.medium,
  color: vars.color.text.primary,
  marginBottom: vars.space[2],
});

export const emptyStateDescription = style({
  fontSize: vars.fontSize.base,
  color: vars.color.text.secondary,
  maxWidth: "24rem",
});

export const errorState = style({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  padding: vars.space[12],
  textAlign: "center",
  minHeight: "300px",
});

export const errorStateIcon = style({
  color: vars.color.status.danger,
  marginBottom: vars.space[4],
});

export const errorStateTitle = style({
  fontSize: vars.fontSize.xl,
  fontWeight: vars.fontWeight.semibold,
  color: vars.color.text.primary,
  marginBottom: vars.space[2],
});

export const errorStateDescription = style({
  fontSize: vars.fontSize.base,
  color: vars.color.text.secondary,
  maxWidth: "28rem",
  marginBottom: vars.space[6],
});

export const loadingState = style({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  padding: vars.space[12],
  minHeight: "200px",
});

export const loadingSpinner = style({
  width: "32px",
  height: "32px",
  border: `2px solid ${vars.color.border.subtle}`,
  borderTopColor: vars.color.border.focusRing,
  borderRadius: "50%",
  animation: `${spin} 0.8s linear infinite`,
});

export const loadingText = style({
  marginTop: vars.space[4],
  fontSize: vars.fontSize.sm,
  color: vars.color.text.tertiary,
});

export const indexNumber = styleVariants({
  default: {
    fontFamily:
      'ui-monospace, SFMono-Regular, "SF Mono", Menlo, Consolas, monospace',
    fontSize: vars.fontSize.xs,
    fontWeight: vars.fontWeight.normal,
    color: vars.color.text.tertiary,
    letterSpacing: vars.letterSpacing.normal,
  },
  accent: {
    fontFamily:
      'ui-monospace, SFMono-Regular, "SF Mono", Menlo, Consolas, monospace',
    fontSize: vars.fontSize.xs,
    fontWeight: vars.fontWeight.medium,
    color: vars.color.text.secondary,
    letterSpacing: vars.letterSpacing.normal,
  },
});

export const editorialIndex = style({
  display: "flex",
  alignItems: "center",
  gap: vars.space[3],
  fontSize: vars.fontSize.xs,
  color: vars.color.text.tertiary,
  textTransform: "uppercase",
  letterSpacing: vars.letterSpacing.wider,
  marginBottom: vars.space[6],
});

export const editorialIndexNumber = style({
  fontFamily:
    'ui-monospace, SFMono-Regular, "SF Mono", Menlo, Consolas, monospace',
  fontWeight: vars.fontWeight.medium,
  color: vars.color.text.secondary,
  letterSpacing: vars.letterSpacing.normal,
});

export const editorialIndexLine = style({
  flex: 1,
  height: "1px",
  backgroundColor: vars.color.border.subtle,
});
