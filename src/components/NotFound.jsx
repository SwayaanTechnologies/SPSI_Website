import Header from "./Header.jsx";
import styles from "./NotFound.module.css";

export default function NotFound() {
  return (
    <>
      <Header hideMenu />
      <div className={styles.notFoundWrapper}>
        <div className={styles.icon404}>
          <svg width="64" height="64" fill="none" viewBox="0 0 64 64" aria-hidden="true">
            <path d="M32 8l22 8v14c0 12-8.5 23-22 26C18.5 53 10 42 10 30V16l22-8z" stroke="#1D9A8F" strokeWidth="3" fill="none"/>
          </svg>
        </div>
        <div className={styles.code}>404</div>
        <div className={styles.subtitle}>PAGE NOT FOUND</div>
        <div className={styles.message}>
          We're sorry, but the page you're looking for doesn't exist or may have been moved.<br />
          Our security is still active and protecting what matters most.
        </div>
        <a href="/" className={styles.homeBtn}>Back to Home</a>
      </div>
    </>
  );
}
