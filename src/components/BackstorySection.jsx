import styles from './BackstorySection.module.css';
import Divider from './Divider';

export default function BackstorySection() {
  return (
    <div className={styles.section}>
      <h2 className={styles.heading}>Backstory</h2>
      <Divider />
      <div className={styles.content}>
        <p className={styles.text}>TBD</p>
      </div>
    </div>
  );
}
