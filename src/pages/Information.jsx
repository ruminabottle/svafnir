import InfoSection from '../components/InfoSection';
import BackButton from '../components/BackButton';
import styles from './Page.module.css';

export default function Information() {
  return (
    <div className={styles.page}>
      <InfoSection />
      <BackButton />
    </div>
  );
}
