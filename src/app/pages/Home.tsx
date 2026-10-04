import { motion, useReducedMotion } from "framer-motion";
import { Link } from "react-router";

export default function Home() {
  const reduceMotion = useReducedMotion();

  return (
    <motion.section
      initial={reduceMotion ? false : { opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      className="relative isolate min-h-[calc(100dvh-8rem)] overflow-hidden"
      aria-labelledby="home-title"
    >
      <h2 id="home-title" className="sr-only">Irene Huang portfolio</h2>

      <Link
        to="/projects"
        className="group absolute left-[3%] top-[13%] z-10 inline-flex items-center font-serif text-[clamp(3.5rem,9vw,8rem)] italic leading-none tracking-[-0.035em] text-[#8a8a8a] transition-colors duration-500 hover:text-secondary focus-visible:text-secondary md:left-[7%] md:top-[10%]"
      >
        Research
        <HairlineArrow />
      </Link>

      <div className="pointer-events-none relative z-20 flex min-h-[calc(100dvh-8rem)] items-center justify-center px-2">
        <p
          aria-hidden="true"
          className="select-none whitespace-nowrap font-serif text-[clamp(4.5rem,13.5vw,11rem)] italic leading-[0.82] tracking-[-0.045em] text-black"
        >
          Irene Huang
        </p>
      </div>

      <Link
        to="/experience"
        className="group absolute bottom-[12%] right-[1%] z-10 inline-flex items-center font-serif text-[clamp(3.5rem,9vw,8rem)] italic leading-none tracking-[-0.035em] text-[#8a8a8a] transition-colors duration-500 hover:text-primary focus-visible:text-primary md:bottom-[9%] md:right-[5%]"
      >
        Experience
        <HairlineArrow />
      </Link>
    </motion.section>
  );
}

function HairlineArrow() {
  return (
    <span
      aria-hidden="true"
      className="relative ml-4 block h-px w-[clamp(2.25rem,4vw,3.25rem)] shrink-0 bg-current"
    >
      <span className="absolute right-0 top-1/2 h-2 w-2 -translate-y-1/2 rotate-45 border-r border-t border-current" />
    </span>
  );
}
