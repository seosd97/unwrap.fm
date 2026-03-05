import type { ReactNode } from "react";

import * as styles from "../main-content.css";

export function Main({ children }: { children?: ReactNode }) {
  return <main className={styles.main}>{children}</main>;
}

export function MainContent({ children }: { children?: ReactNode }) {
  return <div className={styles.content}>{children}</div>;
}
