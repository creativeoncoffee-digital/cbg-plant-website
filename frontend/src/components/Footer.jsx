import { Link } from 'react-router-dom';
import { FaFacebook, FaTwitter, FaLinkedin, FaInstagram } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-brand-black text-brand-white pt-12 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          
          {/* Brand Info */}
          <div>
            <Link to="/" className="text-2xl font-bold text-brand-white flex items-center gap-2 mb-4">
              <span className="text-brand-flame text-3xl">🔥</span>
            CBG
            </Link>
            <p className="text-gray-400 mb-4">
              Leading the transition to sustainable energy through advanced Compressed BioGas solutions. Reclaim. Reuse. Recycle.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-brand-greenLight transition-colors"><FaFacebook size={24} /></a>
              <a href="#" className="text-gray-400 hover:text-brand-greenLight transition-colors"><FaTwitter size={24} /></a>
              <a href="#" className="text-gray-400 hover:text-brand-greenLight transition-colors"><FaLinkedin size={24} /></a>
              <a href="#" className="text-gray-400 hover:text-brand-greenLight transition-colors"><FaInstagram size={24} /></a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4 border-b-2 border-brand-greenDark inline-block pb-1">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link to="/" className="text-gray-400 hover:text-brand-greenLight transition-colors">Home</Link></li>
              <li><Link to="/about" className="text-gray-400 hover:text-brand-greenLight transition-colors">About Us</Link></li>
              <li><Link to="/cbg" className="text-gray-400 hover:text-brand-greenLight transition-colors">Our CBG Plant</Link></li>
              <li><Link to="/blogs" className="text-gray-400 hover:text-brand-greenLight transition-colors">Latest News</Link></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4 border-b-2 border-brand-flame inline-block pb-1">Contact Us</h3>
            <ul className="space-y-2 text-gray-400">
              <li>xyg.</li>
              <li>xyz</li>
              <li className="mt-4">Email: info@cbg.com</li>
              <li>Phone: +1 (555) xxx-4567</li>
            </ul>
          </div>

        </div>
        
        <div className="border-t border-gray-800 mt-10 pt-6 text-center text-gray-500 text-sm">
          <p>&copy; {new Date().getFullYear()} . All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;