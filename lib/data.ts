export const profile = {
  name: "Shaik Mohammad Yaseen",
  title: "Full Stack Software Engineer",
  location: "Kadapa, Andhra Pradesh, India",
  email: "mdyaseenshaik28@gmail.com",
  phone: "+91 8501814541",
  github: "https://github.com/yaseenShaik1432",
  // NOTE: the resume text extracts as "mohammad-yaseen" + an unreadable character + "shaik".
  // This is the most likely slug (hyphen between the two words). Change it here if it differs.
  linkedin: "https://www.linkedin.com/in/mohammad-yaseen-shaik",
  resume: "/Shaik_Mohammad_Yaseen_Resume.pdf",
  summary:
    "Results-driven Full Stack Software Engineer with 4+ years of experience architecting and delivering high-performance enterprise applications and secure healthcare platforms. Proficient in React.js, Next.js, Angular 17, Node.js and micro-frontend architectures.",
};

export const stats = [
  { value: 4, suffix: "+", label: "Years of experience" },
  { value: 80, suffix: "%", label: "Faster build and deployment" },
  { value: 30, suffix: "%", label: "Better rendering performance" },
  { value: 100, suffix: "%", label: "HIPAA audit pass rate" },
];

export type Project = {
  slug: string;
  name: string;
  tag: string;
  category: "Product" | "Healthcare" | "Enterprise";
  description: string;
  highlights: string[];
  stack: string[];
  featured?: boolean;
  links?: { label: string; href: string }[];
};

export const projects: Project[] = [
  {
    slug: "zestbill",
    name: "ZestBill",
    tag: "GST billing for small businesses",
    category: "Product",
    featured: true,
    description:
      "A Windows desktop app for small businesses that handles GST invoices, payment tracking, stock and reports. It works offline, with a local database on the user's PC.",
    highlights: [
      "GST tax invoices with HSN/SAC, CGST + SGST or IGST, and financial-year numbering",
      "Works offline, with daily backups and an optional PIN lock",
      "A4 and 58/80 mm thermal printing, PDF export, UPI QR codes and WhatsApp sharing",
      "Stock tracking, payments due, and sales and GST reports with CSV export",
    ],
    stack: ["Windows desktop", "Offline-first", "Local database"],
    links: [
      { label: "Visit zestbill.in", href: "https://zestbill.in" },
      { label: "Releases", href: "https://github.com/yaseenShaik1432/zestbill-releases/releases" },
    ],
  },
  {
    slug: "tracare",
    name: "TraCare",
    tag: "Patient & staff tracking platform",
    category: "Healthcare",
    description:
      "A full-scale tracking system architected and built end-to-end in a 4-month deadline: real-time patient status, automated staff scheduling and bulk CSV/Excel uploads.",
    highlights: [
      "100% compliance with KSA healthcare data and privacy regulations",
      "Interactive dashboards sped up admin decisions by 35%",
    ],
    stack: ["React", "Dashboards", "CSV / Excel import", "Encryption"],
  },
  {
    slug: "h2h-digitalrx",
    name: "H2H DigitalRx",
    tag: "E-prescribing web application",
    category: "Healthcare",
    description:
      "Frontend architecture built from scratch with React.js and Material-UI, giving physicians and medical staff a secure prescription workflow.",
    highlights: [
      "HIPAA-grade privacy and encryption protecting PHI",
      "30% faster rendering through Redux + React Query state design",
    ],
    stack: ["React.js", "Material-UI", "Redux", "React Query", "Formik", "Recharts"],
  },
  {
    slug: "ortele-health",
    name: "Ortele Health",
    tag: "Digital telemedicine platform",
    category: "Healthcare",
    description:
      "Patient–provider communication and virtual consultation interfaces on React.js and WebRTC, with secure digital health records.",
    highlights: [
      "Clinical data visualization forms improved workflow efficiency by 25%",
      "Health records informed decisions in 90% of user interactions",
    ],
    stack: ["React.js", "WebRTC", "Data visualization"],
  },
  {
    slug: "angular-microfrontends",
    name: "Enterprise Micro-frontends",
    tag: "Angular 17 design system & modules",
    category: "Enterprise",
    description:
      "Scalable micro-frontend UI modules for mission-critical client applications at Accenture, backed by a reusable design system and optimized build configuration.",
    highlights: [
      "Build and deployment time cut by 80%",
      "Frontend best practices set with principal architects",
    ],
    stack: ["Angular 17", "Micro-frontends", "Design system", "CI/CD"],
  },
];

export const skills: Record<string, string[]> = {
  Frontend: [
    "React.js",
    "Next.js",
    "Angular 17",
    "TypeScript",
    "JavaScript (ES6+)",
    "Redux Toolkit",
    "React Query",
    "HTML5",
    "CSS3",
    "Tailwind CSS",
    "Material-UI",
    "Ant Design",
    "Bootstrap",
  ],
  "Backend and architecture": ["Node.js", "Express.js", "RESTful APIs", "Microservices", "Micro-frontend architecture"],
  "Databases and cloud": ["MySQL", "MongoDB", "Firebase", "AWS (S3, EC2)", "Docker", "Jenkins", "Git/GitHub", "CI/CD pipelines"],
  "Core practices": ["HIPAA and regulatory compliance", "Web performance optimization", "System architecture", "Agile/Scrum"],
};

export const journey = [
  {
    role: "Custom Software Engineering Analyst",
    company: "Accenture",
    period: "2025 — Now",
    note: "Angular 17 micro-frontends for mission-critical client apps; design systems; 80% faster builds.",
  },
  {
    role: "Software Engineer",
    company: "Youngsoft India",
    period: "2022 — 2025",
    note: "React & Next.js healthcare platforms; HIPAA-compliant telehealth; 100% audit pass rate.",
  },
  {
    role: "Software Engineer Intern",
    company: "Youngsoft India",
    period: "2022",
    note: "Led 4 interns on Liferay portlets; delivered 2 months early.",
  },
];
