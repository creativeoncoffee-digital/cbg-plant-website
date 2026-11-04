import { useEffect, useRef } from 'react';
import { useInView } from 'react-intersection-observer';
import gsap from 'gsap';
// import { ArrowUpRight } from 'lucide-react';

const StrategicAlliances = () => {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 });
  const containerRef = useRef(null);

  useEffect(() => {
    if (inView) {
      const ctx = gsap.context(() => {
        gsap.fromTo('.alliance-anim',
          { y: 30, opacity: 0 },
          { y: 0, opacity: 1, duration: 0.8, stagger: 0.1, ease: 'power3.out' }
        );
      }, containerRef);
      return () => ctx.revert();
    }
  }, [inView]);

  return (
    <section ref={ref} className="w-full bg-white py-20 md:py-32 px-6 md:px-12">
      <div ref={containerRef} className="w-full max-w-5xl mx-auto flex flex-col items-center">
        
        {/* Header Section */}
        <div className="flex flex-col items-center text-center mb-16 alliance-anim w-full">
          <div className="flex items-center justify-center gap-4 w-full max-w-[400px] mb-6">
            <div className="h-[1px] flex-grow bg-gray-300"></div>
            <span className="text-gray-600 font-medium tracking-[0.2em] uppercase text-[10px] md:text-xs">
              NETWORK & INTEGRATION
            </span>
            <div className="h-[1px] flex-grow bg-gray-300"></div>
          </div>
          
          <h2 className="text-3xl md:text-5xl font-semibold text-[#1a4d2e] tracking-tight uppercase mb-4">
            <span className="text-[#0f2517]">STRATEGIC</span> ALLIANCES
          </h2>
          
          <p className="text-gray-600 text-sm md:text-base font-medium max-w-xl leading-relaxed">
            Collaborating with industry leaders to accelerate the clean energy transition and build a greener, more sustainable tomorrow.
          </p>
        </div>

        {/* Central Divider Decor (Top) */}
        <div className="w-full flex items-center justify-center mb-16 alliance-anim">
          <div className="h-[1px] w-full max-w-[200px] bg-gray-300"></div>
          <div className="px-4">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="#2a633d" xmlns="http://www.w3.org/2000/svg">
              <path d="M12 22C12 22 4 16 4 9C4 4.5 7.5 1 12 1C16.5 1 20 4.5 20 9C20 16 12 22 12 22Z" />
              <path d="M12 22V9" stroke="white" strokeWidth="1.5" />
            </svg>
          </div>
          <div className="h-[1px] w-full max-w-[200px] bg-gray-300"></div>
        </div>

        {/* Split Content Area */}
        <div className="w-full flex flex-col md:flex-row relative">
          
          {/* Central Vertical Line (Desktop only) */}
          <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-[1px] bg-gray-300 -translate-x-1/2"></div>

          {/* LEFT PARTNER: Inventive Gas */}
          <div className="w-full md:w-1/2 flex flex-col items-start md:pr-16 mb-16 md:mb-0 alliance-anim">
            
            <div className="flex items-start gap-4 mb-6">
              {/* Custom Skeleton Icon: Gas Plant / Infrastructure */}
              <div className="w-14 h-14 rounded-full bg-[#f4f7f4] border border-gray-200 flex items-center justify-center shrink-0">
                <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#2a633d" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M2 20h20" />
                  <path d="M5 20V8a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v12" />
                  <path d="M12 6V2" />
                  <path d="M10 2h4" />
                  <path d="M9 12h6" />
                  <path d="M12 12v8" />
                  <path d="M16 14l-2 2-2-2" />
                </svg>
              </div>
              
              <div className="flex flex-col">
                <span className="text-[#3c6e4b] font-bold tracking-widest uppercase text-[10px] md:text-xs mb-1">
                  JOINT VENTURE PARTNER
                </span>
                <h3 className="text-xl md:text-2xl font-bold text-[#0f2517] leading-tight">
                  Inventive Gas Equipments Pvt. Ltd.
                </h3>
              </div>
            </div>

            <div className="w-full bg-[#f2f7f2] px-4 py-2.5 rounded-lg mb-6 text-center md:text-left">
              <span className="text-[#0f2517] text-xs md:text-sm font-semibold">
                Industrial Infrastructure & Gas Engineering Excellence
              </span>
            </div>

            <p className="text-gray-600 text-sm md:text-base font-medium leading-relaxed mb-6">
              As our joint venture partner, Inventive Gas Equipments Pvt. Ltd. provides the robust industrial foundation, high-capacity gas handling infrastructure, and specialized equipment engineering essential to building reliable, high-yield bio-energy facilities.
            </p>

            {/* <a href="https://igequipment.com" target="_blank" rel="noopener noreferrer" className="group flex items-center gap-2 text-[#0f2517] font-semibold text-sm border-b border-[#0f2517] pb-1 hover:text-[#3c6e4b] hover:border-[#3c6e4b] transition-colors w-fit mt-auto">
              Visit site 
              <ArrowUpRight size={14} className="transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </a> */}
          </div>

          {/* RIGHT PARTNER: Inventive Enviro */}
          <div className="w-full md:w-1/2 flex flex-col items-start md:pl-16 alliance-anim">
            
            <div className="flex items-start gap-4 mb-6">
              {/* Custom Skeleton Icon: Cog & Leaf / Tech */}
              <div className="w-14 h-14 rounded-full bg-[#f4f7f4] border border-gray-200 flex items-center justify-center shrink-0">
                <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#2a633d" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M12 15a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z" />
                  <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1Z" />
                  <path d="M16 4C16 4 19 2 21 4C23 6 21 9 21 9" stroke="#9bcc4c" />
                </svg>
              </div>
              
              <div className="flex flex-col">
                <span className="text-[#3c6e4b] font-bold tracking-widest uppercase text-[10px] md:text-xs mb-1">
                  TECHNICAL PARTNER
                </span>
                <h3 className="text-xl md:text-2xl font-bold text-[#0f2517] leading-tight">
                  Inventive Enviro Pvt. Ltd.
                </h3>
              </div>
            </div>

            <div className="w-full bg-[#f2f7f2] px-4 py-2.5 rounded-lg mb-6 text-center md:text-left">
              <span className="text-[#0f2517] text-xs md:text-sm font-semibold">
                Clean-Tech Engineering & Process Innovation
              </span>
            </div>

            <p className="text-gray-600 text-sm md:text-base font-medium leading-relaxed mb-6">
              Serving as our core technical partner, Inventive Enviro Concepts Pvt. Ltd. delivers cutting-edge environmental engineering, process optimization, and technical guidance to ensure maximum gas purification efficiency, yield performance, and plant safety.
            </p>

            {/* <a href="https://inventiveenviro.com" target="_blank" rel="noopener noreferrer" className="group flex items-center gap-2 text-[#0f2517] font-semibold text-sm border-b border-[#0f2517] pb-1 hover:text-[#3c6e4b] hover:border-[#3c6e4b] transition-colors w-fit mt-auto">
              Visit site 
              <ArrowUpRight size={14} className="transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </a> */}
          </div>

        </div>

        {/* Central Divider Decor (Bottom) */}
        <div className="w-full flex items-center justify-center mt-16 alliance-anim">
          <div className="h-[1px] w-full max-w-[200px] bg-gray-300"></div>
          <div className="px-4">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="#2a633d" xmlns="http://www.w3.org/2000/svg">
              <path d="M12 22C12 22 4 16 4 9C4 4.5 7.5 1 12 1C16.5 1 20 4.5 20 9C20 16 12 22 12 22Z" />
              <path d="M12 22V9" stroke="white" strokeWidth="1.5" />
            </svg>
          </div>
          <div className="h-[1px] w-full max-w-[200px] bg-gray-300"></div>
        </div>

      </div>
    </section>
  );
};

export default StrategicAlliances;