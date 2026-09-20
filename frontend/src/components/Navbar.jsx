import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X, PhoneCall, ArrowUpRight } from 'lucide-react';
import Logo from '../assets/Logo.png';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // In the new dark theme, the text remains white whether scrolled or not
  const navTextColor = 'text-brand-white';

  return (
    <nav 
      className={`fixed w-full z-50 transition-all duration-500 ${
        // Fully transparent at the top, switches to a dark translucent blur on scroll
        isScrolled ? 'bg-brand-black/55 backdrop-blur-md shadow-lg py-4' : 'bg-transparent py-6'
      }`}
    >
      <div className="w-full max-w-7xl mx-auto px-6 md:px-12">
        <div className="flex justify-between items-center w-full">
          
          {/* Left: Logo */}
          <div className="flex items-center md:w-1/4">
            <Link to="/" className="flex items-center gap-2">
             <img src={Logo} alt="CBG Plant Logo" className="h-9 md:h-12 w-auto object-contain" />  
            </Link>
          </div>

          {/* Center: Desktop Navigation (As requested) */}
          <div className="hidden md:flex items-center justify-center space-x-8 w-2/4">
            <Link to="/" className={`${navTextColor} hover:text-brand-neon transition-colors text-sm text-gray-300`}>Home</Link>
            <Link to="/*" className={`${navTextColor} hover:text-brand-neon transition-colors text-sm text-gray-300`}>About Us</Link>
            <Link to="/*" className={`${navTextColor} hover:text-brand-neon transition-colors text-sm text-gray-300`}>CBG</Link>
            <Link to="/*" className={`${navTextColor} hover:text-brand-neon transition-colors text-sm text-gray-300`}>Blogs</Link>
            <Link to="/*" className={`${navTextColor} hover:text-brand-neon transition-colors text-sm text-gray-300`}>Contact</Link>
          </div>

          {/* Right: CTA Buttons */}
          <div className="hidden md:flex items-center justify-end space-x-6 w-1/4">
             {/* Secondary Phone Button matched to dark theme */}
            <a 
              href="tel:+15551234567" 
              className="border border-white/20 w-11 h-11 rounded-full flex items-center justify-center text-brand-white hover:border-brand-neon hover:text-brand-neon transition-all duration-300 hover:shadow-[0_0_15px_rgba(212,255,0,0.2)]"
            >
              <PhoneCall size={18} />
            </a>
            {/* New Huge Animation Neon Button */}
            <Link
              to="/contact"
              className="group relative overflow-hidden bg-brand-neon text-brand-black px-7 py-3 font-medium text-sm flex items-center gap-2 transition-all duration-300 hover:scale-105 hover:shadow-[0_0_30px_rgba(212,255,0,0.4)]"
            >
              <span className="relative z-10 tracking-tight uppercase">Get in Touch</span>
              <ArrowUpRight
                size={18}
                className="relative z-10 transform transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
              />
              {/* Sweeping background flash effect */}
              <div className="absolute inset-0 h-full w-0 bg-white/40 group-hover:w-full transition-all duration-500 ease-out z-0"></div>
            </Link>

          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button onClick={() => setIsOpen(!isOpen)} className={`${navTextColor} hover:text-brand-neon transition-colors`}>
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Dropdown (Dark Theme) */}
      {isOpen && (
        <div className="md:hidden bg-brand-black/95 backdrop-blur-xl absolute top-full left-0 w-full shadow-2xl border-t border-white/10">
          <div className="px-6 py-6 flex flex-col space-y-5">
            <Link to="/" className="text-brand-white hover:text-brand-neon font-bold text-lg tracking-wide uppercase">Home</Link>
            <Link to="/about" className="text-brand-white hover:text-brand-neon font-bold text-lg tracking-wide uppercase">About Us</Link>
            <Link to="*" className="text-brand-white hover:text-brand-neon font-bold text-lg tracking-wide uppercase">CBG</Link>
            <Link to="*" className="text-brand-white hover:text-brand-neon font-bold text-lg tracking-wide uppercase">Blogs</Link>
            <Link to="/contact" className="text-brand-white hover:text-brand-neon font-bold text-lg tracking-wide uppercase">Contact</Link>
            
            <div className="pt-6 border-t border-white/10 flex flex-col gap-4">
              <Link to="/contact" className="bg-brand-neon text-brand-black px-6 py-4 font-black text-center uppercase tracking-widest hover:bg-white transition-colors">
                Get Quote
              </Link>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;