import { createFileRoute } from "@tanstack/react-router";

import * as styles from "@/styles/page.css";

export const Route = createFileRoute("/account/")({ component: Account });

function Account() {
  return (
    <div className={styles.container}>
      <section className={styles.section}>
        <div className={styles.content}>
          <h1 className={styles.heading}>Account</h1>
          <p className={styles.description}>Manage your account</p>
        </div>
      </section>
    </div>
  );
}
