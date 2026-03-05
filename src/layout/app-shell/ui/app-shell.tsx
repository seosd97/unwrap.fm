import type { ReactNode } from "react";

import * as styles from "../app-shell.css";

interface AppShellProps {
  children: ReactNode;
}

export function AppShell({ children }: AppShellProps) {
  return <div className={styles.root}>{children}</div>;
}
