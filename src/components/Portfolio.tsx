import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Sparkles, ArrowUpRight, CheckCircle2 } from "lucide-react";
import { PortfolioItem } from "../types";

interface PortfolioProps {
  darkMode: boolean;
}

export default function Portfolio({ darkMode }: PortfolioProps) {
  const [activeCategory, setActiveCategory] = useState("All");

  const categories = ["All", "Tech", "Luxury", "Growth", "Food"];

  const items: PortfolioItem[] = [
    {
      id: "case-1",
      title: "SolStream: Launching the Next Generation of Cloud SaaS",
      category: "Tech",
      client: "SolStream Networks",
      metric: "4.8% CTR / +310% Signups",
      image: "https://picsum.photos/seed/techcampaign/800/600",
      description: "Crafted a multi-platform digital launch with dynamic glassmorphic video ads, driving SolStream past their Q3 enrollment targets in under 18 days."
    },
    {
      id: "case-2",
      title: "L'Avenir: Redefining Digital Experience for Parisian Jewelry",
      category: "Luxury",
      client: "L'Avenir Paris",
      metric: "18.2x Campaign ROI",
      image: "https://picsum.photos/seed/luxbrand/800/600",
      description: "Designed an interactive luxury storytelling campaign featuring immersive social catalogs, doubling online average order values with bespoke creative assets."
    },
    {
      id: "case-3",
      title: "Apex Nutrition: High-Growth Customer Retention Campaigns",
      category: "Growth",
      client: "Apex Fitness Brands",
      metric: "-42% CAC / +180% Retention",
      image: "https://picsum.photos/seed/growthmetrics/800/600",
      description: "Engineered high-conversions lifecycle sequences, behavioral copy retargeting, and dynamic social proof layouts to drastically scale subscriber retention."
    },
    {
      id: "case-4",
      title: "Botanica Tea: Crafting a Modern Organic DTC Movement",
      category: "Food",
      client: "Botanica Co.",
      metric: "+240% Direct Sales",
      image: "https://picsum.photos/seed/foodbrand/800/600",
      description: "A complete visual identity overhaul and green-first packaging content strategy, introducing organic botanical tea lines to high-intent audiences."
    },
    {
      id: "case-5",
      title: "VaporWare: Introducing Minimalist Productivity Ecosystems",
      category: "Tech",
      client: "Vapor Ltd",
      metric: "140K+ Chrome Installs",
      image: "https://picsum.photos/seed/vaporworkspace/800/600",
      description: "Constructed targeted, highly focused web ad formats using technical typography, yielding record-low cost-per-installs for modern workspace utilities."
    },
    {
      id: "case-6",
      title: "Hôtel Noir: Boutique Hospitality Visual Storytelling",
      category: "Luxury",
      client: "Noir Group",
      metric: "98% Room Booking Capacity",
      image: "https://picsum.photos/seed/boutiquehotel/800/600",
      description: "Directed a cinematic photography-led campaign focusing on architectural shadows and premium negative space, driving direct bookings directly from Instagram."
    }
  ];

  const filteredItems = activeCategory === "All" 
    ? items 
    : items.filter(item => item.category === activeCategory);

  return (
    <section
      id="portfolio"
      className={`py-24 border-t transition-colors duration-300 ${
        darkMode 
          ? "bg-slate-950 border-slate-900 text-white" 
          : "bg-slate-50 border-slate-150 text-slate-900"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 sm:mb-16 gap-6">
          <div className="max-w-xl text-left">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider bg-violet-500/10 text-violet-600 dark:text-violet-400 border border-violet-500/25 mb-4">
              <Sparkles className="h-3.5 w-3.5 animate-pulse" />
              Proof of Performance
            </div>
            <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight mb-4">
              Case Studies in <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-500 to-indigo-500">
                Digital Dominance
              </span>
            </h2>
            <p className={`text-base font-light leading-relaxed ${darkMode ? "text-slate-400" : "text-slate-500"}`}>
              We don't just draft beautiful designs—we construct high-converting revenue streams. Browse our latest collaborative creative deployments.
            </p>
          </div>

          {/* Filtering Categories Bar */}
          <div className="flex flex-wrap gap-2 shrink-0 select-none">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-4.5 py-2 rounded-xl text-xs sm:text-sm font-medium transition-all ${
                  activeCategory === cat
                    ? "bg-violet-600 text-white shadow-lg shadow-violet-500/20"
                    : darkMode
                      ? "bg-slate-900/40 hover:bg-slate-900 border border-slate-900 hover:border-slate-800 text-slate-300"
                      : "bg-white hover:bg-slate-100 border border-slate-200 text-slate-600"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Portfolio Grid with Motion */}
        <motion.div 
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          <AnimatePresence mode="popLayout">
            {filteredItems.map((item) => (
              <motion.div
                layout
                key={item.id}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.4 }}
                className={`rounded-2xl overflow-hidden border flex flex-col h-full group ${
                  darkMode 
                    ? "bg-slate-950 border-slate-900 text-white hover:border-slate-800" 
                    : "bg-white border-slate-200 text-slate-900 hover:border-slate-300 shadow-sm"
                }`}
              >
                {/* Image Showcase Panel */}
                <div className="relative overflow-hidden aspect-4/3 shrink-0">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent opacity-60" />
                  
                  {/* Category Tag */}
                  <span className="absolute top-4 left-4 bg-slate-950/70 backdrop-blur-md text-white text-[10px] uppercase font-bold tracking-wider px-2.5 py-1 rounded-md border border-white/10 select-none">
                    {item.category}
                  </span>

                  {/* Performance Metric Banner */}
                  <div className="absolute bottom-4 left-4 right-4 bg-violet-900/90 backdrop-blur-md text-white border border-violet-500/30 rounded-xl px-4 py-2.5 flex items-center justify-between shadow-xl">
                    <div className="flex items-center gap-1.5">
                      <CheckCircle2 className="h-4 w-4 text-emerald-400 shrink-0" />
                      <span className="text-[10px] uppercase font-bold tracking-wider text-slate-200">Outcome</span>
                    </div>
                    <span className="font-mono text-xs font-bold text-emerald-400">{item.metric}</span>
                  </div>
                </div>

                {/* Content Panel */}
                <div className="p-6 flex flex-col flex-1">
                  <span className={`text-[10px] uppercase font-bold tracking-wide mb-1 ${
                    darkMode ? "text-slate-400" : "text-slate-500"
                  }`}>
                    {item.client}
                  </span>
                  <h3 className="font-display font-bold text-lg leading-snug mb-3 group-hover:text-violet-500 transition-colors">
                    {item.title}
                  </h3>
                  <p className={`text-xs leading-relaxed mb-6 font-light flex-1 ${
                    darkMode ? "text-slate-400" : "text-slate-600"
                  }`}>
                    {item.description}
                  </p>
                  
                  {/* Footer Link */}
                  <div className="border-t border-slate-200/50 dark:border-slate-900/50 pt-4 mt-auto flex items-center justify-between text-xs font-medium text-violet-600 dark:text-violet-400 cursor-pointer select-none">
                    <span>Explore Case Strategy</span>
                    <ArrowUpRight className="h-4 w-4 transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

      </div>
    </section>
  );
}
