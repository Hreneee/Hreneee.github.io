import { useMemo, useRef, useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import {
  ArrowLeft,
  ArrowRight,
  TrendingUp,
  Activity,
  Sparkles,
} from "lucide-react";

type ResearchProject = {
  id: string;
  title: string;
  category: string;
  status: "Ongoing Research" | "Completed Study";
  summary: React.ReactNode;
  sections: {
    title: string;
    content: string;
  }[];
};

const researchProjects: ResearchProject[] = [
  {
    id: "nutrition",
    title: "Nutritional Optimization with Binary Data Envelopment Analysis (DEA)",
    category: "Operations Research",
    status: "Ongoing Research",
    summary:
      <p className="font-['Inter'] text-lg leading-8 text-slate-500 max-w-4xl">
            From multiple poultry options in the <a
            href="https://agdatacommons.nal.usda.gov/articles/dataset/Composition_of_Foods_Raw_Processed_Prepared_USDA_National_Nutrient_Database_for_Standard_Reference_Release_27/25060841"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#6B5CFF] underline decoration-[#6B5CFF]/35 underline-offset-4 transition-colors hover:text-[#5848f5]"
          >
            U.S. Department of Agriculture&apos;s national nutrient database
          </a>, the Binary DEA model identified one
        nutritionally optimal choice.
        </p>,
    sections: [
      {
        title: "Problem",
        content:
          "Choosing healthier meals is not always straightforward because foods vary across many nutrients. To simplify meal decisions, a framework is needed to evaluate foods and identify the most nutritionally beneficial option within a food group.",
      },
      {
        title: "Methodology",
        content:
          "This project uses a Binary DEA model to compare foods across beneficial and limiting nutrients, identifying the single most nutritionally beneficial option within a food group.",
      },
      {
        title: "Current Focus",
        content:
          "Current work centers on testing the model across other food groups and using the results to surface healthier substitutes among them.",
      },
    ],
  },
  {
    id: "soybean",
    title: "Soybean Commodity Price Forecasting",
    category: "Econometrics and Time-Series",
    status: "Completed Study",
    summary:
      "Analyzing historical U.S. soybean pricing data to uncover inelastic commodity behavior using forecasting models and market data.",
    sections: [
      {
        title: "Dataset",
        content:
          "The study used historical U.S. soybean pricing data and related market variables to examine long-term movement, seasonality, and agricultural price behavior.",
      },
      {
        title: "Models",
        content:
          "Regression and time-series forecasting methods were used to evaluate price movement, identify trend structure, and compare different ways of modeling commodity behavior over time.",
      },
      {
        title: "Results",
        content:
          "The analysis highlighted the inelastic nature of agricultural commodity pricing under short-term shocks and showed how forecasting methods can support decision-making in market-sensitive environments.",
      },
    ],
  },
];

function SoybeanBean({
  x,
  y,
  rotate,
  index,
  cursor,
}: {
  x: number;
  y: number;
  rotate: number;
  index: number;
  cursor: { x: number; y: number; active: boolean };
}) {
  const dx = cursor.x - x;
  const dy = cursor.y - y;
  const distance = Math.sqrt(dx * dx + dy * dy);
  const influence = cursor.active ? Math.max(0, 1 - distance / 160) : 0;

  const pushX =
    influence > 0 ? (-dx / Math.max(distance, 1)) * 24 * influence : 0;
  const pushY =
    influence > 0 ? (-dy / Math.max(distance, 1)) * 20 * influence : 0;

  const idleOffsetX = Math.sin(index * 1.7) * 3;
  const idleOffsetY = Math.cos(index * 1.4) * 2;

  return (
    <motion.div
      className="absolute"
      style={{ left: x, top: y }}
      animate={{
        x: pushX,
        y: pushY,
        rotate: rotate + pushX * 0.25,
        scale: 1 + influence * 0.12,
      }}
      transition={{ type: "spring", stiffness: 180, damping: 18, mass: 0.65 }}
    >
      <motion.div
        animate={{
          y: [idleOffsetY, idleOffsetY - 6, idleOffsetY],
          x: [idleOffsetX, idleOffsetX + 3, idleOffsetX],
          rotate: [rotate - 1.5, rotate + 1.5, rotate - 1.5],
        }}
        transition={{
          duration: 4.2 + index * 0.15,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      >
        <svg
          width="50"
          height="36"
          viewBox="0 0 50 36"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="drop-shadow-[0_10px_14px_rgba(0,0,0,0.08)]"
        >
          <path
            d="M25.2 3.1C33.8 1.9 42.4 7 45.2 14.5C47.8 21.3 44.6 28.6 37.2 31.4C30.1 34.1 19.9 33.3 12.3 30.3C5.4 27.6 1.5 21.2 2.8 14.8C4.4 7.2 15 4.5 25.2 3.1Z"
            fill="url(#beanFillStageTabs)"
            stroke="#B8996C"
            strokeOpacity="0.78"
          />
          <path
            d="M15.5 19.4C17.7 16.3 21.9 14.1 26.7 13.6C30.4 13.2 33.9 14 36.7 15.9"
            stroke="#B18E5D"
            strokeWidth="1.4"
            strokeLinecap="round"
            opacity="0.8"
          />
          <defs>
            <linearGradient
              id="beanFillStageTabs"
              x1="5"
              y1="5"
              x2="43"
              y2="30"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#E7D4AB" />
              <stop offset="1" stopColor="#CFB58A" />
            </linearGradient>
          </defs>
        </svg>
      </motion.div>
    </motion.div>
  );
}

function SoybeanStage() {
  const stageRef = useRef<HTMLDivElement | null>(null);
  const [cursor, setCursor] = useState({ x: 0, y: 0, active: false });

  const beans = useMemo(
    () => [
      { x: 80, y: 130, rotate: -16 },
      { x: 180, y: 95, rotate: 14 },
      { x: 300, y: 115, rotate: -10 },
      { x: 430, y: 92, rotate: 12 },
      { x: 560, y: 125, rotate: -8 },
      { x: 680, y: 98, rotate: 10 },
      { x: 150, y: 430, rotate: 8 },
      { x: 260, y: 455, rotate: -12 },
      { x: 400, y: 438, rotate: 10 },
      { x: 540, y: 452, rotate: -8 },
      { x: 680, y: 430, rotate: 12 },
    ],
    []
  );

  const handleMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = stageRef.current?.getBoundingClientRect();
    if (!rect) return;
    setCursor({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
      active: true,
    });
  };

  return (
    <div
      ref={stageRef}
      onMouseMove={handleMove}
      onMouseLeave={() => setCursor((prev) => ({ ...prev, active: false }))}
      className="relative min-h-[460px] overflow-hidden rounded-[36px] border border-slate-200/60 bg-[linear-gradient(180deg,#ffffff_0%,#faf8ff_100%)]"
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_10%,rgba(107,92,255,0.09),transparent_24%),radial-gradient(circle_at_85%_80%,rgba(107,92,255,0.07),transparent_28%)]" />

      <div className="absolute left-0 right-0 bottom-0 h-[32%] rounded-t-[40%] bg-[linear-gradient(180deg,rgba(227,221,255,0.15)_0%,rgba(220,214,255,0.28)_100%)]" />

      <svg
        className="absolute inset-0 h-full w-full"
        viewBox="0 0 900 520"
        preserveAspectRatio="none"
      >
        {/* faint guide */}
        <path
          d="M0 335 
             C 70 320, 120 350, 180 300
             S 290 280, 350 315
             S 470 120, 560 195
             S 660 90, 720 150
             S 810 145, 900 205"
          fill="none"
          stroke="rgba(107,92,255,0.08)"
          strokeWidth="2"
          strokeLinecap="round"
        />

        {/* observed monthly prices */}
        <motion.path
          d="M0 335 
             C 70 320, 120 350, 180 300
             S 290 280, 350 315
             S 470 120, 560 195
             S 660 90, 720 150
             S 790 145, 835 215"
          fill="none"
          stroke="rgba(107,92,255,0.18)"
          strokeWidth="4"
          strokeLinecap="round"
          initial={{ pathLength: 0.15, opacity: 0.12 }}
          animate={{ pathLength: [0.9, 1, 0.9], opacity: [0.14, 0.2, 0.14] }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        />

        {/* short-term forecast: tighter to observed line */}
        <motion.path
          d="M835 215 C 847 220, 860 222, 872 221 S 888 218, 900 220"
          fill="none"
          stroke="rgba(245,158,11,0.38)"
          strokeWidth="3.5"
          strokeLinecap="round"
          strokeDasharray="8 8"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: [0.25, 1, 0.25] }}
          transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut" }}
        />
      </svg>

      <motion.div
        className="absolute pointer-events-none h-32 w-32 rounded-full bg-[#6B5CFF]/10 blur-2xl"
        animate={{
          x: cursor.active ? cursor.x - 64 : 320,
          y: cursor.active ? cursor.y - 64 : 260,
          opacity: cursor.active ? 1 : 0.45,
        }}
        transition={{ type: "spring", stiffness: 120, damping: 16 }}
      />

      {beans.map((bean, idx) => (
        <SoybeanBean
          key={idx}
          x={bean.x}
          y={bean.y}
          rotate={bean.rotate}
          index={idx}
          cursor={cursor}
        />
      ))}

      {[0, 1, 2, 3, 4].map((n) => (
        <motion.div
          key={n}
          className="absolute"
          initial={{ y: -80, opacity: 0 }}
          animate={{
            y: [0, 230, 420],
            opacity: [0, 1, 1],
            x: [0, 10, -6],
          }}
          transition={{
            duration: 6 + n * 0.5,
            repeat: Infinity,
            delay: n * 0.9,
            ease: "easeInOut",
          }}
          style={{ left: `${12 + n * 17}%`, top: "2%" }}
        >
          <svg width="44" height="30" viewBox="0 0 50 36" fill="none">
            <path
              d="M25.2 3.1C33.8 1.9 42.4 7 45.2 14.5C47.8 21.3 44.6 28.6 37.2 31.4C30.1 34.1 19.9 33.3 12.3 30.3C5.4 27.6 1.5 21.2 2.8 14.8C4.4 7.2 15 4.5 25.2 3.1Z"
              fill="#DEC79C"
              opacity="0.82"
            />
          </svg>
        </motion.div>
      ))}

      <div className="absolute left-6 top-6">
        <div className="inline-flex items-center rounded-full border border-[#6B5CFF]/12 bg-white/78 px-3 py-1.5 backdrop-blur-md">
          <span className="font-['Inter'] text-[11px] uppercase tracking-[0.2em] text-[#6B5CFF]">
            Move through the field
          </span>
        </div>
      </div>

      <div className="absolute left-6 bottom-6 rounded-2xl border border-white/60 bg-white/55 px-4 py-3 backdrop-blur-md">
        <p className="font-['Inter'] text-[11px] uppercase tracking-[0.18em] text-slate-400">
          Monthly soybean price movement
        </p>
        <div className="mt-2 flex items-center gap-3">
          <div className="flex items-center gap-2">
            <span className="h-[2px] w-8 rounded-full bg-[#6B5CFF]/40" />
            <span className="font-['Inter'] text-xs text-slate-500">Observed</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="h-[2px] w-8 rounded-full border-t-2 border-dashed border-amber-400/70" />
            <span className="font-['Inter'] text-xs text-slate-500">
              Short-term forecast
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

function Cell({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div
      className={`px-3 py-2 text-sm text-slate-700 border-b border-slate-200/60 ${className}`}
    >
      {children}
    </div>
  );
}
/*
function DEAStage() {
  return (
    <div className="relative min-h-[460px] overflow-hidden rounded-[36px] bg-[linear-gradient(180deg,#ffffff_0%,#fbfaff_100%)] px-5 py-5">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_18%_18%,rgba(107,92,255,0.06),transparent_22%),radial-gradient(circle_at_82%_75%,rgba(107,92,255,0.05),transparent_26%)]" />

      <div className="relative z-10">
        <div className="inline-flex items-center rounded-full border border-[#6B5CFF]/12 bg-white/78 px-3 py-1.5 backdrop-blur-md mb-4">
          <span className="font-['Inter'] text-[11px] uppercase tracking-[0.2em] text-[#6B5CFF]">
            DEA comparison workspace
          </span>
        </div>

        <div className="rounded-[28px] bg-white/86 backdrop-blur-md shadow-[0_10px_28px_rgba(15,23,42,0.04)] overflow-hidden">
          <div className="grid grid-cols-[120px_1.5fr_repeat(6,minmax(80px,1fr))] bg-slate-100/90 border-b border-slate-200/70">
            <Cell className="font-semibold text-slate-800">NDB_No</Cell>
            <Cell className="font-semibold text-slate-800">Shrt_Desc</Cell>
            <Cell className="font-semibold text-slate-800 bg-yellow-100/80">FA_Sat</Cell>
            <Cell className="font-semibold text-slate-800">FA_Mono</Cell>
            <Cell className="font-semibold text-slate-800">FA_Poly</Cell>
            <Cell className="font-semibold text-slate-800 bg-yellow-100/80">Chol</Cell>
            <Cell className="font-semibold text-slate-800 bg-yellow-100/80">Sodium</Cell>
            <Cell className="font-semibold text-slate-800 bg-yellow-100/80">Protein</Cell>
          </div>

          <div className="grid grid-cols-[120px_1.5fr_repeat(6,minmax(80px,1fr))] bg-white/95">
            <Cell>05286</Cell>
            <Cell className="font-medium text-slate-800">TURKEY AND GRAVY, FROZEN</Cell>
            <Cell className="bg-yellow-100/70">0.85</Cell>
            <Cell>0.97</Cell>
            <Cell>0.47</Cell>
            <Cell className="bg-yellow-100/70">18</Cell>
            <Cell className="bg-yellow-100/70">554</Cell>
            <Cell className="bg-yellow-100/70">5.88</Cell>
          </div>

          <div className="grid grid-cols-[120px_1.5fr_repeat(6,minmax(80px,1fr))] bg-slate-50/90">
            <Cell className="text-slate-400">Target</Cell>
            <Cell className="text-slate-500">comparison rule</Cell>
            <Cell className="bg-yellow-100/70">≤ 0.85</Cell>
            <Cell>≥ 0.97</Cell>
            <Cell>≥ 0.47</Cell>
            <Cell className="bg-yellow-100/70">≤ 18</Cell>
            <Cell className="bg-yellow-100/70">≤ 554</Cell>
            <Cell className="bg-yellow-100/70">≥ 5.88</Cell>
          </div>

          <div className="grid grid-cols-[120px_1.5fr_repeat(6,minmax(80px,1fr))] bg-white/95">
            <Cell>05000</Cell>
            <Cell>CHICKEN, BROILER, ROTISSERIE, BBQ, BREAST</Cell>
            <Cell>0.863</Cell>
            <Cell>1.444</Cell>
            <Cell>0.49</Cell>
            <Cell>86</Cell>
            <Cell>328</Cell>
            <Cell>28.04</Cell>
          </div>
          <div className="grid grid-cols-[120px_1.5fr_repeat(6,minmax(80px,1fr))] bg-white/90">
            <Cell>05004</Cell>
            <Cell>CHICKEN, BROILERS OR FRYERS, RSTD</Cell>
            <Cell>3.7</Cell>
            <Cell>5.17</Cell>
            <Cell>2.9</Cell>
            <Cell>107</Cell>
            <Cell>79</Cell>
            <Cell>26.78</Cell>
          </div>
          <div className="grid grid-cols-[120px_1.5fr_repeat(6,minmax(80px,1fr))] bg-white/95">
            <Cell>05010</Cell>
            <Cell>CHICKEN, BROILERS OR FRYERS, STWD</Cell>
            <Cell>3.5</Cell>
            <Cell>4.93</Cell>
            <Cell>2.74</Cell>
            <Cell>78</Cell>
            <Cell>67</Cell>
            <Cell>24.68</Cell>
          </div>
        </div>

        <div className="mt-4 flex flex-wrap gap-3">
          <div className="rounded-full bg-yellow-100/80 px-3 py-2">
            <span className="font-['Inter'] text-sm font-medium text-slate-700">
              highlighted columns = decision constraints
            </span>
          </div>
          <div className="rounded-full bg-white/82 px-3 py-2 shadow-[0_6px_16px_rgba(15,23,42,0.04)]">
            <span className="font-['Inter'] text-sm font-medium text-slate-700">
              target food compared against alternatives
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
*/
/*
function DEAStage() {
  const lowerIsBetter = ["Saturated fat", "Cholesterol", "Sodium"];
  const higherIsBetter = ["Protein"];

  const alternatives = [
    "Chicken, Rotisserie BBQ Breast",
    "Chicken, Broilers or Fryers, RSTD",
    "Chicken, Broilers or Fryers, STWD",
  ];

  return (
    <div className="relative min-h-[460px] overflow-hidden rounded-[36px] bg-[linear-gradient(180deg,#ffffff_0%,#fbfaff_100%)] px-5 py-5">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_18%_18%,rgba(107,92,255,0.06),transparent_22%),radial-gradient(circle_at_82%_75%,rgba(107,92,255,0.05),transparent_26%)]" />

      <div className="absolute -right-12 top-10 h-56 w-56 rounded-full bg-[#6B5CFF]/[0.05] blur-3xl" />
      <div className="absolute left-8 bottom-10 h-44 w-44 rounded-full bg-emerald-400/[0.08] blur-3xl" />

      <div className="relative z-10">
        <div className="inline-flex items-center rounded-full border border-[#6B5CFF]/12 bg-white/78 px-3 py-1.5 backdrop-blur-md mb-4">
          <span className="font-['Inter'] text-[11px] uppercase tracking-[0.2em] text-[#6B5CFF]">
            Binary DEA nutrition insight
          </span>
        </div>

        <div className="mb-5 max-w-4xl">
          <p className="font-['Inter'] text-base md:text-lg leading-8 text-slate-700">
            Did you know{" "}
            <span className="font-semibold text-[#6B5CFF]">
              Frozen Turkey and Gravy
            </span>{" "}
            is the best-performing food choice in the poultry food group, as outlined by the 
            <span><a target = "_blank" href = "https://agdatacommons.nal.usda.gov/articles/dataset/Composition_of_Foods_Raw_Processed_Prepared_USDA_National_Nutrient_Database_for_Standard_Reference_Release_27/25060841" rel="noopener noreferrer"> US Department of Agriculture's (USDA) national nutrient database?</a></span>
          </p>
        </div>

        <div className="rounded-[30px] bg-white/84 backdrop-blur-md shadow-[0_10px_28px_rgba(15,23,42,0.04)] overflow-hidden border border-white/70">
          <div className="grid grid-cols-1 lg:grid-cols-[1.15fr_0.85fr]">
            <div className="relative px-6 py-6 lg:px-7 lg:py-7 border-b lg:border-b-0 lg:border-r border-slate-200/70">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_18%_18%,rgba(16,185,129,0.10),transparent_28%)]" />

              <div className="relative z-10">

                <div className="flex items-start gap-4">
                  <div className="relative shrink-0">
                    <div className="absolute inset-0 rounded-full bg-emerald-400/20 blur-md scale-[1.8]" />
                    <div className="relative flex h-14 w-14 items-center justify-center rounded-full border-4 border-white bg-emerald-400 shadow-[0_0_0_10px_rgba(16,185,129,0.12)]">
                      <div className="h-4 w-4 rounded-full bg-white/95" />
                    </div>
                  </div>

                  <div>
                    <h4 className="font-['Inter_Tight'] text-2xl md:text-3xl font-semibold text-slate-900 leading-tight">
                      Frozen Turkey and Gravy
                    </h4>
                  </div>
                </div>

                <div className="mt-6 space-y-4">
                  <div>
                    <p className="font-['Inter'] text-sm font-medium text-slate-700 mb-2">
                      Nutrients the model aims to limit
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {lowerIsBetter.map((item) => (
                        <span
                          key={item}
                          className="rounded-full bg-amber-50 px-3 py-1.5 font-['Inter'] text-sm text-slate-700 border border-amber-100"
                        >
                          {item}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div>
                    <p className="font-['Inter'] text-sm font-medium text-slate-700 mb-2">
                      Nutrients the model aims to encourage
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {higherIsBetter.map((item) => (
                        <span
                          key={item}
                          className="rounded-full bg-emerald-50 px-3 py-1.5 font-['Inter'] text-sm text-slate-700 border border-emerald-100"
                        >
                          {item}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="px-6 py-6 lg:px-7 lg:py-7 bg-[linear-gradient(180deg,rgba(250,248,255,0.72)_0%,rgba(255,255,255,0.45)_100%)]">
              <p className="font-['Inter'] text-xs uppercase tracking-[0.18em] text-slate-400 mb-4">
                Compared against alternatives
              </p>

              <div className="space-y-3">
                {alternatives.map((food, idx) => (
                  <motion.div
                    key={food}
                    initial={{ opacity: 0, x: 18 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.35, delay: idx * 0.06 }}
                    className="rounded-2xl bg-white/88 border border-slate-200/70 px-4 py-4 shadow-[0_6px_18px_rgba(15,23,42,0.03)]"
                  >
                    <div className="flex items-center gap-3">
                      <div className="flex h-9 w-9 items-center justify-center rounded-full bg-[#6B5CFF]/10 border border-[#6B5CFF]/12">
                        <div className="h-3 w-3 rounded-full bg-[#6B5CFF]" />
                      </div>
                      <div>
                        <p className="font-['Inter'] text-sm font-medium text-slate-800 leading-6">
                          {food}
                        </p>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="mt-4 flex flex-wrap gap-3">
          <div className="rounded-full bg-white/82 px-3 py-2 shadow-[0_6px_16px_rgba(15,23,42,0.04)]">
            <span className="font-['Inter'] text-sm font-medium text-slate-700">
              nutrients considered: saturated fat, cholesterol, sodium, healthy fats, protein
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
*/
function DEAStage() {
  const deaFoods = [
    {
      label: "Frozen Turkey and Gravy",
      subtitle: "Selected by the Binary DEA model",
      value: 1,
      winner: true,
    },
    {
      label: "Chicken, Rotisserie BBQ Breast",
      subtitle: "Evaluated under the same nutrient constraints",
      value: 0,
      winner: false,
    },
    {
      label: "Roasted Chicken, Broilers or Fryers",
      subtitle: "Evaluated under the same nutrient constraints",
      value: 0,
      winner: false,
    },
    {
      label: "Stewed Chicken, Broilers or Fryers",
      subtitle: "Evaluated under the same nutrient constraints",
      value: 0,
      winner: false,
    },
  ];

  const nutrients = [
    "Saturated fat",
    "Cholesterol",
    "Sodium",
    "Protein",
  ];

  return (
    <>
      {/* Replace your current "Did you know..." line with this */}
      <section className="relative mt-8 overflow-hidden rounded-[36px] border border-slate-200/70 bg-[linear-gradient(180deg,#ffffff_0%,#fbfaff_100%)] px-7 py-8 md:px-10 md:py-10">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_18%_18%,rgba(107,92,255,0.05),transparent_22%),radial-gradient(circle_at_82%_75%,rgba(107,92,255,0.04),transparent_26%)]" />

        <div className="relative z-10">
          <div className="flex flex-col gap-5 md:flex-row md:items-start md:justify-between">
            <div className="max-w-3xl">
              <p className="font-['Inter'] text-xs font-semibold uppercase tracking-[0.18em] text-[#6B5CFF]">
                Binary DEA Selection
              </p>

              <p className="mt-4 max-w-2xl font-['Inter'] text-sm leading-7 text-slate-500 md:text-[15px]">
                Each option is evaluated across limiting and beneficial
                nutrients, allowing the model to return a single positive
                selection.
              </p>
            </div>

            <div className="inline-flex items-center gap-2 self-start rounded-full border border-slate-200 bg-white/80 px-4 py-2 text-sm text-slate-600 shadow-sm backdrop-blur">
              <span className="h-2.5 w-2.5 rounded-full bg-emerald-500" />
              Winner = 1
              <span className="mx-1 text-slate-300">/</span>
              Others = 0
            </div>
          </div>

          <div className="mt-8">
            <p className="font-['Inter'] text-xs font-medium uppercase tracking-[0.14em] text-slate-400">
              Nutrients considered
            </p>

            <div className="mt-3 flex flex-wrap gap-2">
              {nutrients.map((nutrient) => (
                <span
                  key={nutrient}
                  className="rounded-full border border-slate-200 bg-white/80 px-3 py-1.5 font-['Inter'] text-xs text-slate-600 shadow-sm"
                >
                  {nutrient}
                </span>
              ))}
            </div>
          </div>

          <div className="mt-8 grid gap-3">
  {deaFoods.map((food) => (
    <div
      key={food.label}
      className={`flex items-center justify-between rounded-2xl border px-5 py-4 transition-all
      ${
        food.winner
          ? "border-emerald-200 bg-emerald-50/60"
          : "border-slate-200 bg-white hover:bg-slate-50"
      }`}
    >
      <div className="flex items-center gap-3">
        {food.winner && (
          <span className="h-2.5 w-2.5 rounded-full bg-emerald-500" />
        )}

        <span className="font-['Inter'] text-[15px] text-slate-700">
          {food.label}
        </span>
      </div>

      <div
        className={`flex h-9 w-9 items-center justify-center rounded-lg border text-sm font-semibold
        ${
          food.winner
            ? "border-emerald-200 bg-white text-emerald-600"
            : "border-slate-200 bg-slate-50 text-slate-400"
        }`}
      >
        {food.value}
      </div>
    </div>
  ))}
</div>
        </div>
      </section>
    </>
  );
}

