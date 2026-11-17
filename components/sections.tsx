"use client";

import { useState } from "react";
import { ArrowUpRight, Download, Mail, MapPin } from "lucide-react";
import { Card, CountUp } from "./effects";
import { journey, profile, projects, skills, stats, type Project } from "@/lib/data";

function Github({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden>
      <path d="M12 .5A11.5 11.5 0 0 0 .5 12c0 5.08 3.29 9.38 7.86 10.9.58.1.79-.25.79-.56v-2c-3.2.7-3.87-1.37-3.87-1.37-.52-1.33-1.28-1.69-1.28-1.69-1.05-.72.08-.7.08-.7 1.15.08 1.76 1.19 1.76 1.19 1.03 1.76 2.7 1.25 3.36.96.1-.75.4-1.25.73-1.54-2.55-.29-5.24-1.28-5.24-5.69 0-1.26.45-2.28 1.18-3.09-.12-.29-.51-1.46.11-3.05 0 0 .97-.31 3.17 1.18a11 11 0 0 1 5.78 0c2.2-1.49 3.17-1.18 3.17-1.18.62 1.59.23 2.76.11 3.05.74.81 1.18 1.83 1.18 3.09 0 4.42-2.7 5.4-5.27 5.68.41.36.78 1.06.78 2.14v3.17c0 .31.21.67.8.56A11.5 11.5 0 0 0 23.5 12 11.5 11.5 0 0 0 12 .5Z" />
    </svg>
  );
}

function Linkedin({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden>
      <path d="M20.45 20.45h-3.56v-5.57c0-1.33-.03-3.04-1.85-3.04-1.86 0-2.14 1.45-2.14 2.94v5.67H9.34V9h3.41v1.56h.05c.48-.9 1.64-1.85 3.37-1.85 3.6 0 4.27 2.37 4.27 5.46v6.28ZM5.34 7.43a2.06 2.06 0 1 1 0-4.12 2.06 2.06 0 0 1 0 4.12ZM7.12 20.45H3.56V9h3.56v11.45ZM22.22 0H1.77C.79 0 0 .77 0 1.73v20.54C0 23.23.79 24 1.77 24h20.45c.98 0 1.78-.77 1.78-1.73V1.73C24 .77 23.2 0 22.22 0Z" />
    </svg>
  );
}

const nav = [
  ["Work", "#work"],
  ["About", "#about"],
  ["Skills", "#skills"],
  ["Experience", "#experience"],
];

const btnPrimary =
  "inline-flex items-center gap-2 rounded-lg bg-accent px-5 py-3 text-sm font-medium text-white transition-colors hover:bg-[#095347]";
const btnGhost =
  "inline-flex items-center gap-2 rounded-lg border border-line bg-surface px-5 py-3 text-sm font-medium text-ink transition-colors hover:border-ink";

export function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b border-line bg-paper/90 backdrop-blur">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-3.5">
        <a href="#top" className="font-serif text-lg font-semibold tracking-tight">
          Shaik Mohammad Yaseen
        </a>
        <ul className="hidden gap-7 text-sm text-muted md:flex">
          {nav.map(([l, h]) => (
            <li key={h}>
              <a href={h} className="transition-colors hover:text-ink">
                {l}
              </a>
            </li>
          ))}
        </ul>
        <a href="#contact" className="rounded-lg bg-ink px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-accent">
          Contact me
        </a>
      </nav>
    </header>
  );
}

