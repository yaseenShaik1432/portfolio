import { Aurora, CursorGlow, ScrollProgress } from "@/components/effects";
import {
  About,
  BuiltWithClaude,
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
      <Aurora />
      <CursorGlow />
      <ScrollProgress />
      <Navbar />
      <main className="relative z-10">
        <Hero />
        <Work />
        <BuiltWithClaude />
        <About />
        <Skills />
        <Journey />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
