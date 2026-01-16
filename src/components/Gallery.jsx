import Header from "./Header.jsx";
import styles from "./NotFound.module.css";
import { useRef, useState } from "react";

export default function Gallery() {
  const images = [
    "/spsi.jpeg",
    "/spsi3.jpeg",
    "/spsi4.jpeg",
    "/spsi5.jpeg",
    "/spsi6.jpeg",
    "/spsi7.png",
    "/spsi9.jpeg",
    "/spsi10.jpeg",
    "/spsi11.jpeg"
  ];
  const carouselRef = useRef(null);
  const [scrollIndex, setScrollIndex] = useState(0);
  const visibleCount = 3;

  const scrollToIndex = (idx) => {
    if (!carouselRef.current) return;
    const child = carouselRef.current.children[idx];
    if (child) {
      child.scrollIntoView({ behavior: "smooth", inline: "start", block: "nearest" });
    }
  };

  const handleLeft = () => {
    const newIndex = Math.max(scrollIndex - 1, 0);
    setScrollIndex(newIndex);
    scrollToIndex(newIndex);
  };
  const handleRight = () => {
    const newIndex = Math.min(scrollIndex + 1, images.length - visibleCount);
    setScrollIndex(newIndex);
    scrollToIndex(newIndex);
  };

  return (
    <>
      <Header hideMenu />
      <div className={styles.notFoundWrapper}>
        <div className={styles.code}>Gallery</div>
        <div className={styles.galleryCarouselWrapper}>
          <div className={styles.galleryNavOuter}>
            <button
              className={`${styles.galleryNavButton} ${styles.galleryNavButtonLeft}`}
              onClick={handleLeft}
              aria-label="Previous images"
              disabled={scrollIndex === 0}
            >
              &#8249;
            </button>
          </div>
          <div
            className={styles.galleryCarousel}
            ref={carouselRef}
            aria-label="Gallery carousel"
          >
            {images.map((src, idx) => (
              <img
                key={src}
                src={src}
                alt={`Gallery image ${idx + 1}`}
                className={styles.galleryImage}
                loading="lazy"
              />
            ))}
          </div>
          <div className={styles.galleryNavOuter}>
            <button
              className={`${styles.galleryNavButton} ${styles.galleryNavButtonRight}`}
              onClick={handleRight}
              aria-label="Next images"
              disabled={scrollIndex >= images.length - visibleCount}
            >
              &#8250;
            </button>
          </div>
        </div>
        <a href="/" className={styles.homeBtn}>Back to Home</a>
      </div>
    </>
  );
}
