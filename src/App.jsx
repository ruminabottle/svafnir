import { useState } from 'react';
import EmberCanvas from './components/EmberCanvas';
import NavTabs from './components/NavTabs';
import InfoSection from './components/InfoSection';
import HooksSection from './components/HooksSection';
import ArtSection from './components/ArtSection';
import UserSection from './components/UserSection';
import Divider from './components/Divider';
import styles from './App.module.css';

const SECTIONS = {
  Information: InfoSection,
  Hooks: HooksSection,
  Art: ArtSection,
  User: UserSection,
};

export default function App() {
  const [activeTab, setActiveTab] = useState('Information');
  const ActiveSection = SECTIONS[activeTab];

  return (
    <>
      <EmberCanvas />
      <div className={styles.page}>
        <div className={styles.cornerTL} />
        <div className={styles.cornerBR} />

        <header className={styles.header}>
          <h1 className={styles.name}>Svafnir Asoltun</h1>
          <p className={styles.subtitle}>Hunter of the Wilds</p>
        </header>

        <Divider />
        <NavTabs activeTab={activeTab} onTabChange={setActiveTab} />
        <Divider />

        <main className={styles.content} key={activeTab}>
          <ActiveSection />
        </main>

        <footer className={styles.footer}>
          <Divider />
          <p>&copy; Svafnir Asoltun &middot; FFXIV RP</p>
        </footer>
      </div>
    </>
  );
}
