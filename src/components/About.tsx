"use client";

import { motion } from "framer-motion";
import { useLanguage } from "@/providers/LanguageProvider";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { Calendar, Briefcase, Users } from "lucide-react";

const stats = [
  {
    icon: Calendar,
    valueNum: 5,
    suffix: "+",
    key: "years" as const,
    colorClass:
      "border-l-(--accent) text-(--accent) bg-(--accent-glow) group-hover:bg-(--accent-glow-light)",
  },
  {
    icon: Briefcase,
    valueNum: 30,
    suffix: "+",
    key: "projects" as const,
    colorClass:
      "border-l-purple-500 text-purple-500 bg-purple-500/10 group-hover:bg-purple-500/20",
  },
  {
    icon: Users,
    valueNum: 10,
    suffix: "+",
    key: "clients" as const,
    colorClass:
      "border-l-pink-500 text-pink-500 bg-pink-500/10 group-hover:bg-pink-500/20",
  },
];

export function About() {
  const { t } = useLanguage();

  return (
    <section id="about" className="section-padding relative">
      <div className="container-custom">
        <SectionHeading title={t.about.title} />

        <div className="max-w-3xl mx-auto mb-16">
          <ScrollReveal>
            <p className="text-base md:text-lg leading-relaxed text-center text-(--text-secondary)">
              {t.about.description}
            </p>
          </ScrollReveal>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-3xl mx-auto">
          {stats.map((stat, i) => (
            <ScrollReveal key={stat.key} delay={i * 0.1}>
              <motion.div
                className={`glass rounded-2xl p-6 text-center cursor-default flex flex-col justify-center gap-1 group transition-colors border-l-4 hover:bg-(--bg-card-hover) ${stat.colorClass}`}
                whileHover={{ y: -4 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <div className="flex items-center justify-between mb-2">
                  <stat.icon
                    className={`text-3xl transition-transform group-hover:scale-110`}
                    size={28}
                  />
                </div>
                <motion.div
                  className="text-3xl md:text-4xl font-bold mb-2 text-(--text-primary) text-left"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                >
                  <span>
                    {stat.valueNum}
                    {stat.suffix}
                  </span>
                </motion.div>
                <p className="text-sm font-medium text-(--text-secondary) text-left">
                  {t.about.stats[stat.key]}
                </p>
              </motion.div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
