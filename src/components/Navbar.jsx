import { useState } from "react";
import { motion } from "framer-motion";

export default function Navbar() {
  const [lang, setLang] = useState("EN");
  const [menuOpen, setMenuOpen] = useState(false);

  const sections = [
    { id: "hero", title: "Home" },
    { id: "about", title: "About Me" },
    { id: "experience", title: "Experience" },
    { id: "projects", title: "Projects" },
    { id: "education", title: "Education" },
    { id: "hobbies", title: "Hobbies" },
    { id: "contact", title: "Contact" },
  ];

  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-gray-50/95 backdrop-blur border-b border-gray-200">
      {/* Top thin color line */}
      <div className="h-1 w-full flex">
        <div className="flex-1 bg-black"></div>
        <div className="flex-1 bg-blue-900"></div>
        <div className="flex-1 bg-green-500"></div>
        <div className="flex-1 bg-orange-500"></div>
      </div>

      <div className="flex justify-between items-center px-20 py-6 max-w-7xl mx-auto">
        {/* Animated Logo */}
        <motion.div
          className="text-2xl font-bold text-gray-800 tracking-wide cursor-pointer"
          style={{ fontFamily: "'Playfair Display', 'Georgia', serif" }}
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          whileHover={{ scale: 1.05 }}
        >
          <motion.span
            className="inline-block"
            initial={{ y: -10, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.5 }}
          >
            Vardhan
          </motion.span>
          <motion.span
            className="inline-block ml-2 text-blue-700"
            initial={{ y: 10, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.5 }}
          >
            Mistry
          </motion.span>
        </motion.div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8 text-sm font-medium">
          {sections.slice(1).map((section) => (
            <a
              key={section.id}
              href={`#${section.id}`}
              className="
                relative 
                text-gray-700 
                hover:text-blue-700 
                transition-colors 
                after:absolute 
                after:left-0 
                after:-bottom-1 
                after:h-0.5 
                after:w-0 
                after:bg-blue-700 
                after:transition-all 
                after:duration-300 
                hover:after:w-full
              "
            >
              {section.title}
            </a>
          ))}

          
        </nav>

        {/* Mobile menu toggle */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden text-gray-600 hover:text-blue-700 focus:outline-none"
        >
          ☰
        </button>
      </div>

      {/* Mobile Navigation */}
      {menuOpen && (
        <div className="md:hidden bg-white border-t border-gray-200 shadow-lg px-8 py-4 space-y-3">
          {sections.slice(1).map((section) => (
            <a
              key={section.id}
              href={`#${section.id}`}
              onClick={() => setMenuOpen(false)}
              className="block text-gray-700 hover:text-blue-700"
            >
              {section.title}
            </a>
          ))}
          
        </div>
      )}
    </header>
  );
}