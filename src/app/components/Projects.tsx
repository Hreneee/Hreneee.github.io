import { useState } from "react";
import belugaLogo from "@/assets/supporting/BelugaNet.gif";
import { motion, AnimatePresence } from "motion/react";
import {
  ArrowLeft,
  ArrowRight,
  Database,
  Bitcoin,
  Code2,
  Boxes,
  Layers3,
  ArrowRight as StackArrowRight,
} from "lucide-react";

type StackItem = {
  name: string;
  category: "Language" | "Framework" | "System" | "Concept";
};

type TechnicalProject = {
  id: string;
  title: string;
  shortLabel: string;
  description: string;
  icon: any;
  stack: StackItem[];
  scene: "database" | "blockchain";
};

const technicalProjects: TechnicalProject[] = [
  {
    id: "beluganet",
    title: "Blockchain File Sharing App (BelugaNet)",
    shortLabel: "Frontend + decentralized workflow",
    description:
      "Designed and built the frontend experience for a decentralized file-sharing application, shaping wallet-based access, interaction flows, and interface states to make a technically complex system feel intuitive and approachable.",
    icon: Bitcoin,
    scene: "blockchain",
    stack: [
      { name: "TypeScript", category: "Language" },
      { name: "Vite", category: "Framework" },
      { name: "Electron", category: "Framework" },
      { name: "Frontend Logic", category: "System" },
      { name: "File I/O", category: "System" },
      { name: "UI Design", category: "Concept" },
    ],
  },
  {
    id: "db-trading",
    title: "Database Design for Stock Trading System",
    shortLabel: "Relational systems design",
    description:
      "Designed a relational database system for a stock trading platform, modeling users, assets, trades, and orders with normalized schemas and foreign-key relationships to maintain transactional integrity.",
    icon: Database,
    scene: "database",
    stack: [
      { name: "PostgreSQL", category: "Framework" },
      { name: "SQL", category: "Language" },
      { name: "Data Modeling", category: "Concept" },
      { name: "Relational Design", category: "System" },
      { name: "Query Optimization", category: "System" },
    ],
  }
];

function categoryIcon(category: StackItem["category"]) {
  if (category === "Language") return <Code2 size={13} />;
  if (category === "Framework") return <Boxes size={13} />;
  if (category === "System") return <Layers3 size={13} />;
  return <StackArrowRight size={13} />;
}

function StackFlow({ items }: { items: StackItem[] }) {
  return (
    <div className="flex flex-wrap gap-2">
      {items.map((item) => (
        <motion.div
          key={item.name}
          whileHover={{ y: -2 }}
          className="inline-flex items-center gap-2 rounded-full bg-white/88 px-3 py-2 shadow-[0_6px_16px_rgba(15,23,42,0.04)]"
        >
          <span className="text-[#6B5CFF]">{categoryIcon(item.category)}</span>
          <span className="font-['Inter'] text-sm font-medium text-slate-700">
            {item.name}
          </span>
        </motion.div>
      ))}
    </div>
  );
}

