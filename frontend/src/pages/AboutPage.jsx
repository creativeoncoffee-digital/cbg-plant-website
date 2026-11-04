import AboutHero from '../components/About/AboutHero';
import Leadership from '../components/About/LeaderShip';
import OurStory from '../components/About/OurStory';
import StrategicAlliances from '../components/About/StrategicAlliances';
import VisionMission from '../components/About/VisionMission';
import ImpactSection from '../components/Home/ImpactSection';
// import AboutSection from '../components/About/AboutSection';
import MarqueeBanner from '../components/MarqueBanner';
import BanefitsSection from '../components/About/BenefitsSection';
import FAQ from '../components/Faq';

const AboutPage = () => {
  return (
    <>
      <AboutHero />
      <MarqueeBanner  />
      {/* < AboutSection /> */}
        
      <ImpactSection />
       <BanefitsSection />
   
      <OurStory />
      <VisionMission />
      <Leadership />
      <StrategicAlliances />
      <FAQ category="about" />
    </>
  );
};

export default AboutPage;