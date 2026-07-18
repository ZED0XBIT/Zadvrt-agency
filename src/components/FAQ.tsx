import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Sparkles, Plus, Minus } from "lucide-react";

interface FAQProps {
  darkMode: boolean;
}

export default function FAQ({ darkMode }: FAQProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqs = [
    {
      q: "What makes Zadvrt Group different from a traditional advertising agency?",
      a: "Traditional agencies are slow, rely heavily on bloated account overhead, and mask performance behind vague metrics. Zadvrt Group is a rapid-deployment digital engine. We merge award-winning human art directors with customized predictive AI copywriting systems to craft, launch, and optimize high-converting campaigns in days instead of months. We are 100% transparent and work on flexible monthly sprints."
    },
    {
      q: "Do you manage our direct advertising spend or do we keep that in-house?",
      a: "We support both configurations! We can coordinate with your internal media buyers, or our dedicated media specialists can manage your campaign distribution directly. In all situations, your ad accounts (Meta, Google, LinkedIn) always remain 100% owned by you. We never markup media spend."
    },
    {
      q: "How quickly can we launch our first campaign sprint?",
      a: "Generally, we go from Discovery Alignment to active channel launch within 7 to 10 working days. This includes competitor research, messaging architecture mapping, high-fidelity visual production, and pixel attribution audits."
    },
    {
      q: "Which digital platforms do you support out of the box?",
      a: "We specialize in high-impact paid social and search channels: Instagram, Facebook, LinkedIn, TikTok, YouTube, and Google Search Ads. We optimize all visual formats specifically for each platform's distinct user behavior."
    },
    {
      q: "Is there a long-term contract or can we adjust our plans?",
      a: "We believe in earning your partnership every single month. All our plans operate on flexible monthly cycles. You can upgrade, dial down, or pause your creative subscription at any time with 14 days' notice prior to your next billing period."
    }
  ];

  return (
    <section
      id="faq"
      className={`py-24 border-t transition-colors duration-300 ${
        darkMode 
          ? "bg-slate-950 border-slate-900 text-white" 
          : "bg-slate-50 border-slate-150 text-slate-900"
      }`}
    >
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider bg-violet-500/10 text-violet-600 dark:text-violet-400 border border-violet-500/25 mb-4">
            <Sparkles className="h-3.5 w-3.5" />
            Curated Knowledge Base
          </div>
          <h2 className="font-display text-3xl sm:text-4xl font-extrabold tracking-tight mb-4">
            Frequently Answered <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-500 to-indigo-500">
              Inquiries
            </span>
          </h2>
          <p className={`text-base font-light leading-relaxed ${darkMode ? "text-slate-400" : "text-slate-500"}`}>
            Got questions about integrations, creative cycles, or billing structures? Here is everything you need to know about our modern creative model.
          </p>
        </div>

        {/* Accordions Stack */}
        <div className="space-y-4 max-w-3xl mx-auto">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <div
                key={index}
                className={`rounded-2xl border transition-colors ${
                  isOpen
                    ? darkMode
                      ? "bg-slate-900/40 border-violet-500/40"
                      : "bg-white border-violet-500/30 shadow-md shadow-violet-500/5"
                    : darkMode
                      ? "glass-card-dark"
                      : "glass-card-light shadow-sm"
                }`}
              >
                {/* Accordion Trigger Header Button */}
                <button
                  onClick={() => setOpenIndex(isOpen ? null : index)}
                  className="w-full flex items-center justify-between p-5 text-left font-display font-bold text-sm sm:text-base tracking-tight focus:outline-none focus:ring-1 focus:ring-violet-500/20 rounded-2xl"
                  aria-expanded={isOpen}
                >
                  <span>{faq.q}</span>
                  <div className={`p-1.5 rounded-lg shrink-0 ${
                    isOpen
                      ? "bg-violet-600 text-white"
                      : darkMode
                        ? "bg-slate-900 text-slate-400"
                        : "bg-slate-100 text-slate-600"
                  }`}>
                    {isOpen ? <Minus className="h-4 w-4" /> : <Plus className="h-4 w-4" />}
                  </div>
                </button>

                {/* Accordion Collapsible Answer */}
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.25, ease: "easeInOut" }}
                    >
                      <div className={`px-5 pb-5 pt-1 text-xs sm:text-sm leading-relaxed font-light border-t border-slate-200/40 dark:border-slate-800/40 mt-1 ${
                        darkMode ? "text-slate-400" : "text-slate-600"
                      }`}>
                        {faq.a}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
