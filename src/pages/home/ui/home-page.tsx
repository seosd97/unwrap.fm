import * as styles from "../home.css";

export default function HomePage() {
  return (
    <div className={styles.card}>
      <div className={styles.cardHeader}>
        <h2 className={styles.cardTitle}>Home</h2>
      </div>
      <div className={styles.cardBody}>
        <p>Welcome to unwrap.fm</p>
      </div>
    </div>
  );
}
