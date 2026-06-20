"use client";

import { useEffect, useRef, useState, type ReactNode } from "react";
import {
  AnimatePresence,
  motion,
  useMotionValue,
  useReducedMotion,
  useSpring,
  type Variants,
} from "framer-motion";
import { useLanguage } from "@/providers/LanguageProvider";
import { ArrowDown, Send } from "lucide-react";

/** Recognizable clients — instant social proof for first-time visitors. */
const BRANDS = [
  "BRI",
  "UOB",
  "Prudential",
  "XL Axiata",
  "Bank Indonesia",
  "Tokio Marine",
];

const STAT_VALUES = {
  years: "5+",
  projects: "30+",
  clients: "10+",
} as const;

/** Cursor-following wrapper that gives buttons a subtle "magnetic" pull. */
function Magnetic({ children }: { children: ReactNode }) {
  const ref = useRef<HTMLDivElement>(null);
  const reduce = useReducedMotion();
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const springX = useSpring(x, { stiffness: 200, damping: 15, mass: 0.3 });
  const springY = useSpring(y, { stiffness: 200, damping: 15, mass: 0.3 });

  const handleMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (reduce || !ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    x.set((e.clientX - (rect.left + rect.width / 2)) * 0.25);
    y.set((e.clientY - (rect.top + rect.height / 2)) * 0.25);
  };

  const reset = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMove}
      onMouseLeave={reset}
      style={{ x: springX, y: springY }}
      className="inline-flex"
    >
      {children}
    </motion.div>
  );
}

/** Vertically flips through the role list with a blinking caret. */
function RotatingRole({ roles }: { roles: string[] }) {
  const [index, setIndex] = useState(0);
  const reduce = useReducedMotion();

  useEffect(() => {
    const id = setInterval(
      () => setIndex((i) => (i + 1) % roles.length),
      2600
    );
    return () => clearInterval(id);
  }, [roles.length]);

  return (
    <span className="inline-flex items-center justify-center">
      <span className="relative inline-block h-[1.2em] overflow-hidden align-bottom">
        <AnimatePresence mode="wait" initial={false}>
          <motion.span
            key={index}
            className="inline-block text-(--accent)"
            initial={reduce ? { opacity: 0 } : { opacity: 0, y: "100%" }}
            animate={reduce ? { opacity: 1 } : { opacity: 1, y: "0%" }}
            exit={reduce ? { opacity: 0 } : { opacity: 0, y: "-100%" }}
            transition={{ duration: 0.4, ease: [0.25, 0.46, 0.45, 0.94] }}
          >
            {roles[index]}
          </motion.span>
        </AnimatePresence>
      </span>
      <motion.span
        aria-hidden
        className="ml-1 inline-block h-[1.1em] w-[3px] translate-y-[0.08em] rounded-full bg-(--accent)"
        animate={reduce ? undefined : { opacity: [1, 1, 0, 0] }}
        transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
      />
    </span>
  );
}

