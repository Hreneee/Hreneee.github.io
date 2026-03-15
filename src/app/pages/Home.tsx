import { AnimatedBackground } from "../components/AnimatedBackground";
import { Hero } from "../components/Hero";
import { About } from "../components/About";
import { Research } from "../components/Research";
import { Projects } from "../components/Projects";
import { Experience } from "../components/Experience";
import { Contact } from "../components/Contact";

export function Home() {
  return (
    <div className="relative">
      <AnimatedBackground />
      <Hero />
      <About />
      <Research />
      <Projects />
      <Experience />
      <Contact />
      
      <footer className="py-8 text-center border-t border-slate-200/50 bg-white/40 backdrop-blur-sm relative z-10">
        <p className="text-slate-400 font-['Inter'] text-sm">
          © {new Date().getFullYear()} Irene Huang. All rights reserved.
        </p>
      </footer>
    </div>
  );
}
