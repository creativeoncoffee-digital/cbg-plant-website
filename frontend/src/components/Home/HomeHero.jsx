import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import gsap from 'gsap';
import HeroPic from '../../assets/Home/HeroPic.jpg';

const HomeHero = () => {
  const heroRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline();
      
      // Staggered reveal for the main text and button
      tl.from('.hero-text', {
        y: 40,
        opacity: 0,
        duration: 1,
        stagger: 0.15,
        ease: 'power3.out',
        delay: 0.2
      })
      // Smooth slide up for the floating insights card
      .from('.hero-card', {
        y: 30,
        opacity: 0,
        duration: 0.8,
        ease: 'power2.out'
      }, '-=0.6'); 
    }, heroRef);
    
    return () => ctx.revert();
  }, []);

  return (
    <section ref={heroRef} className="relative w-full min-h-[85vh] md:h-[90vh] flex items-center bg-brand-black overflow-hidden">
      
      {/* Background Image Layer */}
      <div className="absolute inset-0 z-0">
        <img src={HeroPic} alt="CBG Plant Background" className="w-full h-full object-cover opacity-70" />
      </div>

      {/* Main Content Wrapper */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 md:px-12 flex flex-col md:flex-row h-full pb-12  md:pb-24 pt-24 md:pt-0">
        
        {/* Left Side: Headline and CTA */}
        <div className="w-full md:w-2/3 flex flex-col items-start justify-center h-full">
          <h1 className="hero-text text-4xl md:text-6xl font-bold text-brand-white leading-tight mb-6 tracking-tight">
            Planning to Setup a <br className="hidden md:block" />
            <span className="bg-brand-greenDark text-brand-white px-3 py-1 inline-block mt-2">
              CBG Plant?
            </span>
          </h1>
          
          <p className="hero-text text-lg md:text-2xl text-gray-200 mb-10 font-medium opacity-90">
            Decades of Expertise in Renewable Energy.
          </p>
          
          <Link to="/contact" className="hero-text bg-brand-greenLight text-brand-black px-8 py-3 rounded-full font-bold text-lg hover:bg-brand-white transition-colors shadow-lg">
            Talk to Expert
          </Link>
        </div>

        {/* Right Side: Floating News/Insights Card */}
        <div className="w-full md:w-1/3 flex items-end md:justify-end mt-16 md:mt-0">
          <div className="hero-card bg-[#f6f4ec] p-5 rounded-2xl shadow-2xl flex flex-col w-full md:max-w-[320px]">
            
            {/* Card Image Placeholder */}
            <div className="w-full h-32 bg-gray-200 rounded-xl mb-4 overflow-hidden flex items-center justify-center border border-gray-300">
              <span className="text-4xl">🏭</span>
            </div>
            
            <h3 className="text-brand-black font-bold text-base mb-2 leading-snug">
              CBG vs CNG: What Business Owners Should Know
            </h3>
            
            <div className="flex justify-between items-end w-full mt-4 border-t border-gray-300 pt-4">
              <div className="flex flex-col">
                <span className="text-gray-500 text-xs font-bold uppercase tracking-wider mb-1">Insights</span>
                <Link to="/blogs" className="text-brand-greenDark text-sm font-bold hover:underline">
                  News & Blogs
                </Link>
              </div>
              
              {/* Small Action Button */}
              <Link to="/blogs" className="w-10 h-10 rounded-full bg-brand-greenLight flex items-center justify-center text-brand-black hover:bg-brand-greenDark hover:text-brand-white transition-colors shadow-md">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="5" y1="12" x2="19" y2="12"></line>
                  <polyline points="12 5 19 12 12 19"></polyline>
                </svg>
              </Link>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};

export default HomeHero;