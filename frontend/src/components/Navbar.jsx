import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, PhoneCall } from 'lucide-react';

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

  // Check if we are currently on the homepage
  const isHome = location.pathname === '/';
  const shouldBeSolid = !isHome || isScrolled;

  const navTextColor = shouldBeSolid ? 'text-brand-black' : 'text-brand-white';
  const phoneBtnStyle = shouldBeSolid 
    ? 'bg-brand-white border-gray-200 text-brand-black hover:bg-brand-greenDark hover:text-brand-white' 
    : 'bg-transparent border-brand-white text-brand-white hover:bg-brand-white hover:text-brand-black';

  return (
    <nav 
      className={`w-full z-50 transition-all duration-300 ${
        shouldBeSolid ? 'fixed top-0 bg-[#f6f4ec] shadow-md py-4' : 'absolute top-0 bg-transparent py-6'
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

          {/* Center: Desktop Navigation */}
          <div className="hidden md:flex items-center justify-center space-x-8 w-2/4">
            <Link to="/" className={`${navTextColor} hover:text-brand-greenLight transition-colors text-sm font-semibold`}>Home</Link>
            <Link to="*" className={`${navTextColor} hover:text-brand-greenLight transition-colors text-sm font-semibold`}>About Us</Link>
            <Link to="*" className={`${navTextColor} hover:text-brand-greenLight transition-colors text-sm font-semibold`}>CBG</Link>
            <Link to="*" className={`${navTextColor} hover:text-brand-greenLight transition-colors text-sm font-semibold`}>Blogs</Link>
            <Link to="/contact" className={`${navTextColor} hover:text-brand-greenLight transition-colors text-sm font-semibold`}>Contact</Link>
          </div>

          {/* Right: CTA Buttons */}
          <div className="hidden md:flex items-center justify-end space-x-4 w-1/4">
            <Link to="/contact" className="bg-brand-greenLight text-brand-black px-6 py-2.5 rounded-sm font-bold text-sm hover:bg-brand-white transition-colors shadow-sm">
              Get Quote
            </Link>
            
            <a href="tel:+15551234567" className={`border w-10 h-10 rounded-full flex items-center justify-center transition-colors shadow-sm ${phoneBtnStyle}`}>
              <PhoneCall size={18} />
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button onClick={() => setIsOpen(!isOpen)} className={`${navTextColor} hover:text-brand-greenLight`}>
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {isOpen && (
        <div className="md:hidden bg-[#f6f4ec] absolute top-full left-0 w-full shadow-xl border-t border-gray-200">
          <div className="px-6 py-4 flex flex-col space-y-4">
            <Link to="/" className="text-brand-black hover:text-brand-greenLight font-bold">Home</Link>
            <Link to="/about" className="text-brand-black hover:text-brand-greenLight font-bold">About Us</Link>
            <Link to="/cbg" className="text-brand-black hover:text-brand-greenLight font-bold">CBG</Link>
            <Link to="/blogs" className="text-brand-black hover:text-brand-greenLight font-bold">Blogs</Link>
            <Link to="/contact" className="text-brand-black hover:text-brand-greenLight font-bold">Contact</Link>
            
            <div className="pt-4 border-t border-gray-200 flex flex-col gap-4">
              <Link to="/contact" className="bg-brand-greenLight text-brand-black px-6 py-3 rounded-sm font-bold text-center shadow-sm">
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