import { Aurora, CursorGlow, ScrollProgress } from "@/components/effects";
import {
  About,
  Contact,
  Experience,
  Footer,
  Hero,
  Navbar,
  Projects,
  Skills,
} from "@/components/sections";

export default function Home() {
  return (
    <>
      <Aurora />
      <CursorGlow />
      <ScrollProgress />
      <Navbar />
      <main className="relative z-10">
        <Hero />
        <About />
        <Skills />
        <Experience />
        <Projects />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
