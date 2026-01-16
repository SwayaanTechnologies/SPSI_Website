import Header from "./Header.jsx";
import styles from "./NotFound.module.css";

export default function Careers() {
  return (
    <>
      <Header hideMenu />
      <div className={styles.notFoundWrapper}>
        <div className={styles.code}>Careers</div>
        <div className={styles.subtitle}>Join Our Team</div>
        <div className={styles.message}>
          We are always looking for dedicated professionals to join our security team.<br />
          Please email your resume to <a href="mailto:hr@shadow-protective.com">hr@shadow-protective.com</a> or contact us for current openings.
        </div>
        <a href="/" className={styles.homeBtn}>Back to Home</a>
      </div>
    </>
  );
}
