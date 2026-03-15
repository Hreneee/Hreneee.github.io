import { motion } from "motion/react";
import { Menu, X } from "lucide-react";
import { useState } from "react";

const navItems = [
  "About", "Research", "Projects", "Experience", "Contact"
];

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <motion.nav
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="fixed top-0 left-0 right-0 z-50 px-6 py-4 md:px-12 md:py-6 bg-white/60 backdrop-blur-xl border-b border-white/20 shadow-[0_4px_30px_rgba(0,0,0,0.02)]"
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        {/* Logo */}
        <a 
          href="#" 
          className="font-['Inter_Tight'] text-2xl font-bold tracking-tight text-slate-900 relative z-50 hover:opacity-80 transition-opacity"
        >
          Irene Huang
        </a>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-10">
          {navItems.map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              className="group relative text-sm font-medium text-slate-600 hover:text-slate-900 transition-colors font-['Inter']"
            >
              {item}
              <span className="absolute -bottom-1 left-0 w-full h-[2px] bg-[#6B5CFF] scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-300 ease-out rounded-full" />
            </a>
          ))}
        </div>

        {/* Mobile Menu Toggle */}
        <div className="md:hidden relative z-50">
          <button 
            onClick={() => setIsOpen(!isOpen)}
            className="p-2 text-slate-600 hover:text-slate-900 transition-colors"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {isOpen && (
        <motion.div 
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="absolute top-full left-0 right-0 bg-white/95 backdrop-blur-xl border-b border-slate-100 p-6 flex flex-col gap-6 md:hidden shadow-lg"
        >
          {navItems.map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              onClick={() => setIsOpen(false)}
              className="text-lg font-medium text-slate-700 hover:text-[#6B5CFF] font-['Inter']"
            >
              {item}
            </a>
          ))}
        </motion.div>
      )}
    </motion.nav>
  );
}
