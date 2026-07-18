import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Sparkles, Bot, ArrowRight, Check, Send, RefreshCw, Layers, TrendingUp, Cpu } from "lucide-react";
import { GeneratedAdCampaign, AdGeneratorInputs } from "../types";

interface HeroProps {
  darkMode: boolean;
  onCampaignGenerated?: (campaign: GeneratedAdCampaign) => void;
}

export default function Hero({ darkMode, onCampaignGenerated }: HeroProps) {
  // Inputs for the sandbox
  const [inputs, setInputs] = useState<AdGeneratorInputs>({
    brandName: "",
    industry: "Tech",
    brandGoal: "",
    targetPlatform: "instagram"
  });

  const [loading, setLoading] = useState(false);
  const [loadingStep, setLoadingStep] = useState(0);
  const [result, setResult] = useState<GeneratedAdCampaign | null>(null);
  const [error, setError] = useState<string | null>(null);

  // Simulated metrics
  const stats = [
    { label: "Ad Spend Managed", value: "$42M+", icon: TrendingUp },
    { label: "Average CTR Increase", value: "+186%", icon: Sparkles },
    { label: "AI Copy Tested", value: "10K+", icon: Cpu }
  ];

  const loadingMessages = [
    "Analyzing competitor layouts & digital hooks...",
    "Drafting persuasive Benefit and Curiosity headlines...",
    "Structuring primary high-converting body text...",
    "Synthesizing visual direction with Aura aesthetic guidelines...",
    "Validating campaign blueprints with performance metrics..."
  ];

  useEffect(() => {
    let interval: NodeJS.Timeout;
    if (loading) {
      interval = setInterval(() => {
        setLoadingStep((prev) => (prev + 1) % loadingMessages.length);
      }, 2000);
    } else {
      setLoadingStep(0);
    }
    return () => clearInterval(interval);
  }, [loading]);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setInputs((prev) => ({ ...prev, [name]: value }));
  };

  const handleGenerate = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!inputs.brandName.trim() || !inputs.brandGoal.trim()) {
      setError("Please fill in your Brand Name and Marketing Goal.");
      return;
    }

    setLoading(true);
    setError(null);
    setResult(null);

    try {
      const response = await fetch("/api/generate-campaign", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(inputs)
      });

      if (!response.ok) {
        throw new Error("Failed to communicate with our Creative Strategy Server.");
      }

      const data = await response.json();
      setResult(data);
      if (onCampaignGenerated) {
        onCampaignGenerated(data);
      }
    } catch (err: any) {
      console.error(err);
      setError("Unable to synthesize ad copies. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  const resetSandbox = () => {
    setInputs({
      brandName: "",
      industry: "Tech",
      brandGoal: "",
      targetPlatform: "instagram"
    });
    setResult(null);
    setError(null);
  };

  return (
    <section
      id="home"
      className={`relative min-h-screen pt-24 pb-16 flex flex-col justify-center overflow-hidden transition-colors duration-300 ${
        darkMode ? "bg-slate-950 text-white animated-grid-dark" : "bg-slate-50 text-slate-900 animated-grid-light"
      }`}
    >
      {/* Decorative Blur Orbs */}
      <div className="absolute top-1/4 left-10 w-72 sm:w-96 h-72 sm:h-96 rounded-full bg-violet-600/10 dark:bg-violet-600/10 blur-[100px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-10 w-72 sm:w-96 h-72 sm:h-96 rounded-full bg-indigo-600/10 dark:bg-indigo-600/15 blur-[120px] pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Brand Value Pitch (Left Column - 5 cols) */}
          <div className="lg:col-span-5 text-left flex flex-col justify-center z-10">
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-semibold uppercase tracking-wider bg-violet-500/10 text-violet-600 dark:text-violet-400 border border-violet-500/20 w-fit mb-6"
            >
              <Sparkles className="h-3.5 w-3.5 animate-pulse text-violet-500" />
              <span>Future-Forward Growth Engine</span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="font-display text-4xl sm:text-5xl xl:text-6xl font-extrabold tracking-tight leading-none mb-6"
            >
              We Engineer <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-500 via-indigo-500 to-purple-600">
                Scroll-Stopping
              </span> <br />
              Ad Campaigns.
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className={`text-base sm:text-lg leading-relaxed mb-8 font-light ${
                darkMode ? "text-slate-300" : "text-slate-600"
              }`}
            >
              Zadvrt Group is a premium digital advertising agency combining award-winning high-fidelity human creative design with advanced predictive AI strategy to dominate modern marketing channels.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="flex flex-col sm:flex-row gap-4 mb-10"
            >
              <a
                href="#contact"
                className="inline-flex items-center justify-center px-6 py-3.5 rounded-xl font-medium text-sm tracking-wide bg-gradient-to-r from-violet-600 to-indigo-600 text-white shadow-xl shadow-violet-500/15 hover:shadow-violet-500/30 transform hover:-translate-y-0.5 transition-all"
              >
                Launch Brand Campaign
                <ArrowRight className="ml-2 h-4 w-4" />
              </a>
              <a
                href="#portfolio"
                className={`inline-flex items-center justify-center px-6 py-3.5 rounded-xl font-medium text-sm border transition-colors ${
                  darkMode 
                    ? "border-slate-800 hover:bg-slate-900 hover:border-slate-700 text-white" 
                    : "border-slate-200 hover:bg-slate-100 hover:border-slate-300 text-slate-700"
                }`}
              >
                View Case Studies
              </a>
            </motion.div>

            {/* Quick Micro Stats */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="grid grid-cols-3 gap-4 border-t border-slate-200 dark:border-slate-900 pt-8"
            >
              {stats.map((stat, i) => (
                <div key={i} className="flex flex-col">
                  <span className="font-display text-2xl sm:text-3xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-violet-500 to-indigo-500">
                    {stat.value}
                  </span>
                  <span className={`text-[10px] sm:text-xs tracking-wide uppercase mt-1 ${
                    darkMode ? "text-slate-400" : "text-slate-500"
                  }`}>
                    {stat.label}
                  </span>
                </div>
              ))}
            </motion.div>
          </div>

          {/* AI Sandbox Engine (Right Column - 7 cols) */}
          <div className="lg:col-span-7 z-10">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className={`w-full rounded-2xl p-6 sm:p-8 shadow-2xl overflow-hidden relative border ${
                darkMode ? "glass-card-dark" : "glass-card-light"
              }`}
            >
              {/* Outer light glow panel */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-violet-500/10 rounded-full blur-2xl" />

              <div className="flex items-center justify-between border-b border-slate-200/50 dark:border-slate-800/50 pb-5 mb-6">
                <div className="flex items-center gap-3">
                  <div className="p-2 rounded-lg bg-violet-600/10 text-violet-600 dark:text-violet-400">
                    <Bot className="h-5 w-5" />
                  </div>
                  <div>
                    <h3 className="font-display font-bold text-base sm:text-lg tracking-tight">AI Campaign Sandbox</h3>
                    <p className={`text-xs ${darkMode ? "text-slate-400" : "text-slate-500"}`}>
                      Experience our copywriting technology in real time
                    </p>
                  </div>
                </div>
                {result && (
                  <button
                    onClick={resetSandbox}
                    className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium border transition-all ${
                      darkMode
                        ? "border-slate-800 hover:bg-slate-900 text-slate-300"
                        : "border-slate-200 hover:bg-slate-100 text-slate-600"
                    }`}
                  >
                    <RefreshCw className="h-3 w-3" />
                    Reset
                  </button>
                )}
              </div>

              <AnimatePresence mode="wait">
                {/* 1. INPUT FORM STATE */}
                {!loading && !result && (
                  <motion.form
                    key="form-input"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    onSubmit={handleGenerate}
                    className="space-y-4"
                  >
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      {/* Brand Name Input */}
                      <div>
                        <label className={`block text-xs font-semibold tracking-wider uppercase mb-2 ${
                          darkMode ? "text-slate-400" : "text-slate-600"
                        }`}>
                          Brand / Product Name
                        </label>
                        <input
                          type="text"
                          name="brandName"
                          placeholder="e.g. ApexFitness, SolStream"
                          value={inputs.brandName}
                          onChange={handleInputChange}
                          className={`w-full px-4 py-3 rounded-xl text-sm border focus:outline-none focus:ring-2 focus:ring-violet-500/50 transition-all ${
                            darkMode
                              ? "bg-slate-900/50 border-slate-800 text-white placeholder-slate-500"
                              : "bg-white border-slate-200 text-slate-900 placeholder-slate-400"
                          }`}
                          required
                        />
                      </div>

                      {/* Industry Selector */}
                      <div>
                        <label className={`block text-xs font-semibold tracking-wider uppercase mb-2 ${
                          darkMode ? "text-slate-400" : "text-slate-600"
                        }`}>
                          Industry Category
                        </label>
                        <select
                          name="industry"
                          value={inputs.industry}
                          onChange={handleInputChange}
                          className={`w-full px-4 py-3 rounded-xl text-sm border focus:outline-none focus:ring-2 focus:ring-violet-500/50 transition-all ${
                            darkMode
                              ? "bg-slate-900/50 border-slate-800 text-white"
                              : "bg-white border-slate-200 text-slate-900"
                          }`}
                        >
                          <option value="Tech & SaaS">Tech & SaaS</option>
                          <option value="Fashion & Luxury">Fashion & Luxury</option>
                          <option value="Food & Beverage">Food & Beverage</option>
                          <option value="E-Commerce">E-Commerce</option>
                          <option value="Real Estate">Real Estate</option>
                        </select>
                      </div>
                    </div>

                    {/* Marketing Goal Input */}
                    <div>
                      <label className={`block text-xs font-semibold tracking-wider uppercase mb-2 ${
                        darkMode ? "text-slate-400" : "text-slate-600"
                      }`}>
                        Primary Campaign Objective
                      </label>
                      <input
                        type="text"
                        name="brandGoal"
                        placeholder="e.g. launch our activewear collection, drive 10k webinar signups"
                        value={inputs.brandGoal}
                        onChange={handleInputChange}
                        className={`w-full px-4 py-3 rounded-xl text-sm border focus:outline-none focus:ring-2 focus:ring-violet-500/50 transition-all ${
                          darkMode
                            ? "bg-slate-900/50 border-slate-800 text-white placeholder-slate-500"
                            : "bg-white border-slate-200 text-slate-900 placeholder-slate-400"
                        }`}
                        required
                      />
                    </div>

                    {/* Platform Selector */}
                    <div>
                      <label className={`block text-xs font-semibold tracking-wider uppercase mb-2 ${
                        darkMode ? "text-slate-400" : "text-slate-600"
                      }`}>
                        Target Social Platform
                      </label>
                      <div className="grid grid-cols-4 gap-2">
                        {["instagram", "facebook", "linkedin", "google-search"].map((plat) => (
                          <button
                            key={plat}
                            type="button"
                            onClick={() => setInputs(prev => ({ ...prev, targetPlatform: plat }))}
                            className={`py-2 px-1 text-center rounded-xl text-xs font-medium border transition-all truncate uppercase ${
                              inputs.targetPlatform === plat
                                ? "bg-violet-600 border-violet-600 text-white shadow-md shadow-violet-500/25"
                                : darkMode
                                  ? "border-slate-800 bg-slate-900/20 text-slate-400 hover:bg-slate-900/50"
                                  : "border-slate-200 bg-white text-slate-600 hover:bg-slate-50"
                            }`}
                          >
                            {plat.replace("-", " ")}
                          </button>
                        ))}
                      </div>
                    </div>

                    {error && (
                      <p className="text-red-500 text-xs font-medium animate-shake">
                        {error}
                      </p>
                    )}

                    <button
                      type="submit"
                      className="w-full mt-4 inline-flex items-center justify-center gap-2 px-6 py-4 rounded-xl font-bold text-sm tracking-wider uppercase bg-gradient-to-r from-violet-600 to-indigo-600 hover:from-violet-500 hover:to-indigo-500 text-white shadow-xl shadow-violet-500/15 hover:shadow-violet-500/30 transition-all duration-200 transform active:scale-95"
                    >
                      <span>Draft Creative Copy</span>
                      <Send className="h-4 w-4" />
                    </button>
                  </motion.form>
                )}

                {/* 2. LOADING STATE */}
                {loading && (
                  <motion.div
                    key="form-loading"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="flex flex-col items-center justify-center py-16 text-center"
                  >
                    <div className="relative mb-6">
                      <div className="h-16 w-16 rounded-full border-4 border-violet-500/10 border-t-violet-600 animate-spin" />
                      <Sparkles className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-6 w-6 text-violet-600 animate-pulse" />
                    </div>
                    
                    <p className={`text-sm font-semibold mb-2 transition-opacity duration-300 ${
                      darkMode ? "text-violet-400" : "text-violet-600"
                    }`}>
                      {loadingMessages[loadingStep]}
                    </p>
                    <p className={`text-xs max-w-sm ${darkMode ? "text-slate-400" : "text-slate-500"}`}>
                      Powered by Zadvrt Group Gemini 3.5 Engine
                    </p>
                  </motion.div>
                )}

                {/* 3. GENERATION OUTPUT RESULTS */}
                {result && (
                  <motion.div
                    key="form-result"
                    initial={{ opacity: 0, scale: 0.98 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.98 }}
                    className="space-y-6 overflow-y-auto max-h-[480px] pr-2"
                  >
                    {result.isSimulated && (
                      <div className="bg-amber-500/10 border border-amber-500/20 text-amber-500 text-center text-xs py-1.5 px-3 rounded-lg mb-2">
                        Preview: Simulating high-converting copies (Add your API Key in Settings).
                      </div>
                    )}

                    {/* Headlines Section */}
                    <div>
                      <h4 className={`text-xs font-bold uppercase tracking-wider mb-2.5 ${
                        darkMode ? "text-slate-400" : "text-slate-500"
                      }`}>
                        Zadvrt Group Optimized Headlines ({inputs.targetPlatform.toUpperCase()})
                      </h4>
                      <div className="space-y-2">
                        {result.headlines.map((headline, index) => {
                          const labels = ["Benefit", "Curiosity", "Action"];
                          return (
                            <div
                              key={index}
                              className={`p-3 rounded-xl border flex items-start gap-2.5 ${
                                darkMode 
                                  ? "bg-slate-900/40 border-slate-800" 
                                  : "bg-slate-50 border-slate-200"
                              }`}
                            >
                              <span className="inline-flex items-center justify-center h-5 px-1.5 rounded bg-violet-600/10 dark:bg-violet-600/20 text-violet-600 dark:text-violet-400 text-[9px] font-extrabold uppercase tracking-wider mt-0.5 select-none">
                                {labels[index]}
                              </span>
                              <p className="text-xs sm:text-sm font-semibold tracking-tight">{headline}</p>
                            </div>
                          );
                        })}
                      </div>
                    </div>

                    {/* Main Copy Section */}
                    <div>
                      <h4 className={`text-xs font-bold uppercase tracking-wider mb-2 ${
                        darkMode ? "text-slate-400" : "text-slate-500"
                      }`}>
                        Primary Body Copy
                      </h4>
                      <div className={`p-4 rounded-xl border text-xs sm:text-sm leading-relaxed ${
                        darkMode
                          ? "bg-slate-900/30 border-slate-800 text-slate-200"
                          : "bg-slate-50/50 border-slate-200 text-slate-700"
                      }`}>
                        {result.bodyCopy}
                      </div>
                    </div>

                    {/* Creative Direction Description */}
                    <div>
                      <h4 className={`text-xs font-bold uppercase tracking-wider mb-2 ${
                        darkMode ? "text-slate-400" : "text-slate-500"
                      }`}>
                        Art Direction & Layout Concept
                      </h4>
                      <div className="flex gap-3 items-start">
                        <div className="p-2 rounded-lg bg-indigo-500/10 text-indigo-500 mt-0.5">
                          <Layers className="h-4 w-4" />
                        </div>
                        <p className={`text-xs leading-relaxed ${
                          darkMode ? "text-slate-300" : "text-slate-600"
                        }`}>
                          {result.visualConcept}
                        </p>
                      </div>
                    </div>

                    {/* Targeting Recommendations */}
                    <div>
                      <h4 className={`text-xs font-bold uppercase tracking-wider mb-2.5 ${
                        darkMode ? "text-slate-400" : "text-slate-500"
                      }`}>
                        Audience Targeting Recommendations
                      </h4>
                      <div className="grid grid-cols-1 gap-2">
                        {result.targetingTips.map((tip, idx) => (
                          <div key={idx} className="flex gap-2 items-start text-xs">
                            <div className="h-4 w-4 rounded-full bg-emerald-500/10 text-emerald-500 flex items-center justify-center mt-0.5 shrink-0">
                              <Check className="h-3 w-3" />
                            </div>
                            <span className={darkMode ? "text-slate-300" : "text-slate-600"}>
                              {tip}
                            </span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          </div>
          
        </div>
      </div>
    </section>
  );
}
