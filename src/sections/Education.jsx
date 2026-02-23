import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FileText, X } from "lucide-react";

const fontLink = document.createElement("link");
fontLink.rel = "stylesheet";
fontLink.href =
  "https://fonts.googleapis.com/css2?family=Raleway:wght@400;500;600;700;800&display=swap";
if (!document.head.querySelector('link[href*="Raleway"]')) {
  document.head.appendChild(fontLink);
}

// ── Data ─────────────────────────────────────────────────────────────────────
const educationData = [
  {
    id: 1,
    logo: "/images/rwu_logo.png",           // ← university logo
    date: "September 2023 – January 2026",
    degree: "Master of Science (M.Sc.) in Mechatronics",
    institution: "Hochschule Ravensburg-Weingarten University of Applied Sciences (RWU), Germany",
    gpa: "1,9 (Excellent)",
    thesis: "Flexible Soiling Detection on Automotive Cameras",
    thesisGrade: "1,0 (Excellent)",
    coursework: "Advanced Mathematics, Control Systems, Embedded Systems, AI for Mechatronics, Computer Vision, Deep Learning",
    certificateUrl: "/certificates/msc_certificate.pdf",  // ← your PDF
  },
  {
    id: 2,
    logo: "/images/Msu_baroda_logo.png",
    date: "July 2018 – May 2022",
    degree: "Bachelor of Engineering (B.E.) in Mechanical Engineering",
    institution: "The Maharaja Sayajirao University of Baroda (MSU), India",
    accreditation: "NAAC Accredited A+ Grade",
    gpa: "1,2 (Excellent)",
    coursework: "Thermodynamics, Fluid Mechanics, Material Science, CAD/CAM, Manufacturing Processes, Machine Design",
    certificateUrl: "/certificates/be_certificate.pdf",
  },
];

