import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import {
  ArrowLeft,
  ArrowRight,
  Monitor,
  Workflow,
  Activity,
  Globe,
  ClipboardList,
  CalendarDays,
  UserPlus,
  Database,
} from "lucide-react";

import graduateAssistantImg from "../../assets/characters/Graduate-assistant.png";
import orthodonticAssistantImg from "../../assets/characters/Healthcare.png";
import admissionsInternImg from "../../assets/characters/Admissions-intern.png";

type ExperienceItem = {
  id: string;
  role: string;
  company: string;
  duration: string;
  icon: any;
  theme: string;
  summary: React.ReactNode;
  systemsInsight: string;
  workflowSteps: string[];
  sceneLabel: string;
  image: string;
  scene: "web" | "clinic" | "workflow";
};

const experiences: ExperienceItem[] = [
  {
    id: "sbu-ga",
    role: "Marketing & Website Management",
    company: "Stony Brook University",
    duration: "Present",
    icon: Monitor,
    theme: "Digital systems / institutional web workflows",
    summary: (
      <>
        Designing and maintaining university web content taught me how large
        institutional platforms depend on structure, accessibility, and
        repeatable design decisions.
        <br />
        <br />
        Selected pages I designed are now live on the{" "}
        <a
          href="https://grad.stonybrook.edu"
          target="_blank"
          rel="noopener noreferrer"
          className="text-[#6B5CFF] underline decoration-[#6B5CFF]/35 underline-offset-4 transition-colors hover:text-[#5848f5]"
        >
          Stony Brook Graduate School website
        </a>
        .
      </>
    ),
    systemsInsight:
      "Institutional systems work best when content, accessibility, and design standards are treated as part of the same workflow rather than separate tasks.",
    workflowSteps: ["Request", "Update", "Accessibility Check", "Publish"],
    sceneLabel: "Digital platform maintenance",
    image: graduateAssistantImg,
    scene: "web",
  },
  {
    id: "orthodontic",
    role: "Orthodontic Treatment Coordinator",
    company: "Orthodontic Practice",
    duration: "Present",
    icon: Activity,
    theme: "Healthcare operations / clinical coordination",
    summary:
      "Working in a clinical setting highlighted how healthcare workflows depend on communication, timing, and systems that reduce friction for both staff and patients.",
    systemsInsight:
      "In healthcare environments, smooth operations are not just administrative; they directly shape patient experience, trust, and the effectiveness of care delivery.",
    workflowSteps: [
      "Patient Intake",
      "Discussion",
      "Scheduling",
      "Follow-up",
    ],
    sceneLabel: "Clinical workflow coordination",
    image: orthodonticAssistantImg,
    scene: "clinic",
  },
  {
    id: "vivvi-intern",
    role: "Admissions Intern",
    company: "Vivvi Early Learning",
    duration: "Past",
    icon: Workflow,
    theme: "Workflow automation / operational redesign",
    summary:
      "Improving admissions workflows showed me how much decision-making speed depends on data flow, process design, and reducing unnecessary manual handoffs.",
    systemsInsight:
      "Operational bottlenecks often come from disconnected tools and repeated manual steps rather than from a single obvious failure point.",
    workflowSteps: ["Lead Capture", "Automation", "CRM", "Follow-up"],
    sceneLabel: "Process improvement and data flow",
    image: admissionsInternImg,
    scene: "workflow",
  },
];

function SceneBadge({ children }: { children: React.ReactNode }) {
  return (
    <div className="inline-flex items-center rounded-full border border-[#6B5CFF]/12 bg-white/75 px-3 py-1.5 backdrop-blur-md">
      <span className="font-['Inter'] text-[11px] uppercase tracking-[0.2em] text-[#6B5CFF]">
        {children}
      </span>
    </div>
  );
}

