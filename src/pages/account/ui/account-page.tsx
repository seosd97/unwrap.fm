import * as styles from "../account.css";

export default function AccountPage() {
  return (
    <div className={styles.card}>
      <div className={styles.cardHeader}>
        <h2 className={styles.cardTitle}>Profile</h2>
      </div>
      <div className={styles.cardBody}>
        <p>Manage your account settings and preferences.</p>
      </div>
    </div>
  );
}
