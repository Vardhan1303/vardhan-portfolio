import { motion } from "framer-motion";

const fontLink = document.createElement("link");
fontLink.rel = "stylesheet";
fontLink.href =
  "https://fonts.googleapis.com/css2?family=Raleway:wght@400;500;600;700;800&display=swap";
if (!document.head.querySelector('link[href*="Raleway"]')) {
  document.head.appendChild(fontLink);
}

// ── Data ─────────────────────────────────────────────────────────────────────
// Replace logo src paths and content with your actual data
const experiences = [
  {
    id: 1,
    logo: "/images/logos/iav.png",       // ← your logo file
    company: "IAV GmbH",
    location: "Germany",
    positions: [
      {
        title: "Master's Thesis — Perception Engineering",
        date: "Oct 2024 – Apr 2025",
        bullets: [
          "Developed image-based data analysis pipelines for automotive perception systems.",
          "Applied **deep learning** and **computer vision** methods for real-world sensor data.",
          "Executed research-driven experiments with reproducible ML workflows.",
        ],
        technologies: ["Python", "PyTorch", "OpenCV", "ROS2", "Computer Vision"],
      },
    ],
  },
  {
    id: 2,
    logo: "/images/logos/company2.png",  // ← your logo file
    company: "Company Name",
    location: "Germany",
    positions: [
      {
        title: "Role Title",
        date: "Jan 2023 – Sep 2024",
        bullets: [
          "Description bullet one with **bold keyword** as needed.",
          "Second bullet describing what you built or achieved.",
          "Third bullet focusing on impact or scale.",
        ],
        technologies: ["Python", "TensorFlow", "Docker"],
      },
    ],
  },
];

// ── Bold markdown helper ──────────────────────────────────────────────────────
function Bold({ text }) {
  const parts = text.split(/\*\*(.+?)\*\*/g);
  return (
    <>
      {parts.map((part, i) =>
        i % 2 === 1 ? (
          <strong key={i} style={{ fontWeight: 700, color: "#111827" }}>
            {part}
          </strong>
        ) : (
          part
        )
      )}
    </>
  );
}

// ── Single experience card ────────────────────────────────────────────────────
function ExperienceCard({ exp, index }) {
  return (
    <motion.div
      style={{
        maxWidth: "820px",
        margin: "0 auto 1.5rem",
        border: "1px solid #e5e7eb",
        borderRadius: "10px",
        overflow: "hidden",
        display: "flex",
        boxShadow: "0 2px 16px rgba(0,0,0,0.06)",
        background: "#fff",
      }}
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
    >
      {/* LEFT — Logo panel */}
      <div
        style={{
          width: "140px",
          flexShrink: 0,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          padding: "2rem 1.2rem",
          borderRight: "1px solid #e5e7eb",
          background: "#f9fafb",
        }}
      >
        <img
          src={exp.logo}
          alt={exp.company}
          style={{
            width: "90px",
            height: "90px",
            objectFit: "contain",
            display: "block",
          }}
          loading="lazy"
        />
      </div>

      {/* RIGHT — Content */}
      <div
        style={{
          flex: 1,
          padding: "1.8rem 2.2rem",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          gap: "0.3rem",
        }}
      >
        {/* Company + location */}
        <div
          style={{
            display: "flex",
            alignItems: "baseline",
            gap: "0.75rem",
            marginBottom: "0.2rem",
            flexWrap: "wrap",
          }}
        >
          <h3
            style={{
              fontSize: "1.15rem",
              fontWeight: 800,
              color: "#0d0f14",
              margin: 0,
            }}
          >
            {exp.company}
          </h3>
          <span
            style={{
              fontSize: "0.78rem",
              color: "#9ca3af",
              fontWeight: 500,
              letterSpacing: "0.05em",
            }}
          >
            {exp.location}
          </span>
        </div>

        {/* Blue accent */}
        <div
          style={{
            width: "32px",
            height: "2.5px",
            background: "#4169e1",
            borderRadius: "2px",
            marginBottom: "1rem",
          }}
        />

        {/* Positions */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "1.2rem",
          }}
        >
          {exp.positions.map((pos, pi) => (
            <div
              key={pi}
              style={
                pi > 0
                  ? {
                      paddingTop: "1.2rem",
                      borderTop: "1px solid #f3f4f6",
                    }
                  : {}
              }
            >
              {/* Title + date row */}
              <div
                style={{
                  display: "flex",
                  alignItems: "baseline",
                  justifyContent: "space-between",
                  flexWrap: "wrap",
                  gap: "0.5rem",
                  marginBottom: "0.6rem",
                }}
              >
                <h4
                  style={{
                    fontSize: "0.95rem",
                    fontWeight: 700,
                    color: "#4169e1",
                    margin: 0,
                  }}
                >
                  {pos.title}
                </h4>
                <span
                  style={{
                    fontSize: "0.78rem",
                    color: "#9ca3af",
                    fontWeight: 500,
                    whiteSpace: "nowrap",
                  }}
                >
                  {pos.date}
                </span>
              </div>

              {/* Bullets */}
              <ul
                style={{
                  margin: "0 0 0.8rem 1rem",
                  padding: 0,
                  display: "flex",
                  flexDirection: "column",
                  gap: "0.3rem",
                }}
              >
                {pos.bullets.map((b, bi) => (
                  <li
                    key={bi}
                    style={{
                      fontSize: "0.88rem",
                      color: "#374151",
                      lineHeight: 1.75,
                      listStyleType: "disc",
                    }}
                  >
                    <Bold text={b} />
                  </li>
                ))}
              </ul>

              {/* Tech badges */}
              {pos.technologies?.length > 0 && (
                <div style={{ display: "flex", flexWrap: "wrap", gap: "0.4rem" }}>
                  {pos.technologies.map((tech, ti) => (
                    <span
                      key={ti}
                      style={{
                        fontSize: "0.72rem",
                        fontWeight: 600,
                        color: "#4169e1",
                        background: "rgba(65,105,225,0.08)",
                        border: "1px solid rgba(65,105,225,0.2)",
                        borderRadius: "4px",
                        padding: "0.2rem 0.6rem",
                        letterSpacing: "0.02em",
                      }}
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </motion.div>
  );
}

// ── Main section ─────────────────────────────────────────────────────────────
export default function Experience() {
  return (
    <section
      id="experience"
      style={{
        background: "#ffffff",
        fontFamily: "'Raleway', sans-serif",
        padding: "80px 2rem",
      }}
    >
      {/* Section label */}
      <p
        style={{
          fontSize: "0.75rem",
          letterSpacing: "0.25em",
          textTransform: "uppercase",
          color: "#9ca3af",
          fontWeight: 600,
          textAlign: "center",
          marginBottom: "2rem",
        }}
      >
        Work Experience
      </p>

      {/* Cards */}
      {experiences.map((exp, i) => (
        <ExperienceCard key={exp.id} exp={exp} index={i} />
      ))}
    </section>
  );
}