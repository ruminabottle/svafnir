import HooksSection from '../components/HooksSection';
import BackButton from '../components/BackButton';
import styles from './Page.module.css';

export default function Hooks() {
  return (
    <div className={styles.page}>
      <HooksSection />
      <BackButton />
    </div>
  );
}
