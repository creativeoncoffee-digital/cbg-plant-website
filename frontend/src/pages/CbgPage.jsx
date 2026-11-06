//  import React from 'react';
import CbgHero from '../components/Cbg/CbgHero';
import CBGApplications from '../components/Cbg/CBGApplications';
import HowItWorks from '../components/Cbg/HowItWorks';
import BenefitsSection from '../components/About/BenefitsSection';
import AboutSection from '../components/Cbg/AboutSection';
import ExpertCTA from '../components/ExpertCTA';
import MarqueeBanner from '../components/MarqueBanner';
import CBGTechnology from '../components/Cbg/CBGTechnology';
import ImpactSection from '../components/Home/ImpactSection';
import FAQ from '../components/Faq';
// import CBGDetailsBlog from '../components/Cbg/CBGDetailsBlog';


const CbgPage = () => {
  return (
    <>
        <CbgHero />
        <MarqueeBanner />
        <AboutSection />
        <ImpactSection />
        <CBGTechnology />
         <HowItWorks />
           <BenefitsSection />
        {/* <CBGDetailsBlog /> */}
        
        <CBGApplications />
       
      
        <ExpertCTA />
        <FAQ category="cbg" />
    </>
    
        
  );
};

export default CbgPage;




