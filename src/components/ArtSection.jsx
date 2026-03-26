import { useState, useEffect } from 'react';
import styles from './ArtSection.module.css';
import Divider from './Divider';

// Auto-detect gallery images — add files to /public/images/gallery/
// Name them 1.png, 2.png, etc. (or .jpg/.webp)
const GALLERY_IMAGES = import.meta.glob('/public/images/gallery/*.{png,jpg,jpeg,webp,gif}', { eager: true, query: '?url', import: 'default' });

function getGalleryPaths() {
  return Object.entries(GALLERY_IMAGES)
    .sort(([a], [b]) => a.localeCompare(b, undefined, { numeric: true }))
    .map(([path, url]) => ({
      src: url,
      name: path.split('/').pop(),
    }));
}

export default function ArtSection() {
  const images = getGalleryPaths();
  const [current, setCurrent] = useState(0);
  const [direction, setDirection] = useState(0);

  const hasImages = images.length > 0;

  function goTo(index) {
    if (index === current) return;
    setDirection(index > current ? 1 : -1);
    setCurrent(index);
  }

  function prev() {
    setDirection(-1);
    setCurrent((c) => (c - 1 + images.length) % images.length);
  }

  function next() {
    setDirection(1);
    setCurrent((c) => (c + 1) % images.length);
  }

  // Keyboard nav
  useEffect(() => {
    function handleKey(e) {
      if (e.key === 'ArrowLeft') prev();
      if (e.key === 'ArrowRight') next();
    }
    if (hasImages) {
      window.addEventListener('keydown', handleKey);
      return () => window.removeEventListener('keydown', handleKey);
    }
  }, [hasImages, current]);

  if (!hasImages) {
    return (
      <div className={styles.section}>
        <h2 className={styles.heading}>Gallery</h2>
        <Divider />
        <div className={styles.placeholder}>
          <p>Add images to <code>/public/images/gallery/</code></p>
          <p className={styles.sub}>Supported: .png, .jpg, .webp, .gif</p>
        </div>
      </div>
    );
  }

  return (
    <div className={styles.section}>
      <h2 className={styles.heading}>Gallery</h2>
      <Divider />

      <div className={styles.gallery}>
        <button className={styles.arrowLeft} onClick={prev} aria-label="Previous image">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
            <polyline points="15 18 9 12 15 6" />
          </svg>
        </button>

        <div className={styles.imageFrame}>
          <img
            key={current}
            src={images[current].src}
            alt={`Gallery image ${current + 1}`}
            className={`${styles.image} ${direction > 0 ? styles.slideLeft : direction < 0 ? styles.slideRight : ''}`}
          />
        </div>

        <button className={styles.arrowRight} onClick={next} aria-label="Next image">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
            <polyline points="9 18 15 12 9 6" />
          </svg>
        </button>
      </div>

      {images.length > 1 && (
        <div className={styles.dots}>
          {images.map((_, i) => (
            <button
              key={i}
              className={`${styles.dot} ${i === current ? styles.dotActive : ''}`}
              onClick={() => goTo(i)}
              aria-label={`Go to image ${i + 1}`}
            />
          ))}
        </div>
      )}

      <p className={styles.counter}>{current + 1} / {images.length}</p>
    </div>
  );
}
