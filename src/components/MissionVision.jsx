import styles from "./MissionVision.module.css";

export default function MissionVision() {
  return (
    <section id="mission" className={styles.section}>
      <div className={styles.headerBlock}>
        <h1 className={styles.header}>Mission & Vision</h1>
        <div className={styles.subheader}>IN GOD <span className={styles.star}>★</span> WE TRUST</div>
      </div>
      <div className={styles.container}>
        <div className={styles.card}>
          <h2 className={styles.cardTitle}>Our Mission</h2>
          <p>
            The mission of Shadow Protective Services, Inc. (SPSI) is to provide
            unwavering protection and peace of mind to our clients. Dedicated to
            safeguarding lives, property, and assets through the highest standards
            of professionalism, integrity, and innovation.
          </p>
          <p>
            With a commitment to excellence, we strive to be the trusted partner
            that ensures security in a never-changing world, delivering tailored
            solutions that exceed expectations and inspire trust in our
            communities.
          </p>
          <h2 className={styles.cardTitle}>Our Vision</h2>
          <p>
            To be recognized as the leading security services provider, setting the
            industry standard for excellence, innovation, and client satisfaction.
            We envision a future where every client feels secure and protected
            through our advanced security solutions and dedicated service.
          </p>
          <p>
            We aim to expand our reach while maintaining the personalized attention
            and reliability that defines Shadow Protective Services, becoming the
            first choice for individuals and organizations seeking comprehensive
            security solutions across all sectors.
          </p>
        </div>
      </div>
    </section>
  );
}
