import ArtSection from '../components/ArtSection';
import BackButton from '../components/BackButton';
import styles from './Page.module.css';

export default function Art() {
  return (
    <div className={styles.page}>
      <ArtSection />
      <BackButton />
    </div>
  );
}
