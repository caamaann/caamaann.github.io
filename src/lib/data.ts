export type ProjectCategory =
  | "banking"
  | "ecommerce"
  | "enterprise"
  | "event"
  | "legal";

export interface Project {
  name: string;
  client: string;
  tech: string[];
  category: ProjectCategory;
  url?: string;
  isInternal?: boolean;
  status?: "revamped" | "offline";
}

export interface Experience {
  company: string;
  location: string;
  role: string;
  startDate: string;
  endDate: string;
  bullets: string[];
  bulletsId: string[];
}

export interface Certification {
  name: string;
  issuer: string;
  year: string;
  url?: string;
}

export const experiences: Experience[] = [
  {
    company: "PT Bina Rancang Wasisa",
    location: "Yogyakarta, Indonesia",
    role: "Frontend Developer",
    startDate: "Sep 2022",
    endDate: "Present",
    bullets: [
      "Developed multiple web applications using React.js and Next.js including Ramayana, Setir Kanan, KontakAcc, and Asset Audit.",
      "Built enterprise tools: WhatsApp Omnichannel, TMS Website, Acc One, CCRP, and SSA.",
    ],
    bulletsId: [
      "Mengembangkan beberapa aplikasi web menggunakan React.js dan Next.js termasuk Ramayana, Setir Kanan, KontakAcc, dan Asset Audit.",
      "Membangun tools enterprise: WhatsApp Omnichannel, TMS Website, Acc One, CCRP, dan SSA.",
    ],
  },
  {
    company: "PT Super Bank Indonesia",
    location: "Jakarta, Indonesia",
    role: "Fullstack Engineer",
    startDate: "Apr 2025",
    endDate: "Dec 2025",
    bullets: [
      "Contributed to the design and development of OneDash, a unified internal platform replacing legacy workflows.",
      "Delivered end-to-end features across Customer360, AML Screening, CASA/LOC Account Maintenance, Ticketing, and Bill Payment modules.",
      "Implemented UI development, API integrations, validation flows, and business logic.",
      "Improved workflow efficiency and ensured compliance with banking standards.",
    ],
    bulletsId: [
      "Berkontribusi dalam desain dan pengembangan OneDash, platform internal terpadu menggantikan workflow lama.",
      "Mengirimkan fitur end-to-end di modul Customer360, AML Screening, CASA/LOC, Ticketing, dan Bill Payment.",
      "Mengimplementasikan pengembangan UI, integrasi API, alur validasi, dan logika bisnis.",
      "Meningkatkan efisiensi workflow dan memastikan kepatuhan terhadap standar perbankan.",
    ],
  },
  {
    company: "PT Bank Rakyat Indonesia (BRI)",
    location: "Jakarta, Indonesia",
    role: "Frontend Developer",
    startDate: "May 2023",
    endDate: "Dec 2025",
    bullets: [
      "Developed and maintained the Info Lelang Admin Web Application using Next.js.",
      "Optimized frontend performance and real-time auction integrations.",
      "Improved UI/UX alignment with branding standards.",
    ],
    bulletsId: [
      "Mengembangkan dan memelihara Aplikasi Web Admin Info Lelang menggunakan Next.js.",
      "Mengoptimalkan performa frontend dan integrasi lelang real-time.",
      "Meningkatkan keselarasan UI/UX dengan standar branding.",
    ],
  },
  {
    company: "HoPleisure",
    location: "Vincennes, France",
    role: "Frontend Developer",
    startDate: "Nov 2024",
    endDate: "Apr 2025",
    bullets: [
      "Built responsive booking interfaces using React.js.",
      "Developed the HoPleisure Widget (embeddable booking interface).",
      "Implemented interactive UI components and API integrations.",
      "Optimized performance and cross-browser compatibility.",
    ],
    bulletsId: [
      "Membangun antarmuka pemesanan responsif menggunakan React.js.",
      "Mengembangkan Widget HoPleisure (antarmuka pemesanan yang dapat disematkan).",
      "Mengimplementasikan komponen UI interaktif dan integrasi API.",
      "Mengoptimalkan performa dan kompatibilitas lintas browser.",
    ],
  },
  {
    company: "PT Koda",
    location: "Jakarta, Indonesia",
    role: "Senior Software Engineer",
    startDate: "Aug 2024",
    endDate: "Jan 2025",
    bullets: [
      "Developed Hukumku Web, Hukumku Admin, and Hukumku Public using React.js.",
    ],
    bulletsId: [
      "Mengembangkan Hukumku Web, Hukumku Admin, dan Hukumku Public menggunakan React.js.",
    ],
  },
  {
    company: "PT Antikode",
    location: "Tangerang, Indonesia",
    role: "Frontend Developer",
    startDate: "Mar 2022",
    endDate: "Sep 2024",
    bullets: [
      "Developed large-scale web applications using Next.js for enterprise clients including Prudential, XL, Plaza Indonesia, and WeTheFest.",
      "Built E-Commerce platforms using React.js + Shopify for Feal Skincare, Union Bakery, and Monstore.",
      "Delivered 15+ projects across e-commerce, enterprise, event, and health sectors.",
    ],
    bulletsId: [
      "Mengembangkan aplikasi web skala besar menggunakan Next.js untuk klien enterprise termasuk Prudential, XL, Plaza Indonesia, dan WeTheFest.",
      "Membangun platform E-Commerce menggunakan React.js + Shopify untuk Feal Skincare, Union Bakery, dan Monstore.",
      "Mengirimkan 15+ proyek di sektor e-commerce, enterprise, event, dan kesehatan.",
    ],
  },
  {
    company: "UOB Infinity",
    location: "Singapore",
    role: "Frontend Developer",
    startDate: "Jul 2023",
    endDate: "Feb 2024",
    bullets: [
      "Developed innovative web features in a collaborative environment.",
      "Solved complex frontend engineering challenges.",
      "Maintained high unit test coverage and code quality.",
    ],
    bulletsId: [
      "Mengembangkan fitur web inovatif dalam lingkungan kolaboratif.",
      "Menyelesaikan tantangan engineering frontend yang kompleks.",
      "Mempertahankan coverage unit test dan kualitas kode yang tinggi.",
    ],
  },
  {
    company: "Indonesia Financial Group",
    location: "Jakarta, Indonesia",
    role: "Frontend Developer",
    startDate: "Oct 2022",
    endDate: "Mar 2023",
    bullets: [
      "Engineered an Insurance Application with Case Management and Inquiry Management using Next.js.",
      "Served as PIC for code refactoring and ESLint implementation.",
    ],
    bulletsId: [
      "Mengembangkan Aplikasi Asuransi dengan Case Management dan Inquiry Management menggunakan Next.js.",
      "Menjadi PIC untuk refactoring kode dan implementasi ESLint.",
    ],
  },
  {
    company: "PT IDX Consulting",
    location: "Jakarta, Indonesia",
    role: "Software Engineer",
    startDate: "Dec 2021",
    endDate: "Jul 2022",
    bullets: [
      "Developed Payroll, Analytics Reporting, and Loan systems using Java and React.js.",
      "Acted as PIC for Payroll, Customer 360, Workflow, User Management, and Analytics modules.",
    ],
    bulletsId: [
      "Mengembangkan sistem Payroll, Analytics Reporting, dan Loan menggunakan Java dan React.js.",
      "Menjadi PIC untuk modul Payroll, Customer 360, Workflow, User Management, dan Analytics.",
    ],
  },
  {
    company: "PT Bejana Investidata Globalindo",
    location: "Bandung, Indonesia",
    role: "Frontend Developer",
    startDate: "Aug 2020",
    endDate: "Nov 2021",
    bullets: [
      "Developed SILINDA DI JABAR (Bank Indonesia) using React.js.",
      "Built ASIKK Web App using Vue.js.",
      "Developed Order Pakan, Gakeslab, and Adaro Water Solution applications.",
    ],
    bulletsId: [
      "Mengembangkan SILINDA DI JABAR (Bank Indonesia) menggunakan React.js.",
      "Membangun Aplikasi Web ASIKK menggunakan Vue.js.",
      "Mengembangkan aplikasi Order Pakan, Gakeslab, dan Adaro Water Solution.",
    ],
  },
];

