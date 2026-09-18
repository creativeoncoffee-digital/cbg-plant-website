import { useEffect, useRef } from 'react';
import gsap from 'gsap';

const CustomCursor = () => {
  const cursorDotRef = useRef(null);
  const cursorOutlineRef = useRef(null);
  const particlesRef = useRef([]);

  useEffect(() => {
    // Disable on touch devices
    const isTouchDevice = 'ontouchstart' in window || navigator.maxTouchPoints > 0;
    if (isTouchDevice) return;

    const dot = cursorDotRef.current;
    const outline = cursorOutlineRef.current;
    const particles = particlesRef.current;

    const ctx = gsap.context(() => {
      // High-performance GSAP trackers
      const xToDot = gsap.quickTo(dot, "x", { duration: 0.05, ease: "power3.out" });
      const yToDot = gsap.quickTo(dot, "y", { duration: 0.05, ease: "power3.out" });
      
      const xToOutline = gsap.quickTo(outline, "x", { duration: 0.25, ease: "power3.out" });
      const yToOutline = gsap.quickTo(outline, "y", { duration: 0.25, ease: "power3.out" });

      let particleIndex = 0;
      let activeTextElement = null; // Keeps track of the text we are currently magnifying

      const onMouseMove = (e) => {
        xToDot(e.clientX);
        yToDot(e.clientY);
        xToOutline(e.clientX);
        yToOutline(e.clientY);

        // --- 1. NEON SPARKLE TRAIL EFFECT ---
        if (particles.length > 0) {
          const p = particles[particleIndex];
          gsap.killTweensOf(p); // Reset any active animation on this particle
          
          // Snap particle to current mouse position
          gsap.set(p, { x: e.clientX, y: e.clientY, scale: 1, opacity: 1 });
          
          // Animate it exploding outward and fading
          gsap.to(p, {
            x: e.clientX + (Math.random() - 0.5) * 80, 
            y: e.clientY + (Math.random() - 0.5) * 80, 
            scale: 0,
            opacity: 0,
            duration: 0.5 + Math.random() * 0.5,
            ease: "power2.out"
          });
          
          particleIndex = (particleIndex + 1) % particles.length;
        }
      };

      // --- 2. INTERACTIVE BUTTON HOVER (Diamond) ---
      const handleInteractiveEnter = () => {
        gsap.to(outline, { 
          scale: 1.5, 
          rotation: 45, 
          borderRadius: '10%', // Turns into a diamond
          backgroundColor: 'rgba(212, 255, 0, 0.1)', 
          borderColor: 'rgba(212, 255, 0, 1)', 
          duration: 0.3,
          ease: "power2.out"
        });
        gsap.to(dot, { scale: 0, duration: 0.2 }); 
      };

      // --- 3. TRUE TEXT MAGNIFYING EFFECT ---
      const handleTextEnter = (target) => {
        activeTextElement = target;

        // A. Make the cursor act like clear glass (Removed the heavy blur!)
        gsap.to(outline, { 
          scale: 4.5, 
          rotation: 0,
          borderRadius: '50%', 
          backgroundColor: 'rgba(212, 255, 0, 0.05)', 
          borderColor: 'rgba(212, 255, 0, 0.3)', 
          backdropFilter: 'brightness(1.2) contrast(1.1)', // Clear glass amplification
          duration: 0.4,
          ease: "back.out(1.5)" 
        });
        gsap.to(dot, { scale: 0.5, opacity: 0.5, duration: 0.2 });

        // B. Physically scale up the text itself to create the magnification
        gsap.to(activeTextElement, {
          scale: 1.04, // Swells the text
          textShadow: '0px 0px 20px rgba(212, 255, 0, 0.3)', // Adds a glowing aura behind the words
          duration: 0.4,
          ease: 'power3.out'
        });
      };

      // --- RESET TO DEFAULT ---
      const handleMouseLeave = () => {
        // Reset Cursor
        gsap.to(outline, { 
          scale: 1, 
          rotation: 0, 
          borderRadius: '50%', 
          backgroundColor: 'transparent',
          borderColor: 'rgba(212, 255, 0, 0.4)', 
          backdropFilter: 'blur(0px) brightness(1) contrast(1)',
          duration: 0.3,
          ease: "power2.out"
        });
        gsap.to(dot, { scale: 1, opacity: 1, duration: 0.2 });

        // Reset Text if we were magnifying it
        if (activeTextElement) {
          gsap.to(activeTextElement, {
            scale: 1,
            textShadow: 'none',
            duration: 0.3,
            ease: 'power2.out',
            clearProps: 'scale,textShadow' // Cleans up GSAP styles so it doesn't break CSS
          });
          activeTextElement = null;
        }
      };

      // Global Event Delegation for hovers
      const onMouseOver = (e) => {
        const target = e.target;
        // If hovering over links/buttons -> Diamond Effect
        if (target.closest('a, button, input, select, textarea, .group')) {
          handleInteractiveEnter();
        } 
        // If hovering over large text -> True Magnifying Lens Effect
        else {
          const textElement = target.closest('h1, h2, h3, p');
          if (textElement) {
            handleTextEnter(textElement);
          }
        }
      };

      const onMouseOut = (e) => {
        if (e.target.closest('a, button, input, select, textarea, .group, h1, h2, h3, p')) {
          handleMouseLeave();
        }
      };

      window.addEventListener('mousemove', onMouseMove);
      document.addEventListener('mouseover', onMouseOver);
      document.addEventListener('mouseout', onMouseOut);

      return () => {
        window.removeEventListener('mousemove', onMouseMove);
        document.removeEventListener('mouseover', onMouseOver);
        document.removeEventListener('mouseout', onMouseOut);
      };
    });

    return () => ctx.revert();
  }, []);

  return (
    <>
      {/* 1. The Particle Pool (20 tiny dots hidden by default) */}
      {[...Array(20)].map((_, i) => (
        <div 
          key={i} 
          ref={el => particlesRef.current[i] = el} 
          className="fixed top-0 left-0 w-1.5 h-1.5 bg-brand-neon rounded-full pointer-events-none z-[9997] opacity-0 -translate-x-1/2 -translate-y-1/2 hidden md:block mix-blend-screen"
        ></div>
      ))}

      {/* 2. The Main Cursor Outline (Lens) */}
      <div 
        ref={cursorOutlineRef} 
        className="fixed top-0 left-0 w-6 h-6 border border-brand-neon/40 rounded-full pointer-events-none z-[9998] -translate-x-1/2 -translate-y-1/2 hidden md:block transition-[backdrop-filter]"
      ></div>
      
      {/* 3. The Instant Following Core Dot */}
      <div 
        ref={cursorDotRef} 
        className="fixed top-0 left-0 w-2 h-2 bg-brand-neon rounded-full pointer-events-none z-[9999] -translate-x-1/2 -translate-y-1/2 hidden md:block shadow-[0_0_10px_rgba(212,255,0,0.8)]"
      ></div>
    </>
  );
};

export default CustomCursor;