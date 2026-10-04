import { useEffect, useRef } from "react";
import { motion, useReducedMotion } from "framer-motion";

const skillCategories = [
  {
    title: "Programming",
    skills:
      "Python (Pandas, NumPy, scikit-learn, Matplotlib, PyTorch), R, SQL, Java, JavaScript, TypeScript, C",
  },
  {
    title: "Quantitative Methods",
    skills:
      "Optimization, data envelopment analysis, multi-criteria decision analysis, clustering, regression, time-series analysis, hypothesis testing, model validation",
  },
  {
    title: "Web Development",
    skills: "HTML/CSS, React, Node.js, Express.js, Electron.js, Vite",
  },
  {
    title: "Databases",
    skills: "MySQL, PostgreSQL, NoSQL, MongoDB",
  },
  {
    title: "Tools",
    skills: "Excel/Sheets, Jupyter Notebook, VBA, OpenSolver, LaTeX, Git, VS Code,",
  },
];

const skillIcons = [
  { label: "Python", src: "/skill-icons/python.svg" },
  { label: "R", src: "/skill-icons/r.svg" },
  { label: "Java", src: "/skill-icons/java.svg" },
  { label: "JavaScript", src: "/skill-icons/javascript.svg" },
  { label: "TypeScript", src: "/skill-icons/typescript.svg" },
  { label: "React", src: "/skill-icons/react.svg" },
  { label: "Node.js", src: "/skill-icons/nodejs.svg" },
  { label: "Express", src: "/skill-icons/express.svg" },
  { label: "Vite", src: "/skill-icons/vite.svg" },
  { label: "MySQL", src: "/skill-icons/mysql.svg" },
  { label: "PostgreSQL", src: "/skill-icons/postgres.svg" },
  { label: "MongoDB", src: "/skill-icons/mongodb.svg" },
];

