import { useEffect, useRef, useState } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { ArrowLeft, ArrowRight, ArrowUpRight, Expand, X } from "lucide-react";

const projectLinks = [
  { label: "Dashboard", href: "https://west-africa-nutrition-ranking-dashb.vercel.app/" },
  { label: "Writeup", href: "/documents/text-informed-nutritional-prioritization-west-africa.docx" },
  { label: "GitHub", href: "https://github.com/Hreneee/west-africa-nutrition-ranking" },
];

const figurePath = "/project-figures/west-africa-nutrition";

const projectFigures = [
  {
    src: `${figurePath}/top-20-foods-topsis-score.png`,
    title: "Literature-weighted food ranking",
    alt: "Horizontal bar chart ranking twenty foods by literature-weighted TOPSIS score. Boiled carrots rank first with a score of 0.790, followed by boiled onions at 0.781.",
    description: "The next highest-ranked foods are dried jute mallow at 0.613, raw dried benniseed at 0.602, and dried cowpea leaves at 0.513. Scores then decline gradually across the remaining fifteen foods.",
  },
  {
    src: `${figurePath}/figure-1-abstract-support-counts.png`,
    title: "Nutrient priorities in the literature",
    alt: "Horizontal bar chart of PubMed abstract support counts by nutrient. Iron leads with 123 supporting abstracts, followed by protein with 32 and vitamin A with 23.",
    description: "Zinc and folate each have 15 supporting abstracts. The remaining nutrients have seven or fewer, indicating that iron provides the strongest literature-derived signal by a wide margin.",
  },
  {
    src: `${figurePath}/rdi-coverage-heatmap-top-10-foods.png`,
    title: "Nutrient coverage across leading foods",
    alt: "Heatmap comparing percentage of recommended daily intake across eighteen nutrients for the ten highest-ranked foods, with darker blue cells indicating greater coverage.",
    description: "Dried leafy foods, shrimp, and beef liver provide broad coverage across many nutrients. Carrots and onions reach the display cap for iron but provide comparatively limited coverage elsewhere. Values are capped at 100 percent for display.",
  },
  {
    src: `${figurePath}/topsis-score-distribution.png`,
    title: "Distribution of ranking scores",
    alt: "Histogram of TOPSIS scores across eligible complete-case foods. Most foods cluster below 0.15, with a long right tail extending to approximately 0.79.",
    description: "The distribution is strongly right-skewed. The mean score is 0.089, the median is 0.071, and the difference between the 90th and 10th percentiles is 0.068.",
  },
];

type Figure = (typeof projectFigures)[number];

