import { ScrollProgress } from "@/components/effects";
import {
  About,
  Contact,
  Footer,
  Hero,
  Journey,
  Navbar,
  Skills,
  Work,
} from "@/components/sections";

export default function Home() {
  return (
    <>
      <a
        href="#main"
        className="sr-only z-[70] rounded-lg bg-ink px-4 py-2 text-white focus:not-sr-only focus:fixed focus:top-3 focus:left-3"
      >
        Skip to content
      </a>
      <ScrollProgress />
      <Navbar />
      <main id="main">
        <Hero />
        <Work />
        <Journey />
        <Skills />
        <About />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
