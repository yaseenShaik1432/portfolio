import type { Metadata, Viewport } from "next";
import { GeistSans } from "geist/font/sans";
import { GeistMono } from "geist/font/mono";
import "@fontsource-variable/source-serif-4";
import "./globals.css";

export const metadata: Metadata = {
  title: "Shaik Mohammad Yaseen — Full Stack Software Engineer",
  description:
    "Full stack software engineer with 5 years of experience in React, Next.js, TypeScript and Node.js, building enterprise and healthcare applications.",
  openGraph: {
    title: "Shaik Mohammad Yaseen — Full Stack Software Engineer",
    description:
      "Full stack engineer: enterprise applications and healthcare platforms.",
    type: "website",
  },
};

export const viewport: Viewport = {
  themeColor: "#f5f6f8",
};

const personJsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Shaik Mohammad Yaseen",
  jobTitle: "Full Stack Software Engineer",
  worksFor: { "@type": "Organization", name: "Accenture" },
  address: {
    "@type": "PostalAddress",
    addressLocality: "Hyderabad",
    addressRegion: "Telangana",
    addressCountry: "IN",
  },
  email: "mailto:mdyaseenshaik28@gmail.com",
  sameAs: [
    "https://www.linkedin.com/in/mohammad-yaseen-shaik",
    "https://github.com/yaseenShaik1432",
  ],
  knowsAbout: ["React.js", "Next.js", "TypeScript", "Node.js", "Healthcare software"],
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${GeistSans.variable} ${GeistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        {children}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(personJsonLd) }}
        />
      </body>
    </html>
  );
}
