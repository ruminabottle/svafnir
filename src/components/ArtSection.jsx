import styles from './ArtSection.module.css';
import Divider from './Divider';

export default function ArtSection() {
  return (
    <div className={styles.section}>
      <h2 className={styles.heading}>Gallery</h2>
      <Divider />
      <div className={styles.placeholder}>
        <p>Art gallery coming soon.</p>
        <p className={styles.sub}>Character portraits and commissions will be displayed here.</p>
      </div>
    </div>
  );
}
