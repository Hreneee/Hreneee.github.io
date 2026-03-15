import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { GraduationCap, BookOpen } from "lucide-react";

import computerScience from "../../assets/characters/CS.png";
import business from "../../assets/characters/Business.png";
import healthSystems from "../../assets/characters/Healthcare.png";

const trajectoryItems = [
  {
    title: "Computer Science",
    image: computerScience,
    accent: "foundations",
  },
  {
    title: "Business",
    image: business,
    accent: "digital systems",
  },
  {
    title: "Healthcare Systems",
    image: healthSystems,
    accent: "clinical workflows",
  }
];

const orbitLabels = [
  { title: "Computer Science", position: "top-left" },
  { title: "Business", position: "top-right" },
  { title: "Healthcare Systems", position: "bottom-left" },

];

export function About() {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const interval = window.setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % trajectoryItems.length);
    }, 2600);

    return () => window.clearInterval(interval);
  }, []);

  const activeItem = trajectoryItems[activeIndex];

  return (
    <section
      id="about"
      className="py-24 relative z-10 bg-white/40 backdrop-blur-sm border-t border-slate-200/50"
    >
      <div className="max-w-6xl mx-auto px-6 md:px-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start"
        >
          <div className="lg:col-span-7 space-y-12">
            <div>
              <h2 className="font-['Inter_Tight'] text-4xl font-semibold text-slate-900 mb-6 tracking-tight">
                About
              </h2>
              <p className="font-['Inter'] text-lg text-slate-600 leading-relaxed">
                I am a graduate student with a background in computer science and business, interested in how digital systems shape decision-making in complex environments. My work sits at the intersection of technology, design, and research, where I explore how structured data, thoughtful interfaces, and well-designed workflows can make complex information easier to understand and act on.
              </p>
              <br/>
              <p className="font-['Inter'] text-lg text-slate-600 leading-relaxed">
                I enjoy building and designing digital tools that translate technical systems into intuitive experiences — particularly in domains like healthcare, research, and large organizations where clarity and reliability matter.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
              <div className="space-y-4">
                <h3 className="font-['Inter_Tight'] text-xl font-semibold text-slate-800 flex items-center gap-2.5">
                  <div className="p-2 bg-[#6B5CFF]/10 rounded-lg text-[#6B5CFF]">
                    <GraduationCap size={20} />
                  </div>
                  Academic Background
                </h3>
                <ul className="space-y-3 text-slate-600 font-['Inter']">
                  <li className="flex items-start gap-3">
                    <div className="w-1.5 h-1.5 rounded-full bg-[#6B5CFF] mt-2 shrink-0" />
                    <span>BS in Computer Science, Stony Brook University</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-1.5 h-1.5 rounded-full bg-[#6B5CFF] mt-2 shrink-0" />
                    <span>MBA, Stony Brook University</span>
                  </li>
                </ul>
              </div>

              <div className="space-y-4">
                <h3 className="font-['Inter_Tight'] text-xl font-semibold text-slate-800 flex items-center gap-2.5">
                  <div className="p-2 bg-[#6B5CFF]/10 rounded-lg text-[#6B5CFF]">
                    <BookOpen size={20} />
                  </div>
                  Areas of Interest
                </h3>
                <ul className="space-y-3 text-slate-600 font-['Inter']">
                  <li className="flex items-start gap-3">
                    <div className="w-1.5 h-1.5 rounded-full bg-[#6B5CFF] mt-2 shrink-0" />
                    <span>Decision support systems</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-1.5 h-1.5 rounded-full bg-[#6B5CFF] mt-2 shrink-0" />
                    <span>Healthcare technology</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-1.5 h-1.5 rounded-full bg-[#6B5CFF] mt-2 shrink-0" />
                    <span>Design and frontend development</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-1.5 h-1.5 rounded-full bg-[#6B5CFF] mt-2 shrink-0" />
                    <span>Analytics for complex organizations</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div className="lg:col-span-5 h-full">
            <div className="bg-white/60 backdrop-blur-md border border-slate-200/60 rounded-3xl p-8 lg:p-10 shadow-[0_8px_30px_rgba(0,0,0,0.03)] h-full flex flex-col justify-center overflow-hidden">
              <h3 className="font-['Inter_Tight'] text-lg font-medium text-slate-400 uppercase tracking-wider mb-8 text-center">
                Trajectory
              </h3>

              <div className="relative max-w-[380px] mx-auto w-full min-h-[540px]">
                {/* soft glow */}
                <div className="absolute inset-x-0 top-[32%] mx-auto w-[240px] h-[240px] rounded-full bg-[#6B5CFF]/10 blur-3xl" />

                {/* orbital rings */}
                <motion.div
                  className="absolute left-1/2 top-1/2 w-[290px] h-[290px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-[#6B5CFF]/12"
                  animate={{ rotate: 360 }}
                  transition={{ duration: 32, repeat: Infinity, ease: "linear" }}
                />
                <motion.div
                  className="absolute left-1/2 top-1/2 w-[250px] h-[120px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-[#6B5CFF]/16"
                  animate={{ rotate: -360 }}
                  transition={{ duration: 24, repeat: Infinity, ease: "linear" }}
                />
                <motion.div
                  className="absolute left-1/2 top-1/2 w-[120px] h-[250px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-[#6B5CFF]/10"
                  animate={{ rotate: 360 }}
                  transition={{ duration: 28, repeat: Infinity, ease: "linear" }}
                />

                {/* floating dots */}
                <motion.div
                  className="absolute left-[18%] top-[30%] w-3 h-3 rounded-full bg-[#6B5CFF] shadow-[0_0_0_8px_rgba(107,92,255,0.08)]"
                  animate={{ y: [0, -8, 0] }}
                  transition={{ duration: 3.8, repeat: Infinity, ease: "easeInOut" }}
                />
                <motion.div
                  className="absolute right-[16%] top-[22%] w-2.5 h-2.5 rounded-full bg-[#6B5CFF]/80 shadow-[0_0_0_8px_rgba(107,92,255,0.06)]"
                  animate={{ y: [0, 10, 0] }}
                  transition={{ duration: 4.2, repeat: Infinity, ease: "easeInOut" }}
                />
                <motion.div
                  className="absolute right-[22%] bottom-[16%] w-3 h-3 rounded-full bg-[#6B5CFF]/90 shadow-[0_0_0_8px_rgba(107,92,255,0.07)]"
                  animate={{ y: [0, -10, 0] }}
                  transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut" }}
                />

                {/* labels */}
                <div className="absolute inset-0 pointer-events-none">
                  {orbitLabels.map((label) => {
                    const isActive = label.title === activeItem.title;

                    const positionClasses =
                      label.position === "top-left"
                        ? "left-0 top-8 text-left"
                        : label.position === "top-right"
                        ? "right-0 top-24 text-right"
                        : "right-4 bottom-10 text-right";

                    return (
                      <motion.div
                        key={label.title}
                        className={`absolute ${positionClasses}`}
                        animate={{
                          opacity: isActive ? 1 : 0.45,
                          scale: isActive ? 1.04 : 1,
                        }}
                        transition={{ duration: 0.35 }}
                      >
                        <div className="flex items-center gap-2">
                          <div
                            className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${
                              isActive
                                ? "bg-[#6B5CFF] shadow-[0_0_0_8px_rgba(107,92,255,0.12)]"
                                : "bg-[#6B5CFF]/35"
                            }`}
                          />
                          <span
                            className={`font-['Inter_Tight'] text-sm md:text-base font-medium transition-colors duration-300 ${
                              isActive ? "text-slate-900" : "text-slate-500"
                            }`}
                          >
                            {label.title}
                          </span>
                        </div>
                      </motion.div>
                    );
                  })}
                </div>

                {/* active role subtitle */}
                <motion.div
                  key={activeItem.title + "-caption"}
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.35 }}
                  className="absolute left-1/2 top-[12%] -translate-x-1/2 text-center z-20"
                >
                </motion.div>

                {/* character swap */}
                <div className="absolute inset-x-0 bottom-15 flex justify-center items-end z-10">
                  <AnimatePresence mode="wait">
                    <div className="w-[200px] md:w-[240px] h-[360px] md:h-[440px] flex items-end justify-center">
                      <motion.img
                        key={activeItem.title}
                        src={activeItem.image}
                        alt={`${activeItem.title} character`}
                        className="max-w-full max-h-full object-contain drop-shadow-[0_22px_45px_rgba(107,92,255,0.14)]"
                        initial={{ opacity: 0, y: 18, scale: 0.96 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: -8, scale: 0.98 }}
                        transition={{ duration: 0.45, ease: "easeOut" }}
                      />
                  </div>
                  </AnimatePresence>
                </div>

                {/* character float */}
                <motion.div
                  className="absolute inset-x-0 bottom-10 flex justify-center items-end z-0"
                  animate={{ y: [0, -8, 0] }}
                  transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut" }}
                >
                  <div className="w-[180px] h-6 bg-[#6B5CFF]/12 blur-xl rounded-full" />
                </motion.div>

                {/* progress pills */}
                <div className="absolute left-1/2 bottom-0 -translate-x-1/2 flex items-center gap-2 z-20">
                  {trajectoryItems.map((item, idx) => (
                    <button
                      key={item.title}
                      type="button"
                      onClick={() => setActiveIndex(idx)}
                      aria-label={`Show ${item.title}`}
                      className={`h-2.5 rounded-full transition-all duration-300 ${
                        idx === activeIndex
                          ? "w-8 bg-[#6B5CFF]"
                          : "w-2.5 bg-[#6B5CFF]/25 hover:bg-[#6B5CFF]/45"
                      }`}
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}