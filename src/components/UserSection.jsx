import styles from './UserSection.module.css';
import Divider from './Divider';

export default function UserSection() {
  return (
    <div className={styles.section}>
      <h2 className={styles.heading}>Out of Character</h2>
      <Divider />
      <div className={styles.content}>
        <div className={styles.infoRow}>
          <span className={styles.label}>Timezone</span>
          <span className={styles.value}>EST</span>
        </div>
        <div className={styles.infoRow}>
          <span className={styles.label}>Age</span>
          <span className={styles.value}>18+</span>
        </div>
        <Divider />
        <div className={styles.notes}>
          <p>
            Returning to FFXIV roleplay after a hiatus. I prefer lore-grounded content
            with flexibility for creative interpretation.
          </p>
          <p>
            Darker themes are welcome <strong>only</strong> with explicit consent and
            open communication beforehand.
          </p>
          <p>
            Please be 18+ to interact. Thank you for understanding.
          </p>
        </div>
      </div>
    </div>
  );
}
