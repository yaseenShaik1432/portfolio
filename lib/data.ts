export const profile = {
  name: "Shaik Mohammad Yaseen",
  title: "Full Stack Software Engineer",
  roles: [
    "Micro-frontend Architect",
    "Healthcare Platform Engineer",
    "React & Next.js Specialist",
    "Performance Optimizer",
  ],
  location: "Kadapa, Andhra Pradesh, India",
  email: "mdyaseenshaik28@gmail.com",
  phone: "+91 8501814541",
  github: "https://github.com/yaseenShaik1432",
  linkedin: "https://linkedin.com/in/mohammad-yaseenshaik",
  summary:
    "Results-driven Full Stack Software Engineer with 4+ years of experience architecting and delivering high-performance enterprise applications and secure healthcare platforms. Proficient in React.js, Next.js, Angular 17, Node.js and micro-frontend architectures, with a track record of cutting build times, boosting performance and passing every compliance audit.",
};

export const stats = [
  { value: 4, suffix: "+", label: "Years of experience" },
  { value: 80, suffix: "%", label: "Faster build & deploy" },
  { value: 30, suffix: "%", label: "Performance boost" },
  { value: 100, suffix: "%", label: "HIPAA audit pass rate" },
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
    "Tailwind CSS",
    "Material-UI",
    "Ant Design",
    "Bootstrap",
    "HTML5 / CSS3",
  ],
  "Backend & Architecture": [
    "Node.js",
    "Express.js",
    "RESTful APIs",
    "Microservices",
    "Micro-frontends",
    "System Architecture",
  ],
  "Databases & Cloud": [
    "MySQL",
    "MongoDB",
    "Firebase",
    "AWS (S3, EC2)",
    "Docker",
    "Jenkins",
    "Git / GitHub",
    "CI/CD Pipelines",
  ],
  "Core Practices": [
    "HIPAA & Compliance",
    "Web Performance",
    "Agile / Scrum",
    "WebRTC",
    "Formik",
    "Recharts",
  ],
};

export const experience = [
  {
    role: "Custom Software Engineering Analyst",
    company: "Accenture",
    period: "Jan 2025 – Present",
    location: "Hyderabad, India",
    points: [
      "Architect and engineer scalable, enterprise-grade micro-frontend UI modules with Angular 17 for mission-critical client applications.",
      "Designed reusable design systems and optimized build configurations, reducing build and deployment time by 80%.",
      "Partner with principal architects and cross-functional teams to set frontend best practices and streamline continuous delivery pipelines.",
    ],
  },
  {
    role: "Software Engineer",
    company: "Youngsoft India",
    period: "Jul 2022 – Jan 2025",
    location: "Hyderabad, India",
    points: [
      "Engineered scalable healthcare applications with React.js and Next.js, driving a 30% boost in rendering performance.",
      "Optimized API integration layers and async data-fetching hooks, cutting REST API response times by 30%.",
      "Integrated Redux Toolkit, React Query, Formik and Recharts, lifting user productivity by 25%.",
      "Enforced end-to-end data security and HIPAA protocols across telehealth modules, achieving a 100% audit pass rate.",
      "Delivered 100% of features on time across high-priority enterprise projects.",
    ],
  },
  {
    role: "Software Engineer Intern",
    company: "Youngsoft India",
    period: "Feb 2022 – Jun 2022",
    location: "Hyderabad, India",
    points: [
      "Led a team of 4 interns building modular enterprise portlets with Liferay and JSP.",
      "Completed the assigned internal platform project 2 months ahead of schedule.",
    ],
  },
];

export const projects = [
  {
    name: "TraCare",
    tag: "Patient & Staff Tracking Platform",
    category: "Healthcare Solution",
    description:
      "A full-scale tracking system architected and built end-to-end in a 4-month deadline, with real-time patient status, automated staff scheduling and bulk CSV/Excel uploads.",
    highlights: [
      "100% compliance with KSA healthcare data and privacy regulations",
      "Dashboards that sped up admin decision-making by 35%",
    ],
    stack: ["React", "Dashboards", "CSV/Excel import", "Encryption"],
  },
  {
    name: "H2H DigitalRx",
    tag: "E-Prescribing Web Application",
    category: "Enterprise Telehealth",
    description:
      "Frontend architecture built from scratch with React.js and Material-UI, enabling a secure prescription workflow for physicians and medical staff.",
    highlights: [
      "HIPAA-grade privacy and encryption protecting PHI",
      "30% faster rendering via Redux + React Query state design",
    ],
    stack: ["React.js", "Material-UI", "Redux", "React Query", "Formik", "Recharts"],
  },
  {
    name: "Ortele Health",
    tag: "Digital Telemedicine Platform",
    category: "Virtual Care Solution",
    description:
      "Patient–provider communication modules and virtual consultation interfaces built on React.js and WebRTC, with secure digital health records.",
    highlights: [
      "Clinical data visualization forms improved workflow efficiency by 25%",
      "Health records informed decisions in 90% of user interactions",
    ],
    stack: ["React.js", "WebRTC", "Data visualization"],
  },
];

export const education = {
  degree: "B.Tech in Computer Science & Engineering",
  school: "RGUKT RK Valley, AP",
  detail: "Graduated 2022 · CGPA 8.4 / 10",
  cert: "Industry Ready Certification in Full Stack Development (NxtWave)",
  languages: "English (Proficient) · Hindi (Native) · Telugu (Native)",
};
