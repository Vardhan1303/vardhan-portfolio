import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FileText, X, ExternalLink, BookOpen, ChevronRight } from "lucide-react";

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
    certificate: "/certificates/iav_thesis_certificate.pdf",
    thesisOverview: true,
    positions: [
      {
        title: "Master's Thesis | Grade: 1.0 (Excellent)",
        date: "April 2025 – December 2025",
        bullets: [
          "Title: **Flexible Soiling Detection on Automotive Cameras** | Department: Vehicle Solutions & Automated Driving, Automated Driving Functions",
          "Designed and implemented a flexible framework for **data-driven generation of camera soiling** (dirt, water, etc.) to produce realistic training and evaluation datasets.",
          "Built and trained **GAN-based models** (CycleGAN, MudGAN) for realistic synthetic soiling data generation across diverse camera configurations.",
          "Implemented, trained, and evaluated modern **deep learning models** using Python, OpenCV, and PyTorch — including CNN architectures (DeepLabv3+), Vision Transformers (SegFormer), and hybrid CNNs (PIDNet).",
          "Conducted systematic **benchmarks** to evaluate model robustness and cross-domain generalisation across different soiling types and camera setups.",
          "Worked with various **camera models and geometries**, including Pinhole and Fisheye cameras, to ensure broad applicability of detection methods.",
          "Built a comprehensive **evaluation protocol** using objective metrics (KID, LPIPS) and structured human studies (Mean Opinion Score, Visual Turing Test).",
          "Exported trained models to **ONNX** and validated **7 ms inference on NVIDIA RTX A1000** (6 GB, 29.5 MB model size), demonstrating embedded-ready performance for production deployment.",
          "Deployed a **real-time prototype** and presented results to automotive and defence customers, showcasing end-to-end capability from training to live inference.",
          "Managed version control and collaborative development throughout the research workflow using **Git**.",
        ],
      },
    ],
  },
  {
    id: 2,
    logo: "/images/logos_iav.png",
    company: "IAV GmbH",
    location: "Chemnitz, Germany",
    certificate: "/certificates/iav_intern_certificate.pdf",
    positions: [
      {
      title: "Software Developer Intern",
      date: "December 2024 – February 2025",
      bullets: [
        "Researched **data augmentation of clean camera images with virtual soiling** to generate training and test datasets for camera blindness detection in automotive perception systems.",
        "Conducted structured **literature research** on synthetic image corruption and robustness validation methodologies.",
        "Designed and implemented a **procedural raindrop generation pipeline** for controllable virtual soiling simulation on real camera images.",
        "Developed a **Python-based GUI application (Tkinter)** supporting both single-image processing and **temporally consistent frame sequence simulation**.",
        "Performed systematic **experiments, quantitative evaluation, and result analysis** to validate realism and suitability for scalable dataset generation.",
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
          "Managed the **M1A package execution** for Kutch Copper Limited’s **1.5 MTPA greenfield refinery project**, overseeing installation, commissioning preparation, and final handover.",
          "Coordinated cross-functionally with **Electrical, Civil, Instrumentation, Metallurgy, Finance, and PMO teams** to resolve technical dependencies and maintain critical project timelines.",
          "Led installation and integration of the **Fanuc 400i industrial robotic system**, performing drawing verification, technical reviews, and multi-disciplinary troubleshooting.",
          "Administered **SAP MM/FM operations** including PR/PO processing, material clearance, contractor billing, and financial workflow alignment.",
          "Designed **PowerBI dashboards** for real-time milestone tracking and executive-level project reporting."
        ],
      },
    ],
  },
  {
    id: 4,
    logo: "/images/farmson_logo.png",
    company: "Farmson Basic Drugs Private Limited",
    location: "Vadodara, India",
    certificate: null,
    positions: [
      {
        title: "Mechanical Intern – Maintenance Department",
        date: "May 2021 – July 2021",
        bullets: [
          "Gained operational exposure across **12+ pharmaceutical production and utility units** including Paracetamol Production, HVAC, Boilers, ETP, MEE, and Distillation systems.",
          "Performed **preventive and breakdown maintenance** on industrial pump systems, gearboxes, and boiler assemblies in a continuous manufacturing environment.",
          "Implemented **5S methodology** within Engineering Store operations, optimizing mechanical inventory organization and spare part traceability."
        ],
      },
    ],
  },
  {
    id: 5,
    logo: "/images/tapf_logo.jpg",
    company: "The Akshaya Patra Foundation",
    location: "Vadodara, India",
    certificate: "/certificates/tapf_certificate.pdf",
    positions: [
      {
        title: "Mechanical Design Intern",
        date: "April 2019 – June 2019",
        bullets: [
          "Documented and analyzed **Roti Machine and Biogas Plant systems**, mapping component structures and operational workflows for large-scale food production.",
          "Applied **Six Sigma, 7 QC Tools, and Food Safety Management principles** within a high-throughput NGO manufacturing environment.",
          "Recognized as **Best Intern Runner-Up** for technical contribution and cross-department collaboration."
        ],
      },
    ],
  },
];

