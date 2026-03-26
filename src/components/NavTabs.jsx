import styles from './NavTabs.module.css';

const TABS = ['Information', 'Hooks', 'Art', 'User'];

export default function NavTabs({ activeTab, onTabChange }) {
  return (
    <nav className={styles.nav}>
      {TABS.map((tab) => (
        <button
          key={tab}
          className={`${styles.tab} ${activeTab === tab ? styles.active : ''}`}
          onClick={() => onTabChange(tab)}
        >
          {tab}
        </button>
      ))}
    </nav>
  );
}
