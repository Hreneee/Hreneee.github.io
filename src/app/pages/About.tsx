import { motion, useReducedMotion } from "framer-motion";

export default function About() {
  const reduceMotion = useReducedMotion();

  return (
    <motion.div
      initial={reduceMotion ? false : { opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      className="space-y-8"
    >
      <h2 className="inline-block border-b border-black pb-2 text-xl">About</h2>

      <div className="grid max-w-[1280px] items-start gap-10 md:grid-cols-[minmax(0,1fr)_20rem] lg:grid-cols-[minmax(0,1fr)_22rem] lg:gap-16">
        <div className="space-y-6 text-[1.08rem] md:pt-2">
          <p>
            I am a graduate student with a background in computer science and business, interested in using quantitative methods to support decision-making in energy systems. My research interests include optimization and multi-criteria decision analysis applied to power systems, renewable energy transitions, and infrastructure planning, particularly around access, investment, and resource allocation.
          </p>
          <p>
            I am interested in developing methods that help decision-makers evaluate trade-offs and design energy systems that are efficient, reliable, and sustainable. I am also exploring emerging computational approaches, including quantum optimization, and their potential applications to complex energy problems.
          </p>
        </div>

        <figure className="relative isolate order-first w-[min(100%,22rem)] justify-self-center md:order-none md:justify-self-end">
          <div
            className="absolute inset-0 translate-x-2 translate-y-2 bg-primary"
            aria-hidden="true"
          />
          <img
            src="/images/irene-huang-portrait.JPG"
            alt="Portrait of Irene Huang against a gray studio background."
            className="relative h-auto w-full border border-black object-contain"
            loading="eager"
            decoding="async"
          />
        </figure>
      </div>
    </motion.div>
  );
}
