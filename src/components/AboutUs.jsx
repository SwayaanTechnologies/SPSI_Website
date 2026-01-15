import styles from "./AboutUs.module.css";
import TestimonialsCarousel from "./TestimonialsCarousel";

export default function AboutUs() {
  return (
    <section id="about" className={styles.section}>
      <div className={styles.headingWrapper}>
        <h2 className={styles.heading}>About Us</h2>
      </div>
      <div className={styles.contentRow}>
        <div className={styles.descriptionWrapper}>
          <p className={styles.description}>
            Since its establishment in 2016, Shadow Protective Services Inc has been a trusted leader in the security industry, providing elite protection and comprehensive security solutions with unwavering professionalism.
          </p>
          <p className={styles.description}>
            We leverage cutting-edge technology and expertly trained personnel safeguard our clients’ safety and assets with unwavering dedication and precision.
          </p>
        </div>
        <div className={styles.videoColumn}>
          <div className={styles.videoWrapper}>
            <iframe
              className={styles.video}
              src="https://www.youtube-nocookie.com/embed/gK4N0MNUwos"
              title="Shadow Protective Services - Company Overview"
              loading="lazy"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
              style={{ width: '100%', height: '100%' }}
            />
          </div>
          <div className={styles.videoDescription}>
            Watch our company overview and learn about our comprehensive security solutions
          </div>
        </div>
      </div>
      <TestimonialsCarousel />
    </section>
  );
}
