import { motion } from "motion/react";
import { Sparkles, Trophy, Lightbulb, Scale, Users } from "lucide-react";

interface AboutProps {
  darkMode: boolean;
}

export default function About({ darkMode }: AboutProps) {
  const values = [
    {
      title: "Technical Precision",
      description: "We don't rely on gut feelings. We combine high-fidelity human creative design with multivariate performance analytics to optimize target click-through rates.",
      icon: Lightbulb,
      bg: "bg-violet-500/10 dark:bg-violet-500/20",
      color: "text-violet-600 dark:text-violet-400"
    },
    {
      title: "Emotional Resonance",
      description: "Every visual asset, brand copy, and typography choice is designed to speak directly to core human desires—building genuine, long-term brand equity.",
      icon: Trophy,
      bg: "bg-fuchsia-500/10 dark:bg-fuchsia-500/20",
      color: "text-fuchsia-600 dark:text-fuchsia-400"
    },
    {
      title: "Absolute Transparency",
      description: "Our performance logs are completely open. Clients receive dynamic live attribution dashboards showing precise allocations of active ad-spend directly.",
      icon: Scale,
      bg: "bg-cyan-500/10 dark:bg-cyan-500/20",
      color: "text-cyan-600 dark:text-cyan-400"
    }
  ];

  const partners = [
    "Nova Global", "Apex Labs", "Solv Workspace", "Botanica Corp", "Astra Media"
  ];

  return (
    <section
      id="about"
      className={`py-24 border-t transition-colors duration-300 ${
        darkMode 
          ? "bg-slate-950 border-slate-900 text-white" 
          : "bg-slate-50 border-slate-150 text-slate-900"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 sm:gap-16 items-center">
          
          {/* Narrative Column (Left Column - 6 cols) */}
          <div className="lg:col-span-6 text-left">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider bg-violet-500/10 text-violet-600 dark:text-violet-400 border border-violet-500/25 mb-4">
              <Sparkles className="h-3.5 w-3.5" />
              The Zadvrt Narrative
            </div>
            <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight mb-6">
              We Bridge the Gap Between <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-500 to-indigo-500">
                Emotional Art & Science
              </span>
            </h2>
            <p className={`text-base leading-relaxed font-light mb-6 ${
              darkMode ? "text-slate-300" : "text-slate-600"
            }`}>
              Founded in 2024, Zadvrt Group was built with a single disruptive objective: to replace the outdated, slow-moving traditional advertising agency model with a rapid-deployment, data-authoritative creative powerhouse.
            </p>
            <p className={`text-sm leading-relaxed font-light mb-8 ${
              darkMode ? "text-slate-400" : "text-slate-500"
            }`}>
              We believe that effective modern advertising is neither pure science nor pure art—it is the deliberate orchestration of both. We employ specialized computational copywriting alongside veteran art directors to draft, pilot, and scale high-converting marketing operations globally.
            </p>

            {/* Quick Metrics Timeline Cards */}
            <div className="grid grid-cols-2 gap-4 border-t border-slate-200 dark:border-slate-900 pt-8">
              <div>
                <span className="font-display text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-violet-500 to-indigo-500">
                  98%
                </span>
                <p className={`text-xs uppercase font-medium tracking-wider mt-1 ${darkMode ? "text-slate-400" : "text-slate-500"}`}>
                  Client Retention Rate
                </p>
              </div>
              <div>
                <span className="font-display text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-fuchsia-500 to-violet-500">
                  4.8x
                </span>
                <p className={`text-xs uppercase font-medium tracking-wider mt-1 ${darkMode ? "text-slate-400" : "text-slate-500"}`}>
                  Average Campaign ROI
                </p>
              </div>
            </div>
          </div>

          {/* Principle Cards Column (Right Column - 6 cols) */}
          <div className="lg:col-span-6 space-y-6">
            {values.map((val, index) => {
              const IconComponent = val.icon;
              return (
                <motion.div
                  key={val.title}
                  initial={{ opacity: 0, x: 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className={`rounded-2xl p-6 border flex gap-4 ${
                    darkMode
                      ? "glass-card-dark"
                      : "glass-card-light shadow-sm"
                  }`}
                >
                  <div className={`p-3 rounded-xl shrink-0 h-12 w-12 flex items-center justify-center ${val.bg} ${val.color}`}>
                    <IconComponent className="h-6 w-6" />
                  </div>
                  <div>
                    <h3 className="font-display font-bold text-lg tracking-tight mb-2">
                      {val.title}
                    </h3>
                    <p className={`text-xs leading-relaxed font-light ${
                      darkMode ? "text-slate-400" : "text-slate-600"
                    }`}>
                      {val.description}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </div>

        </div>

        {/* Dynamic client ticker strip */}
        <div className="border-t border-slate-200 dark:border-slate-900 mt-20 pt-10">
          <p className={`text-center text-[10px] uppercase font-bold tracking-widest mb-6 ${darkMode ? "text-slate-500" : "text-slate-400"}`}>
            Trusted by Leaders in Disruptive Technologies
          </p>
          <div className="flex flex-wrap items-center justify-center gap-x-12 gap-y-6">
            {partners.map((partner, pIdx) => (
              <span
                key={pIdx}
                className={`font-display text-sm sm:text-base font-extrabold tracking-tight ${
                  darkMode ? "text-slate-600 hover:text-slate-400" : "text-slate-300 hover:text-slate-500"
                } transition-colors select-none`}
              >
                {partner.toUpperCase()}
              </span>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
