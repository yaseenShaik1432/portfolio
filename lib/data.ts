export const profile = {
  name: "Shaik Mohammad Yaseen",
  title: "Full Stack Software Engineer",
  roles: [
    "I build products people actually use",
    "Micro-frontends at enterprise scale",
    "HIPAA-grade healthcare platforms",
    "Desktop apps shipped to real customers",
  ],
  location: "Kadapa, Andhra Pradesh, India",
  email: "mdyaseenshaik28@gmail.com",
  phone: "+91 8501814541",
  github: "https://github.com/yaseenShaik1432",
  // NOTE: the resume text extracts as "mohammad-yaseen" + an unreadable character + "shaik".
  // This is the most likely slug (hyphen between the two words). Change it here if it differs.
  linkedin: "https://www.linkedin.com/in/mohammad-yaseen-shaik",
  resume: "/Shaik_Mohammad_Yaseen_Resume.pdf",
  summary:
    "I'm a full stack engineer with 4+ years of experience shipping enterprise Angular micro-frontends, HIPAA-compliant healthcare platforms and my own desktop product. I care about speed, security and interfaces that feel effortless.",
};

export const stats = [
  { value: 4, suffix: "+", label: "Years building" },
  { value: 4, suffix: "", label: "Products shipped" },
  { value: 80, suffix: "%", label: "Faster build & deploy" },
  { value: 30, suffix: "%", label: "Rendering boost" },
];

export type Project = {
  slug: string;
  name: string;
  tag: string;
  category: "Product" | "Healthcare" | "Enterprise";
  description: string;
  highlights: string[];
  stack: string[];
  builtWithClaude?: boolean;
  featured?: boolean;
  links?: { label: string; href: string }[];
  image?: string;
  icon?: string;
};

export const projects: Project[] = [
  {
    slug: "zestbill",
    name: "ZestBill",
    tag: "GST billing for small businesses",
    category: "Product",
    featured: true,
    builtWithClaude: true,
    description:
      "A Windows desktop app that takes small businesses from invoice to payment without internet or subscriptions. It handles GST invoices, dues, inventory and reports, and the full product, from the app to its marketing site, was designed, built and shipped by me.",
    highlights: [
      "GST tax invoices with HSN/SAC, CGST/SGST/IGST and financial-year numbering",
      "Works fully offline with a local database, daily backups and an optional PIN lock",
      "A4 and 58/80 mm thermal printing, PDF export, UPI QR codes and one-click WhatsApp sharing",
      "Stock tracking, payments due, sales and GST reports with CSV export",
    ],
    stack: ["Windows desktop", "Offline-first", "Local database", "React + Vite + Tailwind site", "Framer Motion"],
    links: [
      { label: "Visit zestbill.in", href: "https://zestbill.in" },
      { label: "Releases", href: "https://github.com/yaseenShaik1432/zestbill-releases/releases" },
    ],
    image: "https://zestbill.in/og-image.png",
    icon: "https://www.zestbill.in/assets/zestbill-icon-96-Bka5sJJ6.png",
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

export const claudeWorkflow = [
  { n: "01", title: "Plan", text: "I describe the problem and constraints, and Claude helps me weigh architectures and edge cases before any code is written." },
  { n: "02", title: "Build", text: "Claude Code works across the repo with me: scaffolding, implementing features and keeping changes small and reviewable." },
  { n: "03", title: "Audit", text: "I use Claude for code reviews and audits of architecture, security and performance, then decide what ships." },
  { n: "04", title: "Ship", text: "Releases, rebrands and cleanup go through pull requests that I review and merge myself." },
];

export const skills: Record<string, string[]> = {
  Frontend: [
    "React.js",
    "Next.js",
    "Angular 17",
    "TypeScript",
    "Redux Toolkit",
    "React Query",
    "Tailwind CSS",
    "Framer Motion",
    "Material-UI",
    "Ant Design",
  ],
  "Backend & Architecture": ["Node.js", "Express.js", "REST APIs", "Microservices", "Micro-frontends"],
  "Data & Cloud": ["MySQL", "MongoDB", "Firebase", "AWS (S3, EC2)", "Docker", "Jenkins", "CI/CD"],
  "AI-assisted workflow": ["Claude Code", "Claude", "Code audits", "Prompt-driven prototyping"],
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
