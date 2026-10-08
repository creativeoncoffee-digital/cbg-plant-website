import { useEffect, useRef } from 'react';
import gsap from 'gsap';

const CustomCursor = () => {
  const cursorDotRef = useRef(null);
  const cursorOutlineRef = useRef(null);
  const particlesRef = useRef([]);

  useEffect(() => {
    const dot = cursorDotRef.current;
    const outline = cursorOutlineRef.current;
    const particles = particlesRef.current;

    // FIX: Force GSAP to handle the centering instead of Tailwind CSS.
    // This prevents the matrix conflict that locks the cursor at the top left.
    gsap.set([dot, outline, ...particles], { xPercent: -50, yPercent: -50 });

    const ctx = gsap.context(() => {
      // High-performance GSAP trackers
      const xToDot = gsap.quickTo(dot, "x", { duration: 0.05, ease: "power3.out" });
      const yToDot = gsap.quickTo(dot, "y", { duration: 0.05, ease: "power3.out" });
      
      const xToOutline = gsap.quickTo(outline, "x", { duration: 0.25, ease: "power3.out" });
      const yToOutline = gsap.quickTo(outline, "y", { duration: 0.25, ease: "power3.out" });

      let particleIndex = 0;
      let activeTextElement = null; 

      const onMouseMove = (e) => {
        xToDot(e.clientX);
        yToDot(e.clientY);
        xToOutline(e.clientX);
        yToOutline(e.clientY);

        // --- 1. SPARKLE TRAIL EFFECT ---
        if (particles.length > 0 && particles[particleIndex]) {
          const p = particles[particleIndex];
          gsap.killTweensOf(p); 
          
          gsap.set(p, { x: e.clientX, y: e.clientY, scale: 1, opacity: 1 });
          
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

      // --- 2. INTERACTIVE BUTTON HOVER ---
      const handleInteractiveEnter = () => {
        gsap.to(outline, { 
          scale: 1.5, 
          rotation: 45, 
          borderRadius: '10%',
          backgroundColor: 'rgba(212, 255, 0, 0.2)', 
          borderColor: '#d4ff00', 
          duration: 0.3,
          ease: "power2.out"
        });
        gsap.to(dot, { scale: 0, duration: 0.2 }); 
      };

      // --- 3. TEXT MAGNIFYING EFFECT ---
      const handleTextEnter = (target) => {
        activeTextElement = target;

        gsap.to(outline, { 
          scale: 4.5, 
          rotation: 0,
          borderRadius: '50%', 
          backgroundColor: 'rgba(15, 37, 23, 0.05)', 
          borderColor: 'rgba(15, 37, 23, 0.2)', 
          backdropFilter: 'brightness(1.1) contrast(1.1)', 
          duration: 0.4,
          ease: "back.out(1.5)" 
        });
        gsap.to(dot, { scale: 0.5, opacity: 0.5, duration: 0.2 });

        gsap.to(activeTextElement, {
          scale: 1.02, 
          textShadow: '0px 0px 15px rgba(188, 239, 20, 0.2)', 
          duration: 0.4,
          ease: 'power3.out'
        });
      };

      // --- RESET TO DEFAULT ---
      const handleMouseLeave = () => {
        gsap.to(outline, { 
          scale: 1, 
          rotation: 0, 
          borderRadius: '50%', 
          backgroundColor: 'transparent',
          borderColor: 'rgba(15, 37, 23, 0.4)', 
          backdropFilter: 'blur(0px) brightness(1) contrast(1)',
          duration: 0.3,
          ease: "power2.out"
        });
        gsap.to(dot, { scale: 1, opacity: 1, duration: 0.2 });

        if (activeTextElement) {
          gsap.to(activeTextElement, {
            scale: 1,
            textShadow: 'none',
            duration: 0.3,
            ease: 'power2.out',
            clearProps: 'scale,textShadow' 
          });
          activeTextElement = null;
        }
      };

      const onMouseOver = (e) => {
        const target = e.target;
        if (target.closest('a, button, input, select, textarea, .group')) {
          handleInteractiveEnter();
        } else {
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
      {/* Notice: -translate-x-1/2 and -translate-y-1/2 have been safely removed from all elements */}
      
      {/* Sparkle Particles */}
      {[...Array(20)].map((_, i) => (
        <div 
          key={i} 
          ref={el => particlesRef.current[i] = el} 
          className="fixed top-0 left-0 w-1.5 h-1.5 bg-[#d4ff00] rounded-full pointer-events-none z-[999999] opacity-0 hidden md:block"
        ></div>
      ))}

      {/* Main Cursor Outline */}
      <div 
        ref={cursorOutlineRef} 
        className="fixed top-0 left-0 w-6 h-6 border border-[#2ED814]/40 rounded-full pointer-events-none z-[999999] hidden md:block transition-[backdrop-filter]"
      ></div>
      
      {/* Instant Following Core Dot */}
      <div 
        ref={cursorDotRef} 
        className="fixed top-0 left-0 w-2 h-2 bg-[#29eb70] rounded-full pointer-events-none z-[999999] hidden md:block shadow-[0_0_8px_rgba(15,37,23,0.5)]"
      ></div>
    </>
  );
};

export default CustomCursor;