export default function Projects() {
  const reduceMotion = useReducedMotion();
  const [activeFigure, setActiveFigure] = useState(0);
  const [expandedFigure, setExpandedFigure] = useState<Figure | null>(null);
  const galleryRef = useRef<HTMLDivElement>(null);
  const cardRefs = useRef<(HTMLElement | null)[]>([]);
  const closeButtonRef = useRef<HTMLButtonElement>(null);
  const previouslyFocusedRef = useRef<HTMLElement | null>(null);

  const openFigure = (figure: Figure) => {
    previouslyFocusedRef.current = document.activeElement instanceof HTMLElement
      ? document.activeElement
      : null;
    setExpandedFigure(figure);
  };

  const closeFigure = () => setExpandedFigure(null);

  const goToFigure = (index: number) => {
    const nextIndex = Math.min(Math.max(index, 0), projectFigures.length - 1);
    setActiveFigure(nextIndex);
    cardRefs.current[nextIndex]?.scrollIntoView({
      behavior: reduceMotion ? "auto" : "smooth",
      block: "nearest",
      inline: "start",
    });
  };

  const handleGalleryScroll = () => {
    const gallery = galleryRef.current;
    if (!gallery) return;

    const nearestIndex = cardRefs.current.reduce((nearest, card, index) => {
      if (!card) return nearest;
      const nearestCard = cardRefs.current[nearest];
      const currentDistance = Math.abs(card.offsetLeft - gallery.scrollLeft);
      const nearestDistance = nearestCard
        ? Math.abs(nearestCard.offsetLeft - gallery.scrollLeft)
        : Number.POSITIVE_INFINITY;
      return currentDistance < nearestDistance ? index : nearest;
    }, 0);

    setActiveFigure(nearestIndex);
  };

  useEffect(() => {
    if (!expandedFigure) return;

    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") closeFigure();
      if (event.key === "Tab") {
        event.preventDefault();
        closeButtonRef.current?.focus();
      }
    };

    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", closeOnEscape);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", closeOnEscape);
      previouslyFocusedRef.current?.focus();
    };
  }, [expandedFigure]);

  return (
    <motion.div
      initial={reduceMotion ? false : { opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      className="space-y-12 pb-24"
    >
      <h2 className="inline-block border-b border-black pb-2 text-xl">Selected Projects</h2>

      <article className="group relative overflow-hidden">
        <div className="absolute left-0 top-0 h-1 w-full origin-left scale-x-0 bg-secondary transition-transform duration-500 ease-out group-hover:scale-x-100" />

        <h3 className="mb-6 mt-4 font-serif text-2xl italic">
          Text-Informed Nutrition Prioritization for West Africa
        </h3>

        <div className="space-y-6 text-neutral-800">
          <p>
            While conducting my{" "}
            <a href="#/experience" className="border-b border-black transition-colors hover:text-primary">
              DEA nutrition research
            </a>
            , I began to grapple with the idea of how external factors including geography, resources, food safety, cost, and access affect the realistic assembly and delivery of nutritious meals. This thought expanded into an independent project evaluating nutritious foods in West Africa and ranking them based on how well they satisfy known nutrient deficiencies.
          </p>

          <div className="space-y-2">
            <p>
              <strong className="detail-label">Methodology:</strong> Text-mining, Python, Technique for Order of Preference by Similarity to Ideal Solution (TOPSIS)
            </p>
            <p>
              <strong className="detail-label">Key Finding:</strong> Carrots received the highest TOPSIS score! This means it satisfies the observed nutrient deficiencies in West Africa (according to public health literature) better than other foods in the dataset.
            </p>
            <p>
            I built a dashboard to display my findings, wrote a simple paper covering the purpose and results of this project, and documented everything in a GitHub repo.
          </p>
          </div>
        </div>

        <div className="mt-8 flex flex-wrap gap-6 font-medium">
          {projectLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              target={link.href.startsWith("http") ? "_blank" : undefined}
              rel={link.href.startsWith("http") ? "noopener noreferrer" : undefined}
              className="inline-flex items-center gap-1 border-b border-transparent transition-colors hover:border-primary hover:text-primary"
            >
              {link.label} <ArrowUpRight className="h-4 w-4" />
              {link.href.startsWith("http") && <span className="sr-only"> (opens in a new tab)</span>}
            </a>
          ))}
        </div>

        <section className="mt-10" aria-label="Project charts">
          <div className="mb-4 flex items-center justify-between gap-6">
            <h4 className="font-serif text-xl italic">Research Figures</h4>
            <GalleryControls activeFigure={activeFigure} goToFigure={goToFigure} desktop />
          </div>

          <div
            ref={galleryRef}
            onScroll={handleGalleryScroll}
            onKeyDown={(event) => {
              if (event.key === "ArrowLeft") goToFigure(activeFigure - 1);
              if (event.key === "ArrowRight") goToFigure(activeFigure + 1);
            }}
            className="no-scrollbar flex snap-x snap-mandatory gap-4 overflow-x-auto pb-2"
            tabIndex={0}
            aria-label="Project charts. Use the left and right arrow keys to navigate."
          >
            {projectFigures.map((figure, index) => (
              <FigurePanel
                key={figure.src}
                figure={figure}
                index={index}
                onExpand={openFigure}
                cardRef={(element) => {
                  cardRefs.current[index] = element;
                }}
              />
            ))}
          </div>

          <GalleryControls activeFigure={activeFigure} goToFigure={goToFigure} />
        </section>
      </article>

      {expandedFigure && (
        <div
          className="fixed inset-0 z-50 grid place-items-center bg-black/80 p-4 backdrop-blur-sm md:p-10"
          role="dialog"
          aria-modal="true"
          aria-label={expandedFigure.title}
          onMouseDown={(event) => {
            if (event.target === event.currentTarget) closeFigure();
          }}
        >
          <div className="relative flex max-h-full w-full max-w-7xl flex-col bg-white">
            <button
              type="button"
              ref={closeButtonRef}
              onClick={closeFigure}
              className="absolute right-3 top-3 z-10 grid h-10 w-10 place-items-center border border-black bg-white transition-colors hover:bg-black hover:text-white"
              aria-label="Close expanded figure"
              autoFocus
            >
              <X className="h-5 w-5" />
            </button>
            <div className="min-h-0 flex-1 overflow-auto bg-[#f7f6f1] p-3 md:p-6">
              <img
                src={expandedFigure.src}
                alt={expandedFigure.alt}
                className="mx-auto max-h-[72vh] w-full object-contain"
              />
            </div>
          </div>
        </div>
      )}
    </motion.div>
  );
}

