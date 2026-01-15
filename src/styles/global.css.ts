import { globalStyle } from "@vanilla-extract/css";
import { vars } from "./theme.css";

globalStyle("*, *::before, *::after", {
  boxSizing: "border-box",
  margin: 0,
  padding: 0,
});

globalStyle("html", {
  lineHeight: 1.5,
  WebkitTextSizeAdjust: "100%",
});

globalStyle("body", {
  fontFamily:
    'ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif',
  backgroundColor: vars.color.slate[900],
  color: vars.color.white,
  minHeight: "100vh",
});

globalStyle("a", {
  color: "inherit",
  textDecoration: "none",
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
