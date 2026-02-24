import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";

// ─── Local logo imports ───────────────────────────────────────────────────────
import pythonLogo    from "/skill_logo/python_logo.png";
import arduinoLogo    from "/skill_logo/arduino_logo.png";
import cudaLogo       from "/skill_logo/cuda_logo.svg";
import dockerLogo     from "/skill_logo/docker_logo.jpg";
import githubLogo     from "/skill_logo/github_logo.png";
import gitLogo        from "/skill_logo/git_logo.svg";
import kerasLogo      from "/skill_logo/keras_logo.svg";
import kubernetesLogo from "/skill_logo/Kubernetes_logo.svg";
import linuxLogo      from "/skill_logo/linux_logo.png";
import azureLogo      from "/skill_logo/Microsoft_Azure_logo.svg";
import numpyLogo      from "/skill_logo/numpy_logo.svg";
import onnxLogo       from "/skill_logo/onnx_logo.png";
import opencvLogo     from "/skill_logo/opencv_logo.svg";
import pandasLogo     from "/skill_logo/pandas_logo.svg";
import raspberryLogo  from "/skill_logo/raspberrypi_logo.svg";
import tensorrtLogo   from "/skill_logo/TensorRT_logo.png";
import rosLogo        from "/skill_logo/Ros_logo.svg"; // add your ROS logo file

// ─── Inject fonts + Devicon CSS ───────────────────────────────────────────────
if (typeof document !== "undefined") {
  if (!document.querySelector("#skills-font-link")) {
    const link = document.createElement("link");
    link.id = "skills-font-link";
    link.rel = "stylesheet";
    link.href =
      "https://fonts.googleapis.com/css2?family=Raleway:wght@400;600;700;800&family=Share+Tech+Mono&display=swap";
    document.head.appendChild(link);
  }
  if (!document.querySelector("#devicon-link")) {
    const link = document.createElement("link");
    link.id = "devicon-link";
    link.rel = "stylesheet";
    link.href =
      "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/devicon.min.css";
    document.head.appendChild(link);
  }
}

// ─── Skill definitions ────────────────────────────────────────────────────────
// rect: true → wide rectangular tile (used for TensorRT and ROS/ROS2)
const skills = [
  // Row 1
  { name: "Python",       logo: pythonLogo,                                color: "#3776AB" },
  { name: "C++",          devicon: "devicon-cplusplus-plain colored",      color: "#00599C" },
  { name: "NumPy",        logo: numpyLogo,                                 color: "#4DABCF" },
  { name: "Pandas",       logo: pandasLogo,                                color: "#8B77D8" },
  { name: "OpenCV",       logo: opencvLogo,                                color: "#5C3EE8" },
  { name: "TensorFlow",   devicon: "devicon-tensorflow-original colored",  color: "#FF6F00" },
  // Row 2
  { name: "Keras",        logo: kerasLogo,                                 color: "#D00000" },
  { name: "Scikit",       devicon: "devicon-scikitlearn-plain colored",    color: "#F7931E" },
  { name: "PyTorch",      devicon: "devicon-pytorch-original colored",     color: "#EE4C2C" },
  { name: "ONNX",         logo: onnxLogo,                                  color: "#005CED" },
  { name: "CUDA",         logo: cudaLogo,                                  color: "#76B900" },
  { name: "Raspberry Pi", logo: raspberryLogo,                             color: "#C51A4A" },
  // Row 3
  { name: "Arduino",      logo: arduinoLogo,                               color: "#00979D" },
  { name: "Git",          logo: gitLogo,                                   color: "#F05032" },
  { name: "GitHub",       logo: githubLogo,                                color: "#E6EDF3" },
  { name: "Linux",        logo: linuxLogo,                                 color: "#FCC624" },
  { name: "Docker",       logo: dockerLogo,                                color: "#2496ED" },
  { name: "Kubernetes",   logo: kubernetesLogo,                            color: "#326CE5" },
  // Row 4 — last row: Azure + SQL (square) + TensorRT & ROS (rect)
  { name: "Azure",        logo: azureLogo,                                 color: "#0078D4" },
  { name: "SQL",          devicon: "devicon-postgresql-plain colored",     color: "#336791" },
  { name: "TensorRT",     logo: tensorrtLogo,                              color: "#76B900",  rect: true },
  { name: "ROS/ROS2",     logo: rosLogo,                                   color: "#22314E",  rect: true },
];

