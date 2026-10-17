
import HomeHero from '../components/Home/HomeHero';
// import HomeExtra from '../components/Home/HomeExtra';
import Manifesto from '../components/Home/Manifesto';
import MarqueBanner from '../components/MarqueBanner';
// import Machines from '../components/Home/Machines';
// import StatsBanner from '../components/StatsBanner';
// import Projects from '../components/Home/Project
// import EndToEnd from '../components/Home/EndToEnd';
import Solutions from '../components/Home/Solutions';
import ContactMap from '../components/ContactMap';
import ImpactMap from '../components/Home/ImpactMap';
import FAQ from '../components/Faq.jsx';
import HomeAbout from '../components/Home/HomeAbout';
import ServicesGrid from '../components/Home/ServicesGrid.jsx';
import ImpactSection from '../components/Home/ImpactSection.jsx';


const HomePage = () => {
  return (
    <div className="flex flex-col w-full">
   
      <HomeHero />
      <MarqueBanner />
      <HomeAbout />
       {/* <EndToEnd /> */}

     <Solutions />
     <ServicesGrid />
     <ImpactMap />
      <Manifesto />
      
      <ImpactSection />
      {/* <StatsBanner /> */}
      <FAQ category="home"/>
      {/* <Projects /> */}
      <ContactMap />
     
     
     


      {/* <HomeExtra /> */}
      
    </div>
  );
};

export default HomePage;