import styles from './HooksSection.module.css';
import Divider from './Divider';

const HOOKS = [
  {
    title: 'Drunkard',
    text: "An ages-old reputation at many a bar for being kicked out. While time has passed for him, his face still is the scorn of many a bartender.",
  },
  {
    title: 'Mercenary',
    text: "Known for taking up even the most unsavory of jobs, Svafnir's scorn only allows him to take up dodgy and less reputable jobs.",
  },
  {
    title: 'Hunter',
    text: 'In need of a hide of a certain monster? Backyard being terrorized by those annoying pests? This Viera might have a solution for you.',
  },
  {
    title: 'Scars',
    text: 'Those that hunt beasts and survive are never left unscathed. But not all scars seem to be dealt by the hands of beasts.',
  },
  {
    title: 'Learning',
    text: 'When physical strength no longer is an option to solve problems, the Viera has been seen trying to fiddle with magic.',
  },
];

export default function HooksSection() {
  return (
    <div className={styles.section}>
      <h2 className={styles.heading}>Hooks</h2>
      <Divider />
      <div className={styles.hooks}>
        {HOOKS.map((hook) => (
          <div key={hook.title} className={styles.hook}>
            <h3 className={styles.hookTitle}>{hook.title}</h3>
            <p className={styles.hookText}>{hook.text}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
