import { Outlet } from "react-router";
import { Navbar } from "./Navbar";
import { useEffect } from "react";

export function Root() {
  useEffect(() => {
    document.documentElement.classList.add("scroll-smooth");
    return () => document.documentElement.classList.remove("scroll-smooth");
  }, []);

  return (
    <div className="min-h-screen bg-[#FAFAFC] font-['Inter'] text-slate-900 selection:bg-[#6B5CFF]/20 selection:text-[#6B5CFF]">
      <Navbar />
      <main>
        <Outlet />
      </main>
    </div>
  );
}
