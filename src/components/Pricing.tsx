import React, { useState } from "react";
import { motion } from "motion/react";
import { Sparkles, Check, HelpCircle, ArrowRight } from "lucide-react";

interface PricingProps {
  darkMode: boolean;
}

export default function Pricing({ darkMode }: PricingProps) {
  const [billingPeriod, setBillingPeriod] = useState<"monthly" | "annual">("monthly");

  const plans = [
    {
      name: "Pilot",
      description: "Ideal for high-growth startups testing channels and establishing visual resonance.",
      priceMonthly: 1490,
      priceAnnual: 1190,
      features: [
        "2 Native Platform Channels",
        "8 Multi-Variant Copy Assets / mo",
        "Weekly Strategy Alignments",
        "Basic CTR Diagnostic Dashboards",
        "Single-Asset Performance Audits"
      ],
      cta: "Launch Pilot Campaign",
      badge: "",
      highlight: false
    },
    {
      name: "Scale",
      description: "Comprehensive multi-funnel campaigns, constant asset iteration, and aggressive scaling.",
      priceMonthly: 3990,
      priceAnnual: 3190,
      features: [
        "5 Omni-Channel Platforms",
        "24 High-Fidelity Design Assets / mo",
        "Custom Animated Video Creative",
        "Daily Ad Optimization Audits",
        "Dedicated Creative Director",
        "Continuous A/B CTR Diagnostic Testing"
      ],
      cta: "Scale Brand Campaign",
      badge: "Most Popular",
      highlight: true
    },
    {
      name: "Enterprise",
      description: "Dedicated production teams, custom fine-tuned AI creative engines, and massive volume.",
      priceMonthly: 9490,
      priceAnnual: 7590,
      features: [
        "Unlimited Media Platforms",
        "Bespoke Fine-Tuned AI Copy Engine",
        "Unlimited Assets & Video Scripts",
        "Attribution Pixel API Setup",
        "Dedicated Account Director",
        "24/7 Slack Collaboration Desk"
      ],
      cta: "Integrate Enterprise Desk",
      badge: "Custom Systems",
      highlight: false
    }
  ];

  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const targetElement = document.querySelector(href);
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      id="pricing"
      className={`py-24 border-t transition-colors duration-300 ${
        darkMode 
          ? "bg-slate-950 border-slate-900 text-white" 
          : "bg-white border-slate-100 text-slate-900"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider bg-violet-500/10 text-violet-600 dark:text-violet-400 border border-violet-500/25 mb-4">
            <Sparkles className="h-3.5 w-3.5" />
            Transparent Pricing Structure
          </div>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight mb-4">
            Invest in High-Performing <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-500 to-indigo-500">
              Creative Capital
            </span>
          </h2>
          <p className={`text-base font-light leading-relaxed ${darkMode ? "text-slate-400" : "text-slate-500"}`}>
            Bespoke creative subscriptions tailored to accelerate your conversions. No hidden platform costs, no bloated agencies overhead. Cancel anytime.
          </p>

          {/* Billing Toggle Selector */}
          <div className="flex items-center justify-center gap-4 mt-8 select-none">
            <span className={`text-sm font-medium ${billingPeriod === "monthly" ? "text-violet-500 font-bold" : "text-slate-400"}`}>
              Monthly billing
            </span>
            <button
              onClick={() => setBillingPeriod(billingPeriod === "monthly" ? "annual" : "monthly")}
              className={`relative h-7 w-14 rounded-full p-1 transition-colors outline-none ${
                darkMode ? "bg-slate-900 border border-slate-800" : "bg-slate-200"
              }`}
              aria-label="Toggle annual or monthly billing"
            >
              <motion.div
                layout
                className="h-4.5 w-4.5 rounded-full bg-violet-600 shadow-md"
                animate={{ x: billingPeriod === "monthly" ? 0 : 26 }}
                transition={{ type: "spring", stiffness: 500, damping: 30 }}
              />
            </button>
            <div className="flex items-center gap-1.5">
              <span className={`text-sm font-medium ${billingPeriod === "annual" ? "text-violet-500 font-bold" : "text-slate-400"}`}>
                Annual billing
              </span>
              <span className="bg-emerald-500/15 border border-emerald-500/20 text-emerald-400 text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-md">
                Save 20%
              </span>
            </div>
          </div>
        </div>

        {/* Pricing Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch max-w-6xl mx-auto">
          {plans.map((plan, index) => {
            const price = billingPeriod === "monthly" ? plan.priceMonthly : plan.priceAnnual;
            return (
              <motion.div
                key={plan.name}
                initial={{ opacity: 0, y: 35 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className={`relative rounded-2xl p-6 sm:p-8 border flex flex-col justify-between transition-all duration-300 ${
                  plan.highlight
                    ? darkMode
                      ? "bg-slate-950 border-violet-500 shadow-violet-500/10 shadow-2xl scale-102 lg:scale-105 z-10"
                      : "bg-white border-violet-600 shadow-violet-500/10 shadow-xl scale-102 lg:scale-105 z-10"
                    : darkMode
                      ? "glass-card-dark border-slate-900"
                      : "glass-card-light border-slate-200"
                }`}
              >
                {/* Visual Popular Accent Header */}
                {plan.badge && (
                  <span className="absolute -top-3 left-1/2 -translate-x-1/2 bg-gradient-to-r from-violet-600 to-indigo-600 text-white text-[10px] uppercase font-extrabold tracking-widest px-3 py-1 rounded-full shadow-lg shadow-violet-500/20 select-none">
                    {plan.badge}
                  </span>
                )}

                <div>
                  <h3 className="font-display font-extrabold text-2xl tracking-tight mb-2">
                    {plan.name}
                  </h3>
                  <p className={`text-xs leading-relaxed mb-6 font-light ${
                    darkMode ? "text-slate-400" : "text-slate-500"
                  }`}>
                    {plan.description}
                  </p>

                  {/* Pricing metrics */}
                  <div className="flex items-baseline gap-2 mb-8">
                    <span className="font-display text-4xl sm:text-5xl font-black tracking-tight">
                      ${price}
                    </span>
                    <span className={`text-sm ${darkMode ? "text-slate-400" : "text-slate-500"}`}>
                      / month
                    </span>
                  </div>

                  {/* Feature Divider */}
                  <div className={`border-t mb-8 ${darkMode ? "border-slate-900" : "border-slate-100"}`} />

                  {/* Features List Checklist */}
                  <div className="space-y-4 mb-8">
                    {plan.features.map((feat) => (
                      <div key={feat} className="flex gap-3 items-start text-xs sm:text-sm">
                        <div className={`h-4.5 w-4.5 rounded-full flex items-center justify-center shrink-0 mt-0.5 ${
                          plan.highlight
                            ? "bg-violet-600 text-white"
                            : darkMode
                              ? "bg-slate-900 border border-slate-800 text-slate-300"
                              : "bg-slate-100 text-slate-700"
                        }`}>
                          <Check className="h-3 w-3" />
                        </div>
                        <span className={darkMode ? "text-slate-300" : "text-slate-700 font-light"}>
                          {feat}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Pricing Lead Action Button */}
                <a
                  href="#contact"
                  onClick={(e) => handleLinkClick(e, "#contact")}
                  className={`w-full py-4.5 rounded-xl font-bold text-sm tracking-wider uppercase inline-flex items-center justify-center gap-2 transition-all ${
                    plan.highlight
                      ? "bg-gradient-to-r from-violet-600 to-indigo-600 hover:from-violet-500 hover:to-indigo-500 text-white shadow-xl shadow-violet-500/20"
                      : darkMode
                        ? "border border-slate-800 hover:bg-slate-900 text-white"
                        : "border border-slate-200 hover:bg-slate-50 text-slate-800 shadow-sm"
                  }`}
                >
                  <span>{plan.cta}</span>
                  <ArrowRight className="h-4 w-4" />
                </a>
              </motion.div>
            );
          })}
        </div>

        {/* Micro Pricing Disclaimers */}
        <p className={`text-center text-xs mt-12 max-w-md mx-auto ${darkMode ? "text-slate-500" : "text-slate-400"}`}>
          Prices do not include direct advertising media spend. Custom channel allocations and retainer configurations are reviewable during Discovery alignments.
        </p>

      </div>
    </section>
  );
}
