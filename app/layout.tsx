import type { Metadata } from "next";
import { GeistSans } from "geist/font/sans";
import { GeistMono } from "geist/font/mono";
import "./globals.css";

export const metadata: Metadata = {
  title: "Shaik Mohammad Yaseen — Full Stack Software Engineer",
  description:
    "Full Stack Software Engineer with 4+ years building enterprise Angular micro-frontends and HIPAA-compliant healthcare platforms in React and Next.js.",
  openGraph: {
    title: "Shaik Mohammad Yaseen — Full Stack Software Engineer",
    description:
      "Enterprise micro-frontends, secure healthcare platforms, and performance-obsessed UIs.",
    type: "website",
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${GeistSans.variable} ${GeistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