// ─── Particle Canvas ──────────────────────────────────────────────────────────
function SkillsParticleCanvas() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    let animId;
    const mouse = { x: null, y: null };

    const resize = () => {
      canvas.width = canvas.offsetWidth;
      canvas.height = canvas.offsetHeight;
    };
    resize();
    window.addEventListener("resize", resize);

    const handleMouseMove = (e) => {
      const rect = canvas.getBoundingClientRect();
      mouse.x = e.clientX - rect.left;
      mouse.y = e.clientY - rect.top;
    };
    const clearMouse = () => { mouse.x = null; mouse.y = null; };
    window.addEventListener("mousemove", handleMouseMove);
    const section = canvas.parentElement;
    section.addEventListener("mouseleave", clearMouse);

    const COUNT = 85;
    const particles = Array.from({ length: COUNT }, () => ({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      vx: (Math.random() - 0.5) * 0.45,
      vy: (Math.random() - 0.5) * 0.45,
      r: Math.random() * 1.4 + 0.7,
    }));

    const CONNECT_DIST = 150;
    const MOUSE_DIST = 170;

    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      for (const p of particles) {
        p.x += p.vx; p.y += p.vy;
        if (p.x < 0 || p.x > canvas.width) p.vx *= -1;
        if (p.y < 0 || p.y > canvas.height) p.vy *= -1;
      }

      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x;
          const dy = particles[i].y - particles[j].y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < CONNECT_DIST) {
            ctx.beginPath();
            ctx.strokeStyle = `rgba(255,255,255,${(1 - dist / CONNECT_DIST) * 0.22})`;
            ctx.lineWidth = 0.6;
            ctx.moveTo(particles[i].x, particles[i].y);
            ctx.lineTo(particles[j].x, particles[j].y);
            ctx.stroke();
          }
        }
        if (mouse.x !== null) {
          const dx = particles[i].x - mouse.x;
          const dy = particles[i].y - mouse.y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < MOUSE_DIST) {
            ctx.beginPath();
            ctx.strokeStyle = `rgba(100,160,255,${(1 - dist / MOUSE_DIST) * 0.55})`;
            ctx.lineWidth = 0.8;
            ctx.moveTo(particles[i].x, particles[i].y);
            ctx.lineTo(mouse.x, mouse.y);
            ctx.stroke();
          }
        }
      }

      for (const p of particles) {
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
        ctx.fillStyle = "rgba(255,255,255,0.65)";
        ctx.fill();
      }

      animId = requestAnimationFrame(draw);
    };
    draw();

    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener("resize", resize);
      window.removeEventListener("mousemove", handleMouseMove);
      section.removeEventListener("mouseleave", clearMouse);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      style={{
        position: "absolute", inset: 0,
        width: "100%", height: "100%",
        display: "block", zIndex: 1, pointerEvents: "none",
      }}
    />
  );
}

