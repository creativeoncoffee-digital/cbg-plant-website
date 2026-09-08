import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import gsap from 'gsap';
import { CheckCircle2 } from 'lucide-react';

const AboutHero = () => {
  const heroRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('.about-reveal', {
        y: 30,
        opacity: 0,
        duration: 1,
        stagger: 0.2,
        ease: 'power3.out',
        delay: 0.1
      });
    }, heroRef);
    return () => ctx.revert();
  }, []);

  return (
    <div ref={heroRef} className="w-full flex flex-col font-sans">
      
      {/* Top Hero Banner */}
      <div className="w-full bg-[#f6f4ec] pt-40 pb-24 px-6 md:px-12 flex flex-col items-center text-center about-reveal">
        <div className="flex items-center gap-2 text-xs font-bold text-brand-black mb-8">
          <Link to="/" className="opacity-50 hover:opacity-100 transition-opacity">Home</Link>
          <span className="opacity-50">/</span>
          <span>About Us</span>
        </div>
        
        <div className="bg-brand-white px-4 py-1.5 rounded-full inline-flex items-center gap-2 mb-8 shadow-sm border border-gray-200">
          <div className="w-2 h-2 rounded-full bg-brand-flame"></div>
          <span className="text-brand-greenDark font-black text-xs tracking-widest uppercase">Our Story</span>
        </div>

        <h1 className="text-4xl md:text-6xl font-black text-brand-greenDark leading-tight max-w-4xl mb-6">
          Built to close the loop on India's organic waste
        </h1>
        <p className="text-brand-black opacity-75 text-lg md:text-xl font-medium max-w-2xl">
          EcoCBG was founded on a simple observation: the country's waste problem and its energy problem are the same problem, solved the same way.
        </p>
      </div>

      {/* Mission Split Section */}
      <div className="w-full max-w-7xl mx-auto px-6 md:px-12 py-24 flex flex-col md:flex-row gap-16 items-center about-reveal">
        
        {/* Left: Graphic Placeholder (Using Flexbox to create a clean geometric design) */}
        <div className="w-full md:w-1/2 bg-brand-greenDark rounded-3xl aspect-[4/5] md:aspect-square flex flex-col items-center justify-center p-10 relative overflow-hidden shadow-2xl">
          {/* Abstract geometric shapes to replace the old SVG */}
          <div className="absolute top-10 left-10 w-32 h-32 rounded-full bg-brand-greenLight opacity-50 mix-blend-screen"></div>
          <div className="absolute bottom-10 right-10 w-48 h-48 rounded-full bg-brand-flame opacity-40 mix-blend-screen"></div>
          
          <h3 className="text-4xl md:text-5xl font-black text-brand-white z-10 text-center leading-tight">
            Reclaim.<br/>Reuse.<br/>Recycle.
          </h3>
        </div>

        {/* Right: Copy */}
        <div className="w-full md:w-1/2 flex flex-col">
          <span className="text-brand-flame font-bold tracking-widest uppercase mb-4 text-sm">Our Mission</span>
          <h2 className="text-3xl md:text-4xl font-black text-brand-black mb-6 leading-tight">
            Make clean fuel the obvious choice, not the expensive one
          </h2>
          <p className="text-gray-600 font-medium text-lg mb-6 leading-relaxed">
            We design, build, and operate compressed biogas plants that convert agricultural residue and organic waste into pipeline-grade fuel, priced to compete with fossil CNG from day one.
          </p>
          <p className="text-gray-600 font-medium text-lg mb-8 leading-relaxed">
            Every plant is sited within a short haul of its feedstock supply, run on remote-monitored digesters, and paired with a bio-fertiliser offtake so the farms that feed us keep getting something back.
          </p>

          <div className="flex flex-col gap-4">
            <div className="flex items-center gap-3">
              <CheckCircle2 className="text-brand-greenLight shrink-0" size={24} />
              <span className="text-brand-black font-bold">Farm-sourced feedstock, no virgin land use</span>
            </div>
            <div className="flex items-center gap-3">
              <CheckCircle2 className="text-brand-greenLight shrink-0" size={24} />
              <span className="text-brand-black font-bold">Bio-fertiliser by-product returned to growers</span>
            </div>
            <div className="flex items-center gap-3">
              <CheckCircle2 className="text-brand-greenLight shrink-0" size={24} />
              <span className="text-brand-black font-bold">Grid-independent, dispatchable fuel supply</span>
            </div>
          </div>
        </div>

      </div>

    </div>
  );
};

export default AboutHero;