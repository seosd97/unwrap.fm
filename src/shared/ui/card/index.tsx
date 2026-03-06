import type { HTMLAttributes, ReactNode } from "react";

import * as styles from "./card.css";

export interface CardProps extends HTMLAttributes<HTMLDivElement> {
  children?: ReactNode;
  className?: string;
}

export function Card({ children, className, ...props }: CardProps) {
  return (
    <div
      className={className ? `${styles.root} ${className}` : styles.root}
      {...props}
    >
      {children}
    </div>
  );
}

export interface CardHeaderProps extends HTMLAttributes<HTMLDivElement> {
  children?: ReactNode;
  className?: string;
}

export function CardHeader({ children, className, ...props }: CardHeaderProps) {
  return (
    <div
      className={className ? `${styles.header} ${className}` : styles.header}
      {...props}
    >
      {children}
    </div>
  );
}

export interface CardTitleProps extends HTMLAttributes<HTMLHeadingElement> {
  as?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
  children?: ReactNode;
  className?: string;
}

export function CardTitle({
  as: Component = "h3",
  children,
  className,
  ...props
}: CardTitleProps) {
  return (
    <Component
      className={className ? `${styles.title} ${className}` : styles.title}
      {...props}
    >
      {children}
    </Component>
  );
}

export interface CardBodyProps extends HTMLAttributes<HTMLDivElement> {
  children?: ReactNode;
  className?: string;
}

export function CardBody({ children, className, ...props }: CardBodyProps) {
  return (
    <div
      className={className ? `${styles.body} ${className}` : styles.body}
      {...props}
    >
      {children}
    </div>
  );
}
