import { useEffect, useRef } from "react";
import { NavLink, Outlet, useLocation } from "react-router";
import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

const navItems = [
  { path: "/about", label: "About" },
  { path: "/projects", label: "Selected Projects" },
  { path: "/experience", label: "Experience" },
  { path: "/skills", label: "Skills" },
  { path: "/contact", label: "Contact" },
];

export function Root() {
  const location = useLocation();
  const mainRef = useRef<HTMLElement>(null);
  const previousPath = useRef(location.pathname);

  useEffect(() => {
    const currentPage = navItems.find((item) => item.path === location.pathname)?.label ?? "Portfolio";
    document.title = `${currentPage} | Irene Huang`;

    if (previousPath.current !== location.pathname) {
      mainRef.current?.focus();
      previousPath.current = location.pathname;
    }
  }, [location.pathname]);

  return (
    <div className="flex min-h-screen flex-col bg-background text-foreground selection:bg-primary selection:text-white">
      <a
        href="#main-content"
        onClick={(event) => {
          event.preventDefault();
          mainRef.current?.focus();
          mainRef.current?.scrollIntoView({
            behavior: window.matchMedia("(prefers-reduced-motion: reduce)").matches ? "auto" : "smooth",
            block: "start",
          });
        }}
        className="fixed left-4 top-4 z-[100] -translate-y-24 bg-black px-4 py-3 font-medium text-white transition-transform focus:translate-y-0"
      >
        Skip to main content
      </a>

      <header className="fixed left-0 top-0 z-50 w-full border-b border-black bg-white/90 backdrop-blur-md transition-all">
        <div className="mx-auto flex w-full max-w-[1440px] flex-col justify-between gap-4 px-6 py-4 md:h-20 md:flex-row md:items-center md:gap-0 md:px-12 lg:px-16 xl:px-20">
          <h1 className="font-serif text-2xl italic tracking-tight">
            <NavLink
              to="/"
              aria-label="Irene Huang, home"
              className="transition-colors hover:text-primary focus-visible:text-primary"
            >
              Irene Huang
            </NavLink>
          </h1>

          <nav aria-label="Primary navigation" className="no-scrollbar flex items-center gap-6 overflow-x-auto pb-1 md:gap-8 md:pb-0">
            {navItems.map((item) => (
              <NavLink
                key={item.path}
                to={item.path}
                end={item.path === "/"}
                className={({ isActive }) =>
                  cn(
                    "whitespace-nowrap border-b-2 py-1 text-sm font-medium transition-colors",
                    isActive
                      ? "border-black text-black"
                      : "border-transparent text-neutral-500 hover:border-neutral-300 hover:text-black",
                  )
                }
              >
                {item.label}
              </NavLink>
            ))}
          </nav>
        </div>
      </header>

      <main
        ref={mainRef}
        id="main-content"
        tabIndex={-1}
        className="relative min-h-[100dvh] flex-1 pt-32 outline-none md:pt-32"
      >
        <div className="mx-auto w-full max-w-[1440px] px-6 md:px-12 lg:px-16 xl:px-20">
          <Outlet />
        </div>
      </main>
    </div>
  );
}
