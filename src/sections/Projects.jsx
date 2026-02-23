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
  Python: "🐍", PyTorch: "🔥", TensorFlow: "🧠", OpenCV: "👁️",
  "Computer Vision": "📷", "Deep Learning": "🤖", "Machine Learning": "📊",
  ROS2: "🤖", ROS: "🤖", Docker: "🐳", Git: "🔧", "C++": "⚙️", C: "⚙️",
  Linux: "🐧", CUDA: "⚡", NumPy: "🔢", Pandas: "🐼", Matplotlib: "📈",
  "Scikit-learn": "🔬", JavaScript: "🌐", TypeScript: "🌐", React: "⚛️",
  "Node.js": "🟢", Azure: "☁️", AWS: "☁️", SQL: "🗄️", MATLAB: "📐",
  Keras: "🧬", "Image Processing": "🖼️", Robotics: "🦾",
};
function getTechEmoji(tech) {
  if (techEmoji[tech]) return techEmoji[tech];
  const key = Object.keys(techEmoji).find((k) =>
    tech.toLowerCase().includes(k.toLowerCase())
  );
  return key ? techEmoji[key] : "🔹";
}

// ── Data — replace with your real projects ───────────────────────────────────
const projects = [
  {
    id: 1,
    image: "/images/projects/project1.png",   // ← screenshot of your project
    date: "January 2026",
    title: "Foxglove Extension with OpenBridge",
    summary:
      "A custom panel for Foxglove Studio that seamlessly integrates OpenBridge Web Components to provide advanced maritime visualization and control. The extension features interactive components such as the Azimuth Thruster, Main Engine, and Compass, each dynamically bound to live ROS2 robot data or a built-in demo mode for simulation and testing. The panel subscribes to relevant ROS2 topics, ensuring real-time updates and accurate representation of vessel state.",
    technologies: ["React", "TypeScript", "ROS2", "OpenCV"],
    githubUrl: "https://github.com/yourusername/project1",
    videoUrl: null,
  },
  {
    id: 2,
    image: "/images/projects/project2.png",
    date: "September 2025",
    title: "Autonomous Lane Detection Pipeline",
    summary:
      "An end-to-end lane detection system built using deep learning and classical computer vision techniques, designed to operate in real-time on embedded hardware. The pipeline incorporates semantic segmentation with a lightweight encoder-decoder architecture, post-processing heuristics for lane fitting, and evaluation on standard benchmarks. Validated across diverse lighting and weather conditions with a strong emphasis on reproducibility and modular design.",
    technologies: ["Python", "PyTorch", "OpenCV", "CUDA", "ROS2"],
    githubUrl: "https://github.com/yourusername/project2",
    videoUrl: null,
  },
  {
    id: 3,
    image: "/images/projects/project3.png",
    date: "April 2025",
    title: "3D Object Detection for Automotive Perception",
    summary:
      "Research project focused on 3D object detection from LiDAR point clouds for autonomous driving applications, completed as part of the master's thesis at IAV GmbH. Implemented and benchmarked multiple state-of-the-art architectures including PointPillars and VoxelNet, with custom data augmentation strategies to improve generalization. The system was integrated into an automotive software stack and evaluated on real-world test drives.",
    technologies: ["Python", "PyTorch", "Deep Learning", "ROS2", "Linux"],
    githubUrl: null,
    videoUrl: null,
  },
];

