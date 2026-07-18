import { motion } from "motion/react";
import { Compass, Megaphone, Cpu, BarChart3, Check, Sparkles } from "lucide-react";
import { ServiceItem } from "../types";

interface ServicesProps {
  darkMode: boolean;
}

export default function Services({ darkMode }: ServicesProps) {
  const services: (ServiceItem & { icon: any; color: string })[] = [
    {
      id: "brand-strategy",
      title: "Omni-Channel Strategy",
      description: "Bespoke brand blueprints, market analysis, competitor positioning, and unified target messaging pillars designed for scale.",
      features: ["Competitor position mapping", "Unified voice architecture", "Audience segment profiling", "Multi-funnel blueprints"],
      icon: Compass,
      color: "from-violet-500 to-indigo-500"
    },
    {
      id: "digital-advertising",
      title: "High-Fidelity Ad Creative",
      description: "Scroll-stopping video campaigns, social copy assets, custom layouts, and highly refined display ads crafted to convert.",
      features: ["Custom static & dynamic designs", "Copywriting hook structures", "Paid social formatting", "Instant CTR diagnostics"],
      icon: Megaphone,
      color: "from-fuchsia-500 to-violet-500"
    },
    {
      id: "ai-operations",
      title: "AI Creative Operations",
      description: "Integrate customized copywriting, translation, and artwork pipelines into your workflow, scaling assets with absolute precision.",
      features: ["Bespoke model fine-tuning", "Localized brand translation", "Fast asset variance testing", "Creative pipeline training"],
      icon: Cpu,
      color: "from-cyan-500 to-blue-500"
    },
    {
      id: "analytics-growth",
      title: "Attribution & Growth",
      description: "Deep analytics tracking, multivariate testing setups, full-funnel pixel alignment, and conversion optimizations.",
      features: ["Multivariate copy iteration", "Transparent metric trackers", "Revenue pixel integrations", "Real-time performance audits"],
      icon: BarChart3,
      color: "from-emerald-500 to-cyan-500"
    }
  ];

  return (
    <section
      id="services"
      className={`py-24 border-t transition-colors duration-300 ${
        darkMode 
          ? "bg-slate-950 border-slate-900 text-white" 
          : "bg-white border-slate-100 text-slate-900"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 sm:mb-20">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider bg-violet-500/10 text-violet-600 dark:text-violet-400 border border-violet-500/25 mb-4">
            <Sparkles className="h-3.5 w-3.5" />
            Our Capability Pillars
          </div>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight mb-4">
            Creative Craftsmanship Meets <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-500 to-indigo-500">
              High-Precision Analytics
            </span>
          </h2>
          <p className={`text-base font-light leading-relaxed ${darkMode ? "text-slate-400" : "text-slate-500"}`}>
            We bridge the gap between human emotional resonance and advanced algorithms, delivering digital marketing frameworks that capture hearts and command action.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10">
          {services.map((service, index) => {
            const IconComponent = service.icon;
            return (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className={`relative rounded-2xl p-6 sm:p-8 border overflow-hidden transition-all duration-300 group ${
                  darkMode 
                    ? "glass-card-dark hover:border-slate-800 hover:shadow-violet-500/5 hover:shadow-2xl" 
                    : "glass-card-light hover:border-slate-200 hover:shadow-xl"
                }`}
              >
                {/* Visual Accent Hover Effect */}
                <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-br from-violet-500/10 to-indigo-500/10 rounded-bl-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />

                <div className="flex flex-col sm:flex-row items-start gap-5">
                  {/* Icon Panel */}
                  <div className={`p-4 rounded-xl shrink-0 text-white bg-gradient-to-tr ${service.color} shadow-lg shadow-violet-500/10`}>
                    <IconComponent className="h-6 w-6" />
                  </div>

                  {/* Content Panel */}
                  <div className="flex-1">
                    <h3 className="font-display font-bold text-xl tracking-tight mb-2">
                      {service.title}
                    </h3>
                    <p className={`text-sm leading-relaxed mb-6 font-light ${
                      darkMode ? "text-slate-400" : "text-slate-500"
                    }`}>
                      {service.description}
                    </p>

                    {/* Features checklist */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      {service.features.map((feature, fIndex) => (
                        <div key={fIndex} className="flex items-center gap-2 text-xs">
                          <div className="h-4 w-4 rounded-full bg-violet-500/10 text-violet-600 dark:text-violet-400 flex items-center justify-center shrink-0">
                            <Check className="h-3 w-3" />
                          </div>
                          <span className={darkMode ? "text-slate-300" : "text-slate-600"}>
                            {feature}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
