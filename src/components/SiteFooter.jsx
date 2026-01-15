import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebookF,
  faInstagram,
  faLinkedinIn,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";
import styles from "./SiteFooter.module.css";

function SocialIcon({ label, icon }) {
  return (
    <a href="#" aria-label={label} className={styles.socialLink}>
      <FontAwesomeIcon icon={icon} />
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
            <li>Gallery</li>
            <li>Careers</li>
            <li>Site Map</li>
          </ul>
        </div>
        <div>
          <h3>Legal</h3>
          <ul>
            <li>Privacy Policy</li>
            <li>Terms of Service</li>
            <li>Accessibility</li>
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
        </div>
      </div>
      <div className={styles.divider} />
      <div className={styles.bottom}>
        <p className={styles.copyright}>2026 Shadow Protective Services, inc. All rights reserved.</p>
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