function DatabaseScene() {
  const tables = [
    {
      name: "Users",
      x: 80,
      y: 68,
      width: 230,
      height: 168,
      fields: ["user_id : UUID (PK)", "name : text", "email : text"],
      relationships: ["1 user → many trades", "1 user → many orders"],
    },
    {
      name: "Assets",
      x: 80,
      y: 260,
      width: 230,
      height: 168,
      fields: ["asset_id : UUID (PK)", "ticker : text", "asset_type : text"],
      relationships: ["1 asset → many trades", "1 asset → many orders"],
    },
    {
      name: "Trades",
      x: 640,
      y: 46,
      width: 250,
      height: 168,
      fields: ["trade_id : UUID (PK)", "user_id : UUID (FK)", "asset_id : UUID (FK)"],
      relationships: ["belongs to 1 user", "references 1 asset"],
    },
    {
      name: "Orders",
      x: 640,
      y: 254,
      width: 250,
      height: 168,
      fields: ["order_id : UUID (PK)", "user_id : UUID (FK)", "asset_id : UUID (FK)"],
      relationships: ["belongs to 1 user", "references 1 asset"],
    },
  ];

  return (
    <div className="relative min-h-[470px] overflow-hidden rounded-[32px] border border-slate-200/60 bg-[linear-gradient(180deg,#ffffff_0%,#faf8ff_100%)]">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_18%_18%,rgba(107,92,255,0.06),transparent_24%),radial-gradient(circle_at_80%_72%,rgba(107,92,255,0.05),transparent_28%)]" />

      <svg
        className="absolute inset-0 w-full h-full"
        viewBox="0 0 1000 470"
        preserveAspectRatio="none"
      >
        {/* Users -> Trades */}
        <path
          d="M310 126 L 500 126 L 500 100 L 640 100"
          fill="none"
          stroke="rgba(51,65,85,0.7)"
          strokeWidth="2.4"
          strokeLinecap="square"
        />

        {/* Assets -> Orders */}
        <path
          d="M310 318 L 500 318 L 500 308 L 640 308"
          fill="none"
          stroke="rgba(51,65,85,0.7)"
          strokeWidth="2.4"
          strokeLinecap="square"
        />

        {/* Users -> Orders */}
        <path
          d="M310 142 L 450 142 L 450 292 L 640 292"
          fill="none"
          stroke="rgba(51,65,85,0.42)"
          strokeWidth="1.9"
          strokeDasharray="6 6"
          strokeLinecap="square"
        />

        {/* Assets -> Trades */}
        <path
          d="M310 302 L 520 302 L 520 116 L 640 116"
          fill="none"
          stroke="rgba(51,65,85,0.42)"
          strokeWidth="1.9"
          strokeDasharray="6 6"
          strokeLinecap="square"
        />

        {[
          { x: 500, y: 126 },
          { x: 500, y: 318 },
          { x: 450, y: 142 },
          { x: 520, y: 302 },
        ].map((dot, idx) => (
          <circle
            key={idx}
            cx={dot.x}
            cy={dot.y}
            r="4.5"
            fill="rgba(107,92,255,0.82)"
          />
        ))}
      </svg>

      {tables.map((table) => (
        <div
          key={table.name}
          className="absolute overflow-hidden border border-slate-400/70 bg-white/94 shadow-[0_8px_20px_rgba(15,23,42,0.04)]"
          style={{
            left: `${table.x}px`,
            top: `${table.y}px`,
            width: `${table.width}px`,
            height: `${table.height}px`,
          }}
        >
          <div className="border-b border-slate-400/70 px-4 py-3 text-center">
            <p className="font-['Inter_Tight'] text-[1.05rem] font-semibold text-slate-900">
              {table.name}
            </p>
          </div>

          <div className="border-b border-slate-400/70 px-4 py-4">
            {table.fields.map((field) => (
              <p
                key={field}
                className="font-['Inter'] text-sm leading-7 text-slate-700"
              >
                +{field}
              </p>
            ))}
          </div>

          <div className="px-4 py-3">
            {table.relationships.map((relation) => (
              <p
                key={relation}
                className="font-['Inter'] text-sm leading-6 text-slate-500"
              >
                ↳ {relation}
              </p>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}
function BlockchainScene() {
  const [activeTab, setActiveTab] = useState<"login" | "register">("register");
  const [walletId, setWalletId] = useState("");
  const [passphrase, setPassphrase] = useState("");
  const [enteredDemo, setEnteredDemo] = useState(false);

  return (
    <div className="relative min-h-[360px] overflow-hidden rounded-[32px] border border-slate-200/60 bg-[linear-gradient(180deg,#ffffff_0%,#f8f6ff_100%)]">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_18%_18%,rgba(37,99,235,0.08),transparent_24%),radial-gradient(circle_at_80%_72%,rgba(37,99,235,0.06),transparent_28%)]" />

      <motion.div
        className="absolute -top-10 -right-10 h-44 w-44 rounded-full bg-[#1f57c3]/[0.05] blur-3xl"
        animate={{ scale: [1, 1.05, 1] }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute -bottom-10 -left-10 h-40 w-40 rounded-full bg-[#1f57c3]/[0.05] blur-3xl"
        animate={{ scale: [1.03, 1, 1.03] }}
        transition={{ duration: 4.6, repeat: Infinity, ease: "easeInOut" }}
      />

      <div className="relative z-10 flex min-h-[360px] flex-col px-7 py-7 md:px-10 md:py-8">
        <AnimatePresence mode="wait">
          {!enteredDemo ? (
            <motion.div
              key="auth"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.28, ease: "easeOut" }}
              className="flex flex-1 flex-col"
            >
              <div className="flex flex-col items-center">
                <motion.img
                  src={belugaLogo}
                  alt="BelugaNet logo"
                  className="h-20 w-auto md:h-24 object-contain"
                  animate={{ y: [0, -3, 0] }}
                  transition={{ duration: 4.2, repeat: Infinity, ease: "easeInOut" }}
                />

                <h4 className="mt-2 font-['Inter_Tight'] text-[2.6rem] md:text-[3.1rem] leading-none font-semibold tracking-tight text-[#1f57c3]">
                  Beluga
                </h4>
              </div>

              <div className="mt-6 flex justify-center">
                <div className="inline-flex rounded-[14px] border border-[#1f57c3]/18 bg-white/72 p-1 shadow-[0_8px_24px_rgba(15,23,42,0.04)]">
                  <button
                    type="button"
                    onClick={() => setActiveTab("login")}
                    className={`min-w-[128px] rounded-[10px] px-5 py-2.5 font-['Inter'] text-sm font-medium transition-all ${
                      activeTab === "login"
                        ? "bg-white text-[#1f57c3] shadow-[0_4px_12px_rgba(15,23,42,0.05)]"
                        : "text-[#6b7fb3]"
                    }`}
                  >
                    Login
                  </button>

                  <button
                    type="button"
                    onClick={() => setActiveTab("register")}
                    className={`min-w-[128px] rounded-[10px] px-5 py-2.5 font-['Inter'] text-sm font-medium transition-all ${
                      activeTab === "register"
                        ? "bg-[#1f57c3] text-white shadow-[0_8px_20px_rgba(31,87,195,0.18)]"
                        : "text-[#6b7fb3]"
                    }`}
                  >
                    Register
                  </button>
                </div>
              </div>

              <div className="mx-auto mt-8 w-full max-w-[520px] space-y-5">
                <div className="grid grid-cols-1 md:grid-cols-[120px_1fr] items-center gap-3 md:gap-5">
                  <label className="font-['Inter'] text-sm md:text-[0.95rem] text-[#5676b5]">
                    Wallet ID
                  </label>
                  <input
                    type="text"
                    value={walletId}
                    onChange={(e) => setWalletId(e.target.value)}
                    placeholder={
                      activeTab === "login"
                        ? "Enter your wallet ID"
                        : "Create a wallet ID"
                    }
                    className="h-11 rounded-[8px] border border-slate-300 bg-white/92 px-4 font-['Inter'] text-sm text-slate-700 outline-none transition focus:border-[#1f57c3]/40 focus:ring-2 focus:ring-[#1f57c3]/10"
                  />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-[120px_1fr] items-center gap-3 md:gap-5">
                  <label className="font-['Inter'] text-sm md:text-[0.95rem] text-[#5676b5]">
                    Passphrase
                  </label>
                  <input
                    type="password"
                    value={passphrase}
                    onChange={(e) => setPassphrase(e.target.value)}
                    placeholder={
                      activeTab === "login"
                        ? "Enter your passphrase"
                        : "Create a secure passphrase"
                    }
                    className="h-11 rounded-[8px] border border-slate-300 bg-white/92 px-4 font-['Inter'] text-sm text-slate-700 outline-none transition focus:border-[#1f57c3]/40 focus:ring-2 focus:ring-[#1f57c3]/10"
                  />
                </div>

                <div className="pt-2 flex flex-col items-center">
                  <motion.button
                    type="button"
                    whileHover={{ y: -1 }}
                    whileTap={{ scale: 0.99 }}
                    onClick={() => setEnteredDemo(true)}
                    className="rounded-[10px] bg-[#1f57c3] px-7 py-3 font-['Inter'] text-sm md:text-base font-medium text-white shadow-[0_10px_24px_rgba(31,87,195,0.20)]"
                  >
                    Enter Demo Workspace
                  </motion.button>

                  <p className="mt-4 max-w-[460px] text-center font-['Inter'] text-sm leading-7 text-slate-500">
                    This preview recreates the frontend flow of a decentralized
                    file-sharing app with wallet-based access and token-driven interaction.
                  </p>
                </div>
              </div>
            </motion.div>
          ) : (
            <motion.div
              key="dashboard"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.28, ease: "easeOut" }}
              className="flex flex-1 flex-col"
            >
              <div className="flex items-start justify-between gap-4">
                <div>
                  <p className="font-['Inter'] text-[11px] uppercase tracking-[0.18em] text-[#5676b5] mb-2">
                    BelugaNet workspace
                  </p>
                  <h4 className="font-['Inter_Tight'] text-2xl md:text-3xl font-semibold text-[#1f57c3] tracking-tight">
                    Simple dashboard preview
                  </h4>
                  <p className="mt-2 font-['Inter'] text-sm leading-7 text-slate-500 max-w-[520px]">
                    A lightweight look at the app after entry. Features include file sharing,
                    peer availability viewing, and token tracking.
                  </p>
                </div>

                <button
                  type="button"
                  onClick={() => setEnteredDemo(false)}
                  className="rounded-[10px] border border-slate-200 bg-white/88 px-4 py-2 font-['Inter'] text-sm font-medium text-slate-600 transition hover:text-slate-800"
                >
                  Log out
                </button>
              </div>

              <div className="mt-8 grid grid-cols-1 lg:grid-cols-[1.15fr_0.85fr] gap-5">
                <div className="rounded-[24px] border border-slate-200/70 bg-white/88 px-5 py-5 shadow-[0_10px_24px_rgba(15,23,42,0.04)]">
                  <div className="flex items-center justify-between gap-3 mb-4">
                    <p className="font-['Inter_Tight'] text-lg font-semibold text-slate-900">
                      Shared files
                    </p>
                    <span className="rounded-full bg-[#1f57c3]/8 px-3 py-1 font-['Inter'] text-xs font-medium text-[#1f57c3]">
                      3 active
                    </span>
                  </div>

                  <div className="space-y-3">
                    {[
                      { name: "market_notes.pdf", status: "Encrypted" },
                      { name: "portfolio_snapshot.csv", status: "Ready" },
                      { name: "token_rewards.txt", status: "Shared" },
                    ].map((file) => (
                      <div
                        key={file.name}
                        className="flex items-center justify-between rounded-[16px] border border-slate-200/70 bg-slate-50/70 px-4 py-3"
                      >
                        <div>
                          <p className="font-['Inter'] text-sm font-medium text-slate-800">
                            {file.name}
                          </p>
                        </div>
                        <span className="font-['Inter'] text-xs text-slate-500">
                          {file.status}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="space-y-5">
                  <div className="rounded-[24px] border border-slate-200/70 bg-white/88 px-5 py-5 shadow-[0_10px_24px_rgba(15,23,42,0.04)]">
                    <p className="font-['Inter_Tight'] text-lg font-semibold text-slate-900 mb-3">
                      Network status
                    </p>
                    <div className="space-y-3">
                      {[
                        { label: "Wallet", value: walletId || "Demo wallet connected" },
                        { label: "Peers", value: "4 online" },
                        { label: "Transfer mode", value: "Peer-to-peer" },
                      ].map((item) => (
                        <div
                          key={item.label}
                          className="flex items-center justify-between gap-3 border-b border-slate-200/70 pb-3 last:border-b-0 last:pb-0"
                        >
                          <span className="font-['Inter'] text-sm text-slate-500">
                            {item.label}
                          </span>
                          <span className="font-['Inter'] text-sm font-medium text-slate-800 text-right">
                            {item.value}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="rounded-[24px] border border-slate-200/70 bg-[linear-gradient(180deg,rgba(31,87,195,0.06)_0%,rgba(255,255,255,0.7)_100%)] px-5 py-5 shadow-[0_10px_24px_rgba(15,23,42,0.04)]">
                    <p className="font-['Inter_Tight'] text-lg font-semibold text-slate-900 mb-2">
                      Token activity
                    </p>
                    <p className="font-['Inter'] text-3xl font-semibold text-[#1f57c3]">
                      +18 BLG
                    </p>
                    <p className="mt-2 font-['Inter'] text-sm leading-7 text-slate-500">
                      Example reward feedback for participating in decentralized
                      file sharing and peer availability.
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}

function ProjectStage({
  project,
  onPrev,
  onNext,
}: {
  project: TechnicalProject;
  onPrev: () => void;
  onNext: () => void;
}) {
  const Stage = project.scene === "database" ? DatabaseScene : BlockchainScene;

  return (
    <div className="space-y-6">
      <div className="flex items-start justify-between gap-4">
        <div className="space-y-4">
          <div className="flex items-center gap-3">
            <span className="inline-flex px-3 py-1 rounded-full bg-[#6B5CFF]/10 text-[#6B5CFF] font-['Inter'] text-[11px] font-semibold uppercase tracking-[0.18em]">
              Selected Project
            </span>
          </div>

          <div>
            <h3 className="font-['Inter_Tight'] text-3xl md:text-4xl font-semibold text-slate-900 leading-tight max-w-4xl mb-4">
              {project.title}
            </h3>
            <p className="font-['Inter'] text-lg leading-8 text-slate-500 max-w-4xl">
              {project.description}
            </p>
          </div>
        </div>

        <div className="flex items-center gap-2 shrink-0 pt-1">
          <button
            type="button"
            onClick={onPrev}
            className="w-11 h-11 rounded-full bg-white/88 text-slate-500 hover:text-slate-800 transition-colors flex items-center justify-center shadow-[0_6px_16px_rgba(15,23,42,0.04)]"
            aria-label="Previous project"
          >
            <ArrowLeft size={18} />
          </button>
          <button
            type="button"
            onClick={onNext}
            className="w-11 h-11 rounded-full bg-white/88 text-slate-500 hover:text-slate-800 transition-colors flex items-center justify-center shadow-[0_6px_16px_rgba(15,23,42,0.04)]"
            aria-label="Next project"
          >
            <ArrowRight size={18} />
          </button>
        </div>
      </div>

      <div className="space-y-5">
  <Stage />

      <div>
        <p className="font-['Inter'] text-[11px] uppercase tracking-[0.18em] text-slate-400 mb-3">
          Tech stack
        </p>
        <StackFlow items={project.stack} />
      </div>
    </div>
  </div>
  );
}

export function Projects() {
  const [activeIndex, setActiveIndex] = useState(0);
  const activeProject = technicalProjects[activeIndex];

  const goPrev = () =>
    setActiveIndex(
      (prev) => (prev - 1 + technicalProjects.length) % technicalProjects.length
    );

  const goNext = () =>
    setActiveIndex((prev) => (prev + 1) % technicalProjects.length);

  return (
    <section
      id="projects"
      className="py-24 relative z-10 bg-white/40 backdrop-blur-sm border-t border-slate-200/50"
    >
      <div className="max-w-6xl mx-auto px-6 md:px-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <div className="mb-10">
            <h2 className="font-['Inter_Tight'] text-4xl font-semibold text-slate-900 mb-4 tracking-tight">
              Projects
            </h2>
            <p className="font-['Inter'] text-lg text-slate-500 max-w-3xl">
             Technical work that explores ideas through building and experimentation.
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
              <ProjectStage
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