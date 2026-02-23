import { useState, useEffect } from "react";
import Hero from "./sections/Hero";
import About from "./sections/About";
import Experience from "./sections/Experience";
import Projects from "./sections/Projects";
import Education from "./sections/Education";
import Skills from "./sections/Skills";
import Hobbies from "./sections/Hobbies";
import Contact from "./sections/Contact";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

function ScrollToTopButton() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 300);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return visible ? (
    <button
      onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      title="Back to top"
      style={{
        position: "fixed",
        bottom: "2rem",
        right: "2rem",
        zIndex: 100,
        width: "44px",
        height: "44px",
        borderRadius: "8px",
        background: "#2563eb",
        color: "#fff",
        border: "none",
        cursor: "pointer",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        boxShadow: "0 4px 14px rgba(37,99,235,0.4)",
        transition: "background 0.2s, transform 0.2s",
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.background = "#1d4ed8";
        e.currentTarget.style.transform = "translateY(-3px)";
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.background = "#2563eb";
        e.currentTarget.style.transform = "translateY(0)";
      }}
    >
      <svg
        width="100"
        height="100"
        viewBox="0 0 100 100"
        fill="none"
        stroke="currentColor"
        strokeWidth="5"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <polyline points="17 11 12 6 7 11" />
        <polyline points="17 18 12 13 7 18" />
      </svg>
    </button>
  ) : null;
}

export default function App() {
  return (
    <div className="bg-slate-950 text-gray-100 font-sans scroll-smooth">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Experience />
        <Projects />
        <Education />
        <Skills />
        <Hobbies />
        <Contact />
      </main>
      <Footer />
      <ScrollToTopButton />
    </div>
  );
}