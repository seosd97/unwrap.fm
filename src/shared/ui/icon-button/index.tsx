import type { ButtonHTMLAttributes, ReactNode } from "react";

import * as styles from "./icon-button.css";

interface IconButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  label: string;
  children?: ReactNode;
}

export function IconButton({ label, children, ...props }: IconButtonProps) {
  return (
    <button type="button" className={styles.root} aria-label={label} {...props}>
      {children}
    </button>
  );
}
