import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/providers/ThemeProvider";
import { LanguageProvider } from "@/providers/LanguageProvider";
import { LenisProvider } from "@/providers/LenisProvider";
import { CursorGlow } from "@/components/ui/CursorGlow";
import { socialLinks } from "@/lib/data";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const siteUrl = "https://caamaann.github.io";
const siteName = "Muhammad Salman Al Hafizh";
const title = "Muhammad Salman Al Hafizh | Fullstack Engineer";
const description =
  "Software Engineer specializing in Frontend Web Development. Building scalable, enterprise-grade web applications with React.js and Next.js.";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: title,
    template: `%s | ${siteName}`,
  },
  description,
  applicationName: siteName,
  keywords: [
    "Fullstack Engineer",
    "Frontend Developer",
    "React",
    "Next.js",
    "TypeScript",
    "Software Engineer",
    "Muhammad Salman Al Hafizh",
  ],
  authors: [{ name: siteName, url: siteUrl }],
  creator: siteName,
  publisher: siteName,
  referrer: "strict-origin-when-cross-origin",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title,
    description:
      "Software Engineer specializing in Frontend Web Development with 5+ years of experience.",
    type: "website",
    locale: "en_US",
    url: siteUrl,
    siteName,
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Muhammad Salman Al Hafizh — Fullstack Engineer",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
    images: ["/og-image.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  manifest: "/manifest.webmanifest",
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: dark)", color: "#0a0a0f" },
    { media: "(prefers-color-scheme: light)", color: "#f8fafc" },
  ],
  colorScheme: "dark light",
};

// Content Security Policy. GitHub Pages cannot send real HTTP security
// headers, so this <meta> CSP is the strongest available fallback.
// 'unsafe-inline' is required for next-themes' blocking theme script and
// framer-motion's inline styles; api.web3forms.com is the contact backend.
const csp = [
  "default-src 'self'",
  "script-src 'self' 'unsafe-inline'",
  "style-src 'self' 'unsafe-inline'",
  "img-src 'self' data: blob: https:",
  "font-src 'self' data:",
  "connect-src 'self' https://api.web3forms.com",
  "form-action 'self' https://api.web3forms.com",
  "frame-ancestors 'none'",
  "base-uri 'self'",
  "object-src 'none'",
  "upgrade-insecure-requests",
].join("; ");

const personJsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: siteName,
  alternateName: "Salman",
  jobTitle: "Fullstack Engineer",
  description,
  url: siteUrl,
  email: `mailto:${socialLinks.email}`,
  image: `${siteUrl}/og-image.png`,
  sameAs: [socialLinks.linkedin, socialLinks.github],
  knowsAbout: [
    "React.js",
    "Next.js",
    "TypeScript",
    "JavaScript",
    "Frontend Engineering",
    "Web Development",
  ],
  worksFor: {
    "@type": "Organization",
    name: "PT Bina Rancang Wasisa",
  },
  address: {
    "@type": "PostalAddress",
    addressLocality: "Garut",
    addressCountry: "ID",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <meta httpEquiv="Content-Security-Policy" content={csp} />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(personJsonLd) }}
        />
      </head>
      <body className={`${inter.variable} antialiased`}>
        <ThemeProvider>
          <LanguageProvider>
            <LenisProvider>
              <CursorGlow />
              {children}
            </LenisProvider>
          </LanguageProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
