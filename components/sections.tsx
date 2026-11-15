"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import { ArrowUpRight, Download, Mail, MapPin, Sparkles, Terminal } from "lucide-react";
import {
  BlurText,
  CountUp,
  MagneticLink,
  Marquee,
  Reveal,
  SpotlightCard,
  Typewriter,
} from "./effects";
import { claudeWorkflow, journey, profile, projects, skills, stats, type Project } from "@/lib/data";

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
  ["Claude", "#claude"],
  ["Skills", "#skills"],
  ["Journey", "#journey"],
  ["Contact", "#contact"],
];

export function Navbar() {
  return (
    <header className="fixed top-4 left-1/2 z-50 w-[min(92vw,720px)] -translate-x-1/2">
      <nav className="flex items-center justify-between rounded-full border border-white/10 bg-black/40 px-5 py-2.5 backdrop-blur-xl">
        <a href="#top" className="font-mono text-sm font-semibold tracking-tight">
          <span className="text-violet-400">&lt;</span>yaseen<span className="text-cyan-300">/&gt;</span>
        </a>
        <ul className="hidden gap-6 text-sm text-zinc-400 sm:flex">
          {nav.map(([l, h]) => (
            <li key={h}>
              <a href={h} className="transition-colors hover:text-white">
                {l}
              </a>
            </li>
          ))}
        </ul>
        <a
          href="#contact"
          className="rounded-full bg-white px-4 py-1.5 text-sm font-medium text-black transition hover:bg-violet-200"
        >
          Let&apos;s talk
        </a>
      </nav>
    </header>
  );
}

