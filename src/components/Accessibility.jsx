import Header from "./Header.jsx";
import styles from "./NotFound.module.css";

export default function Accessibility() {
  return (
    <>
      <Header hideMenu />
      <div className={styles.notFoundWrapper}>
        <div className={styles.code}>Accessibility</div>
        <div className={styles.subtitle}>Our Commitment</div>
        <div className={styles.message}>
          We are committed to providing accessible services to all individuals. If you require accommodations or have accessibility concerns, please contact us and we will assist you promptly.
        </div>
        <a href="/" className={styles.homeBtn}>Back to Home</a>
      </div>
    </>
  );
}
