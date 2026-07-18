import React, { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Sparkles, Send, Mail, Building, ShieldCheck, CheckCircle2, Rocket, RefreshCw } from "lucide-react";
import { LeadSubmission, LeadResponse } from "../types";

interface ContactProps {
  darkMode: boolean;
}

export default function Contact({ darkMode }: ContactProps) {
  const [formData, setFormData] = useState<LeadSubmission>({
    name: "",
    email: "",
    company: "",
    budget: "Under $5k / mo",
    details: ""
  });

  const [submitting, setSubmitting] = useState(false);
  const [response, setResponse] = useState<LeadResponse | null>(null);
  const [error, setError] = useState<string | null>(null);

  const budgets = [
    "Under $5k / mo",
    "$5k - $15k / mo",
    "$15k - $50k / mo",
    "$50k+ / mo"
  ];

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name.trim() || !formData.email.trim() || !formData.company.trim() || !formData.details.trim()) {
      setError("Please complete all required fields.");
      return;
    }

    setSubmitting(true);
    setError(null);
    setResponse(null);

    try {
      const res = await fetch("/api/submit-lead", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData)
      });

      if (!res.ok) {
        throw new Error("Failed to submit campaign blueprint request.");
      }

      const data = await res.json();
      setResponse(data);
    } catch (err: any) {
      console.error(err);
      setError("Failed to register request. Please check connection and try again.");
    } finally {
      setSubmitting(false);
    }
  };

  const handleReset = () => {
    setFormData({
      name: "",
      email: "",
      company: "",
      budget: "Under $5k / mo",
      details: ""
    });
    setResponse(null);
    setError(null);
  };

  return (
    <section
      id="contact"
      className={`py-24 border-t relative overflow-hidden transition-colors duration-300 ${
        darkMode 
          ? "bg-slate-950 border-slate-900 text-white animated-grid-dark" 
          : "bg-white border-slate-100 text-slate-900 animated-grid-light"
      }`}
    >
      {/* Visual glowing orb behind contact */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 rounded-full bg-violet-600/5 dark:bg-violet-600/10 blur-[120px] pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* Brief and copy (Left Column - 5 cols) */}
          <div className="lg:col-span-5 text-left">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider bg-violet-500/10 text-violet-600 dark:text-violet-400 border border-violet-500/25 mb-4">
              <Sparkles className="h-3.5 w-3.5" />
              Strategic Consultations
            </div>
            <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight mb-6">
              Let's Architect <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-500 to-indigo-500">
                Your Campaign Blueprint
              </span>
            </h2>
            <p className={`text-base leading-relaxed font-light mb-8 ${
              darkMode ? "text-slate-300" : "text-slate-600"
            }`}>
              Submit your brand criteria and growth challenges. Our strategy planners will review your assets and immediately return an custom campaign roadmap blueprint.
            </p>

            {/* Visual reassurance indicators */}
            <div className="space-y-4">
              <div className="flex gap-3 items-center">
                <div className="h-9 w-9 rounded-xl bg-violet-500/10 text-violet-600 dark:text-violet-400 flex items-center justify-center shrink-0">
                  <ShieldCheck className="h-5 w-5" />
                </div>
                <div>
                  <h4 className="font-display font-bold text-sm tracking-tight">Zero-Cost Discovery alignment</h4>
                  <p className={`text-[11px] ${darkMode ? "text-slate-400" : "text-slate-500"}`}>No upfront commitments required for roadmap designs</p>
                </div>
              </div>

              <div className="flex gap-3 items-center">
                <div className="h-9 w-9 rounded-xl bg-fuchsia-500/10 text-fuchsia-600 dark:text-fuchsia-400 flex items-center justify-center shrink-0">
                  <Rocket className="h-5 w-5" />
                </div>
                <div>
                  <h4 className="font-display font-bold text-sm tracking-tight">Rapid 7-10 day implementation cycles</h4>
                  <p className={`text-[11px] ${darkMode ? "text-slate-400" : "text-slate-500"}`}>Launch custom performance assets past discovery audits</p>
                </div>
              </div>
            </div>
          </div>

          {/* Form / Lead Success Roadmap (Right Column - 7 cols) */}
          <div className="lg:col-span-7 w-full z-10">
            <AnimatePresence mode="wait">
              
              {/* Form Input Phase */}
              {!response && (
                <motion.div
                  key="contact-form"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  className={`rounded-2xl p-6 sm:p-8 border ${
                    darkMode ? "glass-card-dark" : "glass-card-light shadow-xl"
                  }`}
                >
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      {/* Name Input */}
                      <div>
                        <label className={`block text-xs font-semibold tracking-wider uppercase mb-2 ${
                          darkMode ? "text-slate-400" : "text-slate-600"
                        }`}>
                          Your Name
                        </label>
                        <input
                          type="text"
                          name="name"
                          placeholder="e.g. Jean Dupont"
                          value={formData.name}
                          onChange={handleInputChange}
                          className={`w-full px-4 py-3 rounded-xl text-sm border focus:outline-none focus:ring-2 focus:ring-violet-500/50 transition-all ${
                            darkMode
                              ? "bg-slate-900/50 border-slate-800 text-white placeholder-slate-500"
                              : "bg-slate-50 border-slate-200 text-slate-900 placeholder-slate-400"
                          }`}
                          required
                        />
                      </div>

                      {/* Email Input */}
                      <div>
                        <label className={`block text-xs font-semibold tracking-wider uppercase mb-2 ${
                          darkMode ? "text-slate-400" : "text-slate-600"
                        }`}>
                          Professional Email
                        </label>
                        <div className="relative">
                          <input
                            type="email"
                            name="email"
                            placeholder="e.g. brand@company.com"
                            value={formData.email}
                            onChange={handleInputChange}
                            className={`w-full pl-10 pr-4 py-3 rounded-xl text-sm border focus:outline-none focus:ring-2 focus:ring-violet-500/50 transition-all ${
                              darkMode
                                ? "bg-slate-900/50 border-slate-800 text-white placeholder-slate-500"
                                : "bg-slate-50 border-slate-200 text-slate-900 placeholder-slate-400"
                            }`}
                            required
                          />
                          <Mail className="absolute left-3.5 top-3.5 h-4 w-4 text-slate-400" />
                        </div>
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      {/* Company Name */}
                      <div>
                        <label className={`block text-xs font-semibold tracking-wider uppercase mb-2 ${
                          darkMode ? "text-slate-400" : "text-slate-600"
                        }`}>
                          Company / Brand Name
                        </label>
                        <div className="relative">
                          <input
                            type="text"
                            name="company"
                            placeholder="e.g. Botanica Co"
                            value={formData.company}
                            onChange={handleInputChange}
                            className={`w-full pl-10 pr-4 py-3 rounded-xl text-sm border focus:outline-none focus:ring-2 focus:ring-violet-500/50 transition-all ${
                              darkMode
                                ? "bg-slate-900/50 border-slate-800 text-white placeholder-slate-500"
                                : "bg-slate-50 border-slate-200 text-slate-900 placeholder-slate-400"
                            }`}
                            required
                          />
                          <Building className="absolute left-3.5 top-3.5 h-4 w-4 text-slate-400" />
                        </div>
                      </div>

                      {/* Estimated Budget Selector */}
                      <div>
                        <label className={`block text-xs font-semibold tracking-wider uppercase mb-2 ${
                          darkMode ? "text-slate-400" : "text-slate-600"
                        }`}>
                          Estimated Monthly Ad Budget
                        </label>
                        <select
                          name="budget"
                          value={formData.budget}
                          onChange={handleInputChange}
                          className={`w-full px-4 py-3 rounded-xl text-sm border focus:outline-none focus:ring-2 focus:ring-violet-500/50 transition-all ${
                            darkMode
                              ? "bg-slate-900/50 border-slate-800 text-white"
                              : "bg-slate-50 border-slate-200 text-slate-900"
                          }`}
                        >
                          {budgets.map((b) => (
                            <option key={b} value={b}>{b}</option>
                          ))}
                        </select>
                      </div>
                    </div>

                    {/* Brief Challenges Input */}
                    <div>
                      <label className={`block text-xs font-semibold tracking-wider uppercase mb-2 ${
                        darkMode ? "text-slate-400" : "text-slate-600"
                      }`}>
                        Describe your biggest growth obstacle or target objective
                      </label>
                      <textarea
                        name="details"
                        rows={4}
                        placeholder="e.g. We are launching a new organic skincare line and need to achieve high conversion rates from social channels under a strict CAC target..."
                        value={formData.details}
                        onChange={handleInputChange}
                        className={`w-full px-4 py-3 rounded-xl text-sm border focus:outline-none focus:ring-2 focus:ring-violet-500/50 transition-all ${
                          darkMode
                            ? "bg-slate-900/50 border-slate-800 text-white placeholder-slate-500"
                            : "bg-slate-50 border-slate-200 text-slate-900 placeholder-slate-400"
                        }`}
                        required
                      />
                    </div>

                    {error && (
                      <p className="text-red-500 text-xs font-medium animate-shake">
                        {error}
                      </p>
                    )}

                    <button
                      type="submit"
                      disabled={submitting}
                      className="w-full mt-2 inline-flex items-center justify-center gap-2 px-6 py-4 rounded-xl font-bold text-sm tracking-wider uppercase bg-gradient-to-r from-violet-600 to-indigo-600 hover:from-violet-500 hover:to-indigo-500 text-white shadow-xl shadow-violet-500/15 hover:shadow-violet-500/30 transition-all transform active:scale-95 disabled:opacity-50"
                    >
                      {submitting ? (
                        <>
                          <RefreshCw className="h-4 w-4 animate-spin" />
                          <span>Generating Strategy...</span>
                        </>
                      ) : (
                        <>
                          <span>Request Custom Blueprint</span>
                          <Send className="h-4 w-4" />
                        </>
                      )}
                    </button>
                  </form>
                </motion.div>
              )}

              {/* Success and custom AI Roadmap Blueprint view */}
              {response && (
                <motion.div
                  key="contact-success"
                  initial={{ opacity: 0, scale: 0.98 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.98 }}
                  className={`rounded-2xl p-6 sm:p-8 border ${
                    darkMode ? "glass-card-dark" : "glass-card-light shadow-xl"
                  }`}
                >
                  <div className="flex flex-col items-center text-center border-b border-slate-200/50 dark:border-slate-800/50 pb-6 mb-6">
                    <div className="h-12 w-12 rounded-full bg-emerald-500/10 text-emerald-500 flex items-center justify-center mb-4">
                      <CheckCircle2 className="h-6 w-6" />
                    </div>
                    <h3 className="font-display font-extrabold text-xl sm:text-2xl tracking-tight mb-2">
                      Blueprint Proposal Generated!
                    </h3>
                    <p className={`text-xs max-w-sm ${darkMode ? "text-slate-400" : "text-slate-500"}`}>
                      Thank you, {formData.name}. Our AI creative planner has analyzed your input. Here is your custom initial campaign blueprint proposal:
                    </p>
                  </div>

                  {/* Proposals Blueprint Content */}
                  <div className="space-y-4 text-left">
                    {response.isSimulated && (
                      <div className="bg-amber-500/10 border border-amber-500/20 text-amber-500 text-center text-[10px] py-1.5 px-3 rounded-lg mb-2">
                        Preview Blueprint: Simulating a tailored client plan (Add your API Key in Settings).
                      </div>
                    )}
                    
                    <div className={`p-5 rounded-xl border leading-relaxed text-xs sm:text-sm font-light whitespace-pre-wrap max-h-80 overflow-y-auto ${
                      darkMode 
                        ? "bg-slate-900/40 border-slate-800 text-slate-200" 
                        : "bg-slate-50 border-slate-200 text-slate-700"
                    }`}>
                      {response.roadmap}
                    </div>

                    <div className="flex flex-col sm:flex-row gap-3 pt-4">
                      <button
                        onClick={handleReset}
                        className={`flex-1 py-3.5 rounded-xl text-xs font-semibold tracking-wider uppercase border transition-colors ${
                          darkMode
                            ? "border-slate-800 hover:bg-slate-900 text-slate-300"
                            : "border-slate-200 hover:bg-slate-100 text-slate-600"
                        }`}
                      >
                        Submit another inquiry
                      </button>
                      <a
                        href="mailto:zied4live@gmail.com"
                        className="flex-1 py-3.5 rounded-xl text-xs font-bold tracking-wider uppercase bg-gradient-to-r from-violet-600 to-indigo-600 text-white text-center inline-flex items-center justify-center gap-2 shadow-lg shadow-violet-500/10"
                      >
                        Confirm Consult Time
                      </a>
                    </div>
                  </div>
                </motion.div>
              )}

            </AnimatePresence>
          </div>

        </div>

      </div>
    </section>
  );
}
