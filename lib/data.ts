export const profile = {
  name: "Shaik Mohammad Yaseen",
  title: "Full Stack Software Engineer",
  location: "Hyderabad, Telangana, India",
  email: "mdyaseenshaik28@gmail.com",
  phone: "+91 8501814541",
  github: "https://github.com/yaseenShaik1432",
  linkedin: "https://www.linkedin.com/in/mohammad-yaseen-shaik",
  resume: "/Shaik_Mohammad_Yaseen_Resume.pdf",
  summary:
    "Full Stack Software Engineer with 5 years of experience building enterprise and healthcare applications. Strong experience with React.js, Next.js, JavaScript, TypeScript, Node.js and REST APIs, with hands-on work in state management, performance optimization, secure healthcare workflows and CI/CD. Experienced in building reusable UI components, integrating backend services and delivering production features in Agile teams.",
};

export const stats = [
  { value: 5, suffix: "", label: "Years of experience" },
  { value: 4, suffix: "", label: "Projects featured" },
  { value: 2, suffix: "", label: "Companies worked at" },
];

export type Project = {
  slug: string;
  name: string;
  kind: string;
  tag: string;
  description: string;
  work: string[];
  stack: string[];
  featured?: boolean;
  links?: { label: string; href: string }[];
};

export const projects: Project[] = [
  {
    slug: "zestbill",
    name: "ZestBill",
    kind: "Personal product",
    tag: "GST billing for small businesses",
    featured: true,
    description:
      "A Windows desktop app for small businesses that handles GST invoices, payment tracking, stock and reports. It works offline, with a local database on the user's PC.",
    work: [
      "GST tax invoices with HSN/SAC, CGST + SGST or IGST, and financial-year numbering",
      "Works offline, with daily backups and an optional PIN lock",
      "A4 and 58/80 mm thermal printing, PDF export, UPI QR codes and WhatsApp sharing",
      "Stock tracking, payments due, and sales and GST reports with CSV export",
    ],
    stack: ["Windows desktop", "Offline-first", "Local database"],
    links: [
      { label: "Visit zestbill.in", href: "https://zestbill.in" },
      {
        label: "Releases",
        href: "https://github.com/yaseenShaik1432/zestbill-releases/releases",
      },
    ],
  },
  {
    slug: "tracare",
    name: "TraCare",
    kind: "Client project",
    tag: "Health information system for clinics",
    description:
      "A cloud-based health information system for clinics and polyclinics, covering patient management from registration through treatment, including e-prescriptions, insurance claims and Saudi e-invoicing.",
    work: [
      "Patient status tracking and staff scheduling",
      "Bulk CSV/Excel data upload",
      "Dashboards with interactive metrics for administrators",
      "Data validation and secure handling for KSA healthcare requirements",
    ],
    stack: ["React", "Dashboards", "CSV / Excel import"],
    links: [
      { label: "mytracare.com", href: "https://mytracare.com/index.html" },
    ],
  },
  {
    slug: "h2h-digitalrx",
    name: "H2H DigitalRx",
    kind: "Youngsoft India",
    tag: "E-prescribing platform",
    description:
      "A cloud-based, Surescripts-certified e-prescribing platform from H2H Solutions for prescribers and practices, with a stand-alone login for prescribers who don't use an EMR.",
    work: [
      "Frontend architecture with React.js and Material UI for physician prescription workflows",
      "Application and server state with Redux Toolkit and React Query",
      "Prescription form validation with Formik and medication analytics with Recharts",
    ],
    stack: [
      "React.js",
      "Material UI",
      "Redux Toolkit",
      "React Query",
      "Formik",
      "Recharts",
    ],
    links: [
      {
        label: "info.h2hdigitalrx.com",
        href: "https://info.h2hdigitalrx.com/",
      },
    ],
  },
  {
    slug: "ortele-health",
    name: "Ortele Health",
    kind: "Youngsoft India",
    tag: "Digital telemedicine platform",
    description:
      "A telemedicine company that connects patients with board-certified providers from their own device, with services for health plans, provider organizations and employers.",
    work: [
      "Patient-provider communication and virtual consultation interfaces with React.js and WebRTC",
      "Clinical data visualization forms",
      "Secure digital health record features for physician workflows",
    ],
    stack: ["React.js", "WebRTC", "Data visualization"],
    links: [{ label: "ortele.com", href: "https://www.ortele.com/" }],
  },
];

export const skills: Record<string, string[]> = {
  Frontend: [
    "React.js",
    "Next.js",
    "JavaScript (ES6+)",
    "TypeScript",
    "Redux Toolkit",
    "React Query",
    "HTML5",
    "CSS3",
    "Tailwind CSS",
    "Material UI",
    "Ant Design",
  ],
  Backend: ["Node.js", "Express.js", "RESTful APIs"],
  "Databases and cloud": ["MySQL", "MongoDB", "Firebase", "AWS (S3, EC2)"],
  "DevOps and tools": ["Docker", "Jenkins", "Git", "GitHub", "CI/CD"],
  Practices: [
    "Web performance optimization",
    "Secure healthcare applications",
    "Agile/Scrum",
  ],
};

export const journey = [
  {
    role: "Custom Software Engineering Analyst",
    company: "Accenture",
    period: "Jan 2025 – Present",
    note: "Enterprise frontend modules and reusable UI solutions for mission-critical client applications; design systems and build configuration improvements.",
  },
  {
    role: "Software Engineer",
    company: "Youngsoft India",
    period: "Jul 2022 – Jan 2025",
    note: "Healthcare applications in React.js and Next.js, with secure workflows and HIPAA-related privacy and security requirements across telehealth modules.",
  },
  {
    role: "Software Engineer Intern",
    company: "Youngsoft India",
    period: "Feb 2022 – Jun 2022",
    note: "Led a team of 4 interns building modular enterprise portlets with Liferay and JSP.",
  },
];
