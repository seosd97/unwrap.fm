import type { ReactNode } from "react";

import * as styles from "../sidebar.css";

interface SidebarProps {
  children?: ReactNode;
}

export function Sidebar({ children }: SidebarProps) {
  return (
    <aside className={styles.root}>
      <nav className={styles.inner}>{children}</nav>
    </aside>
  );
}

export function SidebarSection({ children }: { children?: ReactNode }) {
  return <div className={styles.section}>{children}</div>;
}

export function SidebarSectionTitle({ children }: { children?: ReactNode }) {
  return <div className={styles.sectionTitle}>{children}</div>;
}
