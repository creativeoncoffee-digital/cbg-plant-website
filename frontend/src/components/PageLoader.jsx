import { useEffect, useRef } from 'react';
import { useLocation } from 'react-router-dom';
import gsap from 'gsap';

const PageLoader = () => {
  const location = useLocation();
  const loaderRef = useRef(null);
  const iconRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // 1. Infinite pulsing animation for the flame icon (replacing CSS keyframes)
      gsap.to(iconRef.current, {
        scale: 1.2,
        opacity: 0.7,
        duration: 0.6,
        repeat: -1,
        yoyo: true,
        ease: "power1.inOut"
      });

      // 2. The Screen Wipe Timeline
      const tl = gsap.timeline();
      
      // Swipe up from the bottom of the screen
      tl.fromTo(loaderRef.current, 
        { yPercent: 100 }, 
        { yPercent: 0, duration: 0.4, ease: 'power3.inOut' }
      )
      // Hold for just a split second so it feels like a real loading state
      .to({}, { duration: 0.2 }) 
      // Swipe up and off the top of the screen to reveal the new page
      .to(loaderRef.current, 
        { yPercent: -100, duration: 0.4, ease: 'power3.inOut' }
      );

    }, loaderRef);

    return () => ctx.revert();
  }, [location.pathname]); // The dependency array ensures this runs on every route change

  return (
    <div 
      ref={loaderRef} 
      className="fixed inset-0 z-[9999] bg-brand-white flex flex-col items-center justify-center shadow-2xl"
      style={{ transform: 'translateY(100%)' }} // Starts hidden off-screen
    >
      <div ref={iconRef} className="text-6xl mb-4">🔥</div>
      <h2 className="text-2xl font-black text-brand-greenDark tracking-widest uppercase">EcoCBG</h2>
      <p className="text-brand-black text-sm font-bold mt-2 opacity-50 uppercase tracking-widest">Loading...</p>
    </div>
  );
};

export default PageLoader;