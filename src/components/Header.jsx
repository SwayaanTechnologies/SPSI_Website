import { useEffect, useRef, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHouse,
  faCircleInfo,
  faBullseye,
  faGem,
  faShieldHalved,
  faEnvelopeOpenText,
} from "@fortawesome/free-solid-svg-icons";
import styles from "./Header.module.css";

const SCROLL_THRESHOLD = 40;

const NAV_ITEMS = [
  {
    label: "About Us",
    target: "about",
    icon: faCircleInfo,
  },
  {
    label: "Mission & Vision",
    target: "mission",
    icon: faBullseye,
  },
  {
    label: "Our Core Values",
    target: "values",
    icon: faGem,
  },
  {
    label: "Our Services",
    target: "services",
    icon: faShieldHalved,
  },
  {
    label: "Contact Us",
    target: "contact",
    icon: faEnvelopeOpenText,
  },
];


export default function Header({ hideMenu = false }) {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeIdx, setActiveIdx] = useState(null);
  const navRef = useRef(null);
  const toggleRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > SCROLL_THRESHOLD);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const handleResize = () => {
      setMenuOpen(false);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    if (!menuOpen) return;

    const handleClick = (event) => {
      if (
        navRef.current &&
        !navRef.current.contains(event.target) &&
        toggleRef.current &&
        !toggleRef.current.contains(event.target)
      ) {
        setMenuOpen(false);
      }
    };

    const handleKeyDown = (event) => {
      if (event.key === "Escape") {
        setMenuOpen(false);
      }
    };

    document.addEventListener("click", handleClick);
    document.addEventListener("keydown", handleKeyDown);
    return () => {
      document.removeEventListener("click", handleClick);
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [menuOpen]);

  const scrollToSection = (sectionId) => {
    if (sectionId === "home") {
      window.scrollTo({ top: 0, behavior: "smooth" });
      return;
    }

    const target = document.getElementById(sectionId);
    if (!target) return;

    const header = document.querySelector("header");
    const headerHeight = header ? header.offsetHeight : 0;
    const offset =
      target.getBoundingClientRect().top + window.scrollY - headerHeight + 20;

    window.scrollTo({ top: Math.max(offset, 0), behavior: "smooth" });
  };

  const handleNavClick = (sectionId) => {
    scrollToSection(sectionId);
    setMenuOpen(false);
  };

  return (
    <header
      className={`${styles.header} ${scrolled ? styles.headerScrolled : ""}`}
    >
      <div className={styles.logoContainer}>
        <img
          src="/spsi1.png"
          alt="Shadow Protective Services, Inc. logo"
          className={styles.logo}
        />
      </div>
      <div className={styles.titleGroup}>
        <p className={styles.companyName}>Shadow Protective Services, Inc.</p>
        <p className={styles.companyMotto}>Bene Acceptus Est Paratum</p>
      </div>
      {!hideMenu && (
        <>
          <button
            type="button"
            className={`${styles.menuToggle} ${
              menuOpen ? styles.menuToggleActive : ""
            }`}
            aria-label="Toggle navigation menu"
            aria-expanded={menuOpen}
            aria-controls="primary-navigation"
            ref={toggleRef}
            onClick={() => setMenuOpen((prev) => !prev)}
          >
            <span />
            <span />
            <span />
          </button>
          <nav
            id="primary-navigation"
            ref={navRef}
            className={`${styles.navPanel} ${menuOpen ? styles.navOpen : ""}`}
            aria-label="Primary navigation"
            aria-hidden={!menuOpen}
          >
            {NAV_ITEMS.map((item, idx) => (
              <button
                type="button"
                key={item.label}
                className={styles.navItem}
                onClick={() => {
                  setActiveIdx(activeIdx === idx ? null : idx);
                  handleNavClick(item.target);
                }}
                onBlur={() => setActiveIdx(null)}
              >
                <span
                  className={styles.navIcon}
                  tabIndex={-1}
                  aria-label={item.label + ' icon'}
                  style={{ cursor: "pointer", outline: "none" }}
                >
                  <FontAwesomeIcon
                    icon={item.icon}
                    style={{ color: activeIdx === idx ? "#ffe066" : "#fff", transition: "color 0.2s" }}
                  />
                </span>
                <span className={styles.navLabel}>{item.label}</span>
              </button>
            ))}
          </nav>
        </>
      )}
    </header>
  );
}
