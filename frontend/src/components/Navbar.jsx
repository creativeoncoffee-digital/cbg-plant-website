import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, PhoneCall, ArrowRight } from 'lucide-react';
import Logo from '../assets/Logo.png';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Force white navbar on Blogs and Contact pages, or if user scrolls
  const forceWhiteNav = location.pathname.includes('/blogs') || location.pathname.includes('/contact'); // location.pathname.includes('/blogs') || location.pathname.includes('/contact')
  const isWhiteNav = isScrolled || forceWhiteNav;

  // Dynamic Styles
  const navLinkStyle = `text-sm font-bold transition-all duration-300 relative after:absolute after:bottom-[-6px] after:left-0 after:w-0 hover:after:w-full after:h-[2px] after:transition-all after:duration-300 ${
    isWhiteNav 
      ? 'text-[#0f2517] hover:text-[#3c6e4b] after:bg-[#3c6e4b]' 
      : 'text-[#0f2517] hover:text-[#3c6e4b] after:bg-[#3c6e4b]' // Changed to be dark by default to match the new white hero
  }`;

  return (
    <nav 
      className={`fixed w-full z-50 transition-all duration-500 ${
        isWhiteNav ? 'bg-white shadow-[0_4px_20px_rgba(0,0,0,0.05)] py-4' : 'bg-transparent py-6'
      }`}
    >
      <div className="w-full max-w-7xl mx-auto px-6 md:px-12">
        <div className="flex justify-between items-center w-full">
          
          {/* Left: Logo */}
          <div className="flex items-center md:w-1/4">
            <Link to="/" className="flex items-center gap-2">
              <img 
                src={Logo} 
                alt="CBG Plant Logo" 
                className={`h-8 md:h-10 w-auto object-contain transition-all duration-300 ${
                  isWhiteNav ? 'brightness-70' : 'brightness-0' // Always black/dark to match white hero
                }`} 
              />  
            </Link>
          </div>

          {/* Center: Desktop Navigation */}
          <div className="hidden md:flex items-center justify-center space-x-8 w-2/4">
            <Link to="/" className={navLinkStyle}>Home</Link>
            <Link to="/about" className={navLinkStyle}>About Us</Link>
            <Link to="/cbg" className={navLinkStyle}>CBG</Link>
            <Link to="/blogs" className={navLinkStyle}>Blogs</Link>
            <Link to="/contact" className={navLinkStyle}>Contact</Link>
          </div>

          {/* Right: CTA Buttons */}
          <div className="hidden md:flex items-center justify-end space-x-6 w-1/4">
            
            {/* Phone/Search Icon Circle */}
            <a 
              href="tel:+15551234567" 
              className={`w-11 h-11 rounded-full flex items-center justify-center transition-all duration-300 border ${
                isWhiteNav 
                  ? 'border-[#0f2517]/20 text-[#0f2517] hover:border-[#3c6e4b] hover:text-[#3c6e4b] bg-white' 
                  : 'border-[#0f2517]/20 text-[#0f2517] hover:border-[#3c6e4b] hover:text-[#3c6e4b] bg-white/50' // Darker default for white hero
              }`}
            >
              <PhoneCall size={18} />
            </a>
            
            {/* Pill-Shaped Get in Touch Button */}
            <Link
              to="/contact"
              className={`group relative overflow-hidden px-8 py-3 rounded-full font-bold text-sm flex items-center gap-2 transition-all duration-300 hover:scale-105 hover:shadow-lg ${
                isWhiteNav 
                  ? 'bg-[#3c6e4b] text-white hover:bg-[#2c8450]' 
                  : 'bg-[#d4ff00] text-[#0f2517]'
              }`}
            >
              <span className="relative z-10 tracking-wide uppercase">Get in Touch</span>
              <ArrowRight
                size={18}
                className="relative z-10 transform transition-transform duration-300 group-hover:translate-x-1"
              />
              {/* <div className="absolute inset-0 h-full w-0 bg-white/0 group-hover:w-full transition-all duration-500 ease-out z-0"></div> */}
            </Link>

          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button onClick={() => setIsOpen(!isOpen)} className={`transition-colors ${isWhiteNav ? 'text-[#0f2517]' : 'text-[#0f2517]'}`}>
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {isOpen && (
        <div className={`md:hidden absolute top-full left-0 w-full shadow-2xl transition-all duration-300 border-t ${isWhiteNav ? 'bg-white border-[#0f2517]/10' : 'bg-white border-[#0f2517]/10'}`}>
          <div className="px-6 py-6 flex flex-col space-y-5">
            <Link to="/" onClick={() => setIsOpen(false)} className={`font-bold text-lg tracking-wide uppercase ${isWhiteNav ? 'text-[#0f2517] hover:text-[#3c6e4b]' : 'text-[#0f2517] hover:text-[#3c6e4b]'}`}>Home</Link>
            <Link to="/about" onClick={() => setIsOpen(false)} className={`font-bold text-lg tracking-wide uppercase ${isWhiteNav ? 'text-[#0f2517] hover:text-[#3c6e4b]' : 'text-[#0f2517] hover:text-[#3c6e4b]'}`}>About Us</Link>
            <Link to="/cbg" onClick={() => setIsOpen(false)} className={`font-bold text-lg tracking-wide uppercase ${isWhiteNav ? 'text-[#0f2517] hover:text-[#3c6e4b]' : 'text-[#0f2517] hover:text-[#3c6e4b]'}`}>CBG</Link>
            <Link to="/blogs" onClick={() => setIsOpen(false)} className={`font-bold text-lg tracking-wide uppercase ${isWhiteNav ? 'text-[#0f2517] hover:text-[#3c6e4b]' : 'text-[#0f2517] hover:text-[#3c6e4b]'}`}>Blogs</Link>
            <Link to="/contact" onClick={() => setIsOpen(false)} className={`font-bold text-lg tracking-wide uppercase ${isWhiteNav ? 'text-[#0f2517] hover:text-[#3c6e4b]' : 'text-[#0f2517] hover:text-[#3c6e4b]'}`}>Contact</Link>
            
            <div className={`pt-6 border-t flex flex-col gap-4 ${isWhiteNav ? 'border-[#0f2517]/10' : 'border-[#0f2517]/10'}`}>
              <Link to="/contact" onClick={() => setIsOpen(false)} className={`rounded-full px-6 py-4 font-black text-center uppercase tracking-widest transition-colors ${isWhiteNav ? 'bg-[#9bcc4c] text-[#0f2517]' : 'bg-[#d4ff00] text-[#0f2517]'}`}>
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