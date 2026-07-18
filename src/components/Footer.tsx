import React, { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Rocket, Mail, MapPin, Send, ArrowUp, Sparkles, Check } from "lucide-react";

interface FooterProps {
  darkMode: boolean;
}

export default function Footer({ darkMode }: FooterProps) {
  const [newsletterEmail, setNewsletterEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (newsletterEmail.trim()) {
      setSubscribed(true);
      setNewsletterEmail("");
      setTimeout(() => setSubscribed(false), 5000);
    }
  };

  const handleScrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const targetElement = document.querySelector(href);
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <footer
      id="app-footer"
      className={`border-t transition-colors duration-300 relative ${
        darkMode 
          ? "bg-slate-950 border-slate-900 text-white" 
          : "bg-slate-50 border-slate-200 text-slate-900"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
        
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 lg:gap-12 pb-12 border-b border-slate-200/50 dark:border-slate-900/50">
          
          {/* Logo and brief pitches (Left Column - 4 cols) */}
          <div className="md:col-span-4 text-left space-y-4">
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
                    <path d="M13 2L3 14H12L11 22L21 10H12L13 2Z" fill="url(#logo-grad-footer)" stroke="none" />
                    <defs>
                      <linearGradient id="logo-grad-footer" x1="3" y1="2" x2="21" y2="22" gradientUnits="userSpaceOnUse">
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
            <p className={`text-xs leading-relaxed font-light ${darkMode ? "text-slate-400" : "text-slate-600"}`}>
              Zadvrt Group is an elite digital advertising agency blending award-winning high-fidelity visual design with customized predictive copywriting models to deliver unmatched conversion rates.
            </p>
            
            {/* Contact Coordinates */}
            <div className="space-y-2 pt-2 text-xs font-light">
              <a 
                href="mailto:zied4live@gmail.com" 
                className={`flex items-center gap-2.5 transition-colors ${
                  darkMode ? "text-slate-300 hover:text-violet-400" : "text-slate-600 hover:text-violet-600"
                }`}
              >
                <Mail className="h-4.5 w-4.5 text-violet-500" />
                <span>zied4live@gmail.com</span>
              </a>
              <div className={`flex items-center gap-2.5 ${darkMode ? "text-slate-300" : "text-slate-600"}`}>
                <MapPin className="h-4.5 w-4.5 text-violet-500" />
                <span>Global hub / London - Paris</span>
              </div>
            </div>
          </div>

          {/* Quick Linkages (Middle Column - 4 cols) */}
          <div className="md:col-span-4 text-left grid grid-cols-2 gap-4">
            <div>
              <h4 className="font-display font-bold text-sm uppercase tracking-wider mb-4">Navigations</h4>
              <ul className="space-y-2 text-xs font-light">
                {["Home", "Services", "Portfolio", "Pricing"].map((link) => (
                  <li key={link}>
                    <a
                      href={`#${link.toLowerCase()}`}
                      onClick={(e) => handleLinkClick(e, `#${link.toLowerCase()}`)}
                      className={`hover:text-violet-500 transition-colors ${darkMode ? "text-slate-400" : "text-slate-600"}`}
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h4 className="font-display font-bold text-sm uppercase tracking-wider mb-4 font-normal">Supports</h4>
              <ul className="space-y-2 text-xs font-light">
                {["About", "FAQ", "Contact"].map((link) => (
                  <li key={link}>
                    <a
                      href={`#${link.toLowerCase()}`}
                      onClick={(e) => handleLinkClick(e, `#${link.toLowerCase()}`)}
                      className={`hover:text-violet-500 transition-colors ${darkMode ? "text-slate-400" : "text-slate-600"}`}
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Newsletter (Right Column - 4 cols) */}
          <div className="md:col-span-4 text-left space-y-4">
            <h4 className="font-display font-bold text-sm uppercase tracking-wider">Zadvrt Insight Dispatch</h4>
            <p className={`text-xs font-light leading-relaxed ${darkMode ? "text-slate-400" : "text-slate-600"}`}>
              Subscribe to get modern CTR research, visual trend briefs, and tactical copywriting tips. No spam, ever.
            </p>

            <form onSubmit={handleSubscribe} className="space-y-2">
              <div className="flex gap-2 relative">
                <input
                  type="email"
                  placeholder="name@company.com"
                  value={newsletterEmail}
                  onChange={(e) => setNewsletterEmail(e.target.value)}
                  className={`w-full px-4 py-2.5 rounded-xl text-xs border focus:outline-none focus:ring-1 focus:ring-violet-500/50 transition-all ${
                    darkMode
                      ? "bg-slate-900 border-slate-800 text-white placeholder-slate-500"
                      : "bg-white border-slate-200 text-slate-900 placeholder-slate-400"
                  }`}
                  required
                />
                <button
                  type="submit"
                  className="bg-violet-600 hover:bg-violet-500 text-white px-4.5 rounded-xl flex items-center justify-center transition-colors shadow-md shrink-0"
                  aria-label="Subscribe to dispatch"
                >
                  <Send className="h-4 w-4" />
                </button>
              </div>
              
              <AnimatePresence>
                {subscribed && (
                  <motion.p
                    initial={{ opacity: 0, y: 5 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 5 }}
                    className="text-emerald-500 text-[10px] font-semibold flex items-center gap-1.5 mt-2"
                  >
                    <Check className="h-3.5 w-3.5" />
                    Registered successfully! Welcome aboard.
                  </motion.p>
                )}
              </AnimatePresence>
            </form>
          </div>

        </div>

        {/* Legal and Copyright and Scroll Up Button */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className={`text-[11px] font-light text-center sm:text-left ${darkMode ? "text-slate-500" : "text-slate-400"}`}>
            &copy; {new Date().getFullYear()} Zadvrt Group. Engineered for high-converting marketing campaigns. All rights reserved.
          </p>

          <button
            onClick={handleScrollToTop}
            className={`p-2.5 rounded-xl border transition-colors cursor-pointer ${
              darkMode
                ? "border-slate-800 hover:bg-slate-900 text-slate-300"
                : "border-slate-200 hover:bg-slate-100 text-slate-600"
            }`}
            aria-label="Back to top"
          >
            <ArrowUp className="h-4.5 w-4.5" />
          </button>
        </div>

      </div>
    </footer>
  );
}
