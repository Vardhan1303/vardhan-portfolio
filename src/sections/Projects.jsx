import { motion } from "framer-motion";
import projects from "../data/projects";

function escapeHtml(str = "") {
  return str
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}

// Convert **bold** to <strong> and preserve safe text
function formatInlineMarkup(text = "") {
  const escaped = escapeHtml(text);
  return escaped.replace(/\*\*(.+?)\*\*/g, "<strong>$1</strong>");
}

function renderDescription(project) {
  const desc = project.description;
  
  // If user supplied structured bullets, render directly
  if (project.bullets && Array.isArray(project.bullets)) {
    // Filter out "Key Technologies:" line for separate rendering
    const bulletItems = project.bullets.filter(b => !b.startsWith("Key Technologies:"));
    
    return (
      <ul className="list-disc ml-6 space-y-2 text-left inline-block">
        {bulletItems.map((b, i) => (
          <li key={i} dangerouslySetInnerHTML={{ __html: formatInlineMarkup(b) }} />
        ))}
      </ul>
    );
  }

  if (!desc) return null;

  // Split into trimmed non-empty lines
  const lines = desc.split(/\r?\n/).map((l) => l.trim()).filter(Boolean);

  // Lines that start with '•' are bullets
  const bullets = lines.filter((l) => l.startsWith("•"));
  const paras = lines.filter((l) => !l.startsWith("•"));

  return (
    <>
      {bullets.length > 0 && (
        <ul className="list-disc ml-6 space-y-2 text-left inline-block">
          {bullets.map((l, i) => {
            const withoutBullet = l.replace(/^•\s*/, "");
            return <li key={i} dangerouslySetInnerHTML={{ __html: formatInlineMarkup(withoutBullet) }} />;
          })}
        </ul>
      )}

      {paras.length > 0 &&
        paras.map((p, i) => (
          <p key={i} className="text-gray-300 leading-relaxed text-left" dangerouslySetInnerHTML={{ __html: formatInlineMarkup(p) }} />
        ))
      }
    </>
  );
}

export default function Projects() {
  return (
    <section
      id="projects"
      className="bg-blue-900/30 text-gray-200 relative overflow-hidden"
    >
      {/* === HEADER BAR === */}
      <div className="relative w-full bg-blue-800/50 py-12">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white tracking-wide">
            Highlighted Projects
          </h2>
        </div>
      </div>

      {/* === MAIN CONTENT === */}
      <div className="relative w-full py-20">
        {/* Center timeline line (desktop only) */}
        <div className="hidden md:block absolute top-0 bottom-0 left-1/2 w-[4px] bg-blue-800/40 transform -translate-x-1/2 z-0"></div>

        <div className="space-y-32 relative z-10">
          {projects.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}

/* === TIMELINE PROJECT CARD === */
function ProjectCard({ project, index }) {
  const isReversed = index % 2 !== 0;

  return (
    <div
      className={`flex flex-col md:flex-row items-stretch relative min-h-[400px] md:min-h-[500px] ${
        isReversed ? "md:flex-row-reverse" : ""
      }`}
    >
      {/* === IMAGE SIDE - Full Height === */}
      <motion.div
        className="md:w-1/2 relative"
        initial={{ opacity: 0, x: isReversed ? 100 : -100 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        {project.image ? (
          <img
            src={project.image}
            alt={`Screenshot of ${project.title}`}
            loading="lazy"
            className="hidden md:block w-full h-full object-cover"
          />
        ) : (
          <div className="hidden md:flex w-full h-full bg-blue-800/30 items-center justify-center text-gray-400 italic">
            No image available
          </div>
        )}
      </motion.div>

      {/* === TIMELINE DOT (desktop only) === */}
      <div className="hidden md:flex items-center justify-center absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 z-20">
        <div className="w-6 h-6 bg-gray-500 border-4 border-blue-400 rounded-full shadow-md"></div>
      </div>

      {/* === TEXT SIDE === */}
      <motion.div
        className="md:w-1/2 text-center md:text-left space-y-4 flex flex-col justify-center px-6 md:px-12 py-8"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        {project.date && (
          <span className="text-sm font-semibold text-blue-300">
            {project.date}
          </span>
        )}
        <h3 className="text-2xl md:text-3xl font-bold text-white">
          {project.title}
        </h3>
        {project.subtitle && (
          <p className="text-lg text-blue-300">{project.subtitle}</p>
        )}
        {/* DESCRIPTION */}
        <div>{renderDescription(project)}</div>
        {project.technologies && project.technologies.length > 0 && (
          <div className="flex flex-wrap gap-2 mt-2">
            {project.technologies.map((tech, idx) => (
              <span
                key={idx}
                className="text-xs px-3 py-1 rounded-full bg-blue-600/30 text-blue-200"
              >
                {tech}
              </span>
            ))}
          </div>
        )}
        
        {/* ACTION BUTTONS */}
        {(project.githubUrl || project.videoUrl) && (
          <div className="flex flex-wrap gap-3 mt-4">
            {project.githubUrl && (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 bg-blue-600 hover:bg-blue-500 text-white rounded-lg transition-colors duration-300 text-sm font-medium"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
                </svg>
                View Code
              </a>
            )}
            {project.videoUrl && (
              <a
                href={project.videoUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 bg-purple-600 hover:bg-purple-500 text-white rounded-lg transition-colors duration-300 text-sm font-medium"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M8 5v14l11-7z"/>
                </svg>
                Watch Demo
              </a>
            )}
          </div>
        )}
      </motion.div>
    </div>
  );
}