import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faShield,
  faVideo,
  faKey,
  faUserShield,
  faBuildingShield,
  faLifeRing,
} from "@fortawesome/free-solid-svg-icons";
import styles from "./Services.module.css";


const SERVICES = [
  {
    title: "Physical Security",
    description:
      "Elite security personnel and advanced systems to protect your assets with the highest level of professionalism.",
    icon: faShield,
  },
  {
    title: "CCTV Surveillance",
    description:
      "24/7 real-time monitoring ensures comprehensive security coverage for your facility.",
    icon: faVideo,
  },
  {
    title: "Access Control",
    description:
      "State-of-the-art access management systems utilizing cutting-edge technology.",
    icon: faKey,
  },
  {
    title: "Executive Protection",
    description:
      "Professional close protection services for VIPs and high-profile individuals.",
    icon: faUserShield,
  },
  {
    title: "Facility Management",
    description:
      "Comprehensive security management for building and facilities of all sizes.",
    icon: faBuildingShield,
  },
  {
    title: "Emergency Response",
    description:
      "Rapid and effective emergency response protocols to handle critical situations.",
    icon: faLifeRing,
  },
];

export default function Services() {
  return (
    <section id="services" className={styles.section}>
      <div className={styles.header}>
        <h2>Our Services</h2>
        <p>Professional and reliable security solutions tailored to your needs</p>
      </div>
      <div className={styles.grid}>
        {SERVICES.map((service) => (
          <article key={service.title} className={styles.card}>
            <div className={styles.icon}>
              <FontAwesomeIcon icon={service.icon} />
            </div>
            <h3>{service.title}</h3>
            <p>{service.description}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
