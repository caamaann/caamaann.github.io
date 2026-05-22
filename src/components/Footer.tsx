"use client";

import { motion } from "framer-motion";
import { useLanguage } from "@/providers/LanguageProvider";
import { ArrowUp } from "lucide-react";

export function Footer() {
  const { t } = useLanguage();

  return (
    <footer className="py-8 px-6 border-t border-(--border)">
      <div className="container-custom flex flex-col sm:flex-row items-center justify-between gap-4">
        <p className="text-sm text-(--text-muted)">
          © {new Date().getFullYear()} Muhammad Salman Al Hafizh.{" "}
          {t.footer.rights}
        </p>

        <motion.button
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className="flex items-center gap-2 text-sm font-medium px-4 py-2 rounded-xl transition-all duration-200 text-(--text-secondary) bg-(--bg-card) border border-(--border) hover:border-(--accent) hover:text-(--accent)"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <ArrowUp size={14} />
          {t.footer.backToTop}
        </motion.button>
      </div>
    </footer>
  );
}
