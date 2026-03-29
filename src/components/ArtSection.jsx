import { useState, useEffect, useCallback } from 'react';
import useEmblaCarousel from 'embla-carousel-react';
import styles from './ArtSection.module.css';
import Divider from './Divider';

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
  const hasImages = images.length > 0;

  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true, align: 'center' });
  const [selected, setSelected] = useState(0);

  const scrollPrev = useCallback(() => emblaApi?.scrollPrev(), [emblaApi]);
  const scrollNext = useCallback(() => emblaApi?.scrollNext(), [emblaApi]);
  const scrollTo = useCallback((i) => emblaApi?.scrollTo(i), [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    const onSelect = () => setSelected(emblaApi.selectedScrollSnap());
    emblaApi.on('select', onSelect);
    onSelect();
    return () => emblaApi.off('select', onSelect);
  }, [emblaApi]);

  // Keyboard nav
  useEffect(() => {
    if (!hasImages) return;
    function handleKey(e) {
      if (e.key === 'ArrowLeft') scrollPrev();
      if (e.key === 'ArrowRight') scrollNext();
    }
    window.addEventListener('keydown', handleKey);
    return () => window.removeEventListener('keydown', handleKey);
  }, [hasImages, scrollPrev, scrollNext]);

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
        <button className={styles.arrowLeft} onClick={scrollPrev} aria-label="Previous image">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
            <polyline points="15 18 9 12 15 6" />
          </svg>
        </button>

        <div className={styles.viewport} ref={emblaRef}>
          <div className={styles.container}>
            {images.map((img, i) => (
              <div className={styles.slide} key={i}>
                <div className={styles.imageFrame}>
                  <img
                    src={img.src}
                    alt={`Gallery image ${i + 1}`}
                    className={styles.image}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>

        <button className={styles.arrowRight} onClick={scrollNext} aria-label="Next image">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
            <polyline points="9 18 15 12 9 6" />
          </svg>
        </button>
      </div>

      {images.length > 1 && (
        <div className={styles.thumbs}>
          {images.map((img, i) => (
            <button
              key={i}
              className={`${styles.thumb} ${i === selected ? styles.thumbActive : ''}`}
              onClick={() => scrollTo(i)}
              aria-label={`Go to image ${i + 1}`}
            >
              <img src={img.src} alt={`Thumbnail ${i + 1}`} />
            </button>
          ))}
        </div>
      )}

      <p className={styles.counter}>{selected + 1} / {images.length}</p>

      <Divider />

      <div className={styles.credit}>
        <p>All art is created by <strong>@Ylaziel</strong></p>
        <a
          href="https://bsky.app/profile/ylaziel.bsky.social"
          target="_blank"
          rel="noopener noreferrer"
          className={styles.creditLink}
        >
          <svg viewBox="0 0 600 530" fill="currentColor" width="16" height="14">
            <path d="M135.72 44.03C202.216 93.951 273.74 195.401 300 249.49c26.262-54.089 97.782-155.539 164.28-205.46C512.26 8.009 590-19.862 590 68.825c0 17.712-10.155 148.79-16.111 170.07-20.703 73.984-96.144 92.854-163.25 81.433 117.3 19.964 147.14 86.092 82.697 152.22-122.39 125.59-175.91-31.511-189.63-71.766-2.514-7.38-3.69-10.832-3.706-7.895-.017-2.937-1.192.515-3.706 7.895-13.714 40.255-67.233 197.356-189.63 71.766-64.444-66.128-34.605-132.256 82.697-152.22-67.106 11.421-142.547-7.449-163.25-81.433C20.15 217.615 10 86.537 10 68.825c0-88.687 77.742-60.816 125.72-24.795z"/>
          </svg>
          @Ylaziel
        </a>
      </div>
    </div>
  );
}
