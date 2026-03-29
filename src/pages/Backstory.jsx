import BackstorySection from '../components/BackstorySection';
import BackButton from '../components/BackButton';
import styles from './Page.module.css';

export default function Backstory() {
  return (
    <div className={styles.page}>
      <BackstorySection />
      <BackButton />
    </div>
  );
}
