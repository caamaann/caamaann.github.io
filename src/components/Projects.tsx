"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useLanguage } from "@/providers/LanguageProvider";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { projects, type ProjectCategory } from "@/lib/data";
import {
  ExternalLink,
  Lock,
  AlertCircle,
  RefreshCw,
  ChevronDown,
  ChevronUp,
} from "lucide-react";
import { skillIcons, skillColors } from "@/components/Skills";

type FilterKey = "all" | ProjectCategory;

const filterKeys: FilterKey[] = [
  "all",
  "banking",
  "ecommerce",
  "enterprise",
  "event",
  "legal",
];

export function Projects() {
  const { t } = useLanguage();
  const [activeFilter, setActiveFilter] = useState<FilterKey>("all");
  const [showAll, setShowAll] = useState(false);

  const filteredProjects =
    activeFilter === "all"
      ? projects
      : projects.filter((p) => p.category === activeFilter);

  const displayedProjects = showAll
    ? filteredProjects
    : filteredProjects.slice(0, 6);

  const filterLabels: Record<FilterKey, string> = {
    all: t.projects.filters.all,
    banking: t.projects.filters.banking,
    ecommerce: t.projects.filters.ecommerce,
    enterprise: t.projects.filters.enterprise,
    event: t.projects.filters.event,
    legal: t.projects.filters.legal,
  };

  const handleShow = () => {
    setShowAll(!showAll);
    if (showAll) {
      setTimeout(() => {
        const el = document.querySelector("#projects");
        if (el) {
          el.scrollIntoView({ behavior: "smooth" });
        }
      }, 201);
    }
  };

  return (
    <section id="projects" className="section-padding relative">
      <div className="container-custom">
        <SectionHeading
          title={t.projects.title}
          subtitle={t.projects.subtitle}
        />

        {/* Filter Tabs */}
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {filterKeys.map((key) => (
            <motion.button
              key={key}
              onClick={() => setActiveFilter(key)}
              className="relative px-5 py-2.5 rounded-xl text-sm font-medium transition-colors duration-200"
              style={{
                color:
                  activeFilter === key ? "#ffffff" : "var(--text-secondary)",
                background:
                  activeFilter === key ? "transparent" : "var(--bg-card)",
                border: `1px solid ${activeFilter === key ? "transparent" : "var(--border)"}`,
              }}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              {activeFilter === key && (
                <motion.div
                  className="absolute inset-0 rounded-xl bg-(image:--gradient-accent)"
                  layoutId="activeFilter"
                  transition={{ type: "spring", stiffness: 380, damping: 30 }}
                />
              )}
              <span className="relative z-10">{filterLabels[key]}</span>
            </motion.button>
          ))}
        </div>

        {/* Project Grid */}
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5"
          layout
        >
          <AnimatePresence mode="popLayout">
            {displayedProjects.map((project) => (
              <motion.div
                key={project.name}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3 }}
              >
                <motion.div className="glass rounded-2xl p-6 h-full flex flex-col cursor-default group transition-all duration-200 hover:border-(--border-hover) hover:shadow-(--shadow-glow) hover:-translate-y-1">
                  {/* Header */}
                  <div className="flex items-start justify-between mb-3">
                    <div className="flex flex-col gap-1">
                      <h3 className="text-base font-bold text-(--text-primary) flex items-center gap-2">
                        {project.name}
                        {project.status === "revamped" && (
                          <span
                            className="flex items-center gap-1 px-1.5 py-0.5 rounded text-[10px] font-bold uppercase tracking-wider bg-orange-500/10 text-orange-500 border border-orange-500/20"
                            title="UI has been revamped by client"
                          >
                            <RefreshCw size={10} />
                            Revamped
                          </span>
                        )}
                        {project.status === "offline" && (
                          <span
                            className="flex items-center gap-1 px-1.5 py-0.5 rounded text-[10px] font-bold uppercase tracking-wider bg-red-500/10 text-red-500 border border-red-500/20"
                            title="Project is currently offline or taken down"
                          >
                            <AlertCircle size={10} />
                            Offline
                          </span>
                        )}
                      </h3>
                    </div>
                    {project.url ? (
                      <a
                        href={project.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-1.5 rounded-lg transition-all duration-200 shrink-0 opacity-60 group-hover:opacity-100 text-(--accent)"
                        title={t.projects.visit}
                      >
                        <ExternalLink size={16} />
                      </a>
                    ) : project.isInternal ? (
                      <span
                        className="p-1.5 shrink-0 opacity-40 text-(--text-muted)"
                        title={t.projects.internal}
                      >
                        <Lock size={14} />
                      </span>
                    ) : null}
                  </div>

                  {/* Client */}
                  <p className="text-sm mb-4 text-(--text-secondary)">
                    {project.client}
                  </p>

                  {/* Tech Tags - As Icons */}
                  <div className="flex flex-wrap gap-2 mt-auto">
                    {project.tech.map((tech) => {
                      const Icon = skillIcons[tech];
                      const color = skillColors[tech];

                      return (
                        <div
                          key={tech}
                          className="p-1.5 flex items-center justify-center rounded-lg bg-(--bg-card-hover) border border-(--border) transition-colors duration-200"
                          title={tech}
                          style={{ color: color || "var(--text-secondary)" }}
                        >
                          {Icon ? (
                            <Icon size={16} />
                          ) : (
                            <span className="text-xs font-medium px-1">
                              {tech}
                            </span>
                          )}
                        </div>
                      );
                    })}
                  </div>
                </motion.div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* View More Button */}
        {filteredProjects.length > 6 && (
          <motion.div
            className="flex justify-center mt-12"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
          >
            <motion.button
              onClick={handleShow}
              className="group flex items-center gap-2 px-6 py-3 rounded-xl glass glass-hover text-sm font-semibold text-(--accent)"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
            >
              {showAll ? (
                <>
                  Show Less{" "}
                  <ChevronUp
                    size={16}
                    className="group-hover:-translate-y-1 transition-transform"
                  />
                </>
              ) : (
                <>
                  View More{" "}
                  <ChevronDown
                    size={16}
                    className="group-hover:translate-y-1 transition-transform"
                  />
                </>
              )}
            </motion.button>
          </motion.div>
        )}
      </div>
    </section>
  );
}