function StoryPath({ steps }: { steps: string[] }) {
  return (
    <div className="relative w-full">
      <div className="absolute left-0 right-0 top-1/2 -translate-y-1/2 h-[2px] bg-[linear-gradient(90deg,rgba(107,92,255,0.10)_0%,rgba(107,92,255,0.30)_50%,rgba(107,92,255,0.10)_100%)]" />

      <div className="relative flex justify-between items-center gap-3">
        {steps.map((step, i) => (
          <motion.div
            key={step}
            animate={{ y: [0, -2, 0] }}
            transition={{
              duration: 3 + i * 0.2,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="rounded-full bg-white/92 border border-slate-200/80 px-4 py-2 shadow-[0_8px_18px_rgba(15,23,42,0.04)]"
          >
            <span className="font-['Inter'] text-sm font-medium text-slate-700 whitespace-nowrap">
              {step}
            </span>
          </motion.div>
        ))}
      </div>
    </div>
  );
}

function SceneWorld({ exp }: { exp: ExperienceItem }) {
  const sceneDecor =
    exp.scene === "web"
      ? {
          icons: [
            { Icon: Monitor, x: "12%", y: "18%" },
            { Icon: Globe, x: "34%", y: "42%" },
          ],
          glow:
            "radial-gradient(circle at 18% 22%, rgba(107,92,255,0.08), transparent 24%), radial-gradient(circle at 75% 72%, rgba(107,92,255,0.07), transparent 28%)",
        }
      : exp.scene === "clinic"
      ? {
          icons: [
            { Icon: ClipboardList, x: "12%", y: "18%" },
            { Icon: CalendarDays, x: "34%", y: "42%" },
          ],
          glow:
            "radial-gradient(circle at 18% 22%, rgba(107,92,255,0.08), transparent 24%), radial-gradient(circle at 75% 72%, rgba(107,92,255,0.07), transparent 28%)",
        }
      : {
          icons: [
            { Icon: UserPlus, x: "12%", y: "18%" },
            { Icon: Database, x: "34%", y: "42%" },
          ],
          glow:
            "radial-gradient(circle at 18% 22%, rgba(107,92,255,0.08), transparent 24%), radial-gradient(circle at 75% 72%, rgba(107,92,255,0.07), transparent 28%)",
        };

  return (
    <div className="relative min-h-[500px] overflow-hidden rounded-[36px] border border-slate-200/60 bg-[linear-gradient(180deg,#ffffff_0%,#fbfaff_100%)]">
      <div
        className="absolute inset-0"
        style={{ backgroundImage: sceneDecor.glow }}
      />

      <div className="absolute left-5 top-5 z-20">
        <SceneBadge>{exp.sceneLabel}</SceneBadge>
      </div>

      {sceneDecor.icons.map(({ Icon, x, y }, idx) => (
        <motion.div
          key={idx}
          className="absolute z-10"
          style={{ left: x, top: y }}
          animate={{ y: [0, -8, 0] }}
          transition={{
            duration: 3.2 + idx * 0.25,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          <Icon size={28} strokeWidth={1.9} className="text-[#6B5CFF]/90" />
        </motion.div>
      ))}

      <div className="absolute left-[12%] top-[18%] z-20 flex flex-col items-center">
  <div className="w-[210px] md:w-[240px] h-[320px] md:h-[380px] flex items-end justify-center relative">
    <motion.img
      src={exp.image}
      alt={exp.role}
      className="max-w-full max-h-full object-contain drop-shadow-[0_22px_42px_rgba(107,92,255,0.10)]"
      initial={{ opacity: 0, y: 18, scale: 0.97 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ duration: 0.45, ease: "easeOut" }}
    />
    <motion.div
      className="absolute bottom-0 left-1/2 -translate-x-1/2 w-32 h-6 bg-[#6B5CFF]/10 blur-xl rounded-full"
      animate={{ scale: [1, 1.07, 1] }}
      transition={{ duration: 3.6, repeat: Infinity, ease: "easeInOut" }}
    />
  </div>
</div>

      <div className="absolute right-[8%] top-[23%] z-20 max-w-[300px]">
        <p className="font-['Inter'] text-[11px] uppercase tracking-[0.18em] text-[#6B5CFF] mb-3">
          What I learned about systems
        </p>
        <p className="font-['Inter'] text-sm leading-8 text-slate-600">
          {exp.systemsInsight}
        </p>
      </div>

      <div className="absolute left-[10%] right-[8%] bottom-[9%] z-20">
        <p className="font-['Inter'] text-[11px] uppercase tracking-[0.18em] text-slate-400 mb-4">
          Workflow path
        </p>
        <StoryPath steps={exp.workflowSteps} />
      </div>
    </div>
  );
}

export function Experience() {
  const [activeIndex, setActiveIndex] = useState(0);
  const activeExperience = experiences[activeIndex];

  const goPrev = () =>
    setActiveIndex((prev) => (prev - 1 + experiences.length) % experiences.length);

  const goNext = () =>
    setActiveIndex((prev) => (prev + 1) % experiences.length);

  return (
    <section
      id="experience"
      className="py-24 relative z-10 bg-[#FAFAFC] border-t border-slate-200/50"
    >
      <div className="max-w-6xl mx-auto px-6 md:px-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <div className="mb-12">
            <h2 className="font-['Inter_Tight'] text-4xl font-semibold text-slate-900 mb-4 tracking-tight">
              Experience
            </h2>
            <p className="font-['Inter'] text-lg text-slate-500 max-w-2xl">
              What I learned about systems, data, and technology through real-world work.
            </p>
          </div>

          <AnimatePresence mode="wait">
            <motion.div
              key={activeExperience.id}
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.32, ease: "easeOut" }}
              className="space-y-5"
            >
              <div className="flex items-start justify-between gap-4">
                <div className="space-y-4">
                  <div className="flex flex-wrap items-center gap-3">
                    <span className="inline-flex px-3 py-1 rounded-full bg-[#6B5CFF]/10 text-[#6B5CFF] font-['Inter'] text-[11px] font-semibold uppercase tracking-[0.18em]">
                      {activeExperience.company}
                    </span>
                    <span className="inline-flex px-3 py-1 rounded-full bg-slate-100 text-slate-500 font-['Inter'] text-[11px] font-semibold uppercase tracking-[0.18em]">
                      {activeExperience.duration}
                    </span>
                    <span className="inline-flex px-3 py-1 rounded-full bg-white/90 text-slate-500 font-['Inter'] text-[11px] font-semibold uppercase tracking-[0.18em] shadow-[0_6px_16px_rgba(15,23,42,0.04)]">
                      {activeIndex + 1} / {experiences.length}
                    </span>
                  </div>

                  <div>
                    <h3 className="font-['Inter_Tight'] text-3xl md:text-4xl font-semibold text-slate-900 leading-tight max-w-4xl mb-4">
                      {activeExperience.role}
                    </h3>
                    <p className="font-['Inter'] text-lg leading-8 text-slate-500 max-w-4xl">
                      {activeExperience.summary}
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-2 shrink-0 pt-1">
                  <button
                    type="button"
                    onClick={goPrev}
                    className="w-11 h-11 rounded-full bg-white/88 text-slate-500 hover:text-slate-800 transition-colors flex items-center justify-center shadow-[0_6px_16px_rgba(15,23,42,0.04)]"
                    aria-label="Previous experience"
                  >
                    <ArrowLeft size={18} />
                  </button>
                  <button
                    type="button"
                    onClick={goNext}
                    className="w-11 h-11 rounded-full bg-white/88 text-slate-500 hover:text-slate-800 transition-colors flex items-center justify-center shadow-[0_6px_16px_rgba(15,23,42,0.04)]"
                    aria-label="Next experience"
                  >
                    <ArrowRight size={18} />
                  </button>
                </div>
              </div>

              <SceneWorld exp={activeExperience} />
            </motion.div>
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}