export function Hero() {
  const facts = [
    ["Now", "Custom Software Engineering Analyst at Accenture, Hyderabad"],
    ["Product", "ZestBill, a GST billing app for Windows (zestbill.in)"],
    ["Stack", "React.js, Next.js, Angular 17 and Node.js"],
    ["Based in", profile.location],
  ];
  return (
    <section id="top" className="mx-auto grid max-w-7xl items-center gap-12 px-6 pt-16 pb-20 lg:grid-cols-5 lg:pt-24 lg:pb-24">
      <div className="hero-in lg:col-span-3">
        <p className="inline-flex items-center gap-2 rounded-full border border-line bg-surface px-3.5 py-1.5 text-sm text-muted">
          <span className="h-2 w-2 rounded-full bg-accent" /> Open to full-time roles and freelance work
        </p>
        <h1 className="mt-6 font-serif text-5xl leading-[1.08] font-semibold tracking-tight text-balance sm:text-6xl">
          Full stack engineer with 4+ years of experience building web applications.
        </h1>
        <p className="mt-6 max-w-xl text-lg leading-relaxed text-muted">
          I&apos;m {profile.name}. I build enterprise applications and secure healthcare platforms with React, Next.js,
          Angular and Node.js.
        </p>
        <div className="mt-9 flex flex-wrap gap-3">
          <a href="#work" className={btnPrimary}>
            See my work <ArrowUpRight className="h-4 w-4" />
          </a>
          <a href={profile.resume} target="_blank" rel="noopener noreferrer" className={btnGhost}>
            <Download className="h-4 w-4" /> Download resume
          </a>
          <a href={profile.linkedin} target="_blank" rel="noopener noreferrer" className={btnGhost}>
            <Linkedin className="h-4 w-4" /> LinkedIn
          </a>
        </div>
      </div>

      <aside className="hero-in lg:col-span-2" aria-label="At a glance">
        <div className="rounded-2xl border border-line bg-surface p-7 shadow-[0_1px_0_rgba(20,33,61,0.04),0_18px_40px_-24px_rgba(20,33,61,0.25)]">
          <h2 className="font-serif text-xl font-semibold">At a glance</h2>
          <dl className="mt-5 divide-y divide-line">
            {facts.map(([k, v]) => (
              <div key={k} className="grid grid-cols-[84px_1fr] gap-3 py-3.5 text-sm">
                <dt className="text-muted">{k}</dt>
                <dd className="text-ink">{v}</dd>
              </div>
            ))}
          </dl>
        </div>
      </aside>
    </section>
  );
}

function SectionTitle({ title, sub }: { title: string; sub?: string }) {
  return (
    <div className="mb-9 max-w-2xl">
      <h2 className="font-serif text-3xl font-semibold tracking-tight sm:text-4xl">{title}</h2>
      {sub && <p className="mt-3 text-lg leading-relaxed text-muted">{sub}</p>}
    </div>
  );
}

function InvoiceMock() {
  const rows = [
    ["Wireless keypad", "8471", "2", "1,200"],
    ["USB cable 1m", "8544", "5", "750"],
    ["Thermal roll 80mm", "4811", "10", "1,500"],
  ];
  return (
    <div className="relative flex h-full min-h-[320px] items-center justify-center p-6 sm:p-10">
      <div className="w-full max-w-md rounded-lg bg-white p-6 text-ink shadow-[0_30px_60px_-20px_rgba(0,0,0,0.6)]">
        <div className="flex items-center justify-between border-b border-line pb-4">
          <div className="flex items-center gap-2.5">
            <span className="grid h-8 w-8 place-items-center rounded-md bg-accent font-serif text-base font-semibold text-white">Z</span>
            <span className="font-serif text-lg font-semibold">ZestBill</span>
          </div>
          <span className="rounded bg-accent-soft px-2 py-1 text-[11px] font-medium text-accent">Tax invoice</span>
        </div>
        <table className="mt-4 w-full text-left text-xs">
          <thead className="text-muted">
            <tr>
              <th className="pb-2 font-medium">Item</th>
              <th className="pb-2 font-medium">HSN</th>
              <th className="pb-2 font-medium">Qty</th>
              <th className="pb-2 text-right font-medium">Amount (₹)</th>
            </tr>
          </thead>
          <tbody>
            {rows.map((r) => (
              <tr key={r[0]} className="border-t border-line">
                <td className="py-2">{r[0]}</td>
                <td className="py-2 text-muted">{r[1]}</td>
                <td className="py-2">{r[2]}</td>
                <td className="py-2 text-right tabular-nums">{r[3]}</td>
              </tr>
            ))}
          </tbody>
        </table>
        <div className="mt-2 space-y-1 border-t border-line pt-3 text-xs">
          <div className="flex justify-between text-muted"><span>CGST</span><span className="tabular-nums">262.50</span></div>
          <div className="flex justify-between text-muted"><span>SGST</span><span className="tabular-nums">262.50</span></div>
          <div className="flex justify-between pt-1 text-sm font-semibold"><span>Total</span><span className="tabular-nums">₹ 3,975.00</span></div>
        </div>
        <div className="mt-4 flex flex-wrap gap-2 text-[11px]">
          <span className="rounded border border-line px-2 py-1">Print A4 / 80 mm</span>
          <span className="rounded border border-line px-2 py-1">UPI QR</span>
          <span className="rounded bg-accent px-2 py-1 text-white">Share on WhatsApp</span>
        </div>
      </div>
      <span className="absolute right-4 bottom-3 text-[11px] text-on-navy-muted">Sample data for illustration</span>
    </div>
  );
}

