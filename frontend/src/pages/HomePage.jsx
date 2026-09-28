
import HomeHero from '../components/Home/HomeHero';
import HomeExtra from '../components/Home/HomeExtra';
import Manifesto from '../components/Home/Manifesto';
import MarqueBanner from '../components/MarqueBanner';
import Machines from '../components/Home/Machines';
import StatsBanner from '../components/StatsBanner';
import Projects from '../components/Home/Projects';
import EndToEnd from '../components/Home/EndToEnd';
import Solutions from '../components/Home/Solutions';


const HomePage = () => {
  return (
    <div className="flex flex-col w-full">
   
      <HomeHero />
      <MarqueBanner />

     <Solutions />
      {/* <Machines /> */}
      <StatsBanner />
      {/* <Projects /> */}
     
      <EndToEnd />


      {/* <HomeExtra /> */}
      
    </div>
  );
};

export default HomePage;