export const projects: Project[] = [
  // Banking & Finance
  {
    name: "OneDash",
    client: "PT Super Bank Indonesia",
    tech: ["React.js"],
    category: "banking",
    isInternal: true,
  },
  {
    name: "Info Lelang Admin Web",
    client: "BRI",
    tech: ["Next.js"],
    category: "banking",
    isInternal: true,
  },
  {
    name: "UOB Infinity Web",
    client: "UOB Singapore",
    tech: ["React.js"],
    category: "banking",
    isInternal: true,
  },
  {
    name: "Insurance App",
    client: "Indonesia Financial Group",
    tech: ["Next.js"],
    category: "banking",
    isInternal: true,
  },
  {
    name: "SILINDA DI JABAR",
    client: "Bank Indonesia",
    tech: ["React.js"],
    category: "banking",
    url: "https://silinda.jabarprov.go.id/",
  },
  {
    name: "Payroll & Analytics",
    client: "PT IDX Consulting",
    tech: ["React.js", "Java"],
    category: "banking",
    isInternal: true,
  },

  // E-Commerce
  {
    name: "Nagarey",
    client: "PT Antikode",
    tech: ["Next.js"],
    category: "ecommerce",
    url: "https://nagarey.com/",
  },
  {
    name: "Karafuru",
    client: "PT Antikode",
    tech: ["Next.js"],
    category: "ecommerce",
    url: "https://karafuru.io/",
  },
  {
    name: "E-Shop Plaza Indonesia",
    client: "PT Antikode",
    tech: ["Next.js"],
    category: "ecommerce",
    url: "https://plazaindonesiasignature.com/",
  },
  {
    name: "Feal Skincare",
    client: "PT Antikode",
    tech: ["React.js", "Shopify"],
    category: "ecommerce",
    url: "https://www.fealskin.co/",
  },
  {
    name: "Union Bakery",
    client: "PT Antikode",
    tech: ["React.js", "Shopify"],
    category: "ecommerce",
    url: "https://union-bakery.com/",
  },
  {
    name: "Monstore",
    client: "PT Antikode",
    tech: ["React.js", "Shopify"],
    category: "ecommerce",
    url: "https://monsto.re/",
  },
  {
    name: "Setir Kanan",
    client: "PT Bina Rancang Wasisa",
    tech: ["React.js"],
    category: "ecommerce",
    url: "https://setirkanan.co.id/",
  },
  {
    name: "Ramayana",
    client: "PT Bina Rancang Wasisa",
    tech: ["React.js", "Next.js"],
    category: "ecommerce",
    isInternal: true,
  },

  // Enterprise
  {
    name: "XL.co.id",
    client: "PT Antikode",
    tech: ["Next.js"],
    category: "enterprise",
    url: "https://www.xl.co.id/",
    status: "revamped",
  },
  {
    name: "XL Prioritas",
    client: "PT Antikode",
    tech: ["Next.js"],
    category: "enterprise",
    url: "https://prioritas.xl.co.id/",
    status: "revamped",
  },
  {
    name: "Prudential",
    client: "PT Antikode",
    tech: ["Next.js"],
    category: "enterprise",
    url: "https://www.prudential.co.id/id/",
    status: "revamped",
  },
  {
    name: "Worksite Tokiomarine",
    client: "PT Antikode",
    tech: ["Next.js"],
    category: "enterprise",
    url: "https://bebascemas.tokiomarine.co.id/",
    status: "revamped",
  },
  {
    name: "Acc One",
    client: "PT Bina Rancang Wasisa",
    tech: ["Next.js"],
    category: "enterprise",
    url: "https://www.acc.co.id/homepage",
  },
  {
    name: "KontakAcc",
    client: "PT Bina Rancang Wasisa",
    tech: ["Next.js"],
    category: "enterprise",
    isInternal: true,
  },
  {
    name: "Asset Audit",
    client: "PT Bina Rancang Wasisa",
    tech: ["Next.js"],
    category: "enterprise",
    isInternal: true,
  },
  {
    name: "CCRP",
    client: "PT Bina Rancang Wasisa",
    tech: ["Next.js"],
    category: "enterprise",
    isInternal: true,
  },
  {
    name: "SSA",
    client: "PT Bina Rancang Wasisa",
    tech: ["Next.js"],
    category: "enterprise",
    isInternal: true,
  },
  {
    name: "TMS Website",
    client: "PT Bina Rancang Wasisa",
    tech: ["Next.js"],
    category: "enterprise",
    isInternal: true,
  },
  {
    name: "WhatsApp Omnichannel",
    client: "PT Bina Rancang Wasisa",
    tech: ["Next.js"],
    category: "enterprise",
    isInternal: true,
  },
  {
    name: "ASIKK Web App",
    client: "PT Bejana Investidata",
    tech: ["Vue.js"],
    category: "enterprise",
    url: "https://asikk.lan.go.id/login",
  },
  {
    name: "Order Pakan",
    client: "PT Bejana Investidata",
    tech: ["React.js"],
    category: "enterprise",
    isInternal: true,
  },
  {
    name: "Gakeslab",
    client: "PT Bejana Investidata",
    tech: ["React.js"],
    category: "enterprise",
    url: "https://gakeslabindonesia.id/",
  },
  {
    name: "Adaro Water Solution",
    client: "PT Bejana Investidata",
    tech: ["React.js"],
    category: "enterprise",
    isInternal: true,
  },

  // Event & Lifestyle
  {
    name: "WeTheFest",
    client: "PT Antikode",
    tech: ["Next.js"],
    category: "event",
    url: "https://wethefest.com/",
  },
  {
    name: "DWP 2023",
    client: "PT Antikode",
    tech: ["Next.js"],
    category: "event",
    url: "https://dwpfest.com/",
  },
  {
    name: "HoPleisure",
    client: "HoPleisure (France)",
    tech: ["React.js"],
    category: "event",
    url: "https://app.hopleisure.com",
  },
  {
    name: "Make A Wish",
    client: "PT Antikode",
    tech: ["Next.js"],
    category: "event",
    url: "https://makeawish.or.id/",
  },
  {
    name: "Klub Disney",
    client: "PT Antikode",
    tech: ["Next.js"],
    category: "event",
    status: "offline",
  },
  {
    name: "Dreamville",
    client: "PT Antikode",
    tech: ["Next.js"],
    category: "event",
    status: "offline",
  },

  // Legal & Gov & Health
  {
    name: "Hukumku",
    client: "PT Koda",
    tech: ["React.js"],
    category: "legal",
    url: "https://www.hukumku.id/",
  },
  {
    name: "Peruri",
    client: "PT Antikode",
    tech: ["Next.js"],
    category: "legal",
    url: "https://www.peruri.co.id/",
  },
  {
    name: "Amantara",
    client: "PT Antikode",
    tech: ["Next.js"],
    category: "legal",
    url: "https://www.amantara-asg.com/",
  },
  {
    name: "Heartology",
    client: "PT Antikode",
    tech: ["Next.js"],
    category: "legal",
    url: "https://heartology.id/",
  },
];

