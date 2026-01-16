import Header from "./Header.jsx";
import styles from "./NotFound.module.css";

export default function PrivacyPolicy() {
  return (
    <>
      <Header hideMenu />
      <div className={styles.notFoundWrapper}>
        <div className={styles.code}>Privacy Policy</div>
        <div className={styles.subtitle}>Your Privacy Matters</div>
        <div className={styles.message}>
          We respect your privacy and are committed to protecting your personal information. Please review our full privacy policy for details on how we collect, use, and safeguard your data.
        </div>
        <a href="/" className={styles.homeBtn}>Back to Home</a>
      </div>
    </>
  );
}
