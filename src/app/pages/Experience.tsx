import { motion, useReducedMotion } from "framer-motion";

const experiences = [
  {
    company: "Stony Brook University",
    website: "https://www.stonybrook.edu/",
    logo: "/company-logos/stony-brook.svg",
    isCurrent: true,
    positions: [
      {
        title: "Graduate Assistant - Graduate School",
        description: (
          <div className="space-y-4">
            <p>
              My work at the Graduate School sits at the intersection of communication and (web) design. I help translate programs, opportunities, research, and student experiences into content that is easier for the university community to find and understand.
            </p>
            <p>
              Depending on the project, that might mean designing a webpage, writing a news story, developing a marketing campaign, creating event materials, or managing social media. Select pages I designed are live on the{" "}
              <a
                href="https://www.stonybrook.edu/grad/"
                target="_blank"
                rel="noopener noreferrer"
                className="border-b border-black transition-colors hover:text-primary"
              >
                Stony Brook University Graduate School website.
                <span className="sr-only"> (opens in a new tab)</span>
              </a>{" "}
            </p>
          </div>
        ),
      },
      {
        title: "Research Assistant - Data Envelopment Analysis (DEA) for Nutritional Efficiency Modeling",
        description: (
          <div className="space-y-4">
            <p>
              Most of us know that eating well is important, but identifying foods that provide the strongest nutritional value is much more complicated than it sounds. In this research, we use DEA to compare foods based on the nutrients they provide.
            </p>
            <p>
              My main contribution has been building the analysis in Python, where I extract nutrition data from the U.S. Department of Agriculture (USDA), and solve optimization models across 25 food groups (snacks included 😁) to examine the “superior” foods among them.
            </p>
          </div>
        ),
      },
      {
        title: "Teaching Assistant",
        description: (
          <div className="space-y-4">
            <p>
              I enjoy teaching! Throughout both undergrad and graduate school, I’ve served as a Teaching Assistant (TA) three times. My most recent TA role concluded in Spring 2026.
            </p>
            <div>
              <p className="detail-label mb-2">Courses assisted:</p>
              <ul className="list-disc space-y-1 pl-5">
                <li>Applied Linear Algebra</li>
                <li>Opportunities in STEM and Beyond</li>
                <li>Leadership, Team Effectiveness and Communications</li>
              </ul>
            </div>
          </div>
        ),
      },
    ],
  },
    {
    company: "Renewable Energy Long Island",
    website: "https://www.renewableenergylongisland.org/",
    logo: "/company-logos/renewable-energy-long-island-mark.png",
    isCurrent: false,
    positions: [
      {
        title: "Data Visualization Intern",
        description: (
          <div className="space-y-4">
            <p>
              With the increasing demand for electricity, clean and renewable energy is more important than ever. Municipalities across Long Island have been making strides for a cleaner energy future, and that’s important to document - whether it is spread across reports, plans, or simply the internet.
            </p>
            <p>
              I created a{" "}
              <a
                href="https://town-readiness-dashboard.vercel.app/"
                target="_blank"
                rel="noopener noreferrer"
                className="border-b border-black transition-colors hover:text-primary"
              >
                dashboard
                <span className="sr-only"> (opens in a new tab)</span>
              </a>{" "}
              that captured municipal clean energy and climate-readiness efforts - including renewable energy and climate action goals, green buildings, electric vehicle infrastructure, and workforce development. I also adapted the final product for the organization’s website so that community members and local stakeholders could view it directly and inform policy decisions.
            </p>
          </div>
        ),
      },
    ],
  },
  {
    company: "Virtual Senior Center (VSC)",
    website: "https://www.vscm.selfhelp.net/",
    logo: "/company-logos/virtual-senior-center-circle.png",
    isCurrent: false,
    positions: [
      {
        title: "Service-learning Team Lead",
        description: (
          <div className="space-y-4">
            <p>
              Post COVID, senior isolation was an issue that couldn’t be overlooked. In college, a group of 4 classmates and I volunteered with VSC to host webinars for the senior community. I taught a lesson on Chinese New Year traditions and the 12 zodiacs.
            </p>
          </div>
        ),
      },
    ],
  },
  {
    company: "Vivvi Early Learning",
    website: "https://vivvi.com/",
    logo: "/company-logos/vivvi.svg",
    logoFit: "cover",
    isCurrent: false,
    positions: [
      {
        title: "Admissions Intern",
        description: (
          <div className="space-y-4">
            <p>
              Vivvi reinvents childcare by designing research-based curriculums across toddlers and school-aged children. During my time there, I was on the enrollment team, helping families successfully onboard and begin their Vivvi experience.
            </p>
            <p>
              My work involved verifying enrollment data, redesigning client and health forms, handling enrollment inquiries, and managing the summer camp partnership with NewYork-Presbyterian Hospital. At the end of my internship, camp enrollment reached 100%!
            </p>
          </div>
        ),
      },
    ],
  },
];

export default function Experience() {
  const reduceMotion = useReducedMotion();

  return (
    <motion.div
      initial={reduceMotion ? false : { opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      className="max-w-6xl space-y-12 pb-24"
    >
      <h2 className="inline-block border-b border-black pb-2 text-xl">Experience</h2>

      <div className="relative ml-6 space-y-16 border-l border-black pb-2 md:ml-8">
        {experiences.map((exp) => (
          <div key={exp.company} className="relative pl-8 md:pl-12">
            <div
              className={`absolute -left-[25px] top-0 z-10 flex h-[50px] w-[50px] cursor-default items-center justify-center overflow-hidden border border-black bg-white shadow-[4px_4px_0_0_rgba(0,0,0,1)] transition-all hover:translate-x-1 hover:translate-y-1 hover:shadow-none ${
                exp.logoFit === "cover" ? "p-0" : "p-1"
              }`}
            >
              <img
                src={exp.logo}
                alt=""
                aria-hidden="true"
                className={`h-full w-full ${exp.logoFit === "cover" ? "object-cover" : "object-contain"}`}
              />
            </div>

            <div className="pt-2">
              <div className="mb-6 flex flex-col md:flex-row md:items-baseline">
                <h3 className="font-serif text-2xl italic">
                  <a
                    href={exp.website}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="underline decoration-black underline-offset-4 transition-colors hover:text-primary"
                  >
                    {exp.company}
                    <span className="sr-only"> (opens in a new tab)</span>
                  </a>{" "}
                  {exp.isCurrent && "(Current)"}
                </h3>
              </div>

              <div className="space-y-12">
                {exp.positions.map((pos) => (
                  <div key={pos.title} className="relative">
                    <h4 className="mb-3 font-sans text-lg font-medium text-primary">
                      {pos.title}
                    </h4>
                    <div className="text-neutral-700">{pos.description}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        ))}

        <div className="absolute -bottom-2 -left-[4px] h-2 w-2 bg-black" />
      </div>
    </motion.div>
  );
}
