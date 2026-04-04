import Link from 'next/link';

export default function Navbar() {
  return (
    <nav className="fixed w-full z-50 bg-slate-900/90 backdrop-blur-sm border-b border-slate-800">
      <div className="max-w-6xl mx-auto px-4 py-4 flex justify-between items-center">
        <h1 className="text-xl font-bold font-mono text-cyan-400">masakiss.ai</h1>
        <div className="space-x-6 text-sm font-medium hidden md:block">
          <Link href="#about" className="hover:text-cyan-400 transition">About</Link>
          <Link href="#projects" className="hover:text-cyan-400 transition">Projects</Link>
          <Link href="#certifications" className="hover:text-cyan-400 transition">Certifications</Link>
          <Link href="#contact" className="hover:text-cyan-400 transition">Contact</Link>
        </div>
      </div>
    </nav>
  );
}