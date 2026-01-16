

import React, { useRef, useEffect } from "react";
import styles from "./TestimonialsCarousel.module.css";

const testimonials = [
  {
    name: "Darlene George",
    text: "They are professionals who provide the best guard service I have worked with. Shadow Protective Services provides different levels of service, depending on what your property needs. Very responsive to their clients. I highly recommend them.",
    rating: 4.5,
    date: "5 years ago"
  },
  {
    name: "Melissa Leverett",
    text: "Hands down the best experience I’ve had yet in my 15+ years of working in the industry with security/courtesy patrol services! Very accommodating, reliable, and always willing to help. I only wish they were a bit more responsive to resident calls and able to be on site faster when calls do come in, however, we are pretty far out for them so we appreciate them accommodating our location.",
    rating: 4,
    date: "5 years ago"
  },
  {
    name: "Bret Wilbun",
    text: "Great security provider in the Dallas area offering residential, commercial, and industrial security service options. This is a one-stop shop for all of your security needs. Recommended for providing the right solutions to a wide array of security concerns.",
    rating: 5,
    date: "a year ago"
  },
  {
    name: "Lina Alarcon",
    text: "Look no more! If you are seeking to protect your business, shopping center or residence, Shadow Protective has proven to be the best in its industry. Their reliability, professionalism and high end training, sets them apart from everybody else out there. I highly recommend their services!",
    rating: 5,
    date: "4 years ago"
  },
  {
    name: "Safer Muhammet",
    text: "I’ve dealt with Hope for over a year and he’s always provided top notch security services in my neighborhood. All his officers are professional and make me feel safe when patrolling my neighborhood. Thank you for serving and protecting.",
    rating: 4.5,
    date: "5 years ago"
  },
  {
    name: "Kathryn Barlow",
    text: "Absolutely the best Guard Service. I’ve used Shadow for several years. They are the most reliable, respectful and responsible Guards I have ever employed. I wish I could give them more stars.",
    rating: 5,
    date: "5 years ago"
  },
  {
    name: "Brian Burke",
    text: "Very dependable and solid security service provider in the Dallas area. Level 3 armed and canine certified. Expert provider of Personnel, facility, event, and other security. Highly recommended.",
    rating: 4.5,
    date: "2 years ago"
  },
  {
    name: "Nate Russell",
    text: "The entire Shadow Protective team have been outstanding to deal with. They set the bar for their industry and have gone above and beyond for me on multiple occasions. Thank y'all for all you do.",
    rating: 5,
    date: "4 years ago"
  },
  {
    name: "Charity O.",
    text: "Very professional, amazing services!! They’re always on time and get the job DONE!!! Love working with this company & will continue to do so without hesitation!",
    rating: 4,
    date: "2 years ago"
  },
];


const Star = ({ type }) => {
  // type: 'full', 'half', 'empty'
  if (type === 'full') {
    return (
      <svg width="20" height="20" viewBox="0 0 20 20" fill="#fff" stroke="#fff" strokeWidth="1.5" style={{marginRight: 2}} aria-hidden="true">
        <polygon points="10,2 12.4,7.5 18.3,7.7 13.7,11.7 15.2,17.3 10,14 4.8,17.3 6.3,11.7 1.7,7.7 7.6,7.5" />
      </svg>
    );
  }
  if (type === 'half') {
    return (
      <svg width="20" height="20" viewBox="0 0 20 20" style={{marginRight: 2}} aria-hidden="true">
        <defs>
          <clipPath id="halfStarClip">
            <rect x="0" y="0" width="10" height="20" />
          </clipPath>
        </defs>
        <polygon points="10,2 12.4,7.5 18.3,7.7 13.7,11.7 15.2,17.3 10,14 4.8,17.3 6.3,11.7 1.7,7.7 7.6,7.5" fill="#fff" style={{clipPath: 'url(#halfStarClip)'}} stroke="#fff" strokeWidth="1.5" />
        <polygon points="10,2 12.4,7.5 18.3,7.7 13.7,11.7 15.2,17.3 10,14 4.8,17.3 6.3,11.7 1.7,7.7 7.6,7.5" fill="none" stroke="#fff" strokeWidth="1.5" />
      </svg>
    );
  }
  // empty
  return (
    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" stroke="#fff" strokeWidth="1.5" style={{marginRight: 2}} aria-hidden="true">
      <polygon points="10,2 12.4,7.5 18.3,7.7 13.7,11.7 15.2,17.3 10,14 4.8,17.3 6.3,11.7 1.7,7.7 7.6,7.5" />
    </svg>
  );
};

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
    const speed = 1.5; // px per frame (increased speed)

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
                  {(() => {
                    const stars = [];
                    const fullStars = Math.floor(t.rating);
                    const hasHalf = t.rating % 1 >= 0.5;
                    for (let i = 0; i < 5; i++) {
                      if (i < fullStars) {
                        stars.push(<Star key={i} type="full" />);
                      } else if (i === fullStars && hasHalf) {
                        stars.push(<Star key={i} type="half" />);
                      } else {
                        stars.push(<Star key={i} type="empty" />);
                      }
                    }
                    return stars;
                  })()}
                </span>
                <span className={styles.testimonialName}>{t.name}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
