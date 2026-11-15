"use client";

import { motion } from "framer-motion";
import { ArrowUpRight, Download, Mail, MapPin, Phone } from "lucide-react";

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
import {
  BlurText,
  CountUp,
  MagneticLink,
  Marquee,
  Reveal,
  SpotlightCard,
  Typewriter,
} from "./effects";
import { education, experience, profile, projects, skills, stats } from "@/lib/data";

const nav = [
  ["About", "#about"],
  ["Skills", "#skills"],
  ["Experience", "#experience"],
  ["Projects", "#projects"],
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
          Hire me
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
          Open to opportunities &amp; freelance projects
        </motion.div>

        <h1 className="text-5xl font-semibold leading-[1.05] tracking-tight sm:text-7xl">
          <BlurText text="Hi, I'm" className="text-zinc-200" />
          <br />
          <BlurText text="Shaik Mohammad Yaseen" className="gradient-text" />
        </h1>

        <p className="mt-6 text-lg text-zinc-400 sm:text-xl">
          {profile.title} · <Typewriter phrases={profile.roles} />
        </p>

        <p className="mx-auto mt-6 max-w-2xl text-balance text-zinc-400">
          I build fast, secure and scalable web applications — from enterprise Angular micro-frontends to
          HIPAA-compliant healthcare platforms in React &amp; Next.js.
        </p>

        <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
          <MagneticLink
            href="#projects"
            className="group inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-violet-500 to-cyan-400 px-6 py-3 font-medium text-black shadow-[0_0_40px_-8px_rgba(139,92,246,0.9)]"
          >
            View my work
            <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </MagneticLink>
          <MagneticLink
            href="/Shaik_Mohammad_Yaseen_Resume.pdf"
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
          <a href={profile.linkedin.startsWith("http") ? profile.linkedin : `https://${profile.linkedin}`} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="hover:text-white">
            <Linkedin className="h-5 w-5" />
          </a>
          <a href={`mailto:${profile.email}`} aria-label="Email" className="hover:text-white">
            <Mail className="h-5 w-5" />
          </a>
        </div>
      </div>
    </section>
  );
}

function SectionTitle({ eyebrow, title }: { eyebrow: string; title: string }) {
  return (
    <Reveal className="mb-12">
      <p className="font-mono text-sm text-violet-400">{eyebrow}</p>
      <h2 className="mt-2 text-3xl font-semibold tracking-tight sm:text-5xl">{title}</h2>
    </Reveal>
  );
}

export function About() {
  return (
    <section id="about" className="mx-auto max-w-6xl px-6 py-28">
      <SectionTitle eyebrow="01 — About" title="Engineering with impact" />
      <div className="grid gap-10 lg:grid-cols-5">
        <Reveal className="lg:col-span-3">
          <p className="text-lg leading-relaxed text-zinc-300">{profile.summary}</p>
          <p className="mt-6 flex items-center gap-2 text-zinc-400">
            <MapPin className="h-4 w-4 text-violet-400" /> {profile.location}
          </p>
          <div className="mt-8 rounded-2xl border border-white/10 bg-white/[0.03] p-5 text-sm text-zinc-400">
            <p className="font-medium text-zinc-200">{education.degree}</p>
            <p>
              {education.school} · {education.detail}
            </p>
            <p className="mt-3">{education.cert}</p>
            <p className="mt-1 text-zinc-500">{education.languages}</p>
          </div>
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
    <section id="skills" className="mx-auto max-w-6xl px-6 py-28">
      <SectionTitle eyebrow="02 — Skills" title="Tools of the trade" />
      <Reveal className="mb-10">
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

export function Experience() {
  return (
    <section id="experience" className="mx-auto max-w-4xl px-6 py-28">
      <SectionTitle eyebrow="03 — Experience" title="Where I've worked" />
      <div className="relative border-l border-white/10 pl-8">
        {experience.map((e, i) => (
          <Reveal key={e.role + e.period} delay={i * 0.05} className="relative mb-12 last:mb-0">
            <span className="absolute -left-[41px] top-2 h-4 w-4 rounded-full border-2 border-violet-400 bg-black shadow-[0_0_14px_rgba(139,92,246,0.9)]" />
            <SpotlightCard className="p-6">
              <div className="flex flex-wrap items-baseline justify-between gap-2">
                <h3 className="text-xl font-semibold">{e.role}</h3>
                <span className="font-mono text-xs text-cyan-300">{e.period}</span>
              </div>
              <p className="text-violet-300">
                {e.company} <span className="text-zinc-500">· {e.location}</span>
              </p>
              <ul className="mt-4 space-y-2 text-sm leading-relaxed text-zinc-400">
                {e.points.map((p) => (
                  <li key={p} className="flex gap-2">
                    <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-violet-400" />
                    {p}
                  </li>
                ))}
              </ul>
            </SpotlightCard>
          </Reveal>
        ))}
      </div>
    </section>
  );
}

export function Projects() {
  return (
    <section id="projects" className="mx-auto max-w-6xl px-6 py-28">
      <SectionTitle eyebrow="04 — Projects" title="Selected work" />
      <div className="grid gap-6 lg:grid-cols-3">
        {projects.map((p, i) => (
          <Reveal key={p.name} delay={i * 0.1}>
            <SpotlightCard className="flex h-full flex-col p-6">
              <p className="font-mono text-xs text-cyan-300">{p.category}</p>
              <h3 className="mt-2 text-2xl font-semibold">{p.name}</h3>
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
          </Reveal>
        ))}
      </div>
    </section>
  );
}

export function Contact() {
  return (
    <section id="contact" className="mx-auto max-w-4xl px-6 py-28">
      <Reveal>
        <SpotlightCard className="p-10 text-center sm:p-16">
          <p className="font-mono text-sm text-violet-400">05 — Contact</p>
          <h2 className="gradient-text mt-3 text-4xl font-semibold tracking-tight sm:text-6xl">
            Let&apos;s build something great
          </h2>
          <p className="mx-auto mt-5 max-w-xl text-zinc-400">
            Hiring for a full stack or frontend role, or have a project in mind? I&apos;d love to hear about it.
          </p>
          <div className="mt-10 flex flex-wrap justify-center gap-4">
            <MagneticLink
              href={`mailto:${profile.email}`}
              className="inline-flex items-center gap-2 rounded-full bg-white px-6 py-3 font-medium text-black"
            >
              <Mail className="h-4 w-4" /> {profile.email}
            </MagneticLink>
            <MagneticLink
              href={`tel:${profile.phone.replace(/\s/g, "")}`}
              className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-6 py-3 font-medium"
            >
              <Phone className="h-4 w-4" /> {profile.phone}
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
      © 2026 {profile.name}. Built with Next.js, Tailwind &amp; Framer Motion.
    </footer>
  );
}
