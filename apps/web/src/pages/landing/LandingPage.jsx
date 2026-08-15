import AIStylistDemo from "./components/AIStylistDemo"
import FinalCTA from "./components/FinalCTA"
import Footer from "./components/Footer"
import Hero from "./components/Hero"
import HowItWorks from "./components/HowItWorks"
import MarketplaceSection from "./components/MarketplaceSection"
import MatchReveal from "./components/MatchReveal"
import NavBar from "./components/NavBar"
import OutfitBuilder from "./components/OutfitBuilder"
import PersonalizationSection from "./components/PersonalizationSection"
import ProblemSection from "./components/ProblemSection"
import SocialSharingSection from "./components/SocialSharingSection"
import TrustSection from "./components/TrustSection"

const LandingPage = () => {
  return (
    <div className="min-h-screen">
      <NavBar />
      <Hero />
      <ProblemSection />
      <HowItWorks />
      <MatchReveal />
      <TrustSection />
      <PersonalizationSection />
      <AIStylistDemo />
      <OutfitBuilder />
      <SocialSharingSection />
      <MarketplaceSection />
      <FinalCTA />
      <Footer />
    </div>
  )
}

export default LandingPage
