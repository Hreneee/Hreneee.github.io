import { motion, useReducedMotion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

const contactLinks = [
  { label: "Email", href: "mailto:irene.huang.227q@gmail.com", color: "hover:text-primary" },
  { label: "LinkedIn", href: "https://www.linkedin.com/in/i-huang/", color: "hover:text-secondary" },
  { label: "GitHub", href: "https://github.com/Hreneee", color: "hover:text-primary" },
  {
    label: "Curriculum Vitae",
    href: "/documents/irene-huang-cv.pdf",
    color: "hover:text-secondary",
    openInNewTab: true,
  },
];

export default function Contact() {
  const reduceMotion = useReducedMotion();

  return (
    <motion.div
      initial={reduceMotion ? false : { opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      className="max-w-3xl space-y-16"
    >
      <section className="space-y-8">
        <h2 className="inline-block border-b border-black pb-2 text-xl">Contact</h2>

        <div className="flex flex-col gap-6 font-serif text-2xl italic">
          {contactLinks.map((link) => {
            const external = link.href.startsWith("http");
            const opensInNewTab = external || link.openInNewTab;

            return (
              <a
                key={link.label}
                href={link.href}
                target={opensInNewTab ? "_blank" : undefined}
                rel={opensInNewTab ? "noopener noreferrer" : undefined}
                className={`group flex w-max items-center gap-2 transition-all hover:translate-x-2 ${link.color}`}
              >
                {link.label}
                {opensInNewTab && <span className="sr-only"> (opens in a new tab)</span>}
                <ArrowUpRight className="h-5 w-5 -translate-x-4 opacity-0 transition-all group-hover:translate-x-0 group-hover:opacity-100 group-focus-visible:translate-x-0 group-focus-visible:opacity-100" />
              </a>
            );
          })}
        </div>
      </section>

      <section className="relative space-y-6 overflow-hidden border border-black bg-neutral-50 p-8">
        <h3 className="font-serif text-lg">Artificial Intelligence (AI) Usage</h3>
        <p className="text-neutral-600">
          This website was designed and written by me, with AI-assisted development used for coding, debugging, and implementation.
        </p>
      </section>
    </motion.div>
  );
}