export function Hero() {
  return (
    <section id="top" className="relative flex min-h-screen items-center justify-center px-6 pt-24">
      <div className="mx-auto max-w-4xl text-center">
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          className="mx-auto mb-6 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-1.5 text-xs text-zinc-300"
        >
          <span className="relative flex h-2 w-2">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-70" />
            <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-400" />
          </span>
          Open to roles &amp; freelance projects
        </motion.div>

        <h1 className="text-5xl font-semibold leading-[1.05] tracking-tight sm:text-7xl">
          <BlurText text="I design, build" className="text-zinc-200" />
          <br />
          <BlurText text="& ship products." className="gradient-text" />
        </h1>

        <p className="mt-6 text-lg text-zinc-400 sm:text-xl">
          <Typewriter phrases={profile.roles} />
        </p>

        <p className="mx-auto mt-6 max-w-2xl text-balance text-zinc-400">
          Hi, I&apos;m <span className="text-zinc-200">{profile.name}</span> — a full stack engineer. Below is the
          work I&apos;m proudest of, from a GST billing app used by real businesses to healthcare platforms built
          under strict compliance.
        </p>

        <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
          <MagneticLink
            href="#work"
            className="group inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-violet-500 to-cyan-400 px-6 py-3 font-medium text-black shadow-[0_0_40px_-8px_rgba(139,92,246,0.9)]"
          >
            See my work
            <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </MagneticLink>
          <MagneticLink
            href={profile.resume}
            external
            className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-6 py-3 font-medium backdrop-blur hover:bg-white/10"
          >
            <Download className="h-4 w-4" /> Resume
          </MagneticLink>
        </div>

        <div className="mt-8 flex items-center justify-center gap-5 text-zinc-400">
          <a href={profile.github} target="_blank" rel="noopener noreferrer" aria-label="GitHub" className="hover:text-white">
            <Github className="h-5 w-5" />
          </a>
          <a href={profile.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="hover:text-white">
            <Linkedin className="h-5 w-5" />
          </a>
          <a href={`mailto:${profile.email}`} aria-label="Email" className="hover:text-white">
            <Mail className="h-5 w-5" />
          </a>
        </div>

        <div className="mx-auto mt-16 grid max-w-2xl grid-cols-3 gap-4 font-mono text-xs text-zinc-500">
          {["01 · Design", "02 · Build", "03 · Ship"].map((s) => (
            <div key={s} className="rounded-xl border border-white/10 bg-white/[0.03] py-3">
              {s}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function SectionTitle({ eyebrow, title, sub }: { eyebrow: string; title: string; sub?: string }) {
  return (
    <Reveal className="mb-12">
      <p className="font-mono text-sm text-violet-400">{eyebrow}</p>
      <h2 className="mt-2 text-3xl font-semibold tracking-tight sm:text-5xl">{title}</h2>
      {sub && <p className="mt-3 max-w-2xl text-zinc-400">{sub}</p>}
    </Reveal>
  );
}

function ClaudeBadge() {
  return (
    <span className="inline-flex items-center gap-1.5 rounded-full border border-orange-300/30 bg-orange-300/10 px-2.5 py-1 font-mono text-[11px] text-orange-200">
      <Sparkles className="h-3 w-3" /> Built with Claude
    </span>
  );
}

function FeaturedProject({ p }: { p: Project }) {
  return (
    <Reveal>
      <SpotlightCard className="grid gap-0 lg:grid-cols-2">
        <div className="relative min-h-[260px] overflow-hidden border-b border-white/10 bg-gradient-to-br from-violet-500/20 via-transparent to-cyan-400/10 lg:border-r lg:border-b-0">
          {p.image && (
            // eslint-disable-next-line @next/next/no-img-element
            <img
              src={p.image}
              alt={`${p.name} website preview`}
              className="absolute inset-0 h-full w-full object-cover"
              loading="lazy"
            />
          )}
          <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
        </div>
        <div className="flex flex-col p-7 sm:p-9">
          <div className="flex flex-wrap items-center gap-3">
            <span className="font-mono text-xs text-cyan-300">Featured · {p.category}</span>
            {p.builtWithClaude && <ClaudeBadge />}
          </div>
          <div className="mt-3 flex items-center gap-3">
            {p.icon && (
              // eslint-disable-next-line @next/next/no-img-element
              <img src={p.icon} alt="" className="h-10 w-10 rounded-xl" loading="lazy" />
            )}
            <h3 className="text-3xl font-semibold">{p.name}</h3>
          </div>
          <p className="mt-1 text-violet-300">{p.tag}</p>
          <p className="mt-4 text-sm leading-relaxed text-zinc-400">{p.description}</p>
          <ul className="mt-5 space-y-2 text-sm text-zinc-300">
            {p.highlights.map((h) => (
              <li key={h} className="flex gap-2">
                <span className="text-emerald-400">✓</span>
                {h}
              </li>
            ))}
          </ul>
          <div className="mt-6 flex flex-wrap gap-2">
            {p.stack.map((s) => (
              <span key={s} className="rounded-full border border-white/10 px-2.5 py-1 font-mono text-[11px] text-zinc-400">
                {s}
              </span>
            ))}
          </div>
          <div className="mt-auto flex flex-wrap gap-3 pt-7">
            {p.links?.map((l, i) => (
              <a
                key={l.href}
                href={l.href}
                target="_blank"
                rel="noopener noreferrer"
                className={
                  i === 0
                    ? "inline-flex items-center gap-1.5 rounded-full bg-white px-5 py-2.5 text-sm font-medium text-black hover:bg-violet-200"
                    : "inline-flex items-center gap-1.5 rounded-full border border-white/15 px-5 py-2.5 text-sm font-medium hover:bg-white/10"
                }
              >
                {l.label} <ArrowUpRight className="h-4 w-4" />
              </a>
            ))}
          </div>
        </div>
      </SpotlightCard>
    </Reveal>
  );
}

const filters = ["All", "Product", "Healthcare", "Enterprise"] as const;

export function Work() {
  const [filter, setFilter] = useState<(typeof filters)[number]>("All");
  const featured = projects.find((p) => p.featured)!;
  const rest = projects.filter((p) => !p.featured && (filter === "All" || p.category === filter));
  return (
    <section id="work" className="mx-auto max-w-6xl px-6 py-28">
      <SectionTitle
        eyebrow="01 — Work"
        title="Things I've built"
        sub="Real products, real users, real constraints. Here's what I've shipped."
      />
      <FeaturedProject p={featured} />

      <div className="mt-16 mb-8 flex flex-wrap items-center gap-2">
        {filters.map((f) => (
          <button
            key={f}
            onClick={() => setFilter(f)}
            className={`rounded-full border px-4 py-1.5 text-sm transition ${
              filter === f
                ? "border-violet-400 bg-violet-500/20 text-white"
                : "border-white/10 text-zinc-400 hover:text-white"
            }`}
          >
            {f}
          </button>
        ))}
      </div>

      <motion.div layout className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        <AnimatePresence mode="popLayout">
          {rest.map((p, i) => (
            <motion.div
              key={p.slug}
              layout
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.96 }}
              transition={{ duration: 0.35 }}
            >
              <SpotlightCard className="flex h-full flex-col p-6">
                <div className="flex items-center justify-between">
                  <span className="font-mono text-xs text-zinc-500">{String(i + 2).padStart(2, "0")}</span>
                  <span className="font-mono text-xs text-cyan-300">{p.category}</span>
                </div>
                <h3 className="mt-3 text-2xl font-semibold">{p.name}</h3>
                <p className="text-sm text-violet-300">{p.tag}</p>
                <p className="mt-4 text-sm leading-relaxed text-zinc-400">{p.description}</p>
                <ul className="mt-4 space-y-2 text-sm text-zinc-300">
                  {p.highlights.map((h) => (
                    <li key={h} className="flex gap-2">
                      <span className="text-emerald-400">✓</span>
                      {h}
                    </li>
                  ))}
                </ul>
                <div className="mt-auto flex flex-wrap gap-2 pt-6">
                  {p.stack.map((s) => (
                    <span key={s} className="rounded-full border border-white/10 px-2.5 py-1 font-mono text-[11px] text-zinc-400">
                      {s}
                    </span>
                  ))}
                </div>
              </SpotlightCard>
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>
    </section>
  );
}

export function BuiltWithClaude() {
  return (
    <section id="claude" className="mx-auto max-w-6xl px-6 py-28">
      <SectionTitle
        eyebrow="02 — Building with Claude"
        title="AI-assisted, human-owned"
        sub="I use Claude to move faster on planning, building and auditing. Every decision and merge is still mine."
      />
      <div className="grid gap-6 lg:grid-cols-5">
        <Reveal className="lg:col-span-2">
          <SpotlightCard className="h-full p-0">
            <div className="flex items-center gap-2 border-b border-white/10 px-4 py-3 text-xs text-zinc-500">
              <Terminal className="h-4 w-4" /> claude
              <span className="ml-auto flex gap-1.5">
                <i className="h-2.5 w-2.5 rounded-full bg-red-400/70" />
                <i className="h-2.5 w-2.5 rounded-full bg-yellow-400/70" />
                <i className="h-2.5 w-2.5 rounded-full bg-green-400/70" />
              </span>
            </div>
            <pre className="overflow-x-auto p-5 font-mono text-[13px] leading-relaxed text-zinc-300">
              <span className="text-violet-400">$</span> claude{"\n"}
              <span className="text-zinc-500">&gt; plan → build → audit → ship</span>
              {"\n\n"}
              <span className="text-emerald-400">✓</span> ZestBill desktop app{"\n"}
              <span className="text-emerald-400">✓</span> zestbill.in marketing site{"\n"}
              <span className="text-emerald-400">✓</span> Code audits &amp; cleanups{"\n"}
              <span className="text-emerald-400">✓</span> This portfolio
            </pre>
          </SpotlightCard>
        </Reveal>
        <div className="grid gap-4 sm:grid-cols-2 lg:col-span-3">
          {claudeWorkflow.map((s, i) => (
            <Reveal key={s.n} delay={i * 0.07}>
              <SpotlightCard className="h-full p-5">
                <span className="font-mono text-xs text-orange-300">{s.n}</span>
                <h3 className="mt-1 text-lg font-medium">{s.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-zinc-400">{s.text}</p>
              </SpotlightCard>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

export function About() {
  return (
    <section id="about" className="mx-auto max-w-6xl px-6 py-20">
      <div className="grid items-center gap-10 lg:grid-cols-5">
        <Reveal className="lg:col-span-3">
          <p className="font-mono text-sm text-violet-400">03 — About</p>
          <h2 className="mt-2 text-3xl font-semibold tracking-tight sm:text-4xl">The person behind the code</h2>
          <p className="mt-5 text-lg leading-relaxed text-zinc-300">{profile.summary}</p>
          <p className="mt-5 flex items-center gap-2 text-zinc-400">
            <MapPin className="h-4 w-4 text-violet-400" /> {profile.location}
          </p>
        </Reveal>
        <div className="grid grid-cols-2 gap-4 lg:col-span-2">
          {stats.map((s, i) => (
            <Reveal key={s.label} delay={i * 0.08}>
              <SpotlightCard className="p-5">
                <div className="gradient-text text-4xl font-semibold">
                  <CountUp to={s.value} suffix={s.suffix} />
                </div>
                <p className="mt-1 text-sm text-zinc-400">{s.label}</p>
              </SpotlightCard>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

export function Skills() {
  const all = Object.values(skills).flat();
  return (
    <section id="skills" className="mx-auto max-w-6xl px-6 py-24">
      <SectionTitle eyebrow="04 — Toolbox" title="What I work with" />
      <Reveal className="mb-8">
        <Marquee items={all} />
      </Reveal>
      <div className="grid gap-5 sm:grid-cols-2">
        {Object.entries(skills).map(([group, items], i) => (
          <Reveal key={group} delay={i * 0.07}>
            <SpotlightCard className="h-full p-6">
              <h3 className="mb-4 font-medium text-zinc-100">{group}</h3>
              <div className="flex flex-wrap gap-2">
                {items.map((s) => (
                  <span key={s} className="rounded-md border border-white/10 bg-white/5 px-2.5 py-1 font-mono text-xs text-zinc-300">
                    {s}
                  </span>
                ))}
              </div>
            </SpotlightCard>
          </Reveal>
        ))}
      </div>
    </section>
  );
}

export function Journey() {
  return (
    <section id="journey" className="mx-auto max-w-4xl px-6 py-24">
      <SectionTitle eyebrow="05 — Journey" title="Where I've shipped" />
      <div className="divide-y divide-white/10 rounded-2xl border border-white/10 bg-white/[0.03]">
        {journey.map((j, i) => (
          <Reveal key={j.role + j.period} delay={i * 0.05}>
            <div className="grid gap-2 p-6 sm:grid-cols-[140px_1fr]">
              <span className="font-mono text-sm text-cyan-300">{j.period}</span>
              <div>
                <h3 className="font-medium">
                  {j.role} <span className="text-violet-300">· {j.company}</span>
                </h3>
                <p className="mt-1 text-sm text-zinc-400">{j.note}</p>
              </div>
            </div>
          </Reveal>
        ))}
      </div>
      <p className="mt-4 text-sm text-zinc-500">
        Want the full details?{" "}
        <a href={profile.resume} target="_blank" rel="noopener noreferrer" className="text-violet-300 underline-offset-4 hover:underline">
          Open my resume
        </a>
        .
      </p>
    </section>
  );
}

export function Contact() {
  return (
    <section id="contact" className="mx-auto max-w-4xl px-6 py-28">
      <Reveal>
        <SpotlightCard className="p-10 text-center sm:p-16">
          <p className="font-mono text-sm text-violet-400">06 — Contact</p>
          <h2 className="gradient-text mt-3 text-4xl font-semibold tracking-tight sm:text-6xl">
            Ready to build something?
          </h2>
          <p className="mx-auto mt-5 max-w-xl text-zinc-400">
            Hiring for a full stack or frontend role, or have a product in mind? I&apos;d love to hear about it.
          </p>
          <div className="mt-10 flex flex-wrap justify-center gap-4">
            <MagneticLink
              href={`mailto:${profile.email}`}
              className="inline-flex items-center gap-2 rounded-full bg-white px-6 py-3 font-medium text-black"
            >
              <Mail className="h-4 w-4" /> {profile.email}
            </MagneticLink>
            <MagneticLink
              href={profile.linkedin}
              external
              className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-6 py-3 font-medium"
            >
              <Linkedin className="h-4 w-4" /> LinkedIn
            </MagneticLink>
            <MagneticLink
              href={profile.resume}
              external
              className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-6 py-3 font-medium"
            >
              <Download className="h-4 w-4" /> Resume
            </MagneticLink>
            <MagneticLink
              href={profile.github}
              external
              className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-6 py-3 font-medium"
            >
              <Github className="h-4 w-4" /> GitHub
            </MagneticLink>
          </div>
        </SpotlightCard>
      </Reveal>
    </section>
  );
}

export function Footer() {
  return (
    <footer className="border-t border-white/10 px-6 py-8 text-center text-sm text-zinc-500">
      © 2026 {profile.name}. Built with Next.js, Tailwind, Framer Motion &amp; Claude.
    </footer>
  );
}
