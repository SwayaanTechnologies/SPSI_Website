import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faEye,
  faHandshake,
  faBriefcase,
  faArrowsRotate,
  faUsers,
  faScaleBalanced,
  faCheckCircle,
} from "@fortawesome/free-solid-svg-icons";
import styles from "./CoreValues.module.css";

const ICONS = {
  vigilance: faEye,
  trust: faHandshake,
  professionalism: faBriefcase,
  adaptability: faArrowsRotate,
  client: faUsers,
  accountability: faScaleBalanced,
};

const VALUES = [
  {
    title: "Vigilance",
    icon: ICONS.vigilance,
    points: ["Alert & Watchful", "Monitor Threats", "Identify Risks", "Adapt Quickly"],
  },
  {
    title: "Trustworthiness",
    icon: ICONS.trust,
    points: ["Reliable & Honest", "Protect Confidentiality", "Ethical Standards", "Consistent Behavior"],
  },
  {
    title: "Professionalism",
    icon: ICONS.professionalism,
    points: ["Professional Demeanor", "Clear Communication", "Problem Solving", "Customer Focus"],
  },
  {
    title: "Adaptability",
    icon: ICONS.adaptability,
    points: ["Flexible Approach", "Think Quickly", "Respond to Change", "Innovative Solutions"],
  },
  {
    title: "Client Centric",
    icon: ICONS.client,
    points: ["Understand Needs", "Tailored Solutions", "Build Relationships", "Responsive Service"],
  },
  {
    title: "Accountability",
    icon: ICONS.accountability,
    points: ["Full Transparency", "Strict Compliance", "Learn from Mistakes", "Detailed Documentation"],
  },
];


import { useState } from "react";

export default function CoreValues() {
  return (
    <section id="values" className={styles.section}>
      <div className={styles.header}>
        <h2>Our Core Values</h2>
        <p>The principles that guide our commitment to excellence in security services</p>
      </div>
      <div className={styles.grid}>
        {VALUES.map((value, index) => (
          <div key={value.title} className={styles.card}>
            <div className={styles.cardInner} style={{ animationDelay: `${index * 0.6}s` }}>
              <div className={`${styles.cardFace} ${styles.cardFront}`}>
                <div
                  className={styles.cardIcon}
                  tabIndex={0}
                  aria-label={value.title + ' icon'}
                  role="img"
                  style={{ cursor: "pointer", outline: "none" }}
                >
                  <FontAwesomeIcon
                    icon={value.icon}
                  />
                </div>
                <h3>{value.title}</h3>
              </div>
              <div className={`${styles.cardFace} ${styles.cardBack}`}>
                <ul className={styles.valueList}>
                  {value.points.map((point, i) => (
                    <li key={point} className={styles.valueItem}>
                      <span className={styles.checkWrap} style={{ animationDelay: `${0.2 + i * 0.12}s` }}>
                        <FontAwesomeIcon icon={faCheckCircle} className={styles.checkIcon} />
                      </span>
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
