import Header from "./Header.jsx";
import styles from "./NotFound.module.css";

export default function TermsOfService() {
  return (
    <>
      <Header hideMenu />
      <div className={styles.notFoundWrapper}>
        <div className={styles.code}>Terms of Service</div>
        <div className={styles.subtitle}>Website Terms</div>
        <div className={styles.message}>
          By using this website, you agree to our terms of service. Please read our terms carefully to understand your rights and responsibilities.
        </div>
        <a href="/" className={styles.homeBtn}>Back to Home</a>
      </div>
    </>
  );
}
