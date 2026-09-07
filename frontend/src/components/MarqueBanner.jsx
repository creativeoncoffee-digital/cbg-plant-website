import { useEffect, useRef } from 'react';
import gsap from 'gsap';

const MarqueeBanner = () => {
  const marqueeRef = useRef(null);

  useEffect(() => {
    // GSAP Context ensures animations are properly cleaned up in React
    const ctx = gsap.context(() => {
      gsap.to('.marquee-content', {
        xPercent: -50,
        repeat: -1,
        duration: 20,
        ease: 'none', // 'none' is important for a smooth, constant speed marquee
      });
    }, marqueeRef);
    
    return () => ctx.revert();
  }, []);

  return (
    <div 
      ref={marqueeRef} 
      className="bg-brand-greenDark text-brand-white overflow-hidden whitespace-nowrap py-2 flex items-center shadow-md relative z-40"
    >
      <div className="marquee-content flex gap-12 min-w-max pr-12">
        {/* We duplicate the text block to create a seamless infinite scroll effect */}
        <span className="text-base md:text-sm font-semibold tracking-widest uppercase">
          🔥 Reclaim - Reuse - Recycle &nbsp;|&nbsp; Leading the Transition to Sustainable Energy &nbsp;|&nbsp; Advanced Compressed BioGas Solutions 🌱
        </span>
        <span className="text-base md:text-sm font-semibold tracking-widest uppercase">
          🔥 Reclaim - Reuse - Recycle &nbsp;|&nbsp; Leading the Transition to Sustainable Energy &nbsp;|&nbsp; Advanced Compressed BioGas Solutions 🌱
        </span>
      </div>
    </div>
  );
};

export default MarqueeBanner;