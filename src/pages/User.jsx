import UserSection from '../components/UserSection';
import BackButton from '../components/BackButton';
import styles from './Page.module.css';

export default function User() {
  return (
    <div className={styles.page}>
      <UserSection />
      <BackButton />
    </div>
  );
}
