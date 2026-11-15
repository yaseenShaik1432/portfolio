"use client";

import {
  motion,
  useInView,
  useMotionValue,
  useSpring,
  useMotionTemplate,
} from "framer-motion";
import { useEffect, useRef, useState } from "react";

/** Animated aurora blobs + grid (ReactBits-style background). */
export function Aurora() {
  return (
    <div aria-hidden className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
      <div className="grid-bg absolute inset-0" />
      <div
        className="absolute -top-40 -left-32 h-[520px] w-[520px] rounded-full opacity-40 blur-[120px]"
        style={{ background: "#7c3aed", animation: "aurora 18s ease-in-out infinite" }}
      />
      <div
        className="absolute top-1/3 -right-40 h-[480px] w-[480px] rounded-full opacity-30 blur-[120px]"
        style={{ background: "#06b6d4", animation: "aurora 22s ease-in-out infinite reverse" }}
      />
      <div
        className="absolute bottom-0 left-1/3 h-[420px] w-[420px] rounded-full opacity-25 blur-[130px]"
        style={{ background: "#db2777", animation: "aurora 26s ease-in-out infinite" }}
      />
    </div>
  );
}

/** Soft glow that follows the cursor across the page. */
export function CursorGlow() {
  const x = useMotionValue(-500);
  const y = useMotionValue(-500);
  const sx = useSpring(x, { stiffness: 120, damping: 20 });
  const sy = useSpring(y, { stiffness: 120, damping: 20 });
  const bg = useMotionTemplate`radial-gradient(420px circle at ${sx}px ${sy}px, rgba(139,92,246,0.13), transparent 70%)`;

  useEffect(() => {
    const move = (e: PointerEvent) => {
      x.set(e.clientX);
      y.set(e.clientY);
    };
    window.addEventListener("pointermove", move);
    return () => window.removeEventListener("pointermove", move);
  }, [x, y]);

  return <motion.div aria-hidden className="pointer-events-none fixed inset-0 z-0" style={{ background: bg }} />;
}

/** Scroll progress bar. */
export function ScrollProgress() {
  const [p, setP] = useState(0);
  useEffect(() => {
    const onScroll = () => {
      const h = document.documentElement.scrollHeight - window.innerHeight;
      setP(h > 0 ? window.scrollY / h : 0);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  return (
    <div
      aria-hidden
      className="fixed top-0 left-0 z-[60] h-[2px] w-full origin-left bg-gradient-to-r from-violet-500 to-cyan-400"
      style={{ transform: `scaleX(${p})` }}
    />
  );
}

/** Fade/slide in on scroll. */
export function Reveal({
  children,
  delay = 0,
  className = "",
}: {
  children: React.ReactNode;
  delay?: number;
  className?: string;
}) {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.6, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.div>
  );
}

/** Word-by-word blur-in headline (ReactBits "BlurText"). */
export function BlurText({ text, className = "" }: { text: string; className?: string }) {
  const words = text.split(" ");
  return (
    <span className={className} aria-label={text}>
      {words.map((w, i) => (
        <motion.span
          key={i}
          aria-hidden
          className="inline-block"
          initial={{ opacity: 0, filter: "blur(12px)", y: 18 }}
          animate={{ opacity: 1, filter: "blur(0px)", y: 0 }}
          transition={{ duration: 0.7, delay: 0.1 + i * 0.09, ease: "easeOut" }}
        >
          {w}
          {i < words.length - 1 ? " " : ""}
        </motion.span>
      ))}
    </span>
  );
}

/** Typewriter cycling through phrases. */
export function Typewriter({ phrases }: { phrases: string[] }) {
  const [i, setI] = useState(0);
  const [text, setText] = useState("");
  const [del, setDel] = useState(false);

  useEffect(() => {
    const full = phrases[i % phrases.length];
    const t = setTimeout(
      () => {
        if (!del) {
          setText(full.slice(0, text.length + 1));
          if (text.length + 1 === full.length) setTimeout(() => setDel(true), 1400);
        } else {
          setText(full.slice(0, text.length - 1));
          if (text.length - 1 === 0) {
            setDel(false);
            setI((n) => n + 1);
          }
        }
      },
      del ? 28 : 65,
    );
    return () => clearTimeout(t);
  }, [text, del, i, phrases]);

  return (
    <span className="font-mono text-violet-300">
      {text}
      <span className="ml-0.5 inline-block w-[2px] animate-pulse bg-cyan-300 align-middle">&nbsp;</span>
    </span>
  );
}

/** Count up when scrolled into view. */
export function CountUp({ to, suffix = "" }: { to: number; suffix?: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true });
  const [n, setN] = useState(0);
  useEffect(() => {
    if (!inView) return;
    const start = performance.now();
    const dur = 1400;
    let raf = 0;
    const tick = (now: number) => {
      const t = Math.min((now - start) / dur, 1);
      setN(Math.round(to * (1 - Math.pow(1 - t, 3))));
      if (t < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [inView, to]);
  return (
    <span ref={ref}>
      {n}
      {suffix}
    </span>
  );
}

/** Card with a spotlight border/glow following the pointer (ReactBits "SpotlightCard"). */
export function SpotlightCard({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const [pos, setPos] = useState({ x: 0, y: 0, on: false });
  return (
    <div
      ref={ref}
      onPointerMove={(e) => {
        const r = ref.current?.getBoundingClientRect();
        if (r) setPos({ x: e.clientX - r.left, y: e.clientY - r.top, on: true });
      }}
      onPointerLeave={() => setPos((p) => ({ ...p, on: false }))}
      className={`relative overflow-hidden rounded-2xl border border-white/10 bg-white/[0.03] backdrop-blur-sm transition-transform duration-300 hover:-translate-y-1 ${className}`}
    >
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 transition-opacity duration-300"
        style={{
          opacity: pos.on ? 1 : 0,
          background: `radial-gradient(360px circle at ${pos.x}px ${pos.y}px, rgba(139,92,246,0.22), transparent 65%)`,
        }}
      />
      <div className="relative">{children}</div>
    </div>
  );
}

/** Button that is gently pulled toward the cursor. */
export function MagneticLink({
  href,
  children,
  className = "",
  external,
}: {
  href: string;
  children: React.ReactNode;
  className?: string;
  external?: boolean;
}) {
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const sx = useSpring(x, { stiffness: 220, damping: 16 });
  const sy = useSpring(y, { stiffness: 220, damping: 16 });
  const ref = useRef<HTMLAnchorElement>(null);
  return (
    <motion.a
      ref={ref}
      href={href}
      {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
      style={{ x: sx, y: sy }}
      onPointerMove={(e) => {
        const r = ref.current?.getBoundingClientRect();
        if (!r) return;
        x.set((e.clientX - (r.left + r.width / 2)) * 0.25);
        y.set((e.clientY - (r.top + r.height / 2)) * 0.25);
      }}
      onPointerLeave={() => {
        x.set(0);
        y.set(0);
      }}
      className={className}
    >
      {children}
    </motion.a>
  );
}

/** Infinite horizontal marquee. */
export function Marquee({ items }: { items: string[] }) {
  const row = [...items, ...items];
  return (
    <div className="marquee relative overflow-hidden [mask-image:linear-gradient(90deg,transparent,#000_10%,#000_90%,transparent)]">
      <div className="marquee-track flex w-max gap-3">
        {row.map((s, i) => (
          <span
            key={i}
            className="rounded-full border border-white/10 bg-white/[0.04] px-4 py-2 font-mono text-sm text-zinc-300"
          >
            {s}
          </span>
        ))}
      </div>
    </div>
  );
}
