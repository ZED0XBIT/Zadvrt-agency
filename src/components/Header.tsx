import React, { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Sun, Moon, Menu, X, Rocket } from "lucide-react";

interface HeaderProps {
  darkMode: boolean;
  setDarkMode: (dark: boolean) => void;
  activeSection: string;
}

export default function Header({ darkMode, setDarkMode, activeSection }: HeaderProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { name: "Home", href: "#home" },
    { name: "Services", href: "#services" },
    { name: "Portfolio", href: "#portfolio" },
    { name: "Pricing", href: "#pricing" },
    { name: "About", href: "#about" },
    { name: "FAQ", href: "#faq" },
    { name: "Contact", href: "#contact" },
  ];

  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const targetElement = document.querySelector(href);
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <header
      id="app-header"
      className={`sticky top-0 z-50 transition-all duration-300 ${
        darkMode 
          ? "bg-slate-950/80 border-b border-slate-900 backdrop-blur-md text-white" 
          : "bg-white/80 border-b border-slate-100 backdrop-blur-md text-slate-900"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 sm:h-20">
          {/* Logo */}
          <a 
            href="#home" 
            onClick={(e) => handleLinkClick(e, "#home")}
            className="flex items-center gap-3 font-display tracking-tight group/logo"
          >
            {/* Sick Glowing Logo */}
            <div className="relative flex items-center justify-center h-10 w-10 sm:h-11 sm:w-11 rounded-xl bg-slate-900 dark:bg-slate-950 border border-violet-500/30 shadow-[0_0_15px_rgba(139,92,246,0.15)] overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-tr from-violet-600/20 to-fuchsia-600/20 opacity-0 group-hover/logo:opacity-100 transition-opacity duration-500" />
              {/* Dynamic decorative glowing line */}
              <div className="absolute -inset-[100%] animate-[spin_6s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#8b5cf6_0%,#d946ef_50%,#8b5cf6_100%)] opacity-30" />
              <div className="absolute inset-[2px] bg-slate-950 rounded-[10px] flex items-center justify-center z-10">
                <svg className="h-5 sm:h-5.5 w-5 sm:w-5.5 text-transparent" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M13 2L3 14H12L11 22L21 10H12L13 2Z" fill="url(#logo-grad-header)" stroke="none" />
                  <defs>
                    <linearGradient id="logo-grad-header" x1="3" y1="2" x2="21" y2="22" gradientUnits="userSpaceOnUse">
                      <stop stopColor="#a78bfa" />
                      <stop offset="1" stopColor="#f472b6" />
                    </linearGradient>
                  </defs>
                </svg>
              </div>
            </div>
            
            {/* Zadvrt group responsive naming layout */}
            <span className="font-display tracking-tight flex items-baseline leading-none">
              <span className="text-2xl sm:text-3xl font-black text-transparent bg-clip-text bg-gradient-to-r from-violet-500 via-indigo-500 to-fuchsia-500">
                Z
              </span>
              <span className={`text-base sm:text-lg font-bold transition-colors ${darkMode ? "text-white" : "text-slate-900"}`}>
                advrt
              </span>
              <span className="text-[9px] sm:text-[10px] font-extrabold tracking-widest text-violet-600 dark:text-violet-400 ml-1 uppercase opacity-90">
                group
              </span>
            </span>
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => {
              const isActive = activeSection === link.href.slice(1);
              return (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={(e) => handleLinkClick(e, link.href)}
                  className={`relative px-4 py-2 text-sm font-medium tracking-wide transition-colors ${
                    isActive
                      ? darkMode 
                        ? "text-violet-400" 
                        : "text-violet-600"
                      : darkMode 
                        ? "text-slate-300 hover:text-white" 
                        : "text-slate-600 hover:text-slate-900"
                  }`}
                >
                  {link.name}
                  {isActive && (
                    <motion.span
                      layoutId="activeNavIndicator"
                      className="absolute bottom-0 left-4 right-4 h-0.5 bg-violet-600 rounded-full"
                      transition={{ type: "spring", stiffness: 380, damping: 30 }}
                    />
                  )}
                </a>
              );
            })}
          </nav>

          {/* Action Items (Dark Mode Toggle & CTA Button) */}
          <div className="flex items-center gap-3 sm:gap-4">
            {/* Theme Toggle Button */}
            <button
              id="theme-toggle-btn"
              onClick={() => setDarkMode(!darkMode)}
              className={`p-2.5 rounded-full border transition-colors ${
                darkMode
                  ? "border-slate-800 hover:bg-slate-900 text-amber-400 hover:text-amber-300"
                  : "border-slate-200 hover:bg-slate-100 text-slate-700 hover:text-slate-900"
              }`}
              aria-label="Toggle visual theme"
            >
              {darkMode ? (
                <Sun className="h-4 sm:h-5 w-4 sm:w-5" />
              ) : (
                <Moon className="h-4 sm:h-5 w-4 sm:w-5" />
              )}
            </button>

            {/* Desktop Connect CTA Button */}
            <a
              id="desktop-header-cta"
              href="#contact"
              onClick={(e) => handleLinkClick(e, "#contact")}
              className="hidden sm:inline-flex items-center justify-center px-4 sm:px-5 py-2 sm:py-2.5 rounded-lg font-medium text-xs sm:text-sm tracking-wide bg-gradient-to-r from-violet-600 to-indigo-600 hover:from-violet-500 hover:to-indigo-500 text-white shadow-lg shadow-violet-500/10 hover:shadow-violet-500/20 transition-all duration-200 transform hover:-translate-y-0.5"
            >
              Consult Blueprint
            </a>

            {/* Mobile Menu Open Button */}
            <button
              id="mobile-menu-toggle-btn"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className={`p-2 rounded-lg md:hidden border transition-colors ${
                darkMode
                  ? "border-slate-800 hover:bg-slate-900 text-slate-300 hover:text-white"
                  : "border-slate-200 hover:bg-slate-100 text-slate-600 hover:text-slate-900"
              }`}
              aria-label="Open navigation menu"
            >
              {mobileMenuOpen ? (
                <X className="h-5 w-5" />
              ) : (
                <Menu className="h-5 w-5" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Navigation with Motion */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            id="mobile-navigation-drawer"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25, ease: "easeInOut" }}
            className={`md:hidden overflow-hidden border-t ${
              darkMode 
                ? "bg-slate-950 border-slate-900" 
                : "bg-white border-slate-100"
            }`}
          >
            <div className="px-4 py-6 flex flex-col gap-4">
              <nav className="flex flex-col gap-2">
                {navLinks.map((link) => (
                  <a
                    key={link.name}
                    href={link.href}
                    onClick={(e) => handleLinkClick(e, link.href)}
                    className={`px-4 py-3 rounded-lg text-base font-medium tracking-wide transition-colors ${
                      activeSection === link.href.slice(1)
                        ? darkMode 
                          ? "bg-violet-950/40 text-violet-400 border-l-2 border-violet-500" 
                          : "bg-violet-50 text-violet-600 border-l-2 border-violet-600"
                        : darkMode 
                          ? "text-slate-300 hover:bg-slate-900/50 hover:text-white" 
                          : "text-slate-600 hover:bg-slate-50 hover:text-slate-900"
                    }`}
                  >
                    {link.name}
                  </a>
                ))}
              </nav>
              <div className="border-t border-slate-100 dark:border-slate-900 pt-4">
                <a
                  id="mobile-drawer-cta"
                  href="#contact"
                  onClick={(e) => handleLinkClick(e, "#contact")}
                  className="w-full inline-flex items-center justify-center py-3 rounded-lg font-semibold text-sm tracking-wide bg-gradient-to-r from-violet-600 to-indigo-600 text-white shadow-lg shadow-violet-500/15"
                >
                  Consult Blueprint
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
