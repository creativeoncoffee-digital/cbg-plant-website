import { useEffect, useRef } from 'react';
import { useInView } from 'react-intersection-observer';
import gsap from 'gsap';

const StoryItem = ({ year, title, content, index }) => {
  const { ref, inView } = useInView({ 
    triggerOnce: true, 
    threshold: 0.2 
  });
  const itemRef = useRef(null);

  useEffect(() => {
    if (inView) {
      const ctx = gsap.context(() => {
        // Staggered reveal for the timeline node and text
        gsap.fromTo('.story-elem',
          { y: 30, opacity: 0 },
          { y: 0, opacity: 1, duration: 0.8, stagger: 0.15, ease: 'power3.out', delay: 0.2 }
        );
      }, itemRef);
      return () => ctx.revert();
    }
  }, [inView]);

  return (
    <div ref={ref} className="relative pl-8 md:pl-16 pb-16 md:pb-24 group last:pb-0">
      <div ref={itemRef} className="flex flex-col">
        
        {/* The Neon Node on the timeline */}
        <div className="story-elem absolute left-[-5px] md:left-[-6px] top-1.5 w-3 h-3 md:w-3.5 md:h-3.5 rounded-full border-2 border-brand-black bg-brand-neon group-hover:shadow-[0_0_15px_rgba(212,255,0,0.8)] transition-shadow duration-500 z-10"></div>
        
        {/* Content */}
        <span className="story-elem text-brand-neon font-black tracking-widest uppercase text-xs md:text-sm mb-2">
          {year}
        </span>
        <h3 className="story-elem text-2xl md:text-4xl font-bold text-brand-white mb-6">
          {title}
        </h3>
        <p className="story-elem text-brand-gray text-base md:text-lg font-medium leading-relaxed max-w-3xl">
          {content}
        </p>

      </div>
    </div>
  );
};

const OurStory = () => {
  const { ref, inView } = useInView({ 
    triggerOnce: true, 
    threshold: 0.1 
  });
  const sectionRef = useRef(null);

  useEffect(() => {
    if (inView) {
      const ctx = gsap.context(() => {
        // Line drawing animation for the timeline border
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
      year: "2021",
      title: "The Blueprint",
      content: "In 2021, a high-impact vision crystallized around a national imperative: transforming India’s vast agricultural residue into clean, sustainable energy. Inspired by the Government of India's Sustainable Alternative Towards Affordable Transportation (SATAT) initiative launched in 2018, our founding team recognized the monumental potential of converting agricultural biomass into Compressed Biogas (CBG). Equipped with a clear blueprint and early seed funding, we stepped into the clean-tech sector."
    },
    {
      year: "The Crucible",
      title: "Navigating the Complexities",
      content: "The years that followed served as our industrial crucible. Transitioning from concept to execution required navigating complex regulatory landscapes, supply chains, and market dynamics. Through continuous adaptation, we transformed early operational hurdles into institutional maturity—leveraging digital governance platforms like the GOBARdhan portal and progressive frameworks under the Uttar Pradesh State Bio-Energy Policy."
    },
    {
      year: "Today",
      title: "Active Commercial Production",
      content: "Today, backed by strategic joint ventures and technical partnerships, our flagship commercial CBG production facility is undergoing final execution, set to achieve active commercial production in Q1 of the upcoming financial year."
    }
  ];

  return (
    <section ref={ref} className="w-full bg-brand-black py-24 md:py-32 px-6 md:px-12">
      <div ref={sectionRef} className="w-full max-w-5xl mx-auto flex flex-col md:flex-row gap-16 md:gap-24">
        
        {/* Left Side Header (Stays static on desktop) */}
        <div className="w-full md:w-1/3 flex flex-col">
          <div className="sticky top-32">
            <span className="text-brand-gray font-bold tracking-[0.2em] uppercase text-xs mb-4 block">
              Evolution
            </span>
            <h2 className="text-4xl md:text-5xl font-black text-brand-white tracking-tight uppercase">
              Our <span  className="text-brand-neon">Story</span>
            </h2>
          </div>
        </div>

        {/* Right Side Timeline */}
        <div className="w-full md:w-2/3 relative">
          
          {/* The Vertical Line Background (Faded) */}
          <div className="absolute left-0 top-2 bottom-0 w-px bg-white/10 z-0"></div>
          
          {/* The Animated Glowing Vertical Line */}
          <div className="timeline-line absolute left-0 top-2 bottom-0 w-px bg-brand-neon z-0 shadow-[0_0_10px_rgba(212,255,0,0.5)]"></div>

          {/* Timeline Items */}
          <div className="flex flex-col">
            {storyData.map((item, index) => (
              <StoryItem 
                key={index}
                year={item.year}
                title={item.title}
                content={item.content}
                index={index}
              />
            ))}
          </div>

        </div>

      </div>
    </section>
  );
};

export default OurStory;