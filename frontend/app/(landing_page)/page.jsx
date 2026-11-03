import Footer from "../components/landing_page/Footer";
import Header from "../components/landing_page/Header";
import Hero from "../components/landing_page/HeroSection";
import SectionOne from "../components/landing_page/Section1";
import SectionTwo from "../components/landing_page/Section2";
import SectionThree from "../components/landing_page/Section3";

export default function LandingPage() {
    return (
      <div className="pt-32 min-h-screen bg-white dark:bg-dark-blue">
        <Header />
        <Hero />
        <SectionOne />
        <SectionTwo />
        <SectionThree />
        <Footer />
      </div>
    );
}