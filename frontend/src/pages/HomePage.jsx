
import HomeHero from '../components/Home/HomeHero';
import HomeExtra from '../components/Home/HomeExtra';
import Manifesto from '../components/Home/Manifesto';
import MarqueBanner from '../components/MarqueBanner';
import Machines from '../components/Home/Machines';
import StatsBanner from '../components/StatsBanner';
import Projects from '../components/Home/Projects';

const HomePage = () => {
  return (
    <div className="flex flex-col w-full">
   
      <HomeHero />
      <MarqueBanner />

      {/* <Manifesto />
      <Machines /> */}
      <StatsBanner />
      <Projects />
      {/* <HomeExtra /> */}
      
    </div>
  );
};

export default HomePage;