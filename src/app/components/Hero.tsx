import { motion, useAnimationFrame } from "motion/react";
import { ArrowRight, BookOpen } from "lucide-react";
import { useRef, useState } from "react";
import { Button } from "./ui/button";

function OrbitalDot({
  rx,
  ry,
  duration,
  size = 3,
  offset = 0,
  color = "rgba(107,92,255,0.65)",
}: {
  rx: number;
  ry: number;
  duration: number;
  size?: number;
  offset?: number;
  color?: string;
}) {
  const [angle, setAngle] = useState(offset);
  const startRef = useRef<number | null>(null);

  useAnimationFrame((t) => {
    if (startRef.current === null) startRef.current = t;
    const elapsed = (t - startRef.current) / 1000;
    setAngle(offset + (elapsed / duration) * 2 * Math.PI);
  });

  const x = Math.cos(angle) * rx;
  const y = Math.sin(angle) * ry;

  return (
    <div
      style={{
        position: "absolute",
        left: "50%",
        top: "50%",
        width: size,
        height: size,
        borderRadius: "50%",
        background: color,
        boxShadow: `0 0 ${size * 3}px ${color}`,
        transform: `translate(calc(${x}px - 50%), calc(${y}px - 50%))`,
        pointerEvents: "none",
      }}
    />
  );
}

export function Hero() {
  const planetImgUrl =
    "https://commons.wikimedia.org/wiki/File:FullMoon2010.jpg";

  return (
    <section className="relative min-h-screen flex items-center px-6 pt-32 pb-16 md:px-12 overflow-hidden">
      <div
        aria-hidden
        style={{
          position: "absolute",
          right: "-5%",
          top: "50%",
          transform: "translateY(-50%)",
          width: 600,
          height: 600,
          borderRadius: "50%",
          background:
            "radial-gradient(circle, rgba(107,92,255,0.08) 0%, rgba(107,92,255,0.03) 45%, transparent 70%)",
          pointerEvents: "none",
        }}
      />

      <div className="relative z-10 max-w-5xl mx-auto w-full flex flex-col md:flex-row items-center gap-12 md:gap-0">
        <div className="flex-1 md:pr-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mb-6"
          >
            <h1 className="font-['Inter_Tight'] text-6xl md:text-8xl font-semibold text-slate-900 tracking-tight leading-[1.05]">
              Irene Huang
            </h1>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <h2 className="font-['Inter_Tight'] text-2xl md:text-4xl text-slate-800 mt-8 leading-snug font-medium max-w-3xl">
              I design and build digital systems informed by computer science,
              business thinking, and research in operationally complex
              environments.
            </h2>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="mt-12 flex flex-col sm:flex-row items-center gap-5"
          >
            <Button
              asChild
              variant="primary"
              size="lg"
              className="w-full sm:w-auto min-w-[230px]"
            >
              <a href="#research">
                <BookOpen size={18} />
                View Research
              </a>
            </Button>

            <Button
              asChild
              variant="secondary"
              size="lg"
              className="w-full sm:w-auto min-w-[230px]"
            >
              <a href="#projects">
                <ArrowRight size={18} />
                View Projects
              </a>
            </Button>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.4, ease: "easeOut" }}
          className="flex-shrink-0 relative flex items-center justify-center"
          style={{ width: 340, height: 340 }}
          aria-hidden
        >
          <div
            style={{
              position: "absolute",
              inset: -40,
              borderRadius: "50%",
              background:
                "radial-gradient(circle, rgba(107,92,255,0.12) 0%, transparent 68%)",
              pointerEvents: "none",
            }}
          />

          <div
            style={{
              position: "absolute",
              width: 300,
              height: 90,
              border: "1px solid rgba(107,92,255,0.18)",
              borderRadius: "50%",
              transform: "rotateX(72deg)",
              pointerEvents: "none",
            }}
          />

          <div
            style={{
              position: "absolute",
              width: 340,
              height: 100,
              border: "1px solid rgba(107,92,255,0.10)",
              borderRadius: "50%",
              transform: "rotateX(72deg) rotateZ(35deg)",
              pointerEvents: "none",
            }}
          />

          <OrbitalDot
            rx={150}
            ry={28}
            duration={7}
            offset={0}
            size={4}
            color="rgba(107,92,255,0.7)"
          />
          <OrbitalDot
            rx={170}
            ry={32}
            duration={11}
            offset={2.1}
            size={3}
            color="rgba(147,130,255,0.5)"
          />
          <OrbitalDot
            rx={150}
            ry={28}
            duration={7}
            offset={3.3}
            size={2.5}
            color="rgba(180,170,255,0.45)"
          />

          <motion.div
            animate={{
              rotate: 360,
              y: [0, -10, 0],
            }}
            transition={{
              rotate: { duration: 36, repeat: Infinity, ease: "linear" },
              y: { duration: 5, repeat: Infinity, ease: "easeInOut" },
            }}
            style={{
              width: 220,
              height: 220,
              borderRadius: "50%",
              overflow: "hidden",
              position: "relative",
              zIndex: 2,
              flexShrink: 0,
              boxShadow:
                "0 0 0 1.5px rgba(107,92,255,0.15), 0 20px 60px rgba(107,92,255,0.18)",
            }}
          >
            <img
              src={planetImgUrl}
              alt="Full moon"
              style={{
                width: "118%",
                height: "118%",
                objectFit: "cover",
                objectPosition: "center",
                position: "absolute",
                top: "50%",
                left: "50%",
                transform: "translate(-50%, -50%)",
                display: "block",
                filter: "saturate(0.82) brightness(0.96)",
              }}
              loading="eager"
              decoding="async"
            />
            <div
              style={{
                position: "absolute",
                inset: 0,
                borderRadius: "50%",
                background:
                  "radial-gradient(circle at 50% 50%, transparent 52%, rgba(60,20,100,0.22) 100%)",
                pointerEvents: "none",
              }}
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.2, duration: 0.8 }}
            style={{
              position: "absolute",
              bottom: 10,
              right: 14,
              fontSize: 10,
              letterSpacing: "0.08em",
              color: "rgba(107,92,255,0.40)",
              fontFamily: "monospace",
              pointerEvents: "none",
              zIndex: 3,
            }}
          >
            NASA / Public Domain
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
