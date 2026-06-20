import { socialLinks } from "@/lib/data";

/**
 * Canonical site URL used for metadata, OG images, robots & sitemap.
 * This is a static URL for the GitHub Pages deployment.
 */
const siteUrl = "https://caamaann.github.io";

export const siteConfig = {
  name: "Muhammad Salman Al Hafizh",
  role: "Fullstack Engineer",
  description:
    "Software Engineer specializing in Frontend Web Development. Building scalable, enterprise-grade web applications with React.js and Next.js.",
  url: siteUrl,
  email: socialLinks.email,
  links: {
    linkedin: socialLinks.linkedin,
    github: socialLinks.github,
  },
} as const;