// ── Certificate Modal (same pattern as CV modal) ─────────────────────────────
function CertificateModal({ url, title, onClose }) {
  return (
    <AnimatePresence>
      <motion.div
        style={{ position: "fixed", inset: 0, zIndex: 50, display: "flex", alignItems: "center", justifyContent: "center" }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
      >
        <div
          style={{ position: "absolute", inset: 0, background: "rgba(0,0,0,0.72)", backdropFilter: "blur(4px)" }}
          onClick={onClose}
        />
        <motion.div
          style={{
            position: "relative", zIndex: 10, width: "90vw", maxWidth: "860px",
            height: "88vh", background: "#111827", borderRadius: "10px",
            overflow: "hidden", display: "flex", flexDirection: "column",
            border: "1px solid rgba(255,255,255,0.08)",
          }}
          initial={{ scale: 0.93, opacity: 0, y: 20 }}
          animate={{ scale: 1, opacity: 1, y: 0 }}
          exit={{ scale: 0.93, opacity: 0, y: 20 }}
          transition={{ duration: 0.22 }}
        >
          <div style={{
            display: "flex", alignItems: "center", justifyContent: "space-between",
            padding: "0.75rem 1.25rem", background: "#0d111a",
            borderBottom: "1px solid rgba(255,255,255,0.08)", flexShrink: 0,
          }}>
            <div style={{ display: "flex", alignItems: "center", gap: "0.5rem", color: "#d1d5db", fontSize: "0.85rem", fontFamily: "'Raleway', sans-serif" }}>
              <FileText size={14} />
              {title}
            </div>
            <button
              onClick={onClose}
              style={{ background: "none", border: "none", cursor: "pointer", color: "#9ca3af", display: "flex", padding: "2px" }}
              onMouseEnter={(e) => (e.currentTarget.style.color = "#fff")}
              onMouseLeave={(e) => (e.currentTarget.style.color = "#9ca3af")}
            >
              <X size={17} />
            </button>
          </div>
          <iframe src={url} style={{ flex: 1, width: "100%", border: "none" }} title={title} />
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}

// ── Single Education Card ─────────────────────────────────────────────────────
function EducationCard({ edu, index, onOpenCert }) {
  return (
    <motion.div
      style={{
        maxWidth: "900px",
        margin: "0 auto 2rem",
        display: "flex",
        minHeight: "260px",
        borderRadius: "12px",
        overflow: "hidden",
        boxShadow: "0 2px 20px rgba(0,0,0,0.07)",
        background: "#fff",
      }}
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.15 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
    >
      {/* LEFT — Wide logo panel, stretches edge-to-edge on left */}
      <div
        style={{
          width: "280px",
          flexShrink: 0,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "#eff6ff",
          borderRight: "1px solid #dbeafe",
          padding: "2.5rem 2rem",
        }}
      >
        <img
          src={edu.logo}
          alt={edu.institution}
          style={{
            width: "90%",
            height: "90%",
            objectFit: "cover",
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
          fontFamily: "'Raleway', sans-serif",
        }}
      >
        {/* Date */}
        <p style={{ fontSize: "0.78rem", color: "#9ca3af", fontWeight: 600, margin: "0 0 0.4rem", letterSpacing: "0.04em" }}>
          {edu.date}
        </p>

        {/* Degree */}
        <h3 style={{ fontSize: "1.15rem", fontWeight: 800, color: "#0d0f14", margin: "0 0 0.25rem", lineHeight: 1.25 }}>
          {edu.degree}
        </h3>

        {/* Institution */}
        <p style={{ fontSize: "0.88rem", color: "#4169e1", fontWeight: 600, margin: "0 0 0.15rem" }}>
          {edu.institution}
        </p>

        {/* Accreditation */}
        {edu.accreditation && (
          <p style={{ fontSize: "0.78rem", color: "#6b7280", fontStyle: "italic", margin: "0 0 0.4rem" }}>
            {edu.accreditation}
          </p>
        )}

        {/* Blue accent */}
        <div style={{ width: "34px", height: "2.5px", background: "#4169e1", borderRadius: "2px", margin: "0.5rem 0 0.9rem" }} />

        {/* GPA */}
        <p style={{ fontSize: "0.85rem", color: "#374151", margin: "0 0 0.35rem" }}>
          <span style={{ fontWeight: 700, color: "#111827" }}>📊 GPA: </span>{edu.gpa}
        </p>

        {/* Thesis */}
        {edu.thesis && (
          <p style={{ fontSize: "0.85rem", color: "#374151", margin: "0 0 0.35rem" }}>
            <span style={{ fontWeight: 700, color: "#111827" }}>🎓 Thesis: </span>
            {edu.thesis}
            {edu.thesisGrade && (
              <span style={{ color: "#9ca3af", fontStyle: "italic" }}> — {edu.thesisGrade}</span>
            )}
          </p>
        )}

        {/* Coursework */}
        {edu.coursework && (
          <p style={{ fontSize: "0.82rem", color: "#6b7280", margin: "0 0 1rem", lineHeight: 1.65 }}>
            <span style={{ fontWeight: 700, color: "#374151" }}>Coursework: </span>{edu.coursework}
          </p>
        )}

        {/* Degree Certificate button */}
        {edu.certificateUrl && (
          <button
            onClick={() => onOpenCert(edu.certificateUrl, `Degree Certificate — ${edu.degree}`)}
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "0.4rem",
              fontSize: "0.82rem",
              fontWeight: 600,
              color: "#4169e1",
              border: "1px solid rgba(65,105,225,0.5)",
              borderRadius: "6px",
              padding: "0.4rem 1rem",
              background: "transparent",
              cursor: "pointer",
              width: "fit-content",
              fontFamily: "'Raleway', sans-serif",
              transition: "background 0.2s",
            }}
            onMouseEnter={(e) => (e.currentTarget.style.background = "rgba(65,105,225,0.07)")}
            onMouseLeave={(e) => (e.currentTarget.style.background = "transparent")}
          >
            🎓 Degree Certificate
          </button>
        )}
      </div>
    </motion.div>
  );
}

// ── Section ───────────────────────────────────────────────────────────────────
export default function Education() {
  const [modal, setModal] = useState(null); // { url, title }

  return (
    <>
      <section
        id="education"
        style={{
          background: "#eff6ff",   // light blue — matches original
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
            color: "#93c5fd",
            fontWeight: 600,
            textAlign: "center",
            marginBottom: "2rem",
          }}
        >
          Education
        </p>

        {educationData.map((edu, i) => (
          <EducationCard
            key={edu.id}
            edu={edu}
            index={i}
            onOpenCert={(url, title) => setModal({ url, title })}
          />
        ))}
      </section>

      {modal && (
        <CertificateModal
          url={modal.url}
          title={modal.title}
          onClose={() => setModal(null)}
        />
      )}
    </>
  );
}