// ── Thesis overview content ────────────────────────────────────────────────────
const thesisOverviewContent = {
  title: "Flexible Soiling Detection on Automotive Cameras",
  grade: "1.0 (Excellent)",
  period: "April 2025 – December 2025",
  department: "Vehicle Solutions & Automated Driving — Automated Driving Functions, IAV GmbH",
  sections: [
    {
      heading: "Motivation & Problem Statement",
      text: "Camera-based perception systems are central to modern autonomous and assisted driving. However, environmental soiling — including dirt, water droplets, mud, and fog — can severely degrade image quality and compromise detection accuracy. This thesis addresses the challenge of building robust, flexible soiling detection systems that generalise across diverse soiling types and camera geometries in real-world automotive conditions.",
    },
    {
      heading: "Framework for Synthetic Soiling Generation",
      text: "A data-driven framework was designed and implemented to generate realistic synthetic camera soiling for training and evaluation. The framework supports multiple soiling categories and is adaptable to different camera models including Pinhole and Fisheye geometries. This approach enables scalable dataset creation without requiring costly physical soiling experiments.",
    },
    {
      heading: "Generative Models — GANs",
      text: "GAN-based architectures, specifically CycleGAN and MudGAN, were trained to synthesise photorealistic soiling patterns on clean camera images. These models learn the visual distribution of real soiling and transfer it convincingly to synthetic data, closing the domain gap between simulated and real-world inputs.",
    },
    {
      heading: "Deep Learning Detection Models",
      text: "Several state-of-the-art deep learning architectures were implemented, trained, and evaluated for soiling detection: CNN-based models (DeepLabv3+), Vision Transformer models (SegFormer), and hybrid CNN architectures (PIDNet). All models were developed in Python using PyTorch and OpenCV, with additional experiments conducted using TensorFlow.",
    },
    {
      heading: "Evaluation & Benchmarking",
      text: "A rigorous evaluation protocol was established combining objective perceptual metrics — Kernel Inception Distance (KID) and Learned Perceptual Image Patch Similarity (LPIPS) — with structured human studies including Mean Opinion Score (MOS) and the Visual Turing Test. Systematic benchmarks assessed cross-domain generalisation and model robustness across varied soiling conditions.",
    },
    {
      heading: "Outcome",
      text: "The thesis was awarded a grade of 1.0 (Excellent), the highest possible distinction in the German grading system. The work contributes a flexible, reproducible pipeline for soiling simulation and detection that is directly applicable to production-level automotive camera perception systems.",
    },
  ],
};

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
        <div
          style={{
            position: "absolute", inset: 0,
            background: "rgba(0,0,0,0.75)",
            backdropFilter: "blur(4px)",
          }}
          onClick={onClose}
        />
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

