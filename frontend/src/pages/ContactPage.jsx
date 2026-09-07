import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import ContactHero from '../components/Contact/ContactHero';
import ContactForm from '../components/Contact/ContactForm';

const ContactPage = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('.contact-section', {
        y: 30,
        opacity: 0,
        duration: 1,
        stagger: 0.3,
        ease: 'power3.out',
        delay: 0.2
      });
    }, containerRef);
    return () => ctx.revert();
  }, []);

  return (
    // FIX: Increased top padding (pt-40) to clear the navbar
    <div ref={containerRef} className="w-full min-h-screen bg-[#faf9f6] pt-40 pb-24 px-6 md:px-12 flex items-center justify-center">
      
      {/* FIX: Ensure gap is manageable and children take distinct widths */}
      <div className="w-full max-w-7xl mx-auto flex flex-col md:flex-row gap-12 justify-between items-center md:items-start">
        
        {/* Left Side: 48% width */}
        <div className="contact-section w-full md:w-[48%] flex">
          <ContactHero />
        </div>

        {/* Right Side: 48% width */}
        <div className="contact-section w-full md:w-[48%] flex">
          <ContactForm />
        </div>

      </div>

    </div>
  );
};

export default ContactPage;