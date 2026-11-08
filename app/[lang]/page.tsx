import { notFound } from "next/navigation";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Experience from "@/components/Experience";
import Projects from "@/components/Projects";
import Certifications from "@/components/Certifications";
import Contact from "@/components/Contact";
import { hasLocale } from "@/i18n/config";
import { getDictionary } from "@/i18n/dictionaries";

export default async function Home({ params }: PageProps<"/[lang]">) {
  const { lang } = await params;
  if (!hasLocale(lang)) notFound();
  const dict = getDictionary(lang);

  return (
    <>
      <Navbar lang={lang} t={dict.nav} />
      <main className="flex-1 w-full flex flex-col pb-24">
        <Hero t={dict.hero} />
        <Experience lang={lang} t={dict.experience} />
        <Projects t={dict.projects} />
        <Certifications lang={lang} t={dict.credentials} />
        <Contact t={dict.contact} />
      </main>
    </>
  );
}
