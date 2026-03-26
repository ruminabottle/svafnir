import styles from './InfoSection.module.css';
import Divider from './Divider';

const STATS = [
  ['Age', 'Unknown (Visually 25)'],
  ['Race', 'Viera'],
  ['Clan', 'Rava'],
  ['Gender', 'Male'],
  ['Height', '217 cm'],
  ['Weight', '110 Kg'],
  ['Eye Color', 'Emerald'],
  ['Hair Color', 'Black'],
  ['Sexuality', 'Heterosexual'],
  ['Marital Status', 'Unknown'],
  ['Alignment', 'Chaotic Neutral'],
  ['Languages', 'Common'],
];

export default function InfoSection() {
  return (
    <div className={styles.section}>
      <h2 className={styles.heading}>Profile</h2>
      <Divider />
      <div className={styles.grid}>
        {STATS.map(([label, value]) => (
          <div key={label} className={styles.stat}>
            <span className={styles.label}>{label}</span>
            <span className={styles.value}>{value}</span>
          </div>
        ))}
      </div>
      <Divider />
      <h2 className={styles.heading}>Backstory</h2>
      <p className={styles.backstory}>TBD</p>
    </div>
  );
}
