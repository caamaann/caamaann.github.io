import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/providers/ThemeProvider";
import { LanguageProvider } from "@/providers/LanguageProvider";
import { LenisProvider } from "@/providers/LenisProvider";
import { CursorGlow } from "@/components/ui/CursorGlow";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Muhammad Salman Al Hafizh | Fullstack Engineer",
  description:
    "Software Engineer specializing in Frontend Web Development. Building scalable, enterprise-grade web applications with React.js and Next.js.",
  keywords: [
    "Fullstack Engineer",
    "Frontend Developer",
    "React",
    "Next.js",
    "TypeScript",
    "Software Engineer",
    "Muhammad Salman Al Hafizh",
  ],
  authors: [{ name: "Muhammad Salman Al Hafizh" }],
  openGraph: {
    title: "Muhammad Salman Al Hafizh | Fullstack Engineer",
    description:
      "Software Engineer specializing in Frontend Web Development with 5+ years of experience.",
    type: "website",
    locale: "en_US",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
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
