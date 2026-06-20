export type Locale = "en" | "id";

export const translations = {
  en: {
    nav: {
      about: "About",
      experience: "Experience",
      projects: "Projects",
      skills: "Skills",
      education: "Education",
      contact: "Contact",
    },
    hero: {
      greeting: "Hi, I'm",
      name: "Salman",
      role: "Fullstack Engineer",
      roles: [
        "Fullstack Engineer",
        "Frontend Specialist",
        "React & Next.js Expert",
        "Enterprise Web Developer",
      ],
      available: "Available for work",
      tagline:
        "Specializing in Frontend Web Development with extensive experience building scalable, enterprise-grade web applications.",
      cta_work: "View My Work",
      cta_contact: "Get In Touch",
      trustedBy: "Trusted by teams at",
      stats: {
        years: "Years Exp.",
        projects: "Projects",
        clients: "Clients",
      },
    },
    about: {
      title: "About Me",
      description:
        "Software Engineer specializing in Frontend Web Development with extensive experience building scalable, enterprise-grade web applications. Strong background in React.js and Next.js, delivering reliable systems across banking, finance, and large-scale commercial platforms.",
      stats: {
        years: "Years Experience",
        projects: "Projects Delivered",
        clients: "Clients Served",
      },
    },
    experience: {
      title: "Work Experience",
      present: "Present",
    },
    projects: {
      title: "Projects",
      subtitle: "A selection of projects I've contributed to across various industries.",
      filters: {
        all: "All",
        banking: "Banking & Finance",
        ecommerce: "E-Commerce",
        enterprise: "Enterprise",
        event: "Event & Lifestyle",
        legal: "Legal & Gov",
      },
      visit: "Visit Site",
      internal: "Internal Project",
    },
    skills: {
      title: "Skills & Technologies",
      frontend: "Frontend",
      backend: "Backend & Database",
      practices: "Engineering Practices",
    },
    education: {
      title: "Education & Certifications",
      degree: "Bachelor of Software Engineering",
      gpa: "GPA",
      certifications: "Certifications",
      viewCert: "View Certificate",
    },
    contact: {
      title: "Let's Work Together",
      subtitle:
        "Have a project in mind or want to collaborate? Feel free to reach out!",
      location: "Garut, Indonesia",
    },
    footer: {
      rights: "All rights reserved.",
      backToTop: "Back to Top",
    },
  },
  id: {
    nav: {
      about: "Tentang",
      experience: "Pengalaman",
      projects: "Proyek",
      skills: "Keahlian",
      education: "Pendidikan",
      contact: "Kontak",
    },
    hero: {
      greeting: "Hai, Saya",
      name: "Salman",
      role: "Fullstack Engineer",
      roles: [
        "Fullstack Engineer",
        "Spesialis Frontend",
        "Expert React & Next.js",
        "Developer Web Enterprise",
      ],
      available: "Tersedia untuk bekerja",
      tagline:
        "Spesialis dalam Pengembangan Web Frontend dengan pengalaman luas membangun aplikasi web skala enterprise yang skalabel.",
      cta_work: "Lihat Karya Saya",
      cta_contact: "Hubungi Saya",
      trustedBy: "Dipercaya oleh tim di",
      stats: {
        years: "Tahun Pengalaman",
        projects: "Proyek",
        clients: "Klien",
      },
    },
    about: {
      title: "Tentang Saya",
      description:
        "Software Engineer yang berspesialisasi dalam Pengembangan Web Frontend dengan pengalaman luas membangun aplikasi web skala enterprise yang skalabel. Latar belakang kuat di React.js dan Next.js, menghadirkan sistem yang andal di berbagai platform perbankan, keuangan, dan komersial skala besar.",
      stats: {
        years: "Tahun Pengalaman",
        projects: "Proyek Selesai",
        clients: "Klien Dilayani",
      },
    },
    experience: {
      title: "Pengalaman Kerja",
      present: "Sekarang",
    },
    projects: {
      title: "Proyek",
      subtitle:
        "Pilihan proyek yang telah saya kerjakan di berbagai industri.",
      filters: {
        all: "Semua",
        banking: "Perbankan & Keuangan",
        ecommerce: "E-Commerce",
        enterprise: "Enterprise",
        event: "Event & Gaya Hidup",
        legal: "Hukum & Pemerintahan",
      },
      visit: "Kunjungi Situs",
      internal: "Proyek Internal",
    },
    skills: {
      title: "Keahlian & Teknologi",
      frontend: "Frontend",
      backend: "Backend & Database",
      practices: "Praktik Engineering",
    },
    education: {
      title: "Pendidikan & Sertifikasi",
      degree: "Sarjana Teknik Perangkat Lunak",
      gpa: "IPK",
      certifications: "Sertifikasi",
      viewCert: "Lihat Sertifikat",
    },
    contact: {
      title: "Mari Bekerja Sama",
      subtitle:
        "Punya proyek atau ingin berkolaborasi? Jangan ragu untuk menghubungi!",
      location: "Garut, Indonesia",
    },
    footer: {
      rights: "Hak cipta dilindungi.",
      backToTop: "Kembali ke Atas",
    },
  },
};

export type TranslationKeys = (typeof translations)["en"];
