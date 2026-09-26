import { useEffect, useRef } from 'react';
import { useLocation } from 'react-router-dom';
import gsap from 'gsap';

const PageTransition = ({ children }) => {
  const { pathname } = useLocation();
  const pageRef = useRef(null);

  useEffect(() => {
    // 1. Instantly snap to the top of the window on every route change
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'instant' 
    });

    // 2. Smoothly animate the new page in
    const ctx = gsap.context(() => {
      gsap.fromTo(pageRef.current, 
        { opacity: 0, y: 15 }, 
        { opacity: 1, y: 0, duration: 0.6, ease: 'power3.out' }
      );
    });

    return () => ctx.revert();
  }, [pathname]); // This triggers every time the URL changes

  return (
    <div ref={pageRef} className="w-full">
      {children}
    </div>
  );
};

export default PageTransition;