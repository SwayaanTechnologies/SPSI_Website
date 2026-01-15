

import React, { useRef, useEffect } from "react";
import styles from "./TestimonialsCarousel.module.css";

const testimonials = [
  {
    name: "John D.",
    text: "Shadow Protective Services provided exceptional security for our event. Professional and reliable!",
    rating: 5,
  },
  {
    name: "Maria S.",
    text: "The team is always on time and very courteous. Highly recommend their services!",
    rating: 5,
  },
  {
    name: "David L.",
    text: "We felt safe and secure thanks to their expert staff. Will use again!",
    rating: 5,
  },
  {
    name: "Angela P.",
    text: "Outstanding service and attention to detail. The best in the business!",
    rating: 5,
  },
  {
    name: "Michael B.",
    text: "Very professional and responsive. Shadow Protective Services exceeded our expectations.",
    rating: 5,
  },
  {
    name: "Samantha K.",
    text: "Great communication and top-notch security. Thank you for your dedication!",
    rating: 5,
  },
];

const Star = ({ filled }) => (
  <svg width="20" height="20" viewBox="0 0 20 20" fill={filled ? "#ffe066" : "#fff"} stroke="#ffe066" strokeWidth="1.2" style={{marginRight: 2}} aria-hidden="true">
    <polygon points="10,2 12.4,7.5 18.3,7.7 13.7,11.7 15.2,17.3 10,14 4.8,17.3 6.3,11.7 1.7,7.7 7.6,7.5" />
  </svg>
);

export default function TestimonialsCarousel() {
  const trackRef = useRef();

  // Duplicate testimonials for seamless loop
  const slides = [...testimonials, ...testimonials];

  useEffect(() => {
    const track = trackRef.current;
    let animation;
    let start;
    let frame;
    let px = 0;
    const speed = 0.5; // px per frame

    function step(ts) {
      if (!start) start = ts;
      const elapsed = ts - start;
      px = (elapsed * speed) / 16; // 60fps baseline
      track.style.transform = `translateX(-${px % (track.scrollWidth / 2)}px)`;
      frame = requestAnimationFrame(step);
    }
    frame = requestAnimationFrame(step);
    return () => cancelAnimationFrame(frame);
  }, []);

  return (
    <div className={styles.carouselContainer} aria-label="Testimonials carousel">
      <h3 className={styles.carouselTitle}>Testimonials</h3>
      <div className={styles.carouselMarqueeOuter}>
        <div className={styles.carouselMarqueeTrack} ref={trackRef}>
          {slides.map((t, i) => (
            <div className={styles.carouselSlide} key={i}>
              <blockquote className={styles.testimonialText}>
                “{t.text}”
              </blockquote>
              <div className={styles.testimonialFooter}>
                <span className={styles.stars} aria-label={`Rated ${t.rating} out of 5`}>
                  {Array.from({ length: 5 }).map((_, idx) => (
                    <Star key={idx} filled={idx < t.rating} />
                  ))}
                </span>
                <span className={styles.testimonialName}> {t.name}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
