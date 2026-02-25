import { createFileRoute } from "@tanstack/react-router";

import * as styles from "@/styles/app.css";

export const Route = createFileRoute("/account/")({ component: Account });

function Account() {
  return (
    <div className={styles.contentCard}>
      <div className={styles.contentCardHeader}>
        <h2 className={styles.contentCardTitle}>Profile</h2>
      </div>
      <div className={styles.contentCardBody}>
        <p>Manage your account settings and preferences.</p>
      </div>
    </div>
  );
}
