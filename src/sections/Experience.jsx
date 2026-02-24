import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FileText, X, ExternalLink } from "lucide-react";

const fontLink = document.createElement("link");
fontLink.rel = "stylesheet";
fontLink.href =
  "https://fonts.googleapis.com/css2?family=Raleway:wght@400;500;600;700;800&display=swap";
if (!document.head.querySelector('link[href*="Raleway"]')) {
  document.head.appendChild(fontLink);
}

// ── Data ───────────────────────────────────────────────────────────────────────
const experiences = [
  {
    id: 1,
    logo: "/images/logos_iav.png",
    company: "IAV GmbH",
    location: "Chemnitz, Germany",
    certificate: "/certificates/iav_thesis_certificate.pdf", // set null if none
    positions: [
      {
        title: "Master's Thesis",
        date: "April 2025 – December 2025",
        bullets: [
          "Title: Flexible Soiling Detection on Automotive Cameras | Grade: 1,0 (Excellent)",
          "Developed image-based data analysis pipelines for automotive perception systems.",
          "Applied **deep learning** and **computer vision** methods for real-world sensor data.",
          "Executed research-driven experiments with reproducible ML workflows.",
        ],
      },
    ],
  },
  {
    id: 2,
    logo: "/images/logos_iav.png",
    company: "IAV GmbH",
    location: "Stollberg, Germany",
    certificate: "/certificates/iav_intern_certificate.pdf",
    positions: [
      {
        title: "Software Developer Intern",
        date: "December 2024 – February 2025",
        bullets: [
          "Built and trained **deep learning** models for image classification tasks.",
          "Maintained reproducible experiment pipelines using **Docker** and Git.",
          "Collaborated with cross-functional teams on data annotation and QA.",
        ],
      },
    ],
  },
  {
    id: 3,
    logo: "/images/Adani_logo.png",
    company: "Adani Group",
    location: "Mundra, India",
    certificate: "/certificates/adani_certificate.pdf",
    positions: [
      {
        title: "Assistant Manager",
        date: "August 2022 – August 2023",
        bullets: [
          "Built and trained **deep learning** models for image classification tasks.",
          "Maintained reproducible experiment pipelines using **Docker** and Git.",
          "Collaborated with cross-functional teams on data annotation and QA.",
        ],
      },
    ],
  },
  {
    id: 4,
    logo: "/images/farmson_logo.png",
    company: "Farmson Basic Drugs Private Limited",
    location: "Vadodara, India",
    certificate: null, // no certificate — button won't appear
    positions: [
      {
        title: "Internship",
        date: "August 2022 – August 2023",
        bullets: [
          "Built and trained **deep learning** models for image classification tasks.",
          "Maintained reproducible experiment pipelines using **Docker** and Git.",
          "Collaborated with cross-functional teams on data annotation and QA.",
        ],
      },
    ],
  },
  {
    id: 5,
    logo: "/images/tapf_logo.jpg",
    company: "The Akshaya Patra Foundation (TAPF)",
    location: "Vadodara, India",
    certificate: "/certificates/tapf_certificate.pdf",
    positions: [
      {
        title: "Internship",
        date: "August 2022 – August 2023",
        bullets: [
          "Built and trained **deep learning** models for image classification tasks.",
          "Maintained reproducible experiment pipelines using **Docker** and Git.",
          "Collaborated with cross-functional teams on data annotation and QA.",
        ],
      },
    ],
  },
];

// ── Bold markdown renderer ─────────────────────────────────────────────────────
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

