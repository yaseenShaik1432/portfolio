import { ScrollProgress } from "@/components/effects";
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
      <ScrollProgress />
      <Navbar />
      <main>
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
