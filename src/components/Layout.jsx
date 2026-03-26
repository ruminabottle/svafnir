import { Outlet } from 'react-router-dom';
import styles from './Layout.module.css';

export default function Layout() {
  return (
    <div className={styles.page}>
      <div className={styles.cornerTL} />
      <div className={styles.cornerBR} />
      <Outlet />
    </div>
  );
}
