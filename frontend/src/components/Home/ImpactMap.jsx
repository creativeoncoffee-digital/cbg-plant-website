import { useEffect, useRef, useState } from 'react';
import { useInView } from 'react-intersection-observer';
import gsap from 'gsap';
import { FiCheckCircle } from "react-icons/fi";
import SVG from "react-inlinesvg";
import map from '../../assets/Home/in.svg';

const ImpactMap = () => {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.15 });
  const containerRef = useRef(null);

  const locations = [
    {
      id: "hr",
      state: "Haryana",
      city: "Faridabad",
      top: "25%", 
      left: "31%",
      installations: "5+",
      description: "Mega-capacity Bio-CBG plant engineering and turnkey project delivery.",
      services: ["500 TPD Output", "Zero Waste Management"]
    },
    {
      id: "pb",
      state: "Punjab",
      city: "Ludhiana",
      top: "18%", 
      left: "26%",
      installations: "12+",
      description: "Agricultural residue conversion utilizing high-lignin digesters.",
      services: ["300 TPD Output", "Bio-CNG Compression"]
    },
    {
      id: "gj",
      state: "Gujarat",
      city: "Ahmedabad",
      top: "48%", 
      left: "14%",
      installations: "8+",
      description: "Industrial-scale wastewater and organic waste treatment facilities.",
      services: ["12 MLD Water Treatment", "Biogas Upgrading"]
    },
    {
      id: "up",
      state: "Uttar Pradesh",
      city: "Kanpur",
      top: "35%", 
      left: "45%",
      installations: "15+",
      description: "Municipal solid waste to pipeline-grade green fuel processing.",
      services: ["250 TPD Output", "Grid Injection Skids"]
    },
    {
      id: "mh",
      state: "Maharashtra",
      city: "Pune",
      top: "60%", 
      left: "28%",
      installations: "20+",
      description: "End-to-end Bio-CBG infrastructure supporting western commercial sectors.",
      services: ["400 TPD Output", "Organic Fertilizer Gen"]
    }
  ];

  const [activeLocation, setActiveLocation] = useState(null);

  const handleLocationClick = (loc) => {
    setActiveLocation(loc);
  };

  const matchLocation = (element) => {
    const id = element.getAttribute('id');
    const name = element.getAttribute('name') || element.getAttribute('title');
    const normalize = (str) => str ? str.toLowerCase().replace(/&/g, 'and').replace(/[^a-z]/g, '') : '';
    const normalizedId = normalize(id);
    const normalizedName = normalize(name);

    return locations.find(loc => {
      const normalizedState = normalize(loc.state);
      const matchesShortCode = id && id.toLowerCase().includes(loc.id.toLowerCase());
      return (normalizedId === normalizedState || normalizedName === normalizedState || matchesShortCode);
    });
  };

  const handleSvgClick = (e) => {
    if (e.target.tagName.toLowerCase() === 'path') {
      const foundLoc = matchLocation(e.target);
      if (foundLoc) handleLocationClick(foundLoc);
    }
  };

  useEffect(() => {
    if (inView) {
      const ctx = gsap.context(() => {
        gsap.fromTo('.impact-header',
          { y: 30, opacity: 0 },
          { y: 0, opacity: 1, duration: 0.8, stagger: 0.15, ease: 'power3.out' }
        );
        gsap.fromTo('.impact-content',
          { y: 40, opacity: 0 },
          { y: 0, opacity: 1, duration: 1, ease: 'power3.out', delay: 0.2 }
        );
      }, containerRef);
      return () => ctx.revert();
    }
  }, [inView]);

  return (
    <section ref={ref} className="w-full bg-[#fcfcfc] py-20 md:py-28 px-6 md:px-12 border-t border-[#0f2517]/10">
      
      <style>{`
        .interactive-india-map path {
          transition: all 0.3s ease-in-out;
          fill: #3c6e4b; 
          stroke: #fcfcfc; 
          stroke-width: 1px;
        }
        .interactive-india-map path:hover {
          fill: #ffffff !important; 
          stroke: #0f2517; 
          opacity: 1;
          cursor: pointer;
        }
      `}</style>

      <div ref={containerRef} className="max-w-7xl mx-auto flex flex-col">
        
        <div className="text-center mb-8 md:mb-12 flex flex-col items-center">
          <h2 className="impact-header text-4xl md:text-5xl font-semibold text-[#0f2517] mb-6 tracking-tight leading-[1.1]">
            Scaling Clean Energy <span className="text-[#3c6e4b]">Across India.</span>
          </h2>
          <p className="impact-header text-[#0f2517]/70 text-base md:text-lg max-w-2xl font-medium">
            We engineer premium renewable infrastructure nationwide. Select a region below to view our operational assets and localized impact.
          </p>
        </div>

        <div className="impact-content flex flex-col lg:flex-row items-center lg:items-start gap-5 md:gap-5">
          
          <div className="w-full md:w-[70%] relative flex justify-center lg:justify-start">
            <div className="relative w-full max-w-2xl">
              <SVG 
                src={map} 
                className="w-full h-auto block interactive-india-map" 
                title="India Interactive Map"
                onClick={handleSvgClick}
              />

              {locations.map((loc) => {
                const isActive = activeLocation?.id === loc.id;
                
                return (
                  <div
                    key={loc.id}
                    className="absolute z-10 transform -translate-x-1/2 -translate-y-1/2"
                    style={{ top: loc.top, left: loc.left }}
                  >
                    <div 
                      onClick={() => handleLocationClick(loc)} 
                      className="relative flex items-center justify-center cursor-pointer p-3 group"
                    >
                      <div className={`absolute inset-0 bg-[#d4ff00] rounded-full transition-all duration-300 ${isActive ? 'opacity-40 animate-ping' : 'opacity-0 group-hover:opacity-40 group-hover:animate-ping'}`}></div>
                      
                      <div className={`relative rounded-full transition-all duration-300 shadow-md ${
                        isActive 
                          ? "w-3 h-3 bg-[#d4ff00] border-2 border-[#0f2517] scale-110" 
                          : "w-2 h-2 bg-[#d4ff00] border border-[#0f2517]/20 group-hover:scale-125"
                      }`} />
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          <div className="w-full lg:w-[45%] flex flex-col mt-8 lg:mt-16 justify-center">
            
            {activeLocation ? (
              <div className="w-full flex flex-col transition-all duration-500 animate-in fade-in slide-in-from-bottom-4">
                
                <div className="mb-6">
                  <h3 className="text-4xl md:text-5xl font-semibold text-[#0f2517] tracking-tight mb-2">
                    {activeLocation.city}
                  </h3>
                  <p className="text-sm font-bold text-[#3c6e4b] uppercase tracking-[0.2em]">
                    {activeLocation.state}
                  </p>
                </div>

                <div className="mb-8 flex items-baseline gap-3">
                  <span className="text-6xl font-black text-[#0f2517]">
                    {activeLocation.installations}
                  </span>
                  <span className="text-sm font-bold text-[#0f2517]/50 uppercase tracking-widest">
                    Active Projects
                  </span>
                </div>

                <p className="text-[#0f2517]/80 text-lg leading-relaxed font-medium mb-10 max-w-lg">
                  {activeLocation.description}
                </p>

                <div className="mb-12">
                  <h4 className="text-sm font-bold text-[#0f2517] uppercase tracking-widest mb-6 block">
                    Key Infrastructure
                  </h4>
                  <ul className="flex flex-col gap-4">
                    {activeLocation.services.map((service, index) => (
                      <li key={index} className="flex items-center gap-3 text-base font-bold text-[#0f2517]/80">
                        <FiCheckCircle className="text-[#3c6e4b] w-5 h-5 shrink-0" />
                        {service}
                      </li>
                    ))}
                  </ul>
                </div>
                
                <button className="w-fit bg-[#0f2517] text-[#d4ff00] px-4 py-4 rounded-xl font-semibold uppercase tracking-relaxed text-sm hover:bg-[#3c6e4b] hover:text-white transition-all duration-300 shadow-lg">
                  Explore All CBG Plants
                </button>
                
              </div>
            ) : (
              <div className="w-full h-full min-h-[400px] flex flex-col justify-center text-left py-10 opacity-90 animate-in fade-in">
                <h3 className="text-xl md:text-2xl font-bold text-[#0f2517] mb-2 tracking-tight">Our Impact Across India</h3>
                <p className="text-gray-600 text-sm font-semibold max-w-sm mb-6 leading-relaxed">
                  Click on any highlighted region or marker on the map to view detailed project infrastructure and active installations in that area.
                </p>
                
                <button className="w-fit bg-[#3c6e4b] text-white px-3 py-3 rounded-xl font-semibold uppercase tracking-relaxed text-sm  transition-all duration-300 shadow-lg">
                  Explore All CBG Plants
                </button>
              </div>
            )}
    
          </div>

        </div>
      </div>
    </section>
  );
};

export default ImpactMap;