function FigurePanel({
  figure,
  index,
  onExpand,
  cardRef,
}: {
  figure: Figure;
  index: number;
  onExpand: (figure: Figure) => void;
  cardRef?: (element: HTMLElement | null) => void;
}) {
  return (
    <figure
      ref={cardRef}
      className="w-[90%] shrink-0 snap-start border border-black/20 bg-white sm:w-[82%]"
    >
      <button
        type="button"
        onClick={() => onExpand(figure)}
        className="group/figure relative block w-full cursor-zoom-in overflow-hidden bg-[#f7f6f1] text-left"
        aria-label={`Expand ${figure.title}`}
        aria-describedby={`figure-description-${index}`}
      >
        <img
          src={figure.src}
          alt={figure.alt}
          loading="lazy"
          className="aspect-[16/10] w-full object-contain transition-transform duration-500 group-hover/figure:scale-[1.01]"
        />
        <span className="absolute right-3 top-3 inline-flex items-center gap-2 border border-black bg-white px-3 py-2 text-xs font-medium uppercase tracking-[0.12em] opacity-0 transition-opacity group-hover/figure:opacity-100 group-focus-visible/figure:opacity-100">
          <Expand className="h-3.5 w-3.5" /> Expand
        </span>
      </button>
      <p id={`figure-description-${index}`} className="sr-only">
        {figure.description}
      </p>
    </figure>
  );
}

function GalleryControls({
  activeFigure,
  goToFigure,
  desktop = false,
}: {
  activeFigure: number;
  goToFigure: (index: number) => void;
  desktop?: boolean;
}) {
  return (
    <div className={desktop ? "hidden items-center gap-2 sm:flex" : "mt-4 flex items-center justify-between sm:hidden"}>
      <span className={desktop ? "mr-2 text-xs tabular-nums text-neutral-500" : "text-xs tabular-nums text-neutral-500"} aria-live="polite">
        {String(activeFigure + 1).padStart(2, "0")} / {String(projectFigures.length).padStart(2, "0")}
      </span>
      <div className="flex gap-2">
        <button
          type="button"
          onClick={() => goToFigure(activeFigure - 1)}
          disabled={activeFigure === 0}
          className="grid h-10 w-10 place-items-center border border-black transition-colors hover:bg-black hover:text-white disabled:cursor-not-allowed disabled:opacity-25 disabled:hover:bg-transparent disabled:hover:text-black"
          aria-label="Previous figure"
        >
          <ArrowLeft className="h-4 w-4" />
        </button>
        <button
          type="button"
          onClick={() => goToFigure(activeFigure + 1)}
          disabled={activeFigure === projectFigures.length - 1}
          className="grid h-10 w-10 place-items-center border border-black transition-colors hover:bg-black hover:text-white disabled:cursor-not-allowed disabled:opacity-25 disabled:hover:bg-transparent disabled:hover:text-black"
          aria-label="Next figure"
        >
          <ArrowRight className="h-4 w-4" />
        </button>
      </div>
    </div>
  );
}
