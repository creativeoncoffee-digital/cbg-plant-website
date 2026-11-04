import { useEffect, useRef } from 'react';
import { useInView } from 'react-intersection-observer';
import gsap from 'gsap';
import { Leaf } from 'lucide-react';

const StoryRow = ({ item, index }) => {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.2 });
  const rowRef = useRef(null);

  // Alternating layout: even indexes (0, 2) have image on left. Odd (1) have image on right.
  const isEven = index % 2 === 0;

  useEffect(() => {
    if (inView) {
      const ctx = gsap.context(() => {
        gsap.fromTo('.story-reveal',
          { y: 40, opacity: 0 },
          { y: 0, opacity: 1, duration: 0.8, stagger: 0.15, ease: 'power3.out' }
        );
      }, rowRef);
      return () => ctx.revert();
    }
  }, [inView]);

  return (
    <div ref={ref} className="relative w-full flex flex-col md:flex-row items-start py-10 md:py-16">
      
      {/* Central Badge (Desktop) */}
      <div className="hidden md:flex absolute left-1/2 top-10 md:top-16 -translate-x-1/2 w-10 h-10 bg-[#163a24] text-white rounded-full items-center justify-center font-bold z-20 shadow-md">
        {item.num}
      </div>

      {/* Mobile Badge */}
      <div className="md:hidden w-10 h-10 bg-[#163a24] text-white rounded-full flex items-center justify-center font-bold mb-6 z-20 relative shadow-md">
        {item.num}
      </div>

      <div ref={rowRef} className="w-full flex flex-col md:flex-row items-center relative z-10">
        {isEven ? (
          <>
            {/* Image Left */}
            <div className="w-full md:w-1/2 md:pr-16 lg:pr-24 mb-8 md:mb-0 story-reveal">
              <img 
                src={item.img} 
                alt={item.titleGreen} 
                className="w-full aspect-[4/3] object-cover rounded-tl-[3rem] rounded-br-[3rem] rounded-tr-xl rounded-bl-xl shadow-[0_10px_30px_rgba(15,37,23,0.1)]" 
              />
            </div>
            
            {/* Text Right */}
            <div className="w-full md:w-1/2 md:pl-20 flex flex-col justify-start story-reveal">
              <div className="flex items-center gap-3 mb-3">
                <span className="text-[#0f2517] font-bold tracking-[0.15em] uppercase text-[10px] md:text-xs">
                  {item.kicker}
                </span>
                <div className="h-[1px] w-12 bg-[#0f2517]/20"></div>
              </div>
              <h3 className="text-3xl md:text-4xl font-semibold text-[#2a633d] mb-4 tracking-tight">
                {item.titleGreen}
              </h3>
              <p className="text-[#0f2517]/70 text-sm md:text-base font-medium leading-relaxed">
                {item.text}
              </p>
            </div>
          </>
        ) : (
          <>
            {/* Text Left (Desktop) / Bottom (Mobile) */}
            <div className="w-full md:w-1/2 md:pr-20 flex flex-col justify-start order-2 md:order-1 mt-8 md:mt-0 story-reveal">
              <div className="flex items-center gap-3 mb-3">
                <span className="text-[#0f2517] font-bold tracking-[0.15em] uppercase text-[10px] md:text-xs">
                  {item.kicker}
                </span>
                <div className="h-[1px] w-12 bg-[#0f2517]/20"></div>
              </div>
              <h3 className="text-3xl md:text-4xl font-semibold text-[#2a633d] mb-4 tracking-tight">
                {item.titleGreen}
              </h3>
              <p className="text-[#0f2517]/70 text-sm md:text-base font-medium leading-relaxed">
                {item.text}
              </p>
            </div>
            
            {/* Image Right */}
            <div className="w-full md:w-1/2 md:pl-16 lg:pl-24 order-1 md:order-2 story-reveal">
              <img 
                src={item.img} 
                alt={item.titleGreen} 
                className="w-full aspect-[4/3] object-cover rounded-tr-[3rem] rounded-bl-[3rem] rounded-tl-xl rounded-br-xl shadow-[0_10px_30px_rgba(15,37,23,0.1)]" 
              />
            </div>
          </>
        )}
      </div>
    </div>
  );
};

