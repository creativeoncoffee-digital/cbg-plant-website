import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import gsap from 'gsap';

const NotFoundPage = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('.error-elem', {
        y: 30,
        opacity: 0,
        duration: 0.8,
        stagger: 0.2,
        ease: 'power3.out',
        delay: 0.2
      });
    }, containerRef);
    return () => ctx.revert();
  }, []);

  return (
    <div ref={containerRef} className="w-full min-h-[80vh] bg-[#f6f4ec] flex flex-col items-center justify-center px-6 text-center pt-32 pb-24">
      
      <h1 className="error-elem text-4xl md:text-5xl font-black text-brand-greenLight mb-4 drop-shadow-lg">
        404
      </h1>
      
      <h2 className="error-elem text-3xl md:text-4xl font-bold text-brand-black mb-6">
        Page Not Found
      </h2>
      
      <p className="error-elem text-brand-black opacity-75 max-w-lg mb-10 font-medium text-base md:text-md">
        The page you are looking for might have been removed, had its name changed, or is temporarily under construction.
      </p>
      
      <div className="error-elem">
        <Link to="/" className="inline-block bg-brand-flame text-brand-white px-8 py-4 rounded-xl font-bold hover:bg-brand-black transition-colors shadow-xl">
          Return to Homepage
        </Link>
      </div>
      
    </div>
  );
};

export default NotFoundPage;