// ── Certificate Modal ──────────────────────────────────────────────────────────
function CertModal({ url, company, onClose }) {
  return (
    <AnimatePresence>
      <motion.div
        style={{
          position: "fixed", inset: 0, zIndex: 50,
          display: "flex", alignItems: "center", justifyContent: "center",
        }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
      >
        {/* Backdrop */}
        <div
          style={{
            position: "absolute", inset: 0,
            background: "rgba(0,0,0,0.75)",
            backdropFilter: "blur(4px)",
          }}
          onClick={onClose}
        />

        {/* Modal window */}
        <motion.div
          style={{
            position: "relative", zIndex: 10,
            width: "90vw", maxWidth: "860px", height: "88vh",
            background: "#111827",
            border: "1px solid rgba(255,255,255,0.08)",
            borderRadius: "12px",
            overflow: "hidden",
            display: "flex", flexDirection: "column",
            boxShadow: "0 25px 60px rgba(0,0,0,0.5)",
          }}
          initial={{ scale: 0.93, opacity: 0, y: 20 }}
          animate={{ scale: 1, opacity: 1, y: 0 }}
          exit={{ scale: 0.93, opacity: 0, y: 20 }}
          transition={{ duration: 0.25 }}
        >
          {/* Top bar */}
          <div style={{
            display: "flex", alignItems: "center",
            justifyContent: "space-between",
            padding: "12px 20px",
            background: "#0d111a",
            borderBottom: "1px solid rgba(255,255,255,0.08)",
            flexShrink: 0,
          }}>
            <div style={{
              display: "flex", alignItems: "center", gap: 8,
              color: "#d1d5db", fontSize: 13,
              fontFamily: "'Raleway', sans-serif",
            }}>
              <FileText size={15} />
              Experience Certificate — {company}
            </div>
            <div style={{ display: "flex", gap: 8, alignItems: "center" }}>
              <a
                href={url}
                target="_blank"
                rel="noopener noreferrer"
                title="Open in new tab"
                style={{
                  color: "#9ca3af", display: "flex", alignItems: "center",
                  padding: 4, borderRadius: 4, textDecoration: "none",
                  transition: "color 0.2s",
                }}
                onMouseEnter={e => e.currentTarget.style.color = "#fff"}
                onMouseLeave={e => e.currentTarget.style.color = "#9ca3af"}
              >
                <ExternalLink size={16} />
              </a>
              <button
                onClick={onClose}
                style={{
                  color: "#9ca3af", background: "transparent",
                  border: "none", cursor: "pointer", padding: 4,
                  borderRadius: 4, display: "flex", alignItems: "center",
                  transition: "color 0.2s",
                }}
                onMouseEnter={e => e.currentTarget.style.color = "#fff"}
                onMouseLeave={e => e.currentTarget.style.color = "#9ca3af"}
              >
                <X size={18} />
              </button>
            </div>
          </div>

          {/* PDF viewer */}
          <iframe
            src={url}
            style={{ flex: 1, width: "100%", border: "none" }}
            title={`Certificate — ${company}`}
          />
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}

// ── Single Card ────────────────────────────────────────────────────────────────
function ExperienceCard({ exp, index }) {
  const [showCert, setShowCert] = useState(false);

  return (
    <>
      <motion.div
        style={{
          maxWidth: "900px",
          margin: "0 auto 2rem",
          border: "1px solid #e5e7eb",
          borderRadius: "12px",
          overflow: "hidden",
          display: "flex",
          boxShadow: "0 2px 20px rgba(0,0,0,0.07)",
          background: "#fff",
          minHeight: "260px",
        }}
        initial={{ opacity: 0, y: 28 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.15 }}
        transition={{ duration: 0.5, delay: index * 0.1 }}
      >
        {/* LEFT — Logo panel */}
        <div
          style={{
            width: "180px",
            flexShrink: 0,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            background: "#f9fafb",
            borderRight: "1px solid #e5e7eb",
            padding: "2rem 1.5rem",
          }}
        >
          <img
            src={exp.logo}
            alt={exp.company}
            style={{
              width: "110px",
              height: "110px",
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
            padding: "2rem 2.5rem",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
          }}
        >
          {/* Company name */}
          <h3
            style={{
              fontSize: "1.25rem",
              fontWeight: 800,
              color: "#0d0f14",
              margin: "0 0 0.1rem 0",
              lineHeight: 1.2,
            }}
          >
            {exp.company}
          </h3>

          {/* Location */}
          <p
            style={{
              fontSize: "0.8rem",
              color: "#9ca3af",
              fontWeight: 500,
              margin: "0 0 0.5rem 0",
              letterSpacing: "0.03em",
            }}
          >
            {exp.location}
          </p>

          {/* Blue accent */}
          <div
            style={{
              width: "36px",
              height: "2.5px",
              background: "#4169e1",
              borderRadius: "2px",
              marginBottom: "1.2rem",
            }}
          />

          {/* Positions */}
          <div style={{ display: "flex", flexDirection: "column", gap: "1.4rem" }}>
            {exp.positions.map((pos, pi) => (
              <div
                key={pi}
                style={
                  pi > 0
                    ? { paddingTop: "1.2rem", borderTop: "1px solid #f3f4f6" }
                    : {}
                }
              >
                {/* Title + date */}
                <div
                  style={{
                    display: "flex",
                    alignItems: "baseline",
                    justifyContent: "space-between",
                    flexWrap: "wrap",
                    gap: "0.4rem",
                    marginBottom: "0.7rem",
                  }}
                >
                  <h4
                    style={{
                      fontSize: "0.98rem",
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
                    margin: "0 0 0.5rem 1.1rem",
                    padding: 0,
                    display: "flex",
                    flexDirection: "column",
                    gap: "0.35rem",
                  }}
                >
                  {pos.bullets.map((b, bi) => (
                    <li
                      key={bi}
                      style={{
                        fontSize: "0.9rem",
                        color: "#374151",
                        lineHeight: 1.75,
                        listStyleType: "disc",
                      }}
                    >
                      <Bold text={b} />
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* Certificate button — bottom of right panel */}
          {exp.certificate && (
            <div style={{ marginTop: "1.2rem" }}>
              <button
                onClick={() => setShowCert(true)}
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: 6,
                  padding: "7px 14px",
                  fontSize: "0.75rem",
                  fontWeight: 600,
                  fontFamily: "'Raleway', sans-serif",
                  letterSpacing: "0.04em",
                  color: "#4169e1",
                  background: "rgba(65,105,225,0.07)",
                  border: "1px solid rgba(65,105,225,0.35)",
                  borderRadius: "6px",
                  cursor: "pointer",
                  transition: "background 0.2s, border-color 0.2s",
                }}
                onMouseEnter={e => {
                  e.currentTarget.style.background = "rgba(65,105,225,0.15)";
                  e.currentTarget.style.borderColor = "rgba(65,105,225,0.7)";
                }}
                onMouseLeave={e => {
                  e.currentTarget.style.background = "rgba(65,105,225,0.07)";
                  e.currentTarget.style.borderColor = "rgba(65,105,225,0.35)";
                }}
              >
                <FileText size={13} />
                View Certificate
              </button>
            </div>
          )}
        </div>
      </motion.div>

      {/* Certificate modal */}
      {showCert && (
        <CertModal
          url={exp.certificate}
          company={exp.company}
          onClose={() => setShowCert(false)}
        />
      )}
    </>
  );
}

// ── Section ────────────────────────────────────────────────────────────────────
export default function Experience() {
  return (
    <section
      id="experience"
      style={{
        background: "#ffffff",
        fontFamily: "'Raleway', sans-serif",
        padding: "50px 2rem",
      }}
    >
      <p
        style={{
          fontSize: "1.2rem",
          letterSpacing: "0.25em",
          textTransform: "uppercase",
          color: "#696969",
          fontWeight: 800,
          textAlign: "center",
          marginTop: 0,
          marginBottom: "8px",
        }}
      >
        Work Experience
      </p>
      <div
        style={{
          width: "56px", height: "2px",
          background: "#4f8eff", borderRadius: "2px",
          margin: "0 auto 40px",
        }}
      />

      {experiences.map((exp, i) => (
        <ExperienceCard key={`${exp.id}-${i}`} exp={exp} index={i} />
      ))}
    </section>
  );
}