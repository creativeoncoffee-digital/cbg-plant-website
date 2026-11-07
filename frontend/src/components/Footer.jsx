import { Link } from 'react-router-dom';
import { FaFacebook, FaTwitter, FaLinkedin, FaInstagram } from 'react-icons/fa';
import Logo from '../assets/Logo.png';

const Footer = () => {
  return (
    <footer className="w-full bg-[#0f2517] pt-16 pb-8 px-6 md:px-12 flex flex-col relative z-10 border-t border-[#3c6e4b]/20">
      
      {/* Top Grid Area */}
      <div className="w-full max-w-7xl mx-auto flex flex-col lg:flex-row justify-between gap-12 lg:gap-8 mb-16">
        
        {/* Brand & Bio */}
        <div className="flex flex-col w-full lg:w-1/3 pr-0 md:pr-10">
          <Link to="/" className="mb-6 inline-block w-fit">
            <img 
              src={Logo} 
              alt="Company Logo" 
              className="h-10 md:h-12 w-auto object-contain brightness-0 invert"
              onError={(e) => {
                e.target.style.display = 'none';
                e.target.nextSibling.style.display = 'block';
              }}
            />
            <span style={{ display: 'none' }} className="text-2xl font-black text-[#f4f6ef] tracking-widest uppercase">
              Ryvedra<span className="text-[#d4ff00]">CBG</span>
            </span>
          </Link>
          <p className="text-[#f4f6ef]/70 text-sm font-medium leading-relaxed">
            Leading the transition to sustainable energy through advanced Compressed Biogas solutions. We design, engineer, and operate the infrastructure of tomorrow.
          </p>
        </div>

        {/* Quick Links */}
        <div className="flex flex-col w-full md:w-auto">
          <span className="text-[#3c6e4b] font-bold tracking-[0.2em] uppercase text-xs mb-5 block">
            Navigation
          </span>
          <ul className="flex flex-col gap-3">
            {[
              { name: 'Home', path: '/' },
              { name: 'About Us', path: '/about' },
              { name: 'Our CBG Plant', path: '/cbg' },
              { name: 'Latest News', path: '/blogs' },
              { name: 'Contact', path: '/contact' }
            ].map((item, i) => (
              <li key={i}>
                <Link to={item.path} className="text-[#f4f6ef]/90 font-medium text-sm hover:text-[#d4ff00] transition-colors duration-300">
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact Snippet */}
        <div className="flex flex-col w-full md:w-auto">
          <span className="text-[#3c6e4b] font-bold tracking-[0.2em] uppercase text-xs mb-5 block">
            Connect
          </span>
          <address className="not-italic text-[#f4f6ef]/70 text-sm font-medium leading-relaxed mb-4">
            Sector xx ,<br />
             xx noida xx
          </address>
          <a href="mailto:projects@RyvedraCBG.com" className="text-[#f4f6ef]/90 font-medium text-sm hover:text-[#d4ff00] transition-colors mb-2 block">
            projects@RyvedraCBG.com
          </a>
          <a href="tel:+919876543210" className="text-[#f4f6ef]/90 font-medium text-sm hover:text-[#d4ff00] transition-colors block">
            +91 98765 xxxx
          </a>
        </div>

      </div>

      {/* Bottom Copyright & Socials */}
      <div className="w-full max-w-7xl mx-auto flex flex-col-reverse md:flex-row justify-between items-center gap-6 border-t border-[#f4f6ef]/10 pt-6">
        
        <p className="text-[#f4f6ef]/50 text-[10px] md:text-xs font-semibold uppercase tracking-[0.1em]">
          &copy; {new Date().getFullYear()} EcoCBG. All rights reserved.
        </p>
        
          <div className="flex flex-wrap items-center justify-center gap-6">
            <Link to="https://creativeoncoffee.com/" target="_blank" className="text-slate-200 text-xs hover:text-white transition-colors">Design & Developed By Creative On Coffee</Link>
          </div>
        {/* Social Icons */}
        <div className="flex items-center gap-2">
          {[FaFacebook, FaTwitter, FaLinkedin, FaInstagram].map((Icon, i) => (
            <a 
              key={i} 
              href="#" 
              className="w-9 h-9 rounded-full flex items-center justify-center text-[#f4f6ef]/70 bg-[#f4f6ef]/5 hover:text-[#0f2517] hover:bg-[#d4ff00] transition-all duration-300"
            >
              <Icon size={14} />
            </a>
          ))}
        </div>

      </div>

    </footer>
  );
};

export default Footer;