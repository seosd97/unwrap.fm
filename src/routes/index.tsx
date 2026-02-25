import { createFileRoute } from "@tanstack/react-router";

import * as styles from "@/styles/app.css";

export const Route = createFileRoute("/")({ component: Home });

function Home() {
  return (
    <div className={styles.contentCard}>
      <div className={styles.contentCardHeader}>
        <h2 className={styles.contentCardTitle}>Home</h2>
      </div>
      <div className={styles.contentCardBody}>
        <p>Welcome to unwrap.fm</p>
      </div>
    </div>
  );
}
