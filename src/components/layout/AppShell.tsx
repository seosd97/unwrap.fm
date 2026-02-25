import { Link, type LinkProps } from "@tanstack/react-router";
import type { ReactNode } from "react";
import { useState } from "react";

import * as styles from "@/styles/app.css";

interface AppShellProps {
  children: ReactNode;
}

export function AppShell({ children }: AppShellProps) {
  return <div className={styles.appShell}>{children}</div>;
}

interface TopNavProps {
  onMenuClick?: () => void;
  children?: ReactNode;
}

export function TopNav({ onMenuClick, children }: TopNavProps) {
  return (
    <header className={styles.topNav}>
      <div className={styles.topNavLeft}>
        <button
          type="button"
          onClick={onMenuClick}
          className={styles.mobileMenuButton}
          aria-label="Open menu"
        >
          <MenuIcon />
        </button>
        <a href="/" className={styles.logo}>
          unwrap<span className={styles.logoAccent}>.</span>fm
        </a>
      </div>
      <div className={styles.topNavCenter}>
        <div className={styles.searchBox}>
          <SearchIcon />
          <input
            type="text"
            placeholder="Search artists, tracks..."
            className={styles.searchInput}
          />
        </div>
      </div>
      <div className={styles.topNavRight}>{children}</div>
    </header>
  );
}

interface SidebarProps {
  children?: ReactNode;
}

export function Sidebar({ children }: SidebarProps) {
  return (
    <aside className={styles.sidebar}>
      <nav className={styles.sidebarInner}>{children}</nav>
    </aside>
  );
}

export function SidebarSection({ children }: { children?: ReactNode }) {
  return <div className={styles.sidebarSection}>{children}</div>;
}

export function SidebarSectionTitle({ children }: { children?: ReactNode }) {
  return <div className={styles.sidebarSectionTitle}>{children}</div>;
}

interface NavItemProps extends Omit<LinkProps, "className"> {
  icon?: ReactNode;
  isActive?: boolean;
  children?: ReactNode;
  onClick?: () => void;
}

export function NavItem({
  icon,
  isActive,
  children,
  onClick,
  ...props
}: NavItemProps) {
  return (
    <Link
      {...props}
      className={`${styles.navItem} ${isActive ? styles.navItemActive : ""}`}
      onClick={onClick}
    >
      {icon && <span className={styles.navItemIcon}>{icon}</span>}
      <span className={styles.navItemLabel}>{children}</span>
    </Link>
  );
}

export function Main({ children }: { children?: ReactNode }) {
  return <main className={styles.main}>{children}</main>;
}

export function MainContent({ children }: { children?: ReactNode }) {
  return <div className={styles.mainContent}>{children}</div>;
}

interface MobileDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  children?: ReactNode;
}

export function MobileDrawer({ isOpen, onClose, children }: MobileDrawerProps) {
  return (
    <>
      <div
        className={`${styles.drawerOverlay} ${isOpen ? styles.drawerOverlayOpen : ""}`}
        onClick={onClose}
        aria-hidden="true"
      />
      <aside className={`${styles.drawer} ${isOpen ? styles.drawerOpen : ""}`}>
        <div className={styles.drawerHeader}>
          <a href="/" className={styles.logo}>
            unwrap<span className={styles.logoAccent}>.</span>fm
          </a>
          <button
            type="button"
            onClick={onClose}
            className={styles.drawerClose}
            aria-label="Close menu"
          >
            <CloseIcon />
          </button>
        </div>
        <nav className={styles.sidebarInner}>{children}</nav>
      </aside>
    </>
  );
}

export function IconButton({
  children,
  onClick,
  label,
}: {
  children?: ReactNode;
  onClick?: () => void;
  label: string;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={styles.iconButton}
      aria-label={label}
    >
      {children}
    </button>
  );
}

export function Avatar({ name }: { name?: string }) {
  const initial = name?.charAt(0).toUpperCase() ?? "?";
  return <div className={styles.avatar}>{initial}</div>;
}

export function useMobileDrawer() {
  const [isOpen, setIsOpen] = useState(false);
  const open = () => setIsOpen(true);
  const close = () => setIsOpen(false);
  const toggle = () => setIsOpen((prev) => !prev);
  return { isOpen, open, close, toggle };
}

function MenuIcon() {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <line x1="3" y1="12" x2="21" y2="12" />
      <line x1="3" y1="6" x2="21" y2="6" />
      <line x1="3" y1="18" x2="21" y2="18" />
    </svg>
  );
}

function CloseIcon() {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <line x1="18" y1="6" x2="6" y2="18" />
      <line x1="6" y1="6" x2="18" y2="18" />
    </svg>
  );
}

function SearchIcon() {
  return (
    <svg
      width="18"
      height="18"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <circle cx="11" cy="11" r="8" />
      <line x1="21" y1="21" x2="16.65" y2="16.65" />
    </svg>
  );
}
