import { motion } from "motion/react";

export function AnimatedBackground() {
  return (
    <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none bg-[#FAFAFC]">
      {/* Subtle gradient glowing orbs */}
      <motion.div
        className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] bg-[#6B5CFF]/[0.08] blur-[120px] rounded-full"
        animate={{
          x: [0, 50, 0],
          y: [0, 30, 0],
        }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute top-[20%] right-[-10%] w-[40%] h-[60%] bg-[#A89FFF]/[0.08] blur-[100px] rounded-full"
        animate={{
          x: [0, -40, 0],
          y: [0, -40, 0],
        }}
        transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute bottom-[-10%] left-[20%] w-[60%] h-[40%] bg-[#E0DEFF]/[0.12] blur-[120px] rounded-full"
        animate={{
          x: [0, -30, 0],
          y: [0, 50, 0],
        }}
        transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
      />

      {/* Abstract Data/Network Visualization Lines */}
      <svg className="absolute inset-0 w-full h-full opacity-[0.35]" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
            <path d="M 40 0 L 0 0 0 40" fill="none" stroke="#6B5CFF" strokeWidth="0.5" strokeOpacity="0.2"/>
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#grid)" />
        
        {/* Draw a few subtle networking nodes/lines */}
        <motion.path
          d="M 150 200 L 350 150 L 500 350 L 750 250 L 950 450"
          fill="none"
          stroke="#6B5CFF"
          strokeWidth="1"
          strokeOpacity="0.3"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 4, ease: "easeInOut", repeat: Infinity, repeatType: "reverse" }}
        />
         <motion.path
          d="M 250 450 L 400 550 L 650 500 L 850 650 L 1050 550"
          fill="none"
          stroke="#6B5CFF"
          strokeWidth="1"
          strokeOpacity="0.3"
          initial={{ pathLength: 1 }}
          animate={{ pathLength: 0 }}
          transition={{ duration: 6, ease: "easeInOut", repeat: Infinity, repeatType: "reverse" }}
        />
        {/* Connecting points */}
        <circle cx="350" cy="150" r="2.5" fill="#6B5CFF" opacity="0.4" />
        <circle cx="500" cy="350" r="2.5" fill="#6B5CFF" opacity="0.4" />
        <circle cx="750" cy="250" r="2.5" fill="#6B5CFF" opacity="0.4" />
        <circle cx="400" cy="550" r="2.5" fill="#6B5CFF" opacity="0.4" />
        <circle cx="650" cy="500" r="2.5" fill="#6B5CFF" opacity="0.4" />
      </svg>
    </div>
  );
}