export function Hero() {
  const { t } = useLanguage();
  const reduce = useReducedMotion();

  const nameWords: { text: string; gradient: boolean }[] = [
    { text: "Muhammad", gradient: false },
    { text: t.hero.name, gradient: true },
    { text: "Al", gradient: false },
    { text: "Hafizh", gradient: false },
  ];

  const stats = [
    { value: STAT_VALUES.years, label: t.hero.stats.years },
    { value: STAT_VALUES.projects, label: t.hero.stats.projects },
    { value: STAT_VALUES.clients, label: t.hero.stats.clients },
  ];

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.12, delayChildren: 0.2 },
    },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 24 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] },
    },
  };

  // Name acts as its own stagger container for the word-by-word reveal.
  const nameContainer: Variants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.09 } },
  };

  const wordVariants: Variants = {
    hidden: { opacity: 0, y: 28, rotateX: -40 },
    visible: {
      opacity: 1,
      y: 0,
      rotateX: 0,
      transition: { duration: 0.55, ease: [0.25, 0.46, 0.45, 0.94] },
    },
  };

  const scrollTo = (id: string) =>
    document.querySelector(id)?.scrollIntoView({ behavior: "smooth" });

  return (
    <section
      id="hero"
      className="relative flex min-h-dvh items-center justify-center overflow-hidden"
    >
      {/* Animated Background Orbs */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <motion.div
          className="absolute size-125 top-[8%] -right-[10%] rounded-full opacity-20 blur-3xl bg-(--gradient-accent)"
          animate={
            reduce
              ? undefined
              : { x: [0, 30, -20, 0], y: [0, -40, 20, 0], scale: [1, 1.1, 0.95, 1] }
          }
          transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute size-100 bottom-[15%] -left-[5%] rounded-full opacity-15 blur-3xl bg-(--accent)"
          animate={
            reduce
              ? undefined
              : { x: [0, -20, 30, 0], y: [0, 30, -20, 0], scale: [1, 0.95, 1.1, 1] }
          }
          transition={{ duration: 18, repeat: Infinity, ease: "easeInOut", delay: 3 }}
        />
        <motion.div
          className="absolute size-75 top-[50%] left-[40%] rounded-full opacity-10 blur-3xl bg-[#a855f7]"
          animate={reduce ? undefined : { x: [0, 40, -30, 0], y: [0, -20, 40, 0] }}
          transition={{ duration: 20, repeat: Infinity, ease: "easeInOut", delay: 5 }}
        />
      </div>

      {/* Dot Grid */}
      <div className="absolute inset-0 dot-grid opacity-30" />

      {/* Content */}
      <motion.div
        className="relative z-10 mx-auto flex max-w-4xl flex-col items-center px-6 py-28 text-center"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {/* Availability badge */}
        <motion.div
          className="mb-6 inline-flex items-center gap-2 rounded-full px-4 py-1.5 glass"
          variants={itemVariants}
        >
          <span className="relative flex size-2">
            {!reduce && (
              <span className="absolute inline-flex size-full animate-ping rounded-full bg-[#22c55e] opacity-75" />
            )}
            <span className="relative inline-flex size-2 rounded-full bg-[#22c55e]" />
          </span>
          <span className="text-sm font-medium text-(--text-secondary)">
            {t.hero.available}
          </span>
        </motion.div>

        {/* Greeting */}
        <motion.p
          className="mb-3 text-lg font-medium text-(--accent) md:text-xl"
          variants={itemVariants}
        >
          {t.hero.greeting}
        </motion.p>

        {/* Name — word-by-word reveal */}
        <motion.h1
          className="mb-4 flex flex-wrap justify-center gap-x-[0.25em] text-4xl font-extrabold leading-[1.1] [perspective:800px] sm:text-5xl md:text-6xl lg:text-7xl"
          variants={nameContainer}
        >
          {nameWords.map((word) => (
            <motion.span
              key={word.text}
              className={`inline-block ${
                word.gradient ? "gradient-text" : "text-(--text-primary)"
              }`}
              variants={wordVariants}
            >
              {word.text}
            </motion.span>
          ))}
        </motion.h1>

        {/* Rotating role */}
        <motion.div
          className="mb-7 text-2xl font-bold md:text-3xl lg:text-4xl"
          variants={itemVariants}
        >
          <span className="sr-only">{t.hero.role}</span>
          <span aria-hidden>
            <RotatingRole roles={t.hero.roles} />
          </span>
        </motion.div>

        {/* Tagline */}
        <motion.p
          className="mb-9 max-w-2xl text-base leading-relaxed text-(--text-secondary) md:text-lg"
          variants={itemVariants}
        >
          {t.hero.tagline}
        </motion.p>

        {/* Stats */}
        <motion.ul
          className="mb-10 flex items-center gap-6 sm:gap-10"
          variants={itemVariants}
        >
          {stats.map((stat, i) => (
            <li key={stat.label} className="flex items-center gap-6 sm:gap-10">
              <div className="flex flex-col items-center">
                <span className="gradient-text text-2xl font-extrabold tabular-nums md:text-3xl">
                  {stat.value}
                </span>
                <span className="mt-1 text-xs font-medium uppercase tracking-wide text-(--text-muted) md:text-sm">
                  {stat.label}
                </span>
              </div>
              {i < stats.length - 1 && (
                <span aria-hidden className="h-8 w-px bg-(--border)" />
              )}
            </li>
          ))}
        </motion.ul>

        {/* CTA Buttons */}
        <motion.div
          className="flex flex-col items-center justify-center gap-4 sm:flex-row"
          variants={itemVariants}
        >
          <Magnetic>
            <motion.button
              className="flex items-center gap-2 rounded-xl px-8 py-3.5 text-base font-semibold text-white shadow-(--shadow-glow) bg-(image:--gradient-accent)"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => scrollTo("#projects")}
            >
              {t.hero.cta_work}
              <ArrowDown size={18} />
            </motion.button>
          </Magnetic>
          <Magnetic>
            <motion.button
              className="flex items-center gap-2 rounded-xl px-8 py-3.5 text-base font-semibold text-(--text-primary) glass glass-hover"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => scrollTo("#contact")}
            >
              {t.hero.cta_contact}
              <Send size={16} />
            </motion.button>
          </Magnetic>
        </motion.div>

        {/* Trusted-by social proof */}
        <motion.div
          className="mt-14 flex flex-col items-center gap-4"
          variants={itemVariants}
        >
          <span className="text-xs font-semibold uppercase tracking-[0.2em] text-(--text-muted)">
            {t.hero.trustedBy}
          </span>
          <ul className="flex flex-wrap items-center justify-center gap-x-5 gap-y-2 sm:gap-x-7">
            {BRANDS.map((brand) => (
              <li
                key={brand}
                className="text-sm font-semibold text-(--text-muted) transition-colors duration-200 hover:text-(--text-secondary) md:text-base"
              >
                {brand}
              </li>
            ))}
          </ul>
        </motion.div>
      </motion.div>

      {/* Scroll Indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
        animate={reduce ? undefined : { y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        aria-hidden
      >
        <div className="flex h-10 w-6 justify-center rounded-full border-2 pt-2 border-(--border)">
          <motion.div
            className="h-2 w-1 rounded-full bg-(--accent)"
            animate={reduce ? undefined : { y: [0, 12, 0], opacity: [1, 0, 1] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          />
        </div>
      </motion.div>
    </section>
  );
}
