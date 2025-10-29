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
  const menuBg = isDarkMode ? "bg-white/10" : "bg-white/90";
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
              className="flex items-center gap-2 sm:gap-3 cursor-pointer pl-2 sm:pl-3"
              onClick={() => navigateTo("home")}
            >
              <img
                src="/Al-barakahIT-logo.png"
                alt="Al-barakah IT Logo"
                className="h-8 w-8 sm:h-9 sm:w-9 md:h-10 md:w-10 lg:h-12 lg:w-12 rounded-full object-cover"
              />
              <span
                className="text-3xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-teal-400 to-blue-500"
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

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              className="lg:hidden fixed inset-0 z-50 bg-black/90 backdrop-blur-sm overflow-auto"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.4, ease: "easeInOut" }}
            >
              {/* Overlay */}
              <motion.div
                className={`absolute inset-0 backdrop-blur-3xl ${
                  isDarkMode
                    ? "bg-gradient-to-br from-[#0a0f1f]/90 via-[#0b1c3b]/90 to-[#000000]/90"
                    : "bg-white/90"
                }`}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.5 }}
                onClick={() => setIsMenuOpen(false)}
              />

              {/* Sidebar Menu */}
              <motion.div
                className={`relative z-50 flex flex-col h-full w-75 px-4 sm:px-6 md:px-8 py-6 ${menuBg} border-r border-white/10 shadow-1xl backdrop-blur-2xl overflow-y-auto`}
                initial={{ x: -300, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                exit={{ x: -300, opacity: 0 }}
                transition={{ type: "spring", stiffness: 90, damping: 15 }}
              >
                {/* Header */}
                <div className="flex items-center gap-3 mb-8">
                  <img
                    src="/Al-barakahIT-logo.png"
                    alt="Logo"
                    className="w-10 h-10 rounded-full shadow-md ring-2 ring-white/20"
                  />
                  <h2 className="text-white text-2xl font-bold tracking-wide drop-shadow-md">
                    মেনুবার
                  </h2>
                </div>

                {/* Navigation */}
                <nav className="flex flex-col space-y-3">
                  {navLinks.map((link) => (
                    <motion.button
                      key={link.id}
                      onClick={() => {
                        navigateTo(link.id);
                        setIsMenuOpen(false);
                      }}
                      whileHover={{ scale: 1.03, x: 4 }}
                      whileTap={{ scale: 0.97 }}
                      className={`w-full text-left py-3 px-4 rounded-lg font-medium transition-all duration-300 ${menuText} hover:bg-gradient-to-r hover:from-blue-600/40 hover:to-teal-500/40 hover:text-white flex items-center gap-4 cursor-pointer`}
                    >
                      <Icon name={link.icon} className="h-5 w-5" />
                      {link.title}
                    </motion.button>
                  ))}

                  <motion.button
                    onClick={() => {
                      navigateTo("contact");
                      setIsMenuOpen(false);
                    }}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="w-full mt-6 cursor-pointer bg-gradient-to-r from-teal-500 to-blue-600 text-white font-bold py-3 px-6 rounded-xl shadow-lg text-lg hover:shadow-blue-500/40 transition-transform hover:scale-105"
                  >
                    ফ্রি কনসাল্টেশন
                  </motion.button>
                </nav>

                {/* Close Button */}
                <motion.button
                  onClick={() => setIsMenuOpen(false)}
                  className="absolute top-4 right-4 text-gray-300 hover:text-white transition-colors"
                  whileHover={{ rotate: 90 }}
                  transition={{ duration: 0.3 }}
                >
                  <Icon name="x" className="h-7 w-7" />
                </motion.button>

                {/* Footer */}
                <div className="mt-6 pt-6 text-gray-400 text-sm text-center border-t border-white/10">
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