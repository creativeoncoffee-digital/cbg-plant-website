import AboutHero from '../components/About/AboutHero';
import Leadership from '../components/About/LeaderShip';
import OurStory from '../components/About/OurStory';
import StrategicAlliances from '../components/About/StrategicAlliances';
import VisionMission from '../components/About/VisionMission';

const AboutPage = () => {
  return (
    <>
      <AboutHero />
      <OurStory />
      {/* <VisionMission /> */}
      <Leadership />
      {/* <StrategicAlliances /> */}
    </>
  );
};

export default AboutPage;