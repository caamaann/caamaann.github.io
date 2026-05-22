"use client";

import { motion } from "framer-motion";
import { useLanguage } from "@/providers/LanguageProvider";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { certifications } from "@/lib/data";
import { GraduationCap, Award, ExternalLink } from "lucide-react";

export function Education() {
  const { t } = useLanguage();

  return (
    <section id="education" className="section-padding relative">
      <div className="container-custom">
        <SectionHeading title={t.education.title} />

        <div className="max-w-4xl mx-auto space-y-12">
          {/* Education Card */}
          <ScrollReveal>
            <motion.div className="glass rounded-2xl p-8 cursor-default transition-all duration-200 hover:border-(--border-hover) hover:shadow-(--shadow-glow)">
              <div className="flex items-start gap-5">
                <div className="shrink-0 w-14 h-14 rounded-2xl flex items-center justify-center bg-(--accent-glow) text-(--accent)">
                  <GraduationCap size={28} />
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-1 text-(--text-primary)">
                    Politeknik Negeri Bandung
                  </h3>
                  <p className="text-base font-medium mb-2 text-(--accent)">
                    {t.education.degree}
                  </p>
                  <div className="flex flex-wrap items-center gap-3 text-sm text-(--text-secondary)">
                    <span>Aug 2017 — Oct 2021</span>
                    <span className="w-1 h-1 rounded-full bg-(--text-muted)" />
                    <span>
                      {t.education.gpa}:{" "}
                      <strong className="text-(--text-primary)">
                        3.16 / 4.00
                      </strong>
                    </span>
                  </div>
                </div>
              </div>
            </motion.div>
          </ScrollReveal>

          {/* Certifications */}
          <div>
            <ScrollReveal>
              <h3 className="text-xl font-bold mb-6 flex items-center gap-2 text-(--text-primary)">
                <Award size={22} className="text-(--accent)" />
                {t.education.certifications}
              </h3>
            </ScrollReveal>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {certifications.map((cert, i) => (
                <ScrollReveal key={cert.name} delay={i * 0.05}>
                  <motion.div
                    className="glass rounded-xl p-4 flex items-center justify-between gap-3 cursor-default h-full transition-all duration-200 hover:border-(--border-hover) hover:shadow-(--shadow-glow) hover:-translate-y-0.5"
                    transition={{ duration: 0.2 }}
                  >
                    <div className="min-w-0">
                      <p
                        className="text-sm font-medium truncate text-(--text-primary)"
                        title={cert.name}
                      >
                        {cert.name}
                      </p>
                      <p className="text-xs mt-1 text-(--text-muted)">
                        {cert.issuer} · {cert.year}
                      </p>
                    </div>
                    {cert.url && (
                      <a
                        href={cert.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="shrink-0 p-2 rounded-lg transition-colors duration-200 text-(--accent)"
                        title={t.education.viewCert}
                      >
                        <ExternalLink size={14} />
                      </a>
                    )}
                  </motion.div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