// ─── Square Skill Tile ────────────────────────────────────────────────────────
function SkillTile({ skill, index }) {
  const [hovered, setHovered] = useState(false);

  const hex = skill.color;
  const r = parseInt(hex.slice(1, 3), 16);
  const g = parseInt(hex.slice(3, 5), 16);
  const b = parseInt(hex.slice(5, 7), 16);
  const rgb = `${r},${g},${b}`;

  const glowFilter = hovered
    ? `drop-shadow(0 0 10px rgba(${rgb},0.9)) drop-shadow(0 0 24px rgba(${rgb},0.5))`
    : "none";

  return (
    <motion.div
      initial={{ opacity: 0, y: 22, scale: 0.9 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ delay: 0.04 * index, duration: 0.4, ease: "easeOut" }}
      viewport={{ once: true, amount: 0.1 }}
      style={{
        display: "flex", flexDirection: "column",
        alignItems: "center", gap: 12,
        zIndex: 2, position: "relative",
        width: 110,
      }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <motion.div
        animate={{ y: hovered ? -7 : 0 }}
        transition={{ duration: 0.2, ease: "easeOut" }}
        style={{
          width: 68, height: 68,
          display: "flex", alignItems: "center",
          justifyContent: "center", cursor: "default",
        }}
      >
        {skill.logo && (
          <img src={skill.logo} alt={skill.name} style={{
            width: 58, height: 58, objectFit: "contain",
            filter: glowFilter, opacity: hovered ? 1 : 0.75,
            transform: hovered ? "scale(1.15)" : "scale(1)",
            transition: "filter 0.25s, transform 0.25s, opacity 0.25s",
          }} />
        )}
        {skill.devicon && (
          <i className={skill.devicon} style={{
            fontSize: 58,
            filter: glowFilter, opacity: hovered ? 1 : 0.75,
            transform: hovered ? "scale(1.15)" : "scale(1)",
            transition: "filter 0.25s, transform 0.25s, opacity 0.25s",
          }} />
        )}
      </motion.div>
      <span style={{
        fontFamily: "'Raleway', sans-serif", fontWeight: 600,
        fontSize: 11, letterSpacing: "0.07em",
        color: hovered ? "#e2e8f0" : "rgba(255,255,255,0.38)",
        transition: "color 0.2s", textAlign: "center",
        textTransform: "uppercase", whiteSpace: "nowrap",
      }}>
        {skill.name}
      </span>
    </motion.div>
  );
}

// ─── Rectangular Skill Tile ───────────────────────────────────────────────────
function RectSkillTile({ skill, index }) {
  const [hovered, setHovered] = useState(false);

  const hex = skill.color;
  const r = parseInt(hex.slice(1, 3), 16);
  const g = parseInt(hex.slice(3, 5), 16);
  const b = parseInt(hex.slice(5, 7), 16);
  const rgb = `${r},${g},${b}`;

  const glowFilter = hovered
    ? `drop-shadow(0 0 10px rgba(${rgb},0.9)) drop-shadow(0 0 24px rgba(${rgb},0.5))`
    : "none";

  return (
    <motion.div
      initial={{ opacity: 0, y: 22, scale: 0.9 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ delay: 0.04 * index, duration: 0.4, ease: "easeOut" }}
      viewport={{ once: true, amount: 0.1 }}
      style={{
        display: "flex", flexDirection: "column",
        alignItems: "center", gap: 12,
        zIndex: 2, position: "relative",
        width: 180, // wider rect tile
      }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <motion.div
        animate={{ y: hovered ? -7 : 0 }}
        transition={{ duration: 0.2, ease: "easeOut" }}
        style={{
          width: 170, height: 68,
          display: "flex", alignItems: "center",
          justifyContent: "center", cursor: "default",
        }}
      >
        <img src={skill.logo} alt={skill.name} style={{
          width: "100%", height: 58, objectFit: "contain",
          filter: glowFilter, opacity: hovered ? 1 : 0.75,
          transform: hovered ? "scale(1.08)" : "scale(1)",
          transition: "filter 0.25s, transform 0.25s, opacity 0.25s",
        }} />
      </motion.div>
      <span style={{
        fontFamily: "'Raleway', sans-serif", fontWeight: 600,
        fontSize: 11, letterSpacing: "0.07em",
        color: hovered ? "#e2e8f0" : "rgba(255,255,255,0.38)",
        transition: "color 0.2s", textAlign: "center",
        textTransform: "uppercase", whiteSpace: "nowrap",
      }}>
        {skill.name}
      </span>
    </motion.div>
  );
}

// ─── Skills Section ───────────────────────────────────────────────────────────
export default function Skills() {
  // Separate rect tiles from square tiles
  const squareSkills = skills.filter(s => !s.rect);
  const rectSkills   = skills.filter(s => s.rect);

  // Split square skills into rows of 6
  const rows = [];
  for (let i = 0; i < squareSkills.length - 2; i += 6) {
    rows.push(squareSkills.slice(i, i + 6));
  }

  return (
    <>
      <style>{`
        #skills-section {
          position: relative;
          background: #0d0f14;
          padding-top: 6rem;
          padding-bottom: 6rem;
          overflow: hidden;
        }
      `}</style>

      <section id="skills-section">
        <SkillsParticleCanvas />

        <div style={{
          position: "relative", zIndex: 2,
          display: "flex", flexDirection: "column",
          alignItems: "center",
          paddingLeft: "5vw", paddingRight: "5vw",
        }}>

          {/* Header */}
          <motion.div
            style={{ textAlign: "center", marginBottom: 52 }}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 style={{
              fontFamily: "'Raleway', sans-serif", fontWeight: 800,
              fontSize: "1.25rem", letterSpacing: "0.25em",
              textTransform: "uppercase", color: "#e2e8f0",
              margin: 0, lineHeight: 1.1, 
              marginTop: -20, marginBottom: "20px",
            }}>
              Technical Skills
            </h2>
            <motion.div
              style={{
                width: 56, height: 2, background: "#4f8eff",
                margin: "14px auto 0", borderRadius: 2,
                marginTop: "5px", marginBottom: "0px",
              }}
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              viewport={{ once: true }}
            />
          </motion.div>

          {/* Square icon rows — first 18 skills in rows of 6 */}
          <div style={{
            display: "flex", flexDirection: "column",
            alignItems: "center", gap: 48,
          }}>
            {rows.map((row, rowIdx) => (
              <div key={rowIdx} style={{
                display: "flex", gap: "0px 32px",
                justifyContent: "center", flexWrap: "nowrap",
              }}>
                {row.map((skill, colIdx) => (
                  <SkillTile
                    key={skill.name}
                    skill={skill}
                    index={rowIdx * 6 + colIdx}
                  />
                ))}
              </div>
            ))}

            {/* Last row — Azure, SQL (square) + TensorRT, ROS/ROS2 (rect) side by side */}
            <div style={{
              display: "flex", gap: "0px 32px",
              justifyContent: "center", alignItems: "flex-start",
              flexWrap: "nowrap",
            }}>
              {/* Azure and SQL as normal square tiles */}
              {squareSkills.slice(-2).map((skill, i) => (
                <SkillTile
                  key={skill.name}
                  skill={skill}
                  index={squareSkills.length - 2 + i}
                />
              ))}

              {/* TensorRT and ROS/ROS2 as rect tiles */}
              {rectSkills.map((skill, i) => (
                <RectSkillTile
                  key={skill.name}
                  skill={skill}
                  index={squareSkills.length + i}
                />
              ))}
            </div>
          </div>

          {/* Footer */}
          <motion.p
            style={{
              fontFamily: "'Raleway', sans-serif", fontSize: 12,
              color: "rgba(255,255,255,0.28)", marginTop: 52,
              letterSpacing: "0.07em", textAlign: "center",
            }}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 1.2 }}
            viewport={{ once: true }}
          >
            Continuously expanding expertise through hands-on projects and research
          </motion.p>
        </div>
      </section>
    </>
  );
}