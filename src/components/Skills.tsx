"use client";

import { motion } from "framer-motion";
import { useLanguage } from "@/providers/LanguageProvider";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { skillCategories } from "@/lib/data";
import { type IconType } from "react-icons";
import {
  SiReact,
  SiNextdotjs,
  SiRemix,
  SiGatsby,
  SiVuedotjs,
  SiNuxtdotjs,
  SiJavascript,
  SiTypescript,
  SiHtml5,
  SiCss3,
  SiPhp,
  SiMysql,
  SiGit,
  SiGo,
  SiShopify,
} from "react-icons/si";
import { FaJava } from "react-icons/fa";
import {
  RefreshCw,
  ClipboardList,
  Blocks,
  Wrench,
  FlaskConical,
} from "lucide-react";

export const skillIcons: Record<
  string,
  IconType | React.ComponentType<{ size?: number }>
> = {
  "React.js": SiReact,
  "Next.js": SiNextdotjs,
  Remix: SiRemix,
  "Gatsby.js": SiGatsby,
  "Vue.js": SiVuedotjs,
  "Nuxt.js": SiNuxtdotjs,
  JavaScript: SiJavascript,
  TypeScript: SiTypescript,
  HTML5: SiHtml5,
  CSS3: SiCss3,
  Java: FaJava,
  PHP: SiPhp,
  Go: SiGo,
  MySQL: SiMysql,
  Shopify: SiShopify,
  Agile: RefreshCw,
  Scrum: ClipboardList,
  OOP: Blocks,
  Git: SiGit,
  "Code Refactoring": Wrench,
  "Unit Testing": FlaskConical,
};

export const skillColors: Record<string, string> = {
  "React.js": "#61DAFB",
  "Next.js": "var(--text-primary)",
  Remix: "var(--text-primary)",
  "Gatsby.js": "#663399",
  "Vue.js": "#4FC08D",
  "Nuxt.js": "#00DC82",
  JavaScript: "#F7DF1E",
  TypeScript: "#3178C6",
  HTML5: "#E34F26",
  CSS3: "#1572B6",
  Java: "#ED8B00",
  PHP: "#777BB4",
  Go: "#00ADD8",
  MySQL: "#4479A1",
  Shopify: "#95BF47",
  Git: "#F05032",
};

export function Skills() {
  const { t } = useLanguage();

  const categoryLabels = {
    frontend: t.skills.frontend,
    backend: t.skills.backend,
    practices: t.skills.practices,
  };

  return (
    <section id="skills" className="section-padding relative">
      <div className="absolute inset-0 dot-grid opacity-20" />
      <div className="container-custom relative z-10">
        <SectionHeading title={t.skills.title} />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {skillCategories.map((category, i) => (
            <ScrollReveal key={category.key} delay={i * 0.15}>
              <motion.div
                className="glass rounded-2xl p-6 h-full hover:border-(--border-hover) hover:shadow-(--shadow-glow) transition-all duration-200"
                transition={{ duration: 0.2 }}
              >
                <h3 className="text-lg font-bold mb-6 gradient-text">
                  {categoryLabels[category.key]}
                </h3>

                <div className="flex flex-wrap gap-2.5">
                  {category.skills.map((skill, j) => {
                    const Icon = skillIcons[skill];
                    const color = skillColors[skill];

                    return (
                      <motion.div
                        key={skill}
                        className="flex items-center gap-2 px-3 py-2 rounded-xl text-sm font-medium cursor-default bg-(--bg-card-hover) text-(--text-primary) border border-(--border) hover:border-(--hover-color) hover:shadow-(--hover-shadow) transition-all duration-200"
                        style={
                          {
                            "--hover-color": color || "var(--accent)",
                            "--hover-shadow": `0 0 15px ${
                              color ? color + "30" : "var(--accent-glow)"
                            }`,
                          } as React.CSSProperties
                        }
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        whileHover={{ scale: 1.05 }}
                      >
                        {Icon && (
                          <span style={{ color: color || "var(--accent)" }}>
                            <Icon size={16} />
                          </span>
                        )}
                        {skill}
                      </motion.div>
                    );
                  })}
                </div>
              </motion.div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