export default function Skills() {
  const reduceMotion = useReducedMotion();
  const sceneRef = useRef<HTMLDivElement>(null);
  const iconRefs = useRef<Array<HTMLDivElement | null>>([]);

  useEffect(() => {
    const scene = sceneRef.current;
    if (!scene) return;

    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduceMotion) return;

    const initialWidth = scene.clientWidth || 760;
    const columns = Math.max(4, Math.floor(initialWidth / 76));

    const bodies = skillIcons.map((_, index) => ({
      x: 24 + (index % columns) * 72,
      y: 32 + Math.floor(index / columns) * 58,
      vx: (index % 2 === 0 ? 0.22 : -0.18) * (1 + index * 0.02),
      vy: 0,
      rotation: (index % 5) * 4 - 8,
      angularVelocity: 0,
      size: index % 3 === 0 ? 50 : 46,
    }));

    const pointer = { x: -1000, y: -1000, active: false };
    let frame = 0;

    const handlePointerMove = (event: PointerEvent) => {
      const rect = scene.getBoundingClientRect();
      pointer.x = event.clientX - rect.left;
      pointer.y = event.clientY - rect.top;
      pointer.active = true;
    };

    const handlePointerLeave = () => {
      pointer.x = -1000;
      pointer.y = -1000;
      pointer.active = false;
    };

    scene.addEventListener("pointermove", handlePointerMove);
    scene.addEventListener("pointerleave", handlePointerLeave);

    const animate = () => {
      const width = scene.clientWidth;
      const height = scene.clientHeight;

      bodies.forEach((body, index) => {
        body.vy += 0.42;

        if (pointer.active) {
          const dx = body.x + body.size / 2 - pointer.x;
          const dy = body.y + body.size / 2 - pointer.y;
          const distance = Math.sqrt(dx * dx + dy * dy) || 1;
          const radius = 70;

          if (distance < radius) {
            const force = ((radius - distance) / radius) * 1.35;
            body.vx += (dx / distance) * force;
            body.vy += (dy / distance) * force;
            body.angularVelocity += (dx / distance) * 0.75;
          }
        }

        for (let otherIndex = index + 1; otherIndex < bodies.length; otherIndex += 1) {
          const other = bodies[otherIndex];
          const dx = body.x + body.size / 2 - (other.x + other.size / 2);
          const dy = body.y + body.size / 2 - (other.y + other.size / 2);
          const distance = Math.sqrt(dx * dx + dy * dy) || 1;
          const minDistance = (body.size + other.size) / 2 + 8;

          if (distance < minDistance) {
            const push = ((minDistance - distance) / minDistance) * 0.32;
            const pushX = (dx / distance) * push;
            const pushY = (dy / distance) * push;

            body.vx += pushX;
            body.vy += pushY;
            other.vx -= pushX;
            other.vy -= pushY;
          }
        }

        body.x += body.vx;
        body.y += body.vy;
        body.rotation += body.angularVelocity;

        if (body.x <= 0 || body.x + body.size >= width) {
          body.x = Math.max(0, Math.min(width - body.size, body.x));
          body.vx *= -0.72;
          body.angularVelocity *= -0.7;
        }

        if (body.y + body.size >= height - 2) {
          body.y = height - body.size - 2;
          body.vy *= -0.46;
          body.vx *= 0.965;
          body.angularVelocity *= 0.84;
        }

        if (body.y <= 0) {
          body.y = 0;
          body.vy *= -0.45;
        }

        body.vx *= 0.992;
        body.vy *= 0.992;
        body.angularVelocity *= 0.94;

        const icon = iconRefs.current[index];
        if (icon) {
          icon.style.width = `${body.size}px`;
          icon.style.height = `${body.size}px`;
          icon.style.transform = `translate3d(${body.x}px, ${body.y}px, 0) rotate(${body.rotation}deg)`;
        }
      });

      frame = requestAnimationFrame(animate);
    };

    frame = requestAnimationFrame(animate);

    return () => {
      cancelAnimationFrame(frame);
      scene.removeEventListener("pointermove", handlePointerMove);
      scene.removeEventListener("pointerleave", handlePointerLeave);
    };
  }, []);

  return (
    <motion.div
      initial={reduceMotion ? false : { opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      className="flex min-h-full flex-col space-y-12 pb-0"
    >
      <div>
        <h2 className="mb-8 inline-block border-b border-black pb-2 text-xl">Skills</h2>

        <div className="space-y-5">
          {skillCategories.map((cat) => (
            <div
              key={cat.title}
              className="grid grid-cols-1 gap-2 border-b border-neutral-200 pb-4 text-neutral-800 last:border-0 md:grid-cols-4 md:gap-4"
            >
              <h3 className="col-span-1 font-serif text-xl italic text-black">{cat.title}</h3>
              <p className="col-span-3">{cat.skills}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="relative mt-2 w-full overflow-visible">
        <div
          ref={sceneRef}
          className="relative h-[260px] w-full cursor-crosshair overflow-hidden border-t border-black"
          aria-hidden="true"
        >
          {skillIcons.map((icon, index) => (
            <div
              key={icon.label}
              ref={(node) => {
                iconRefs.current[index] = node;
              }}
              className="skill-icon-body absolute left-0 top-0 flex items-center justify-center rounded-2xl border-2 border-black bg-white p-2 shadow-[3px_3px_0_0_rgba(0,0,0,1)]"
              title={icon.label}
              style={{
                width: index % 3 === 0 ? 50 : 46,
                height: index % 3 === 0 ? 50 : 46,
                transform: `translate3d(${24 + index * 58}px, ${184 - (index % 3) * 10}px, 0) rotate(${(index % 5) * 4 - 8}deg)`,
              }}
            >
              <img src={icon.src} alt="" className="h-full w-full object-contain" draggable={false} />
            </div>
          ))}
          <div className="pointer-events-none absolute bottom-0 left-0 h-px w-full bg-black" />
        </div>
      </div>
    </motion.div>
  );
}
