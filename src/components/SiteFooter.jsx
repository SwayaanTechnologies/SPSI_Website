import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebookF,
  faInstagram,
  faLinkedinIn,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";
import styles from "./SiteFooter.module.css";

function SocialIcon({ label, icon }) {
  // Brand colors for each icon
  const brandColors = {
    Facebook: '#1877F3',
    Instagram: 'radial-gradient(circle at 30% 110%, #fdf497 0%, #fdf497 5%, #fd5949 45%, #d6249f 60%, #285AEB 90%)',
    LinkedIn: '#0A66C2',
    YouTube: '#FF0000',
  };
  const color = brandColors[label] || '#fff';
  const isGradient = label === 'Instagram';
  return (
    <a href="#" aria-label={label} className={styles.socialLink}>
      <span
        className={styles.socialIconWrap}
        style={isGradient ? { background: color } : {}}
      >
        <FontAwesomeIcon
          icon={icon}
          style={isGradient ? { color: '#fff', filter: 'drop-shadow(0 1px 2px #0008)' } : { color, filter: 'drop-shadow(0 1px 2px #0008)' }}
        />
      </span>
    </a>
  );
}

export default function SiteFooter() {
  return (
    <footer className={styles.footer}>
      <div className={styles.topRow}>
        <div>
          <h3>Company</h3>
          <ul>
            <li><a href="/gallery">Gallery</a></li>
            <li><a href="/careers">Careers</a></li>
            <li>Site Map</li>
          </ul>
        </div>
        <div>
          <h3>Legal</h3>
          <ul>
            <li><a href="/privacy-policy">Privacy Policy</a></li>
            <li><a href="/terms-of-service">Terms of Service</a></li>
            <li><a href="/accessibility">Accessibility</a></li>
          </ul>
        </div>
        <div>
          <h3>Connect with Us</h3>
          <div className={styles.socials}>
            <SocialIcon
              label="Facebook"
              icon={faFacebookF}
            />
            <SocialIcon
              label="Instagram"
              icon={faInstagram}
            />
            <SocialIcon
              label="LinkedIn"
              icon={faLinkedinIn}
            />
            <SocialIcon
              label="YouTube"
              icon={faYoutube}
            />
          </div>
          <div className={styles.license}>Texas DPS License #C01076301</div>
          <div className={styles.academy}>Academy</div>
        </div>
      </div>
      <div className={styles.divider} />
        <div className={styles.bottomNavRow}>
          <button
            className={styles.topImageBtn}
            aria-label="Back to top of homepage"
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          >
            <img
              src="/spsi8.png"
              alt="Back to top logo"
              className={styles.topImage}
              style={{ opacity: 0.65 }}
            />
          </button>
        </div>
      <div className={styles.bottom}>
        <p className={styles.copyright}>
          <span className={styles.copyrightHighlight}>
            © 2026 Shadow Protective Services, Inc. All rights reserved.
          </span>
        </p>
        <p>
          Shadow Protective Services, inc. is an equal Opportunity Employer and
          complies with all applicable federal, state, and local laws regarding
          employment and security services. We are committed to providing
          accessible services to all individuals. If you require accommodations,
          please contact us.
        </p>
      </div>
    </footer>
  );
}
