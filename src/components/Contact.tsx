"use client";

import { motion } from "framer-motion";
import { useLanguage } from "@/providers/LanguageProvider";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { socialLinks } from "@/lib/data";
import { Mail, Phone, MapPin } from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { ContactForm } from "@/components/ContactForm";

const contactItems = [
  {
    icon: Mail,
    label: socialLinks.email,
    href: `mailto:${socialLinks.email}`,
  },
  {
    icon: Phone,
    label: socialLinks.phone,
    href: `tel:${socialLinks.phone}`,
  },
];

const socialItems = [
  {
    icon: FaLinkedin,
    label: "LinkedIn",
    href: socialLinks.linkedin,
  },
  {
    icon: FaGithub,
    label: "GitHub",
    href: socialLinks.github,
  },
];

export function Contact() {
  const { t } = useLanguage();

  return (
    <section id="contact" className="section-padding relative">
      <div className="absolute inset-0 dot-grid opacity-20" />
      <div className="container-custom relative z-10">
        <SectionHeading title={t.contact.title} subtitle={t.contact.subtitle} />

        <div className="max-w-2xl mx-auto">
          <ScrollReveal>
            <div className="glass rounded-2xl p-8 md:p-10 text-center">
              {/* Contact Info */}
              <div className="space-y-4 mb-8">
                {contactItems.map((item) => (
                  <motion.a
                    key={item.label}
                    href={item.href}
                    className="flex items-center justify-center gap-3 py-3 px-5 rounded-xl transition-all duration-200 mx-auto max-w-md text-(--text-primary) bg-(--bg-card-hover) border border-(--border) hover:border-(--accent) hover:shadow-[0_0_15px_var(--accent-glow)]"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <item.icon size={18} className="text-(--accent)" />
                    <span className="text-sm md:text-base font-medium">
                      {item.label}
                    </span>
                  </motion.a>
                ))}

                {/* Location */}
                <div className="flex items-center justify-center gap-2 py-2 text-sm text-(--text-secondary)">
                  <MapPin size={16} className="text-(--accent)" />
                  {t.contact.location}
                </div>
              </div>

              <div className="h-px w-20 mx-auto mb-8 bg-(--border)" />

              {/* Social Links */}
              <div className="flex items-center justify-center gap-4">
                {socialItems.map((item) => (
                  <motion.a
                    key={item.label}
                    href={item.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={item.label}
                    className="flex items-center gap-2 px-6 py-3 rounded-xl text-sm font-medium transition-all duration-200 text-(--text-primary) bg-(--bg-card-hover) border border-(--border) hover:border-(--accent) hover:shadow-[0_0_15px_var(--accent-glow)]"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <item.icon size={18} />
                    {item.label}
                  </motion.a>
                ))}
              </div>

              {/* Divider + Contact Form */}
              <div className="h-px w-20 mx-auto my-8 bg-(--border)" />
              <ContactForm />
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