function FeaturedProject({ p }: { p: Project }) {
  return (
    <article className="on-navy overflow-hidden rounded-2xl bg-navy text-on-navy">
      <div className="grid lg:grid-cols-2">
        <div className="border-b border-navy-line bg-[#0a1524] lg:border-r lg:border-b-0">
          <InvoiceMock />
        </div>
        <div className="flex flex-col p-8 sm:p-10">
          <div className="flex flex-wrap items-center gap-3 text-sm text-on-navy-muted">
            <span>Featured product</span>
          </div>
          <h3 className="mt-4 font-serif text-4xl font-semibold tracking-tight">{p.name}</h3>
          <p className="mt-1 text-mint">{p.tag}</p>
          <p className="mt-5 leading-relaxed text-on-navy-muted">{p.description}</p>
          <ul className="mt-6 space-y-2.5 text-sm">
            {p.highlights.map((h) => (
              <li key={h} className="flex gap-2.5">
                <span className="mt-[7px] h-1.5 w-1.5 shrink-0 rounded-full bg-mint" />
                {h}
              </li>
            ))}
          </ul>
          <div className="mt-6 flex flex-wrap gap-2">
            {p.stack.map((s) => (
              <span key={s} className="rounded-full border border-navy-line px-3 py-1 text-xs text-on-navy-muted">
                {s}
              </span>
            ))}
          </div>
          <div className="mt-auto flex flex-wrap gap-3 pt-8">
            {p.links?.map((l, i) => (
              <a
                key={l.href}
                href={l.href}
                target="_blank"
                rel="noopener noreferrer"
                className={
                  i === 0
                    ? "inline-flex items-center gap-1.5 rounded-lg bg-white px-5 py-2.5 text-sm font-medium text-navy hover:bg-mint"
                    : "inline-flex items-center gap-1.5 rounded-lg border border-navy-line px-5 py-2.5 text-sm font-medium hover:border-on-navy"
                }
              >
                {l.label} <ArrowUpRight className="h-4 w-4" />
              </a>
            ))}
          </div>
        </div>
      </div>
    </article>
  );
}

const filters = ["All", "Healthcare", "Enterprise"] as const;

export function Work() {
  const [filter, setFilter] = useState<(typeof filters)[number]>("All");
  const featured = projects.find((p) => p.featured)!;
  const rest = projects.filter((p) => !p.featured && (filter === "All" || p.category === filter));
  return (
    <section id="work" className="mx-auto max-w-7xl px-6 py-16">
      <SectionTitle title="Selected work" sub="A featured product, followed by healthcare and enterprise platforms from my career." />
      <FeaturedProject p={featured} />

      <div className="mt-12 mb-6 flex flex-wrap items-center gap-2" role="group" aria-label="Filter projects">
        {filters.map((f) => (
          <button
            key={f}
            onClick={() => setFilter(f)}
            aria-pressed={filter === f}
            className={`rounded-full border px-4 py-1.5 text-sm transition-colors ${
              filter === f ? "border-ink bg-ink text-white" : "border-line bg-surface text-muted hover:text-ink"
            }`}
          >
            {f}
          </button>
        ))}
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        {rest.map((p) => (
          <Card key={p.slug} className="flex flex-col p-7">
            <p className="text-sm text-accent">{p.category}</p>
            <h3 className="mt-1 font-serif text-2xl font-semibold">{p.name}</h3>
            <p className="text-muted">{p.tag}</p>
            <p className="mt-4 leading-relaxed text-ink/80">{p.description}</p>
            <ul className="mt-4 space-y-2 text-sm">
              {p.highlights.map((h) => (
                <li key={h} className="flex gap-2.5">
                  <span className="mt-[7px] h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
                  {h}
                </li>
              ))}
            </ul>
            <div className="mt-auto flex flex-wrap gap-2 pt-6">
              {p.stack.map((s) => (
                <span key={s} className="rounded-full bg-paper px-3 py-1 text-xs text-muted">
                  {s}
                </span>
              ))}
            </div>
          </Card>
        ))}
      </div>
    </section>
  );
}

