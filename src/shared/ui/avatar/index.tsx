import * as styles from "./avatar.css";

interface AvatarProps {
  name?: string;
}

export function Avatar({ name }: AvatarProps) {
  const initial = name?.charAt(0).toUpperCase() ?? "?";
  return <div className={styles.root}>{initial}</div>;
}
