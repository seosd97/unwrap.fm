import type { ReactNode } from "react";
import { Link, type LinkProps } from "react-router";

import * as styles from "../sidebar.css";

interface NavItemProps {
  to: LinkProps["to"];
  icon?: ReactNode;
  isActive?: boolean;
  children?: ReactNode;
  onClick?: () => void;
}

export function NavItem({
  to,
  icon,
  isActive,
  children,
  onClick,
}: NavItemProps) {
  return (
    <Link
      to={to}
      className={`${styles.navItem} ${isActive ? styles.navItemActive : ""}`}
      onClick={onClick}
      aria-current={isActive ? "page" : undefined}
    >
      {icon && <span className={styles.navItemIcon}>{icon}</span>}
      <span className={styles.navItemLabel}>{children}</span>
    </Link>
  );
}
