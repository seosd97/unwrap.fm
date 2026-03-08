import { globalStyle } from "@vanilla-extract/css";
import { vars } from "./theme.css";

globalStyle("*, *::before, *::after", {
  boxSizing: "border-box",
  margin: 0,
  padding: 0,
});

globalStyle("html", {
  lineHeight: vars.lineHeight.normal,
  WebkitTextSizeAdjust: "100%",
  MozTabSize: "4",
  tabSize: "4",
});

globalStyle("body", {
  fontFamily:
    'ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif',
  backgroundColor: vars.color.bg.canvas,
  color: vars.color.text.primary,
  minHeight: "100vh",
  fontFeatureSettings: '"cv02", "cv03", "cv04", "cv11"',
  WebkitFontSmoothing: "antialiased",
  MozOsxFontSmoothing: "grayscale",
});

globalStyle("::selection", {
  backgroundColor: vars.color.bg.selection,
  color: vars.color.text.primary,
});

globalStyle(":focus", {
  outline: "none",
});

globalStyle(":focus-visible", {
  outline: `2px solid ${vars.color.border.focusRing}`,
  outlineOffset: "2px",
});

globalStyle("::placeholder", {
  color: vars.color.text.disabled,
  opacity: 1,
});

globalStyle("h1, h2, h3, h4, h5, h6", {
  lineHeight: vars.lineHeight.tight,
  fontWeight: vars.fontWeight.semibold,
  color: vars.color.text.primary,
});

globalStyle("h1", { fontSize: vars.fontSize.display200 });
globalStyle("h2", { fontSize: vars.fontSize.display100 });
globalStyle("h3", { fontSize: vars.fontSize.heading300 });
globalStyle("h4", { fontSize: vars.fontSize.heading200 });
globalStyle("h5", { fontSize: vars.fontSize.heading100 });
globalStyle("h6", { fontSize: vars.fontSize.title200 });

globalStyle("p", {
  lineHeight: vars.lineHeight.normal,
});

globalStyle("a", {
  color: vars.color.text.link,
  textDecoration: "none",
  transition: vars.transition.colors,
});

globalStyle("a:hover", {
  color: vars.color.text.linkHover,
});

globalStyle("a:focus-visible", {
  outline: `2px solid ${vars.color.border.focusRing}`,
  outlineOffset: "2px",
  borderRadius: vars.borderRadius.sm,
});

globalStyle("button", {
  fontFamily: "inherit",
  fontSize: "100%",
  lineHeight: "inherit",
  color: "inherit",
  margin: 0,
  padding: 0,
  backgroundColor: "transparent",
  border: "none",
  cursor: "pointer",
});

globalStyle("button:disabled", {
  cursor: "not-allowed",
  opacity: 0.5,
});

globalStyle("button:focus-visible", {
  outline: `2px solid ${vars.color.border.focusRing}`,
  outlineOffset: "2px",
  borderRadius: vars.borderRadius.sm,
});

globalStyle("input, textarea, select", {
  fontFamily: "inherit",
  fontSize: "100%",
  lineHeight: "inherit",
  color: vars.color.text.primary,
  backgroundColor: vars.color.bg.surface,
  border: `1px solid ${vars.color.border.default}`,
  borderRadius: vars.borderRadius.md,
  padding: `${vars.space[2]} ${vars.space[3]}`,
  transition: vars.transition.colors,
});

globalStyle("input:focus, textarea:focus, select:focus", {
  borderColor: vars.color.border.focusRing,
  outline: "none",
});

globalStyle(
  "input:focus-visible, textarea:focus-visible, select:focus-visible",
  {
    outline: `2px solid ${vars.color.border.focusRing}`,
    outlineOffset: "2px",
  },
);

globalStyle("input:disabled, textarea:disabled, select:disabled", {
  cursor: "not-allowed",
  opacity: 0.5,
});

globalStyle("code, pre", {
  fontFamily:
    'ui-monospace, SFMono-Regular, "SF Mono", Menlo, Consolas, "Liberation Mono", monospace',
  fontSize: "0.875em",
});

globalStyle("code", {
  backgroundColor: vars.color.bg.surfaceSunken,
  padding: "0.125em 0.375em",
  borderRadius: vars.borderRadius.sm,
});

globalStyle("pre", {
  backgroundColor: vars.color.bg.surface,
  border: `1px solid ${vars.color.border.subtle}`,
  borderRadius: vars.borderRadius.lg,
  padding: vars.space[4],
  overflowX: "auto",
});

globalStyle("pre code", {
  backgroundColor: "transparent",
  padding: 0,
  borderRadius: 0,
});

globalStyle("hr", {
  border: "none",
  borderTop: `1px solid ${vars.color.border.subtle}`,
  margin: `${vars.space[6]} 0`,
});

globalStyle("ul, ol", {
  paddingInlineStart: vars.space[6],
});

globalStyle("li", {
  marginBlock: vars.space[1],
});

globalStyle("blockquote", {
  borderLeft: `3px solid ${vars.color.border.strong}`,
  paddingLeft: vars.space[4],
  marginLeft: 0,
  color: vars.color.text.secondary,
  fontStyle: "italic",
});

globalStyle("img, video", {
  maxWidth: "100%",
  height: "auto",
});

globalStyle("table", {
  borderCollapse: "collapse",
  width: "100%",
});

globalStyle("th, td", {
  textAlign: "left",
  padding: `${vars.space[3]} ${vars.space[4]}`,
  borderBottom: `1px solid ${vars.color.border.subtle}`,
});

globalStyle("th", {
  fontWeight: vars.fontWeight.semibold,
  color: vars.color.text.secondary,
  fontSize: vars.fontSize.body100,
  letterSpacing: vars.letterSpacing.wide,
  textTransform: "uppercase",
});

globalStyle("tr:hover td", {
  backgroundColor: vars.color.bg.selection,
});
