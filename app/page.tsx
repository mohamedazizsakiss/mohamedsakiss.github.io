import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Projects from "@/components/Projects";
import Certifications from "@/components/Certifications";
import Contact from "@/components/Contact";



export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <Projects />
      <Certifications /> 
      <Contact />
    </main>
  );
}