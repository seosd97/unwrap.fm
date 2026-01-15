import { createFileRoute } from "@tanstack/react-router";

import * as styles from "@/styles/page.css";

export const Route = createFileRoute("/")({ component: Home });

function Home() {
  return (
    <div className={styles.container}>
      <section className={styles.section}>
        <div className={styles.content}>
          <h1 className={styles.heading}>unwrap.fm</h1>
          <p className={styles.description}>Welcome to unwrap.fm</p>
        </div>
      </section>
    </div>
  );
}