// ── Thesis Overview Modal ──────────────────────────────────────────────────────
function ThesisModal({ onClose }) {
  const t = thesisOverviewContent;
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
            background: "rgba(0,0,0,0.80)",
            backdropFilter: "blur(6px)",
          }}
          onClick={onClose}
        />

        {/* Modal */}
        <motion.div
          style={{
            position: "relative", zIndex: 10,
            width: "90vw", maxWidth: "780px",
            maxHeight: "88vh",
            background: "#0d111a",
            border: "1px solid rgba(65,105,225,0.25)",
            borderRadius: "14px",
            overflow: "hidden",
            display: "flex", flexDirection: "column",
            boxShadow: "0 25px 60px rgba(0,0,0,0.6)",
            fontFamily: "'Raleway', sans-serif",
          }}
          initial={{ scale: 0.93, opacity: 0, y: 24 }}
          animate={{ scale: 1, opacity: 1, y: 0 }}
          exit={{ scale: 0.93, opacity: 0, y: 24 }}
          transition={{ duration: 0.28 }}
        >
          {/* Header */}
          <div style={{
            padding: "20px 24px 16px",
            background: "linear-gradient(135deg, #0d111a 0%, #111827 100%)",
            borderBottom: "1px solid rgba(65,105,225,0.2)",
            flexShrink: 0,
          }}>
            <div style={{
              display: "flex", alignItems: "flex-start",
              justifyContent: "space-between", gap: 12,
            }}>
              <div style={{ flex: 1 }}>
                <div style={{
                  display: "flex", alignItems: "center", gap: 8,
                  marginBottom: 8,
                }}>
                  <div style={{
                    background: "rgba(65,105,225,0.15)",
                    border: "1px solid rgba(65,105,225,0.35)",
                    borderRadius: 6,
                    padding: "4px 8px",
                    fontSize: 11,
                    fontWeight: 700,
                    color: "#7b9ff5",
                    letterSpacing: "0.06em",
                    textTransform: "uppercase",
                  }}>
                    Master's Thesis
                  </div>
                  <div style={{
                    background: "rgba(34,197,94,0.12)",
                    border: "1px solid rgba(34,197,94,0.3)",
                    borderRadius: 6,
                    padding: "4px 8px",
                    fontSize: 11,
                    fontWeight: 700,
                    color: "#4ade80",
                    letterSpacing: "0.06em",
                  }}>
                    Grade: {t.grade}
                  </div>
                </div>
                <h2 style={{
                  margin: 0,
                  fontSize: "1.15rem",
                  fontWeight: 800,
                  color: "#f9fafb",
                  lineHeight: 1.4,
                }}>
                  {t.title}
                </h2>
                <p style={{
                  margin: "6px 0 0",
                  fontSize: "0.78rem",
                  color: "#6b7280",
                  fontWeight: 500,
                }}>
                  {t.department}
                </p>
              </div>
              <button
                onClick={onClose}
                style={{
                  color: "#6b7280", background: "transparent",
                  border: "none", cursor: "pointer", padding: 4,
                  borderRadius: 6, display: "flex", alignItems: "center",
                  flexShrink: 0,
                  transition: "color 0.2s",
                }}
                onMouseEnter={e => e.currentTarget.style.color = "#fff"}
                onMouseLeave={e => e.currentTarget.style.color = "#6b7280"}
              >
                <X size={20} />
              </button>
            </div>
          </div>

          {/* Scrollable body */}
          <div style={{
            overflowY: "auto",
            padding: "24px",
            display: "flex",
            flexDirection: "column",
            gap: "20px",
          }}>
            {t.sections.map((section, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.06, duration: 0.3 }}
                style={{
                  background: "rgba(255,255,255,0.03)",
                  border: "1px solid rgba(255,255,255,0.06)",
                  borderRadius: "10px",
                  padding: "16px 20px",
                }}
              >
                <div style={{
                  display: "flex", alignItems: "center", gap: 8,
                  marginBottom: 10,
                }}>
                  <ChevronRight size={13} color="#4169e1" strokeWidth={2.5} />
                  <h4 style={{
                    margin: 0,
                    fontSize: "0.85rem",
                    fontWeight: 800,
                    color: "#7b9ff5",
                    letterSpacing: "0.02em",
                    textTransform: "uppercase",
                  }}>
                    {section.heading}
                  </h4>
                </div>
                <p style={{
                  margin: 0,
                  fontSize: "0.88rem",
                  color: "#d1d5db",
                  lineHeight: 1.8,
                  textAlign: "justify",
                }}>
                  {section.text}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}

