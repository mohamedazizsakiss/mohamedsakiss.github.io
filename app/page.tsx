import CalibrationAxis from "@/components/CalibrationAxis";
import Hero from "@/components/Hero";
import Projects from "@/components/Projects";
import Certifications from "@/components/Certifications";
import Contact from "@/components/Contact";

export default function Home() {
  return (
    <>
      <CalibrationAxis />
      <main className="flex-1 w-full flex flex-col pb-24">
        <Hero />
        <Projects />
        <Certifications /> 
        <Contact />
      </main>
    </>
  );
}