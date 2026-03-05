import { Menu, Search } from "lucide-react";
import type { ReactNode } from "react";

import * as styles from "../top-nav.css";

interface TopNavProps {
  onMenuClick?: () => void;
  children?: ReactNode;
}

export function TopNav({ onMenuClick, children }: TopNavProps) {
  return (
    <header className={styles.root}>
      <div className={styles.left}>
        <button
          type="button"
          onClick={onMenuClick}
          className={styles.mobileMenuButton}
          aria-label="Open menu"
        >
          <Menu size={24} />
        </button>
        <a href="/" className={styles.logo}>
          unwrap<span className={styles.logoAccent}>.</span>fm
        </a>
      </div>
      <div className={styles.center}>
        <div className={styles.searchBox}>
          <Search size={18} />
          <input
            type="text"
            placeholder="Search artists, tracks..."
            className={styles.searchInput}
          />
        </div>
      </div>
      <div className={styles.right}>{children}</div>
    </header>
  );
}