export const skillCategories = [
  {
    key: "frontend" as const,
    skills: [
      "React.js",
      "Next.js",
      "Remix",
      "Gatsby.js",
      "Vue.js",
      "Nuxt.js",
      "JavaScript",
      "TypeScript",
      "HTML5",
      "CSS3",
    ],
  },
  {
    key: "backend" as const,
    skills: ["Java", "PHP", "Go", "MySQL"],
  },
  {
    key: "practices" as const,
    skills: [
      "Agile",
      "Scrum",
      "OOP",
      "Git",
      "Code Refactoring",
      "Unit Testing",
    ],
  },
];

export const certifications: Certification[] = [
  {
    name: "Belajar Dasar Pemrograman Web",
    issuer: "Dicoding",
    year: "2020",
    url: "https://www.dicoding.com/certificates/RVZK1L47EPD5",
  },
  {
    name: "Belajar Membuat Front-End Web untuk Pemula",
    issuer: "Dicoding",
    year: "2021",
    url: "https://www.dicoding.com/certificates/72ZDE72D9PYW",
  },
  { name: "JavaScript (Basic)", issuer: "HackerRank", year: "2021" },
  { name: "React (Basic)", issuer: "HackerRank", year: "2021" },
  {
    name: "Belajar Dasar Pemrograman JavaScript",
    issuer: "Dicoding",
    year: "2024",
    url: "https://www.dicoding.com/certificates/98XW556E0PM3",
  },
  {
    name: "Belajar Membuat Aplikasi Back-End untuk Pemula",
    issuer: "Dicoding",
    year: "2024",
    url: "https://www.dicoding.com/certificates/NVP7Q1ROOZR0",
  },
  {
    name: "Belajar Membuat Aplikasi Web dengan React",
    issuer: "Dicoding",
    year: "2024",
    url: "https://www.dicoding.com/certificates/81P24GMJNZOY",
  },
  {
    name: "Belajar Fundamental Aplikasi Web dengan React",
    issuer: "Dicoding",
    year: "2025",
    url: "https://www.dicoding.com/certificates/6RPNRDV94X2M",
  },
];

export const socialLinks = {
  email: "salman.hafizh1305@gmail.com",
  phone: "+6285860488756",
  linkedin: "https://www.linkedin.com/in/caamaann/",
  github: "https://github.com/caamaann",
};
