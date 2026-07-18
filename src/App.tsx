import { useState, useEffect } from "react";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Services from "./components/Services";
import Portfolio from "./components/Portfolio";
import Pricing from "./components/Pricing";
import About from "./components/About";
import Testimonials from "./components/Testimonials";
import FAQ from "./components/FAQ";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

export default function App() {
  // Start in premium dark mode by default, reflecting elite creative design
  const [darkMode, setDarkMode] = useState<boolean>(true);
  const [activeSection, setActiveSection] = useState<string>("home");

  // Track scroll position to update active navbar section
  useEffect(() => {
    const handleScroll = () => {
      const sections = ["home", "services", "portfolio", "pricing", "about", "faq", "contact"];
      const scrollPosition = window.scrollY + window.innerHeight / 3;

      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    // Trigger once on load
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Set the data-theme attribute on the document element for any global rules
  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [darkMode]);

  return (
    <div className={`min-h-screen transition-colors duration-300 font-sans ${
      darkMode ? "bg-slate-950 text-white" : "bg-white text-slate-900"
    }`}>
      {/* Header Sticky Navigation */}
      <Header 
        darkMode={darkMode} 
        setDarkMode={setDarkMode} 
        activeSection={activeSection} 
      />

      <main>
        {/* Hero Banner with Integrated AI Sandbox */}
        <Hero darkMode={darkMode} />

        {/* Services Capability Pillars */}
        <Services darkMode={darkMode} />

        {/* Dynamic Portfolio Gallery Case Studies */}
        <Portfolio darkMode={darkMode} />

        {/* Subscription Pricing Models */}
        <Pricing darkMode={darkMode} />

        {/* Corporate Narrative & Editorial About */}
        <About darkMode={darkMode} />

        {/* Client Testimonials Quote Slider */}
        <Testimonials darkMode={darkMode} />

        {/* Accordion FAQ Block */}
        <FAQ darkMode={darkMode} />

        {/* Form and AI Strategy Blueprint roadmap */}
        <Contact darkMode={darkMode} />
      </main>

      {/* Corporate Footer */}
      <Footer darkMode={darkMode} />
    </div>
  );
}