function ResearchStage({
  project,
  onPrev,
  onNext,
}: {
  project: ResearchProject;
  onPrev: () => void;
  onNext: () => void;
}) {
  const Stage = project.id === "nutrition" ? DEAStage : SoybeanStage;

  return (
    <div className="space-y-6">
      <div className="flex items-center gap-3">
        <span className="inline-flex px-3 py-1 rounded-full bg-[#6B5CFF]/10 text-[#6B5CFF] font-['Inter'] text-[11px] font-semibold uppercase tracking-[0.18em]">
          {project.category}
        </span>
      </div>

      <div className="space-y-4">
        <div className="flex items-start justify-between gap-4">
          <h3 className="font-['Inter_Tight'] text-3xl md:text-4xl font-semibold text-slate-900 leading-tight max-w-4xl">
            {project.title}
          </h3>

          <div className="flex items-center gap-2 shrink-0 pt-1">
            <button
              type="button"
              onClick={onPrev}
              className="w-11 h-11 rounded-full bg-white/88 text-slate-500 hover:text-slate-800 transition-colors flex items-center justify-center shadow-[0_6px_16px_rgba(15,23,42,0.04)]"
              aria-label="Previous research project"
            >
              <ArrowLeft size={18} />
            </button>
            <button
              type="button"
              onClick={onNext}
              className="w-11 h-11 rounded-full bg-white/88 text-slate-500 hover:text-slate-800 transition-colors flex items-center justify-center shadow-[0_6px_16px_rgba(15,23,42,0.04)]"
              aria-label="Next research project"
            >
              <ArrowRight size={18} />
            </button>
          </div>
        </div>

        <p className="font-['Inter'] text-lg leading-8 text-slate-500 max-w-4xl">
          {project.summary}
        </p>
      </div>

      <Stage />

      <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
        {project.sections.map((section) => (
          <div
            key={section.title}
            className="rounded-3xl bg-white/76 backdrop-blur-md shadow-[0_10px_28px_rgba(15,23,42,0.04)] px-5 py-4"
          >
            <p className="font-['Inter_Tight'] text-xl font-semibold text-slate-800 mb-3">
              {section.title}
            </p>
            <p className="font-['Inter'] text-sm leading-7 text-slate-700">
              {section.content}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}

function OrbitalArc({
  className = "",
}: {
  className?: string;
}) {
  return (
    <svg
      className={className}
      viewBox="0 0 600 220"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      preserveAspectRatio="none"
    >
      <path
        d="M20 170C110 95 210 58 320 62C410 65 485 100 580 150"
        stroke="rgba(107,92,255,0.14)"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
      <path
        d="M70 188C165 120 255 92 355 96C430 99 492 122 555 156"
        stroke="rgba(107,92,255,0.08)"
        strokeWidth="1.2"
        strokeLinecap="round"
      />
      <circle cx="318" cy="62" r="3.5" fill="rgba(107,92,255,0.22)" />
      <circle cx="430" cy="99" r="2.5" fill="rgba(107,92,255,0.18)" />
    </svg>
  );
}

export function Research() {
  const [activeIndex, setActiveIndex] = useState(0);
  const activeProject = researchProjects[activeIndex];

  const goPrev = () =>
    setActiveIndex((prev) => (prev - 1 + researchProjects.length) % researchProjects.length);

  const goNext = () =>
    setActiveIndex((prev) => (prev + 1) % researchProjects.length);

  return (
   <section
  id="research"
  className="py-24 relative z-10 bg-[#FAFAFC] border-t border-slate-200/50 overflow-hidden"
>

    <OrbitalArc className="absolute left-0 right-0 top-0 h-[180px] w-full pointer-events-none opacity-80" />

  <div className="relative max-w-6xl mx-auto px-6 md:px-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <div className="mb-10">
            <h2 className="font-['Inter_Tight'] text-4xl font-semibold text-slate-900 mb-4 tracking-tight">
              Research
            </h2>
            <p className="font-['Inter'] text-lg text-slate-500">
              My interactive, ongoing research that hopefully, helps you understand what I study in a more visual way.
            </p>
          </div>

          <AnimatePresence mode="wait">
            <motion.div
              key={activeProject.id}
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.32, ease: "easeOut" }}
            >
              <ResearchStage
                project={activeProject}
                onPrev={goPrev}
                onNext={goNext}
              />
            </motion.div>
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}