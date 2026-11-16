import type { Metadata } from "next";
import { GeistSans } from "geist/font/sans";
import { GeistMono } from "geist/font/mono";
import "@fontsource-variable/source-serif-4";
import "./globals.css";

export const metadata: Metadata = {
  title: "Shaik Mohammad Yaseen — Full Stack Software Engineer",
  description:
    "Full stack engineer building billing software, healthcare platforms and enterprise interfaces. Creator of ZestBill.",
  openGraph: {
    title: "Shaik Mohammad Yaseen — Full Stack Software Engineer",
    description: "Billing software, healthcare platforms and enterprise interfaces.",
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
