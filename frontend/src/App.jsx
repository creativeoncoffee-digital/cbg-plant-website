import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import MarqueBanner from './components/MarqueBanner';
import PageLoader from './components/PageLoader'; // Import the new loader

// Pages
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import CbgPage from './pages/CbgPage';
import BlogsPage from './pages/BlogsPage';
import ContactPage from './pages/ContactPage';
import NotFoundPage from './pages/NotFoundPage'; // Import the new 404 page

function App() {
  return (
    <Router>
      <div className="min-h-screen flex flex-col font-sans selection:bg-brand-greenLight selection:text-brand-white">
        
        {/* The loader sits globally and listens to route changes */}
      
        
        <MarqueBanner />

        <div className="relative flex-grow flex flex-col">
          <Navbar />
          
          <main className="flex-grow"> 
              {/* <PageLoader /> */}
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/about" element={<AboutPage />} />
              <Route path="" element={<CbgPage />} />
              <Route path="" element={<BlogsPage />} />
              <Route path="/contact" element={<ContactPage />} />
              
              {/* Catch-all Route: The * acts as a wildcard. If the URL doesn't match the above routes, it renders this page */}
              <Route path="*" element={<NotFoundPage />} />
            </Routes>
          </main>
        </div>

        <Footer />
      </div>
    </Router>
  );
}

export default App;