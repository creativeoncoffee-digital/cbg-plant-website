import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import PageLoader from './components/PageLoader';

// Pages
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import CbgPage from './pages/CbgPage';
import BlogsPage from './pages/BlogsPage';
import ContactPage from './pages/ContactPage';
import NotFoundPage from './pages/NotFoundPage';
import CustomCursor from './components/CustomCursor';
import PageTransition from './components/PageTransition';

function App() {
  return (
    <Router>
      {/* Updated selection colors to match the neon dark theme */}
      <div className="min-h-screen flex flex-col font-sans bg-brand-black text-brand-white selection:bg-brand-neon selection:text-brand-black">
        
        {/* <PageLoader /> */}
        <CustomCursor />

        {/* Removed the Marquee here since the new theme uses a cleaner, more minimal header approach */}
        
        <div className="relative flex-grow flex flex-col">
          <Navbar />
          
          <main className="flex-grow"> 
            {/* 2. Wrap the Routes inside PageTransition */}
            <PageTransition>
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/about" element={<AboutPage />} />
              <Route path="/cbg" element={<CbgPage />} />
              <Route path="/blogs" element={<BlogsPage />} />
              <Route path="/contact" element={<ContactPage />} />
              <Route path="*" element={<NotFoundPage />} />
            </Routes>
            </PageTransition>
          </main>
        </div>

        <Footer />
      </div>
    </Router>
  );
}

export default App;