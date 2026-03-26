import { Link } from 'react-router-dom';
import Divider from '../components/Divider';
import styles from './Home.module.css';

const NAV_ITEMS = [
  {
    label: 'Info',
    path: '/information',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
        <polyline points="14 2 14 8 20 8" />
        <line x1="16" y1="13" x2="8" y2="13" />
        <line x1="16" y1="17" x2="8" y2="17" />
        <polyline points="10 9 9 9 8 9" />
      </svg>
    ),
  },
  {
    label: 'Hooks',
    path: '/hooks',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71" />
        <path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71" />
      </svg>
    ),
  },
  {
    label: 'Art',
    path: '/art',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="3" y="3" width="18" height="18" rx="2" ry="2" />
        <circle cx="8.5" cy="8.5" r="1.5" />
        <polyline points="21 15 16 10 5 21" />
      </svg>
    ),
  },
  {
    label: 'OOC',
    path: '/user',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
        <circle cx="12" cy="7" r="4" />
      </svg>
    ),
  },
];

export default function Home() {
  return (
    <div className={styles.home}>
      <div className={styles.heroWrapper}>
        <img
          src="./images/image01.jpg"
          alt="Svafnir Asoltun"
          className={styles.heroImage}
          onError={(e) => { e.target.style.display = 'none'; }}
        />
      </div>

      <header className={styles.header}>
        <h1 className={styles.name}>Svafnir Asoltun</h1>
        <p className={styles.subtitle}>The Arcane Archer</p>
      </header>

      <Divider />

      <nav className={styles.nav}>
        {NAV_ITEMS.map(({ label, path, icon }) => (
          <Link key={path} to={path} className={styles.navButton} title={label}>
            <span className={styles.navIcon}>{icon}</span>
            <span className={styles.navLabel}>{label}</span>
          </Link>
        ))}
      </nav>

      <Divider />

      <footer className={styles.footer}>
        <p>&copy; Svafnir Asoltun &middot; FFXIV RP</p>
      </footer>
    </div>
  );
}