const OurStory = () => {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 });
  const sectionRef = useRef(null);

  useEffect(() => {
    if (inView) {
      const ctx = gsap.context(() => {
        gsap.fromTo('.header-reveal',
          { y: 30, opacity: 0 },
          { y: 0, opacity: 1, duration: 0.8, stagger: 0.15, ease: 'power3.out' }
        );
        // Animate central timeline line growing
        gsap.fromTo('.timeline-line',
          { scaleY: 0 },
          { scaleY: 1, transformOrigin: 'top', duration: 2.5, ease: 'power3.inOut' }
        );
      }, sectionRef);
      return () => ctx.revert();
    }
  }, [inView]);

  const storyData = [
    {
      num: "01",
      kicker: "IN 2021",
      titleGreen: "The Blueprint",
      text: "A high-impact vision crystallized around a national imperative: transforming India’s vast agricultural residue into clean, sustainable energy. Inspired by the Government of India's Sustainable Alternative Towards Affordable Transportation (SATAT) initiative launched in 2018, we recognized the monumental potential of converting agricultural biomass into Compressed Biogas (CBG).",
      img: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=2070&auto=format&fit=crop"
    },
    {
      num: "02",
      kicker: "THE CRUCIBLE",
      titleGreen: "Navigating the Complexities",
      text: "The years that followed served as our industrial crucible. Transitioning from concept to execution required navigating complex regulatory landscapes, supply chains, and market dynamics. Through continuous adaptation, we transformed early operational hurdles into institutional maturity—leveraging digital governance platforms like the GOBARdhan portal.",
      img: "https://images.unsplash.com/photo-1532996122724-e3c354a0b15b?q=80&w=2070&auto=format&fit=crop"
    },
    {
      num: "03",
      kicker: "TODAY",
      titleGreen: "Active Commercial Production",
      text: "Today, backed by strategic joint ventures and technical partnerships, our flagship commercial CBG production facility is undergoing final execution, set to achieve active commercial production in Q1 of the upcoming financial year.",
      img: "https://images.unsplash.com/photo-1497435334941-8c899ee9e8e9?q=80&w=2000&auto=format&fit=crop"
    }
  ];

  return (
    <section ref={ref} className="relative w-full bg-[#fcfdfc] py-20 md:py-32 px-6 md:px-12 border-t border-[#0f2517]/5 overflow-hidden">
      
      {/* Background Leaves Decor */}
      <div className="absolute top-0 left-0 opacity-40 pointer-events-none -translate-x-1/3 -translate-y-1/3">
        <svg width="300" height="300" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M50 100C50 100 0 100 0 50C0 0 50 0 50 0C50 0 100 0 100 50C100 100 50 100 50 100Z" fill="#eef5e9" />
          <path d="M70 70C70 70 10 70 10 10C10 -50 70 -50 70 -50C70 -50 130 -50 130 10C130 70 70 70 70 70Z" fill="#d4ff00" opacity="0.3" transform="scale(0.5) translate(40, 40)"/>
        </svg>
      </div>
      <div className="absolute top-1/4 right-0 opacity-30 pointer-events-none translate-x-1/2">
        <svg width="400" height="400" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M50 100C50 100 0 100 0 50C0 0 50 0 50 0C50 0 100 0 100 50C100 100 50 100 50 100Z" fill="#eef5e9" />
        </svg>
      </div>

      <div ref={sectionRef} className="w-full max-w-6xl mx-auto flex flex-col relative z-10">
        
        {/* Header Section */}
        <div className="flex flex-col items-center text-center mb-16 md:mb-24">
          <div className="header-reveal flex items-center gap-4 mb-5">
            <div className="h-[1px] w-10 md:w-16 bg-[#0f2517]/20"></div>
            <span className="text-[#0f2517] font-bold tracking-[0.2em] uppercase text-[10px] md:text-xs">
              Our Evolution
            </span>
            <div className="h-[1px] w-10 md:w-16 bg-[#0f2517]/20"></div>
          </div>
          
          <h2 className="header-anim text-3xl md:text-5xl  font-semibold text-[#0f2517] tracking-tight leading-[1.1] mb-6">
            From Vision to <span className="text-[#2a633d]">Reality</span>
          </h2>
          
          <p className="header-reveal text-[#0f2517]/70 text-sm md:text-base font-medium max-w-lg leading-relaxed">
            A journey of innovation, perseverance and purpose — <br className="hidden md:block" />
            towards a cleaner, greener tomorrow.
          </p>
        </div>

        {/* Timeline Wrapper */}
        <div className="relative w-full flex flex-col">
          
          {/* Central Animated Line (Desktop Only) */}
          <div className="timeline-line hidden md:block absolute left-1/2 top-20 bottom-20 w-[2px] bg-[#2a633d]/30 -translate-x-1/2 z-0"></div>

          {/* Rows */}
          {storyData.map((item, index) => (
            <StoryRow key={index} item={item} index={index} />
          ))}

        </div>

        {/* Bottom Clean Energy Pill */}
        <div className="w-full flex justify-center mt-12 md:mt-20 header-reveal">
          <div className="bg-[#f2f7ef] border border-[#2a633d]/10 px-8 py-4 rounded-full flex items-center gap-4 shadow-sm hover:shadow-md transition-shadow duration-300 cursor-default">
            <Leaf className="text-[#9bcc4c]" size={20} fill="#9bcc4c" />
            <div className="h-6 w-[1px] bg-[#0f2517]/10"></div>
            <span className="text-[#2a633d] font-bold tracking-[0.2em] text-[10px] md:text-xs uppercase flex items-center gap-3">
              Clean Energy <span className="w-1.5 h-1.5 rounded-full bg-[#9bcc4c]"></span> Green Tomorrow
            </span>
          </div>
        </div>

      </div>
    </section>
  );
};

export default OurStory;