// ── Project Card ──────────────────────────────────────────────────────────────
function ProjectCard({ project, index }) {
  const isReversed = index % 2 !== 0;

  return (
    <motion.div
      style={{
        maxWidth: "1000px",
        margin: "0 auto 3rem",
        display: "flex",
        flexDirection: isReversed ? "row-reverse" : "row",
        minHeight: "340px",
        borderRadius: "14px",
        overflow: "hidden",
        boxShadow: "0 4px 32px rgba(0,0,0,0.09)",
        background: "#fff",
      }}
      initial={{ opacity: 0, y: 32 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.15 }}
      transition={{ duration: 0.55, delay: index * 0.08 }}
    >
      {/* Screenshot side */}
      <div
        style={{
          width: "50%",
          flexShrink: 0,
          overflow: "hidden",
          background: "#e5e7eb",
          position: "relative",
        }}
      >
        {project.image ? (
          <img
            src={project.image}
            alt={project.title}
            loading="lazy"
            style={{
              width: "100%",
              height: "100%",
              objectFit: "cover",
              objectPosition: "center top",
              display: "block",
              transition: "transform 0.4s ease",
            }}
            onMouseEnter={(e) => (e.currentTarget.style.transform = "scale(1.03)")}
            onMouseLeave={(e) => (e.currentTarget.style.transform = "scale(1)")}
          />
        ) : (
          <div
            style={{
              width: "100%",
              height: "100%",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              color: "#9ca3af",
              fontSize: "0.85rem",
              fontStyle: "italic",
              background: "#f3f4f6",
            }}
          >
            Screenshot coming soon
          </div>
        )}
      </div>

      {/* Content side */}
      <div
        style={{
          flex: 1,
          padding: "2.4rem 2.8rem",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          gap: "0",
        }}
      >
        {/* Date */}
        <p
          style={{
            fontSize: "0.78rem",
            color: "#9ca3af",
            fontWeight: 600,
            letterSpacing: "0.04em",
            margin: "0 0 0.5rem 0",
          }}
        >
          {project.date}
        </p>

        {/* Title */}
        <h3
          style={{
            fontSize: "1.25rem",
            fontWeight: 800,
            color: "#0d0f14",
            margin: "0 0 0.4rem 0",
            lineHeight: 1.25,
          }}
        >
          {project.title}
        </h3>

        {/* Blue accent */}
        <div
          style={{
            width: "36px",
            height: "2.5px",
            background: "#4169e1",
            borderRadius: "2px",
            marginBottom: "1.1rem",
          }}
        />

        {/* Summary paragraph */}
        <p
          style={{
            fontSize: "0.88rem",
            lineHeight: 1.85,
            color: "#374151",
            fontWeight: 400,
            margin: "0 0 1.2rem 0",
          }}
        >
          {project.summary}
        </p>

        {/* "Developed using:" badges */}
        {project.technologies?.length > 0 && (
          <div
            style={{
              display: "flex",
              alignItems: "center",
              flexWrap: "wrap",
              gap: "0.45rem",
              marginBottom: project.githubUrl || project.videoUrl ? "1rem" : 0,
            }}
          >
            <span
              style={{
                fontSize: "0.75rem",
                fontWeight: 600,
                color: "#6b7280",
                marginRight: "0.15rem",
              }}
            >
              Developed using:
            </span>
            {project.technologies.map((tech, ti) => (
              <span
                key={ti}
                title={tech}
                style={{
                  fontSize: "0.75rem",
                  fontWeight: 600,
                  color: "#4169e1",
                  background: "rgba(65,105,225,0.07)",
                  border: "1px solid rgba(65,105,225,0.2)",
                  borderRadius: "5px",
                  padding: "0.18rem 0.55rem",
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "0.28rem",
                  whiteSpace: "nowrap",
                }}
              >
                <span role="img" aria-label={tech}>{getTechEmoji(tech)}</span>
                {tech}
              </span>
            ))}
          </div>
        )}

        {/* Action buttons */}
        <div style={{ display: "flex", gap: "0.6rem", flexWrap: "wrap" }}>
          {project.githubUrl && (
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
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
                textDecoration: "none",
                background: "transparent",
                transition: "background 0.2s",
              }}
              onMouseEnter={(e) =>
                (e.currentTarget.style.background = "rgba(65,105,225,0.07)")
              }
              onMouseLeave={(e) =>
                (e.currentTarget.style.background = "transparent")
              }
            >
              🔗 Code Repository
            </a>
          )}
          {project.videoUrl && (
            <a
              href={project.videoUrl}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "0.4rem",
                fontSize: "0.82rem",
                fontWeight: 600,
                color: "#6d28d9",
                border: "1px solid rgba(109,40,217,0.4)",
                borderRadius: "6px",
                padding: "0.4rem 1rem",
                textDecoration: "none",
                background: "transparent",
                transition: "background 0.2s",
              }}
              onMouseEnter={(e) =>
                (e.currentTarget.style.background = "rgba(109,40,217,0.07)")
              }
              onMouseLeave={(e) =>
                (e.currentTarget.style.background = "transparent")
              }
            >
              ▶ Watch Demo
            </a>
          )}
        </div>
      </div>
    </motion.div>
  );
}

// ── Section ───────────────────────────────────────────────────────────────────
export default function Projects() {
  return (
    <section
      id="projects"
      style={{
        background: "#f9fafb",   // very light grey — subtle contrast after white Experience
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
        Projects
      </p>

      {projects.map((project, i) => (
        <ProjectCard key={project.id} project={project} index={i} />
      ))}
    </section>
  );
}