import { motion } from "framer-motion";

const fontLink = document.createElement("link");
fontLink.rel = "stylesheet";
fontLink.href =
  "https://fonts.googleapis.com/css2?family=Raleway:wght@400;500;600;700;800&display=swap";
if (!document.head.querySelector('link[href*="Raleway"]')) {
  document.head.appendChild(fontLink);
}

// ── Tech → emoji map ─────────────────────────────────────────────────────────
const techEmoji = {
  Python: "🐍",
  PyTorch: "🔥",
  TensorFlow: "🧠",
  OpenCV: "👁️",
  "Computer Vision": "📷",
  "Deep Learning": "🤖",
  "Machine Learning": "📊",
  "ROS2": "🤖",
  ROS: "🤖",
  Docker: "🐳",
  Git: "🔧",
  "C++": "⚙️",
  C: "⚙️",
  Linux: "🐧",
  CUDA: "⚡",
  NumPy: "🔢",
  Pandas: "🐼",
  Matplotlib: "📈",
  "Scikit-learn": "🔬",
  JavaScript: "🌐",
  TypeScript: "🌐",
  React: "⚛️",
  "Node.js": "🟢",
  Azure: "☁️",
  AWS: "☁️",
  SQL: "🗄️",
  PostgreSQL: "🗄️",
  MongoDB: "🍃",
  MATLAB: "📐",
  Simulink: "📐",
  Keras: "🧬",
  "Image Processing": "🖼️",
  Robotics: "🦾",
};

function getTechEmoji(tech) {
  // Try exact match first, then partial
  if (techEmoji[tech]) return techEmoji[tech];
  const key = Object.keys(techEmoji).find((k) =>
    tech.toLowerCase().includes(k.toLowerCase())
  );
  return key ? techEmoji[key] : "🔹";
}

// ── Data — replace with your real info ───────────────────────────────────────
const experiences = [
  {
    id: 1,
    logo: "/images/logos_iav.png",
    company: "IAV GmbH",
    location: "Chemnitz, Germany",
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
    id: 3,
    logo: "/images/farmson_logo.png",
    company: "Farmson Basic Drugs Private Limited",
    location: "Vadodara, India",
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
    id: 4,
    logo: "/images/tapf_logo.jpg",
    company: "The Akshaya Patra Foundation (TAPF)",
    location: "Vadodara, India",
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

// ── Bold markdown renderer ────────────────────────────────────────────────────
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

// ── Single card ───────────────────────────────────────────────────────────────
function ExperienceCard({ exp, index }) {
  return (
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
      {/* LEFT — Logo panel, perfectly centered */}
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
          gap: "0",
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
          📍 {exp.location}
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
                  margin: "0 0 1rem 1.1rem",
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
      </div>
    </motion.div>
  );
}

// ── Section ───────────────────────────────────────────────────────────────────
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
          fontSize: "1.2rem",
          letterSpacing: "0.25em",
          textTransform: "uppercase",
          color: "#696969",
          fontWeight: 600,
          textAlign: "center",
          marginBottom: "2rem",
        }}
      >
        Work Experience
      </p>

      {experiences.map((exp, i) => (
        <ExperienceCard key={exp.id} exp={exp} index={i} />
      ))}
    </section>
  );
}