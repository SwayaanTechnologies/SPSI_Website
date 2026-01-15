import { useEffect, useMemo, useState } from "react";
import styles from "./HeroCarousel.module.css";

const SLIDES = [
  {
    image: "/spsi.jpeg",
    title: "Professional Protective Services",
    description:
      "Trusted security professionals delivering safety and confidence",
    primaryButton: "Our Mission",
    primaryTarget: "mission",
    secondaryButton: "Contact Us",
    secondaryTarget: "contact",
  },
  {
    image: "/spsi3.jpeg",
    title: "Our Mission:\nProtection with Purpose",
    description:
      "Dedicated to safeguarding lives and assets with unwavering commitment",
    primaryButton: "Our Mission",
    primaryTarget: "mission",
    secondaryButton: "Contact Us",
    secondaryTarget: "contact",
  },
  {
    image: "/spsi7.png",
    title: "A Decade of Excellence\nin Protective Services",
    description:
      "Trusted by industry leaders across America for proven expertise",
    primaryButton: "About Us",
    primaryTarget: "about",
    secondaryButton: "Get in Touch",
    secondaryTarget: "contact",
  },
  {
    image: "/spsi4.jpeg",
    title: "Trusted Partner in Security",
    description:
      "Delivering tailored solutions that exceed expectations and inspire trust",
    primaryButton: "Our Services",
    primaryTarget: "services",
    secondaryButton: "Contact Us",
    secondaryTarget: "contact",
  },
  {
    image: "/spsi6.jpeg",
    title: "Comprehensive Security Solutions",
    description:
      "Professional and reliable security solutions tailored to your needs",
    primaryButton: "Learn More",
    primaryTarget: "about",
    secondaryButton: "Get Started",
    secondaryTarget: "contact",
  },
];

export default function HeroCarousel() {
  const [activeIndex, setActiveIndex] = useState(0);
  const totalSlides = useMemo(() => SLIDES.length, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % totalSlides);
    }, 5000);

    return () => clearInterval(interval);
  }, [totalSlides]);

  const goToPrevious = () => {
    setActiveIndex((prev) => (prev - 1 + totalSlides) % totalSlides);
  };

  const goToNext = () => {
    setActiveIndex((prev) => (prev + 1) % totalSlides);
  };

  const scrollToSection = (sectionId) => {
    const target = document.getElementById(sectionId);
    if (!target) return;

    const header = document.querySelector("header");
    const headerHeight = header ? header.offsetHeight : 0;
    const offset =
      target.getBoundingClientRect().top + window.scrollY - headerHeight + 20;
    window.scrollTo({ top: Math.max(offset, 0), behavior: "smooth" });
  };

  const handleButtonClick = (event) => {
    const { target: sectionId } = event.currentTarget.dataset;
    if (sectionId) {
      scrollToSection(sectionId);
    }
  };

  return (
    <section id="home" className={styles.hero} aria-label="Hero carousel">
      <div className={styles.slides}>
        {SLIDES.map((slide, index) => (
          <article
            key={index}
            className={`${styles.slide} ${
              index === activeIndex ? styles.active : ""
            }`}
            style={{ backgroundImage: `url(${slide.image})` }}
          >
            <div className={styles.overlay} />
            <div className={styles.content}>
              <h1 className={styles.title}>{slide.title}</h1>
              <p className={styles.description}>{slide.description}</p>
              <div className={styles.buttons}>
                <button
                  type="button"
                  className={styles.primaryButton}
                  data-target={slide.primaryTarget}
                  onClick={handleButtonClick}
                >
                  {slide.primaryButton}
                </button>
                <button
                  type="button"
                  className={styles.secondaryButton}
                  data-target={slide.secondaryTarget}
                  onClick={handleButtonClick}
                >
                  {slide.secondaryButton}
                </button>
              </div>
            </div>
          </article>
        ))}
      </div>

      <button
        className={`${styles.navButton} ${styles.navButtonLeft}`}
        onClick={goToPrevious}
        aria-label="Previous slide"
      >
        &#8249;
      </button>
      <button
        className={`${styles.navButton} ${styles.navButtonRight}`}
        onClick={goToNext}
        aria-label="Next slide"
      >
        &#8250;
      </button>

      <div className={styles.dots} role="tablist" aria-label="Carousel slides">
        {SLIDES.map((slide, index) => (
          <button
            key={index}
            type="button"
            className={`${styles.dot} ${
              index === activeIndex ? styles.dotActive : ""
            }`}
            aria-label={`Go to slide ${index + 1}`}
            aria-pressed={index === activeIndex}
            onClick={() => setActiveIndex(index)}
          />
        ))}
      </div>
    </section>
  );
}
