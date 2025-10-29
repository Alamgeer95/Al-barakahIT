import React, { useState, useEffect } from 'react';
import './index.css'; // গ্লোবাল স্টাইল ইম্পোর্ট
import { Routes, Route, useLocation, useNavigate } from 'react-router-dom';

// কম্পোনেন্ট ইম্পোর্ট
import Header from './components/Header';
import Footer from './components/Footer';
import Animated from './components/Animated';
import Icon from './components/Icon';

// পেজ ইম্পোর্ট
import HomePage from './pages/HomePage';
import ServicesPage from './pages/ServicesPage';
import AboutPage from './pages/AboutPage';
import PortfolioPage from './pages/PortfolioPage';
import PricingPage from './pages/PricingPage';
import ContactPage from './pages/ContactPage';
import BlogPage from './pages/BlogPage';

// ধাপ ১: সমস্ত লজিক এবং JSX একটি নতুন কম্পোনেন্ট 'AppContent'-এ সরান
function AppContent() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [headerScrolled, setHeaderScrolled] = useState(false);

  // Tiro Bangla ফন্ট লোড করার জন্য
  useEffect(() => {
    const fontLink = document.createElement('link');
    fontLink.href = 'https://fonts.googleapis.com/css2?family=Tiro+Bangla:wght@400;700&display=swap';
    fontLink.rel = 'stylesheet';
    document.head.appendChild(fontLink);
    return () => { document.head.removeChild(fontLink); };
  }, []);

  // হেডার স্ক্রল ইফেক্ট
  useEffect(() => {
    const handleScroll = () => { setHeaderScrolled(window.scrollY > 50); };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { id: 'home', path: '/', title: 'হোম', icon: "home" },
    { id: 'services', path: '/services', title: 'সার্ভিসেস', icon: "briefcase" },
    { id: 'about', path: '/about', title: 'পরিচিতি', icon: "users" },
    { id: 'portfolio', path: '/portfolio', title: 'পোর্টফোলিও', icon: "layout-grid" },
    { id: 'pricing', path: '/pricing', title: 'প্যাকেজ', icon: "package" },
    { id: 'contact', path: '/contact', title: 'যোগাযোগ', icon: "mail" },
    { id: 'blog', path: '/blog', title: 'ব্লগ', icon: "file-text" },
  ];

  // React Router hooks এখন <BrowserRouter>-এর ভেতরে আছে, তাই কাজ করবে
  const location = useLocation();
  const navigate = useNavigate();

  // URL থেকে বর্তমান activePage বের করা
  const activePage = navLinks.find(link => link.path === location.pathname)?.id || 'home';

  const navigateTo = (pageId) => {
    // pageId (যেমন 'home', 'services') দিয়ে লিঙ্কটি খুঁজে বের করা
    const link = navLinks.find(l => l.id === pageId);
    
    if (link) {
      navigate(link.path); // নতুন পেজে নেভিগেট করা
      setIsMenuOpen(false);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  return (
    <div className="relative text-gray-300 font-tiro-bangla leading-relaxed bg-[#0A0A0A]">
      <div className="islamic-pattern-bg"></div> 

      <Header 
        navLinks={navLinks} 
        activePage={activePage} 
        navigateTo={navigateTo}
        isMenuOpen={isMenuOpen}
        setIsMenuOpen={setIsMenuOpen}
        headerScrolled={headerScrolled}
      />
      <main>
        <Routes>
          <Route path="/" element={<HomePage navigateTo={navigateTo} />} />
          <Route path="/services" element={<ServicesPage isOverview={false} />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/portfolio" element={<PortfolioPage isOverview={false} />} />
          <Route path="/pricing" element={<PricingPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/blog" element={<BlogPage />} />
          {/* যদি কোনো পেজ না পাওয়া যায় তবে হোম পেজে পাঠাবে */}
          <Route path="*" element={<HomePage navigateTo={navigateTo} />} />
        </Routes>
      </main>
      <Footer navLinks={navLinks} navigateTo={navigateTo} />
    </div>
  );
}

export default function App() {
  return <AppContent />
}