// ── Single Card ────────────────────────────────────────────────────────────────
function ExperienceCard({ exp, index }) {
  const [showCert, setShowCert] = useState(false);
  const [showThesis, setShowThesis] = useState(false);
  const [isMobile, setIsMobile] = useState(
    typeof window !== "undefined" && window.innerWidth < 640
  );

  useState(() => {
    const handler = () => setIsMobile(window.innerWidth < 640);
    window.addEventListener("resize", handler);
    return () => window.removeEventListener("resize", handler);
  });

  const btnBase = {
    display: "inline-flex",
    alignItems: "center",
    gap: 6,
    padding: "7px 14px",
    fontSize: "0.75rem",
    fontWeight: 600,
    fontFamily: "'Raleway', sans-serif",
    letterSpacing: "0.04em",
    borderRadius: "6px",
    cursor: "pointer",
    transition: "background 0.2s, border-color 0.2s",
    border: "1px solid",
  };

  return (
    <>
      <motion.div
        style={{
          maxWidth: "1100px",
          margin: "0 auto 2rem",
          border: "1px solid #e5e7eb",
          borderRadius: "12px",
          overflow: "hidden",
          display: "flex",
          flexDirection: isMobile ? "column" : "row",
          boxShadow: "0 2px 20px rgba(0,0,0,0.07)",
          background: "#fff",
          minHeight: isMobile ? "auto" : "260px",
        }}
        initial={{ opacity: 0, y: 28 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.15 }}
        transition={{ duration: 0.5, delay: index * 0.1 }}
      >
        {/* LEFT — Logo panel */}
        <div
          style={{
            width: isMobile ? "100%" : "220px",
            height: isMobile ? "140px" : "auto",
            flexShrink: 0,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            background: "#f9fafb",
            borderRight: isMobile ? "none" : "1px solid #e5e7eb",
            borderBottom: isMobile ? "1px solid #e5e7eb" : "none",
            padding: isMobile ? "1.5rem" : "2rem 1.5rem",
          }}
        >
          <img
            src={exp.logo}
            alt={exp.company}
            style={{
              width: isMobile ? "80px" : "110px",
              height: isMobile ? "80px" : "110px",
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
            padding: isMobile ? "1.5rem" : "2rem 2.5rem",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
          }}
        >
          {/* Company name */}
          <h3
            style={{
              fontSize: isMobile ? "1.1rem" : "1.25rem",
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
                    alignItems: isMobile ? "flex-start" : "baseline",
                    justifyContent: "space-between",
                    flexDirection: isMobile ? "column" : "row",
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

                {/* Bullets — justified */}
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
                        fontSize: isMobile ? "0.85rem" : "0.9rem",
                        color: "#374151",
                        lineHeight: 1.75,
                        listStyleType: "disc",
                        textAlign: "justify",
                      }}
                    >
                      <Bold text={b} />
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* Bottom action buttons */}
          {(exp.certificate || exp.thesisOverview) && (
            <div style={{
              marginTop: "1.2rem",
              display: "flex",
              flexWrap: "wrap",
              gap: "8px",
              alignItems: "center",
            }}>
              {/* Certificate button */}
              {exp.certificate && (
                <button
                  onClick={() => setShowCert(true)}
                  style={{
                    ...btnBase,
                    color: "#4169e1",
                    background: "rgba(65,105,225,0.07)",
                    borderColor: "rgba(65,105,225,0.35)",
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
              )}

              {/* Thesis Overview button — only on thesis card */}
              {exp.thesisOverview && (
                <button
                  onClick={() => setShowThesis(true)}
                  style={{
                    ...btnBase,
                    color: "#059669",
                    background: "rgba(5,150,105,0.07)",
                    borderColor: "rgba(5,150,105,0.35)",
                  }}
                  onMouseEnter={e => {
                    e.currentTarget.style.background = "rgba(5,150,105,0.15)";
                    e.currentTarget.style.borderColor = "rgba(5,150,105,0.7)";
                  }}
                  onMouseLeave={e => {
                    e.currentTarget.style.background = "rgba(5,150,105,0.07)";
                    e.currentTarget.style.borderColor = "rgba(5,150,105,0.35)";
                  }}
                >
                  <BookOpen size={13} />
                  Thesis Overview
                </button>
              )}
            </div>
          )}
        </div>
      </motion.div>

      {showCert && (
        <CertModal
          url={exp.certificate}
          company={exp.company}
          onClose={() => setShowCert(false)}
        />
      )}

      {showThesis && (
        <ThesisModal onClose={() => setShowThesis(false)} />
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