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

      <div className="max-w-4xl space-y-6 text-[1.08rem]">
          <p>
            I am a graduate student with a background in computer science and business, interested in using quantitative methods to support decision-making in energy systems. My research interests include optimization and multi-criteria decision analysis applied to power systems, renewable energy transitions, and infrastructure planning, particularly around access, investment, and resource allocation.
          </p>
          <p>
            I am interested in developing methods that help decision-makers evaluate trade-offs and design energy systems that are efficient, reliable, and sustainable. I am also exploring emerging computational approaches, including quantum optimization, and their potential applications to complex energy problems.
          </p>
      </div>
    </motion.div>
  );
}
