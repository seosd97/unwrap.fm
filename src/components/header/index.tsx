import { Link } from "@tanstack/react-router";
import { Home, Menu, User, X } from "lucide-react";
import { useState } from "react";

import * as styles from "./header.css";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <header className={styles.header}>
        <button
          type="button"
          onClick={() => setIsOpen(true)}
          className={styles.menuButton}
          aria-label="Open menu"
        >
          <Menu size={24} />
        </button>
        <h1 className={styles.title}>
          <Link to="/">unwrap.fm</Link>
        </h1>
      </header>

      <aside className={`${styles.aside} ${isOpen ? styles.asideOpen : ""}`}>
        <div className={styles.asideHeader}>
          <h2 className={styles.asideTitle}>Navigation</h2>
          <button
            type="button"
            onClick={() => setIsOpen(false)}
            className={styles.closeButton}
            aria-label="Close menu"
          >
            <X size={24} />
          </button>
        </div>

        <nav className={styles.nav}>
          <Link
            to="/"
            onClick={() => setIsOpen(false)}
            className={styles.navLink}
            activeProps={{
              className: `${styles.navLink} ${styles.navLinkActive}`,
            }}
          >
            <Home size={20} />
            <span className={styles.navLinkText}>Home</span>
          </Link>

          <Link
            to="/account"
            onClick={() => setIsOpen(false)}
            className={styles.navLink}
            activeProps={{
              className: `${styles.navLink} ${styles.navLinkActive}`,
            }}
          >
            <User size={20} />
            <span className={styles.navLinkText}>Account</span>
          </Link>
        </nav>
      </aside>
    </>
  );
}
