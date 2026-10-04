import { createHashRouter } from "react-router";
import { Root } from "./components/Root";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Experience from "./pages/Experience";
import Home from "./pages/Home";
import Projects from "./pages/Projects";
import Skills from "./pages/Skills";

export const router = createHashRouter([
  {
    path: "/",
    Component: Root,
    children: [
      { index: true, Component: Home },
      { path: "about", Component: About },
      { path: "projects", Component: Projects },
      { path: "experience", Component: Experience },
      { path: "skills", Component: Skills },
      { path: "contact", Component: Contact },
    ],
  },
]);
