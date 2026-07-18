import { motion } from "motion/react";
import { Sparkles, Star, Quote } from "lucide-react";

interface TestimonialsProps {
  darkMode: boolean;
}

export default function Testimonials({ darkMode }: TestimonialsProps) {
  const reviews = [
    {
      quote: "Before working with Zadvrt Group, our ad creatives felt stale and we struggled to break a 1.2% CTR. Zadvrt designed five multi-platform ad variations that drove CTR to 4.6% in 10 days. The ROI has been phenomenal.",
      author: "Marcus Vance",
      role: "VP of Growth, SolStream Networks",
      metric: "4.6% CTR / +310% Enrolments",
      stars: 5,
      avatar: "M"
    },
    {
      quote: "The team at Zadvrt Group acts like our in-house performance arm. Their combination of gorgeous, high-end French photography with aggressive automated copy testing helped our jewelry line scale past 18x campaign ROI safely.",
      author: "Hélène Chevalier",
      role: "Chief Branding Officer, L'Avenir Paris",
      metric: "18.2x Campaign ROI",
      stars: 5,
      avatar: "H"
    },
    {
      quote: "We were highly skeptical about AI creative operations, but Zadvrt Group trained a private model on our brand pillars that draft incredibly high-quality social copies instantly. Saved us weeks of production overhead.",
      author: "Dr. Sarah Lin",
      role: "Co-Founder, Botanica Tea Co.",
      metric: "+240% Direct Sales Boost",
      stars: 5,
      avatar: "S"
    }
  ];

  return (
    <section
      id="testimonials"
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
            Active Client Endorsements
          </div>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight mb-4">
            What Brands Say About <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-500 to-indigo-500">
              The Zadvrt Method
            </span>
          </h2>
          <p className={`text-base font-light leading-relaxed ${darkMode ? "text-slate-400" : "text-slate-500"}`}>
            Our success is validated exclusively by the direct metrics and scalable returns we deliver to our partners. Here is how we transform creative campaigns.
          </p>
        </div>

        {/* Testimonials Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {reviews.map((rev, index) => (
            <motion.div
              key={rev.author}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={`rounded-2xl p-6 sm:p-8 border flex flex-col justify-between relative ${
                darkMode 
                  ? "glass-card-dark" 
                  : "glass-card-light shadow-sm"
              }`}
            >
              {/* Floating Quote Icon */}
              <div className="absolute top-6 right-6 text-violet-500/10 pointer-events-none">
                <Quote className="h-10 w-10 stroke-[3px]" />
              </div>

              <div>
                {/* Star rating row */}
                <div className="flex items-center gap-1 mb-6">
                  {[...Array(rev.stars)].map((_, sIdx) => (
                    <Star key={sIdx} className="h-4 w-4 fill-amber-400 text-amber-400 shrink-0" />
                  ))}
                </div>

                {/* Review Body */}
                <p className={`text-sm sm:text-base leading-relaxed font-light italic mb-8 ${
                  darkMode ? "text-slate-300" : "text-slate-600"
                }`}>
                  "{rev.quote}"
                </p>
              </div>

              {/* Author and Outcomes Panel */}
              <div className="border-t border-slate-200/50 dark:border-slate-900/50 pt-6 flex items-center gap-4 mt-auto">
                {/* Visual Avatar Monogram */}
                <div className="h-10 w-10 rounded-full bg-gradient-to-tr from-violet-600 to-indigo-600 text-white flex items-center justify-center font-bold text-sm shrink-0 shadow-lg shadow-violet-500/10">
                  {rev.avatar}
                </div>
                <div>
                  <h4 className="font-display font-bold text-sm sm:text-base tracking-tight">
                    {rev.author}
                  </h4>
                  <p className={`text-[11px] font-medium leading-none mb-1 ${darkMode ? "text-slate-400" : "text-slate-500"}`}>
                    {rev.role}
                  </p>
                  <span className="inline-block bg-emerald-500/10 dark:bg-emerald-500/20 text-emerald-600 dark:text-emerald-400 text-[10px] font-extrabold px-1.5 py-0.5 rounded uppercase mt-1">
                    {rev.metric}
                  </span>
                </div>
              </div>

            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
