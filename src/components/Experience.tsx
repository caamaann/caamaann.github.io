"use client";

import { motion } from "framer-motion";
import { useLanguage } from "@/providers/LanguageProvider";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { experiences } from "@/lib/data";
import { MapPin } from "lucide-react";

export function Experience() {
  const { locale, t } = useLanguage();

  return (
    <section id="experience" className="section-padding relative">
      <div className="absolute inset-0 dot-grid opacity-20" />
      <div className="container-custom relative z-10">
        <SectionHeading title={t.experience.title} />

        <div className="relative max-w-4xl mx-auto">
          {/* Timeline Line */}
          <div className="absolute left-4 md:left-1/2 md:-translate-x-px top-0 bottom-0 w-0.5 bg-(--border)" />

          {/* Timeline Items */}
          {experiences.map((exp, i) => {
            const isLeft = i % 2 === 0;
            const bullets = locale === "id" ? exp.bulletsId : exp.bullets;
            const endDate =
              exp.endDate === "Present" ? t.experience.present : exp.endDate;

            return (
              <motion.div
                key={`${exp.company}-${exp.role}`}
                className={`relative flex flex-col md:flex-row items-start mb-12 ${
                  isLeft ? "md:flex-row" : "md:flex-row-reverse"
                }`}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{
                  duration: 0.5,
                  delay: 0.1,
                  ease: [0.25, 0.46, 0.45, 0.94],
                }}
              >
                {/* Timeline Dot */}
                <div className="absolute left-4 md:left-1/2 -translate-x-1/2 w-3 h-3 rounded-full mt-8 z-10 bg-(--accent) shadow-[0_0_12px_var(--accent-glow)]" />

                {/* Content Card */}
                <div
                  className={`ml-12 md:ml-0 md:w-[calc(50%-2rem)] ${
                    isLeft ? "md:pr-0 md:mr-auto" : "md:pl-0 md:ml-auto"
                  }`}
                >
                  <motion.div className="glass rounded-2xl p-6 cursor-default border-l-4 border-l-(--accent) group transition-all duration-200 hover:bg-(--bg-card-hover) hover:border-(--border-hover) hover:shadow-(--shadow-glow) hover:-translate-y-0.5">
                    {/* Date Badge */}
                    <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-medium mb-3 bg-(--accent-glow) text-(--accent) transition-colors group-hover:bg-(--accent-glow-light)">
                      {exp.startDate} — {endDate}
                    </div>

                    {/* Company & Role */}
                    <h3 className="text-lg font-bold mb-1 text-(--text-primary)">
                      {exp.company}
                    </h3>
                    <p className="text-sm font-semibold mb-1 text-(--accent)">
                      {exp.role}
                    </p>
                    <p className="text-xs flex items-center gap-1 mb-4 text-(--text-muted)">
                      <MapPin size={12} />
                      {exp.location}
                    </p>

                    {/* Bullets */}
                    <ul className="space-y-2">
                      {bullets.map((bullet, j) => (
                        <li
                          key={j}
                          className="text-sm flex items-start gap-2 text-(--text-secondary) group-hover:text-(--text-primary) transition-colors"
                        >
                          <span className="mt-2 w-1 h-1 rounded-full shrink-0 bg-(--accent)" />
                          {bullet}
                        </li>
                      ))}
                    </ul>
                  </motion.div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
