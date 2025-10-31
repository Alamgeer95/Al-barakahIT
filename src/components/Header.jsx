import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Icon from "./Icon";
import { Helmet } from "react-helmet";

const Header = ({
  navLinks,
  activePage,
  navigateTo,
  isMenuOpen,
  setIsMenuOpen,
}) => {
  const [headerScrolled, setHeaderScrolled] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(true);

  // Scroll listener
  useEffect(() => {
    const handleScroll = () => {
      setHeaderScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // System dark/light mode listener
  useEffect(() => {
    const matchMedia = window.matchMedia("(prefers-color-scheme: dark)");
    setIsDarkMode(matchMedia.matches);
    const handler = (e) => setIsDarkMode(e.matches);
    matchMedia.addEventListener("change", handler);
    return () => matchMedia.removeEventListener("change", handler);
  }, []);

  // Body scroll lock when menu is open
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isMenuOpen]);

  // Colors based on dark/light mode
  const bgHeader = isDarkMode
    ? headerScrolled
      ? "bg-black/60 backdrop-blur-lg border-b border-gray-800"
      : "bg-transparent"
    : headerScrolled
    ? "bg-white/60 backdrop-blur-lg border-b border-gray-300"
    : "bg-transparent";

  const navText = isDarkMode ? "text-gray-300" : "text-gray-700";
  const navHoverBg = isDarkMode ? "hover:bg-teal-300/50" : "hover:bg-teal-200/50";
  const menuText = isDarkMode ? "text-gray-200" : "text-gray-800";

  return (
    <>
      {/* SEO & Meta */}
      <Helmet>
        <title>Al-barakah IT — Premium IT Solutions</title>
        <meta
          name="description"
          content="Al-barakah IT provides top-notch IT services, web development, software solutions, and digital transformation for businesses worldwide."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Helmet>

      {/* Header */}
      <header className={`sticky top-0 z-[999] transition-all duration-300 ${bgHeader}`}>
        <div className="container mx-auto px-4 sm:px-6 md:px-8 lg:px-10 xl:px-12 py-4">
          {/* First Line: Logo, Title, and CTA Button */}
          <div className="flex justify-between items-center">
            {/* Logo and Title */}
            <h1
              className="flex items-center gap-2 sm:gap-3 cursor-pointer pl-2 sm:pl-3 select-none"
              onClick={() => navigateTo("home")}
            >
              <img
                src="/Al-barakahIT-logo.png"
                alt="Al-barakah IT Logo"
                className="h-8 w-8 sm:h-9 sm:w-9 md:h-10 md:w-10 lg:h-12 lg:w-12 rounded-full object-cover"
              />
              <span
                className="text-3xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-teal-400 to-blue-500"
              >
                Al-barakah IT
              </span>
            </h1>

            {/* Desktop CTA Button */}
            <button
              className="hidden lg:inline-block lg:mr-4 cursor-pointer bg-gradient-to-r from-teal-500 to-blue-600 text-white font-semibold py-2 px-6 rounded-lg shadow-lg hover:shadow-blue-500/50 transition-transform transform hover:scale-105 duration-300 text-lg md:text-xl"
              onClick={() => navigateTo("contact")}
            >
              ফ্রি কনসাল্টেশন
            </button>

            {/* Mobile Menu Toggle */}
            <div className="lg:hidden flex items-center gap-2">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="text-gray-200 p-2 hover:text-white transition-colors flex items-center gap-2 cursor-pointer"
              >
                <Icon name="menu" className="h-6 w-6" />
              </button>
            </div>
          </div>

          {/* Second Line: Navigation Links (Desktop) */}
          <nav className="hidden lg:flex justify-center items-center gap-1 sm:gap-2 md:gap-3 lg:gap-4 py-4">
            {navLinks.map((link) => (
              <button
                key={link.id}
                onClick={() => navigateTo(link.id)}
                className={`relative group flex items-center gap-2 cursor-pointer text-base sm:text-lg md:text-xl lg:text-2xl xl:text-3xl 2xl:text-4xl font-semibold transition-all duration-300 px-3 py-1 rounded-md ${
                  activePage === link.id
                    ? "text-blue-900 bg-teal-300 shadow-md"
                    : `${navText} ${navHoverBg} hover:text-white`
                }`}
              >
                <Icon name={link.icon} className="h-5 w-5" />
                {link.title}
                <span
                  className={`absolute bottom-0 left-0 w-full h-0.5 bg-teal-400 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 ${
                    activePage === link.id ? "scale-x-100" : ""
                  }`}
                ></span>
              </button>
            ))}
          </nav>
        </div>

        {/* ============ মোবাইল মেনু (পরিবর্তিত) ============ */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
  className="lg:hidden fixed inset-0 z-50 bg-black/90 backdrop-blur-sm overflow-hidden flex justify-center items-center"
  
  initial={{ opacity: 0 }}
  animate={{ opacity: 1 }}
  exit={{ opacity: 0 }}
  transition={{ duration: 0.4, ease: "easeInOut" }}
>
              {/* Overlay (বন্ধ করার জন্য) */}
              <motion.div
                className="absolute inset-0"
                onClick={() => setIsMenuOpen(false)}
              />

              {/* ফ্রস্টেড গ্লাস কার্ড */}
              <motion.div
  className="crystal-mist-menu"
  
  // ওপেন হলে: মাঝ থেকে ফুস করে উঠবে
  initial={{ 
    scale: 0, 
    y: 100, 
    opacity: 0 
  }}
  animate={{ 
    scale: 1, 
    y: 0, 
    opacity: 1 
  }}

  // ক্লোজ হলে: নিচে ডুবে যাবে
  exit={{ 
    scale: 0.3, 
    y: 300, 
    opacity: 0 
  }}

  // স্মুথ, স্মার্ট, প্রিমিয়াম এনিমেশন
  transition={{ 
    type: "spring",
    stiffness: 260,
    damping: 20,
    mass: 0.8
  }}
>
  {/* লোগো + নাম */}
  <div className="menu-header">
    <img
      src="/Al-barakahIT-logo.png"
      alt="Logo"
      className="w-16 h-16 rounded-2xl shadow-2xl"
    />
    <h2>Al-barakah IT</h2>
    <p>Premium IT Solutions</p>
  </div>

  {/* ন্যাভিগেশন লিংক */}
  <nav>
    {navLinks.map((link) => (
      <motion.button
        key={link.id}
        onClick={() => {
          navigateTo(link.id);
          setIsMenuOpen(false);
        }}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.97 }}
        className={`${menuText} ${navHoverBg} hover:text-white transition-colors duration-300`}
      >
        <Icon name={link.icon} className="h-5 w-5" />
        {link.title}
      </motion.button>
    ))}

    {/* CTA বাটন */}
    <motion.button
      onClick={() => {
        navigateTo("contact");
        setIsMenuOpen(false);
      }}
      className="cta-button"
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.98 }}
    >
      ফ্রি কনসাল্টেশন
    </motion.button>
  </nav>

  {/* ক্লোজ বাটন */}
  <motion.button
    onClick={() => setIsMenuOpen(false)}
    className="absolute top-6 right-6 text-white/80 hover:text-white p-2 rounded-full bg-white/10 backdrop-blur-md"
    whileHover={{ rotate: 90, scale: 1.1 }}
    transition={{ duration: 0.3 }}
  >
    <Icon name="x" className="h-6 w-6" />
  </motion.button>

  {/* ফুটার */}
  <div className="menu-footer">
    © {new Date().getFullYear()} Al-barakah IT — All Rights Reserved
  </div>
</motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </header>
    </>
  );
};

export default Header;