export function About() {
  return (
    <section id="about" className="mx-auto max-w-7xl px-6 py-16">
      <div className="grid items-center gap-10 lg:grid-cols-5">
        <div className="lg:col-span-3">
          <h2 className="font-serif text-3xl font-semibold tracking-tight sm:text-4xl">About me</h2>
          <p className="mt-5 max-w-2xl text-lg leading-relaxed text-ink/85">{profile.summary}</p>
          <p className="mt-5 flex items-center gap-2 text-muted">
            <MapPin className="h-4 w-4 text-accent" /> {profile.location}
          </p>
        </div>
        <dl className="grid grid-cols-2 gap-4 lg:col-span-2">
          {stats.map((s) => (
            <Card key={s.label} className="p-5">
              <dd className="font-serif text-4xl font-semibold text-accent">
                <CountUp to={s.value} suffix={s.suffix} />
              </dd>
              <dt className="mt-1 text-sm text-muted">{s.label}</dt>
            </Card>
          ))}
        </dl>
      </div>
    </section>
  );
}

export function Skills() {
  return (
    <section id="skills" className="mx-auto max-w-7xl px-6 py-16">
      <SectionTitle title="Skills" />
      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
        {Object.entries(skills).map(([group, items]) => (
          <Card key={group} className="p-6">
            <h3 className="mb-4 font-semibold">{group}</h3>
            <ul className="flex flex-wrap gap-2">
              {items.map((s) => (
                <li key={s} className="rounded-md bg-paper px-2.5 py-1 text-sm text-ink/80">
                  {s}
                </li>
              ))}
            </ul>
          </Card>
        ))}
      </div>
    </section>
  );
}

export function Journey() {
  return (
    <section id="experience" className="mx-auto max-w-7xl px-6 py-16">
      <SectionTitle title="Experience" />
      <ol className="grid gap-5 md:grid-cols-3">
        {journey.map((j) => (
          <li key={j.role + j.period}>
            <Card className="h-full p-6">
              <p className="text-sm text-accent">{j.period}</p>
              <h3 className="mt-2 font-serif text-xl font-semibold">{j.role}</h3>
              <p className="text-muted">{j.company}</p>
              <p className="mt-3 text-sm leading-relaxed text-ink/80">{j.note}</p>
            </Card>
          </li>
        ))}
      </ol>
      <p className="mt-5 text-sm text-muted">
        Want the full details?{" "}
        <a href={profile.resume} target="_blank" rel="noopener noreferrer" className="font-medium text-accent underline underline-offset-4">
          Open my resume
        </a>
      </p>
    </section>
  );
}

export function Contact() {
  return (
    <section id="contact" className="mx-auto max-w-7xl px-6 pt-8 pb-16">
      <div className="on-navy rounded-2xl bg-navy px-8 py-14 text-center text-on-navy sm:px-14">
        <h2 className="mx-auto max-w-2xl font-serif text-3xl font-semibold tracking-tight text-balance sm:text-5xl">
          Hiring, or have a project in mind?
        </h2>
        <p className="mx-auto mt-4 max-w-xl text-lg text-on-navy-muted">
          Send me a few lines about the role or project and I&apos;ll get back to you.
        </p>
        <div className="mt-9 flex flex-wrap justify-center gap-3">
          <a href={`mailto:${profile.email}`} className="inline-flex items-center gap-2 rounded-lg bg-white px-6 py-3 text-sm font-medium text-navy hover:bg-mint">
            <Mail className="h-4 w-4" /> {profile.email}
          </a>
          {[
            ["LinkedIn", profile.linkedin, Linkedin],
            ["GitHub", profile.github, Github],
          ].map(([label, href, Icon]) => {
            const I = Icon as typeof Github;
            return (
              <a
                key={label as string}
                href={href as string}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-lg border border-navy-line px-6 py-3 text-sm font-medium hover:border-on-navy"
              >
                <I className="h-4 w-4" /> {label as string}
              </a>
            );
          })}
          <a href={profile.resume} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 rounded-lg border border-navy-line px-6 py-3 text-sm font-medium hover:border-on-navy">
            <Download className="h-4 w-4" /> Resume
          </a>
        </div>
      </div>
    </section>
  );
}

export function Footer() {
  return (
    <footer className="border-t border-line px-6 py-8 text-center text-sm text-muted">
      © 2026 {profile.name}. Built with Next.js and Tailwind CSS.
    </footer>
  );
}
