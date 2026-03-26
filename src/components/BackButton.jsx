import { Link } from 'react-router-dom';
import styles from './BackButton.module.css';

export default function BackButton() {
  return (
    <div className={styles.wrapper}>
      <Link to="/" className={styles.button}>
        <span className={styles.arrow}>&larr;</span> Go Back
      </Link>
    </div>
  );
}
