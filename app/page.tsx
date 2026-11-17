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
      <ScrollProgress />
      <Navbar />
      <main>
        <Hero />
        <Work />
        <About />
        <Skills />
        <Journey />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
