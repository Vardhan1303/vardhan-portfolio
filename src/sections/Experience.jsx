import { motion } from "framer-motion";
import experiences from "../data/experienceData";

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

function renderDescription(position) {
  const desc = position.description;
  
  // If user supplied structured bullets, render directly
  if (position.bullets && Array.isArray(position.bullets)) {
    // Filter out "Key Technologies:" line for separate rendering
    const bulletItems = position.bullets.filter(b => !b.startsWith("Key Technologies:"));
    
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

// Extract technologies from bullets
function extractTechnologies(position) {
  if (!position.bullets) return [];
  
  const techLine = position.bullets.find(b => b.startsWith("Key Technologies:"));
  if (!techLine) return [];
  
  // Extract technologies after "Key Technologies:"
  const techString = techLine.replace("Key Technologies:", "").trim();
  return techString.split(",").map(t => t.trim()).filter(Boolean);
}

export default function Experience() {
  return (
    <section id="experience" className="bg-slate-950 text-gray-200 relative overflow-hidden">
      {/* HEADING BAR - Full Width */}
      <div className="relative w-full bg-gray-800 py-12">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white tracking-wide">
            Professional Journey
          </h2>
        </div>
      </div>

      {/* MAIN CONTENT */}
      <div className="relative w-full py-20">
        {/* Center Timeline Line - HIDDEN ON MOBILE */}
        <div className="hidden md:block absolute top-0 bottom-0 left-1/2 w-[4px] bg-gray-600 transform -translate-x-1/2 z-0"></div>

        <div className="space-y-32 relative z-10">
          {experiences.map((exp, index) => (
            <div
              key={exp.id}
              className={`flex flex-col md:flex-row relative ${
                index % 2 !== 0 ? "md:flex-row-reverse" : ""
              }`}
            >
              {/* IMAGE SIDE - VISIBLE ON BOTH MOBILE AND DESKTOP */}
              <motion.div
                className="md:w-1/2 relative"
                initial={{ opacity: 0, x: index % 2 === 0 ? -100 : 100 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.8 }}
              >
                {exp.image ? (
                  <img
                    src={exp.image}
                    alt={exp.company || exp.subtitle}
                    loading="lazy"
                    className="w-full h-full object-cover"
                  />
                ) : (
                  <div className="hidden md:flex w-full h-full bg-gray-800/30 items-center justify-center text-gray-400 italic">
                    No image available
                  </div>
                )}
              </motion.div>

              {/* CENTER DOT - DESKTOP ONLY */}
              <div className="hidden md:flex items-center justify-center absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 z-20">
                <div className="w-6 h-6 bg-gray-500 border-4 border-blue-400 rounded-full shadow-md"></div>
              </div>

              {/* TEXT SIDE */}
              <motion.div
                className="md:w-1/2 text-center md:text-left space-y-6 flex flex-col justify-center px-6 md:px-12 py-8"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.8 }}
              >
                {/* Check if it's grouped by company or single position */}
                {exp.positions ? (
                  <>
                    {/* COMPANY NAME */}
                    <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
                      {exp.company}
                    </h3>
                    
                    {/* MULTIPLE POSITIONS */}
                    <div className="space-y-6">
                      {exp.positions.map((position, posIndex) => {
                        const technologies = extractTechnologies(position);
                        
                        return (
                          <div key={posIndex} className="space-y-4 pb-6 border-b border-gray-700 last:border-b-0">
                            {/* DATE */}
                            <span className="text-sm font-semibold text-gray-400">
                              {position.date}
                            </span>
                            
                            {/* POSITION TITLE */}
                            <h4 className="text-xl font-bold text-blue-300">
                              {position.title}
                            </h4>
                            
                            {/* DESCRIPTION */}
                            <div>{renderDescription(position)}</div>
                            
                            {/* TECH BADGES */}
                            {technologies.length > 0 && (
                              <div className="mt-6 pt-4 border-t border-gray-700">
                                <h5 className="text-xs font-semibold text-gray-400 mb-3 uppercase tracking-wide">
                                  Key Technologies
                                </h5>
                                <div className="flex flex-wrap gap-2">
                                  {technologies.map((tech, i) => (
                                    <motion.div
                                      key={i}
                                      className="group relative px-3 py-1.5 bg-gradient-to-r from-blue-600 to-blue-500 text-white rounded-lg shadow-md hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300 cursor-default"
                                      initial={{ opacity: 0, scale: 0.8 }}
                                      whileInView={{ opacity: 1, scale: 1 }}
                                      transition={{ duration: 0.3, delay: i * 0.05 }}
                                      whileHover={{ scale: 1.05 }}
                                    >
                                      <span className="text-xs font-medium">{tech}</span>
                                      <div className="absolute inset-0 bg-white opacity-0 group-hover:opacity-20 rounded-lg transition-opacity duration-300"></div>
                                    </motion.div>
                                  ))}
                                </div>
                              </div>
                            )}
                          </div>
                        );
                      })}
                    </div>
                  </>
                ) : (
                  <>
                    {/* SINGLE POSITION FORMAT (backward compatible) */}
                    <span className="text-sm font-semibold text-gray-400">
                      {exp.date}
                    </span>
                    
                    <h3 className="text-2xl md:text-3xl font-bold text-white">
                      {exp.title}
                    </h3>
                    
                    <p className="text-lg text-blue-300">{exp.subtitle}</p>
                    
                    <p className="text-gray-300 leading-relaxed">
                      {exp.description}
                    </p>
                  </>
                )}
              </motion.div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}