"use client";

import { motion, Variants } from "framer-motion";
import { useLanguage } from "@/providers/LanguageProvider";
import { ArrowDown, Send } from "lucide-react";

export function Hero() {
  const { t } = useLanguage();

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15, delayChildren: 0.3 },
    },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] },
    },
  };

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Animated Background Orbs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          className="absolute rounded-full blur-3xl opacity-20 size-125 top-[10%] -right-[10%] bg-(--gradient-accent)"
          animate={{
            x: [0, 30, -20, 0],
            y: [0, -40, 20, 0],
            scale: [1, 1.1, 0.95, 1],
          }}
          transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute rounded-full blur-3xl opacity-15 size-100 bottom-[15%] -left-[5%] bg-(--accent)"
          animate={{
            x: [0, -20, 30, 0],
            y: [0, 30, -20, 0],
            scale: [1, 0.95, 1.1, 1],
          }}
          transition={{
            duration: 18,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 3,
          }}
        />
        <motion.div
          className="absolute rounded-full blur-3xl opacity-10 size-75 top-[50%] left-[40%] bg-[#a855f7]"
          animate={{
            x: [0, 40, -30, 0],
            y: [0, -20, 40, 0],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 5,
          }}
        />
      </div>

      {/* Dot Grid */}
      <div className="absolute inset-0 dot-grid opacity-30" />

      {/* Content */}
      <motion.div
        className="relative z-10 text-center px-6 max-w-4xl mx-auto"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {/* Greeting */}
        <motion.p
          className="text-lg md:text-xl mb-4 font-medium text-(--accent)"
          variants={itemVariants}
        >
          {t.hero.greeting}
        </motion.p>

        {/* Name */}
        <motion.h1
          className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-extrabold mb-6 leading-tight"
          variants={itemVariants}
        >
          <span className="text-(--text-primary)">Muhammad </span>
          <span className="gradient-text">{t.hero.name}</span>
          <span className="text-(--text-primary)"> Al Hafizh</span>
        </motion.h1>

        {/* Role */}
        <motion.div
          className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full mb-8 glass"
          variants={itemVariants}
        >
          <div className="w-2 h-2 rounded-full animate-pulse bg-[#22c55e]" />
          <span className="text-sm md:text-base font-medium text-(--text-secondary)">
            {t.hero.role}
          </span>
        </motion.div>

        {/* Tagline */}
        <motion.p
          className="text-base md:text-lg lg:text-xl max-w-2xl mx-auto mb-12 leading-relaxed text-(--text-secondary)"
          variants={itemVariants}
        >
          {t.hero.tagline}
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
          variants={itemVariants}
        >
          <motion.button
            className="px-8 py-3.5 rounded-xl text-white font-semibold text-base flex items-center gap-2 shadow-(--shadow-glow) bg-(image:--gradient-accent)"
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
            onClick={() =>
              document
                .querySelector("#projects")
                ?.scrollIntoView({ behavior: "smooth" })
            }
          >
            {t.hero.cta_work}
            <ArrowDown size={18} />
          </motion.button>
          <motion.button
            className="px-8 py-3.5 rounded-xl font-semibold text-base flex items-center gap-2 glass glass-hover text-(--text-primary)"
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
            onClick={() =>
              document
                .querySelector("#contact")
                ?.scrollIntoView({ behavior: "smooth" })
            }
          >
            {t.hero.cta_contact}
            <Send size={16} />
          </motion.button>
        </motion.div>
      </motion.div>

      {/* Scroll Indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
      >
        <div className="w-6 h-10 rounded-full border-2 flex justify-center pt-2 border-(--border)">
          <motion.div
            className="w-1 h-2 rounded-full bg-(--accent)"
            animate={{ y: [0, 12, 0], opacity: [1, 0, 1] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          />
        </div>
      </motion.div>
    </section>
  );
}
