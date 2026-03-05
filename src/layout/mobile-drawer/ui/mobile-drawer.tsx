import { X } from "lucide-react";
import type { ReactNode } from "react";

import * as styles from "../mobile-drawer.css";

interface MobileDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  children?: ReactNode;
}

export function MobileDrawer({ isOpen, onClose, children }: MobileDrawerProps) {
  return (
    <>
      <div
        className={`${styles.overlay} ${isOpen ? styles.overlayOpen : ""}`}
        onClick={onClose}
        aria-hidden="true"
      />
      <aside
        className={`${styles.drawer} ${isOpen ? styles.drawerOpen : ""}`}
        role="dialog"
        aria-modal={isOpen}
        aria-label="Navigation menu"
      >
        <div className={styles.header}>
          <a href="/" className={styles.logo}>
            unwrap<span className={styles.logoAccent}>.</span>fm
          </a>
          <button
            type="button"
            onClick={onClose}
            className={styles.closeButton}
            aria-label="Close menu"
          >
            <X size={20} />
          </button>
        </div>
        <nav className={styles.inner}>{children}</nav>
      </aside>
    </>
  );
}
