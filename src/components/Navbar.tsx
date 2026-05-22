"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useTheme } from "next-themes";
import { useLanguage } from "@/providers/LanguageProvider";
import { Moon, Sun, Menu, X, Globe } from "lucide-react";

type NavKey =
  | "about"
  | "experience"
  | "projects"
  | "skills"
  | "education"
  | "contact";

const navLinks: { key: NavKey; href: string }[] = [
  { key: "about", href: "#about" },
  { key: "experience", href: "#experience" },
  { key: "projects", href: "#projects" },
  { key: "skills", href: "#skills" },
  { key: "education", href: "#education" },
  { key: "contact", href: "#contact" },
];

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("");
  const { theme, setTheme } = useTheme();
  const { locale, t, toggleLocale } = useLanguage();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);

      const sections = navLinks.map((link) =>
        document.querySelector(link.href),
      );
      const scrollPos = window.scrollY + 100;

      for (let i = sections.length - 1; i >= 0; i--) {
        const section = sections[i];
        if (section && (section as HTMLElement).offsetTop <= scrollPos) {
          setActiveSection(navLinks[i].href);
          break;
        }
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = (href: string) => {
    setIsMobileOpen(false);
    const el = document.querySelector(href);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <>
      <motion.nav
        className="fixed top-0 left-0 right-0 z-50 transition-all duration-300"
        style={{
          background: isScrolled ? "var(--bg-navbar)" : "transparent",
          backdropFilter: isScrolled ? "blur(16px)" : "none",
          borderBottom: isScrolled
            ? "1px solid var(--border)"
            : "1px solid transparent",
        }}
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
      >
        <div className="container-custom flex items-center justify-between h-16 md:h-20 px-4 md:px-6">
          {/* Logo */}
          <motion.a
            href="#"
            className="text-xl font-bold relative z-10 text-(--text-primary)"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={(e) => {
              e.preventDefault();
              window.scrollTo({ top: 0, behavior: "smooth" });
            }}
          >
            <span className="gradient-text">{"<Salman />"}</span>
          </motion.a>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => (
              <button
                key={link.key}
                onClick={() => handleNavClick(link.href)}
                className="relative px-4 py-2 text-sm font-medium transition-colors duration-200 rounded-lg"
                style={{
                  color:
                    activeSection === link.href
                      ? "var(--accent)"
                      : "var(--text-secondary)",
                }}
              >
                {t.nav[link.key]}
                {activeSection === link.href && (
                  <motion.div
                    className="absolute bottom-0 left-1/2 -translate-x-1/2 h-0.5 w-6 rounded-full bg-(--accent)"
                    layoutId="activeSection"
                    transition={{ type: "spring", stiffness: 380, damping: 30 }}
                  />
                )}
              </button>
            ))}

            <div className="w-px h-6 mx-2 bg-(--border)" />

            {/* Language Toggle */}
            <button
              onClick={toggleLocale}
              className="flex items-center gap-1.5 px-3 py-2 rounded-lg text-sm font-medium transition-all duration-200 hover:scale-105 text-(--text-secondary) bg-(--bg-card) border border-(--border)"
              title={
                locale === "en" ? "Switch to Indonesian" : "Switch to English"
              }
            >
              <Globe size={14} />
              {locale.toUpperCase()}
            </button>

            {/* Theme Toggle */}
            {mounted && (
              <motion.button
                onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
                className="p-2.5 rounded-lg transition-all duration-200 text-(--text-secondary) bg-(--bg-card) border border-(--border)"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                title={theme === "dark" ? "Switch to Light" : "Switch to Dark"}
              >
                <AnimatePresence mode="wait">
                  {theme === "dark" ? (
                    <motion.div
                      key="sun"
                      initial={{ rotate: -90, opacity: 0 }}
                      animate={{ rotate: 0, opacity: 1 }}
                      exit={{ rotate: 90, opacity: 0 }}
                      transition={{ duration: 0.2 }}
                    >
                      <Sun size={16} />
                    </motion.div>
                  ) : (
                    <motion.div
                      key="moon"
                      initial={{ rotate: 90, opacity: 0 }}
                      animate={{ rotate: 0, opacity: 1 }}
                      exit={{ rotate: -90, opacity: 0 }}
                      transition={{ duration: 0.2 }}
                    >
                      <Moon size={16} />
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.button>
            )}
          </div>

          {/* Mobile Menu Button */}
          <div className="flex md:hidden items-center gap-2">
            <button
              onClick={toggleLocale}
              className="flex items-center gap-1 px-2.5 py-1.5 rounded-lg text-xs font-medium text-(--text-secondary) bg-(--bg-card) border border-(--border)"
            >
              <Globe size={12} />
              {locale.toUpperCase()}
            </button>

            {mounted && (
              <button
                onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
                className="p-2 rounded-lg text-(--text-secondary) bg-(--bg-card) border border-(--border)"
              >
                {theme === "dark" ? <Sun size={14} /> : <Moon size={14} />}
              </button>
            )}

            <button
              onClick={() => setIsMobileOpen(!isMobileOpen)}
              className="p-2 rounded-lg relative z-10 text-(--text-primary)"
            >
              {isMobileOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMobileOpen && (
          <motion.div
            className="fixed inset-0 z-40 md:hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <div
              className="absolute inset-0 bg-(--bg-primary) opacity-95"
              onClick={() => setIsMobileOpen(false)}
            />
            <motion.div
              className="absolute inset-x-0 top-16 p-6 flex flex-col gap-2"
              initial={{ y: -20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: -20, opacity: 0 }}
              transition={{ duration: 0.2 }}
            >
              {navLinks.map((link, i) => (
                <motion.button
                  key={link.key}
                  onClick={() => handleNavClick(link.href)}
                  className="text-left px-4 py-3 text-lg font-medium rounded-xl transition-colors"
                  style={{
                    color:
                      activeSection === link.href
                        ? "var(--accent)"
                        : "var(--text-primary)",
                    background:
                      activeSection === link.href
                        ? "var(--bg-card)"
                        : "transparent",
                  }}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.05 }}
                >
                  {t.nav[link.key]}
                </motion.button>
              ))}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
