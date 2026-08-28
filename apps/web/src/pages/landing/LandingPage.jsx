import { useState } from "react";
import AIStylistDemo from "./components/AIStylistDemo";
import FinalCTA from "./components/FinalCTA";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import HowItWorks from "./components/HowItWorks";
import SellerTrustSection from "./components/SellerTrustSection";
import MatchReveal from "./components/MatchReveal";
import NavBar from "./components/NavBar";
import OutfitBuilder from "./components/OutfitBuilder";
import PersonalizationSection from "./components/PersonalizationSection";
import ProblemSection from "./components/ProblemSection";
import SocialSharingSection from "./components/SocialSharingSection";
import TrustSection from "./components/TrustSection";

const LandingPage = () => {
  const [heroImage, setHeroImage] = useState(null);
  const resetHeroMessage = () => {
    setHeroImage(null);
  };

  const scrollToHero = () => {
    document.getElementById("heroId")?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };

  return (
    <div className="min-h-screen">
      <NavBar scrollToHero={scrollToHero} />
      <Hero heroImage={heroImage} resetHeroMessage={resetHeroMessage} />
      <ProblemSection />
      <HowItWorks />
      <MatchReveal setHeroImage={setHeroImage} />
      <TrustSection />
      <PersonalizationSection />
      <AIStylistDemo />
      <OutfitBuilder />
      <SocialSharingSection />
      <SellerTrustSection />
      <FinalCTA scrollToHero={scrollToHero}/>
      <Footer />
    </div>
  );
};

export default LandingPage;
