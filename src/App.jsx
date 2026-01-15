import styles from "./App.module.css";
import Header from "./components/Header.jsx";
import HeroCarousel from "./components/HeroCarousel.jsx";
import AboutUs from "./components/AboutUs.jsx";
import MissionVision from "./components/MissionVision.jsx";
import CoreValues from "./components/CoreValues.jsx";
import Services from "./components/Services.jsx";
import ContactUs from "./components/ContactUs.jsx";
import SiteFooter from "./components/SiteFooter.jsx";

export default function App() {
  return (
    <div className={styles.app}>
      <Header />
      <main>
        <HeroCarousel />
        <AboutUs />
        <MissionVision />
        <CoreValues />
        <Services />
        <ContactUs />
      </main>
      <SiteFooter />
    </div>
  );
}
