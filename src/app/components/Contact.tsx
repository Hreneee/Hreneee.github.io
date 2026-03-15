import { motion } from "motion/react";
import contactCharacter from "../../assets/characters/Headshot.JPG";
import { Mail, Linkedin, Github, FileText } from "lucide-react";

export function Contact() {
  return (
    <section id="contact" className="py-24 relative z-10 bg-[#FAFAFC] border-t border-slate-200/50">
      <div className="max-w-4xl mx-auto px-6 md:px-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="mb-16 text-center"
        >
          <h2 className="font-['Inter_Tight'] text-4xl font-semibold text-slate-900 mb-4 tracking-tight">
            Contact
          </h2>
          <p className="font-['Inter'] text-lg text-slate-500 max-w-2xl mx-auto">
            I’m currently seeking opportunities where I can contribute to projects involving data, technology, and complex systems.
          </p>
        </motion.div>

        <div className="bg-white border border-slate-200 rounded-3xl p-8 md:p-16 shadow-[0_8px_30px_rgba(107,92,255,0.04)] overflow-hidden relative text-center">
          {/* Decorative background blurs */}
          <div className="relative z-10 max-w-2xl mx-auto flex flex-col items-center">
            <h3 className="font-['Inter_Tight'] text-3xl font-semibold text-slate-900 mb-6">
              Let's connect
            </h3>
            <p className="font-['Inter'] text-slate-600 mb-12 leading-relaxed text-lg">
              If you’re working on problems related to healthcare technology, digital systems, or data-driven decision-making, I’d love to connect and learn more.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-6 sm:gap-12 mb-12 w-full">
              <a 
                href="mailto:irene.huang.227q@gmail.com"
                className="flex flex-col items-center gap-3 text-slate-600 hover:text-[#6B5CFF] group transition-colors"
              >
                <div className="w-14 h-14 rounded-full bg-slate-50 border border-slate-100 flex items-center justify-center group-hover:bg-[#6B5CFF]/10 group-hover:border-[#6B5CFF]/20 transition-all">
                  <Mail size={24} />
                </div>
                <span className="font-['Inter'] font-medium">Email</span>
              </a>

              <a 
                href="https://www.linkedin.com/in/i-huang/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex flex-col items-center gap-3 text-slate-600 hover:text-[#6B5CFF] group transition-colors"
              >
                <div className="w-14 h-14 rounded-full bg-slate-50 border border-slate-100 flex items-center justify-center group-hover:bg-[#6B5CFF]/10 group-hover:border-[#6B5CFF]/20 transition-all">
                  <Linkedin size={24} />
                </div>
                <span className="font-['Inter'] font-medium">LinkedIn</span>
              </a>

              <a 
                href="https://github.com/Hreneee"
                target="_blank"
                rel="noopener noreferrer"
                className="flex flex-col items-center gap-3 text-slate-600 hover:text-[#6B5CFF] group transition-colors"
              >
                <div className="w-14 h-14 rounded-full bg-slate-50 border border-slate-100 flex items-center justify-center group-hover:bg-[#6B5CFF]/10 group-hover:border-[#6B5CFF]/20 transition-all">
                  <Github size={24} />
                </div>
                <span className="font-['Inter'] font-medium">GitHub</span>
              </a>
            </div>

            <a 
              href="/Irene_Huang_MBA_CS_SQL_AI.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 bg-[#6B5CFF] hover:bg-[#5244e0] text-white px-8 py-4 rounded-xl font-['Inter'] font-medium transition-all shadow-md shadow-[#6B5CFF]/20 hover:shadow-lg hover:shadow-[#6B5CFF]/30 w-full sm:w-auto"
            >
              <FileText size={18} />
              View Resume
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
