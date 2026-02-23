import { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FileText, X } from "lucide-react";

// Load the same cursive/handwriting font used in the reference for the logo,
// and a clean sans-serif matching the reference heading style.
const fontLink = document.createElement("link");
fontLink.rel = "stylesheet";
fontLink.href =
  "https://fonts.googleapis.com/css2?family=Raleway:wght@400;600;700;800&display=swap";
document.head.appendChild(fontLink);

// ─── Particle Canvas ────────────────────────────────────────────────────────
function ParticleCanvas() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    let animId;
    let mouse = { x: null, y: null };

    const resize = () => {
      canvas.width = canvas.offsetWidth;
      canvas.height = canvas.offsetHeight;
    };
    resize();
    window.addEventListener("resize", resize);

    const handleMouse = (e) => {
      const rect = canvas.getBoundingClientRect();
      mouse.x = e.clientX - rect.left;
      mouse.y = e.clientY - rect.top;
    };
    const clearMouse = () => {
      mouse.x = null;
      mouse.y = null;
    };
    canvas.addEventListener("mousemove", handleMouse);
    canvas.addEventListener("mouseleave", clearMouse);

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
        p.x += p.vx;
        p.y += p.vy;
        if (p.x < 0 || p.x > canvas.width) p.vx *= -1;
        if (p.y < 0 || p.y > canvas.height) p.vy *= -1;
      }

      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x;
          const dy = particles[i].y - particles[j].y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < CONNECT_DIST) {
            const alpha = (1 - dist / CONNECT_DIST) * 0.22;
            ctx.beginPath();
            ctx.strokeStyle = `rgba(255,255,255,${alpha})`;
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
            const alpha = (1 - dist / MOUSE_DIST) * 0.55;
            ctx.beginPath();
            ctx.strokeStyle = `rgba(100,160,255,${alpha})`;
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
      canvas.removeEventListener("mousemove", handleMouse);
      canvas.removeEventListener("mouseleave", clearMouse);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full"
      style={{ display: "block" }}
    />
  );
}

// ─── CV Modal ────────────────────────────────────────────────────────────────
function CVModal({ onClose }) {
  return (
    <AnimatePresence>
      <motion.div
        className="fixed inset-0 z-50 flex items-center justify-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
      >
        {/* Backdrop */}
        <div
          className="absolute inset-0 bg-black/70 backdrop-blur-sm"
          onClick={onClose}
        />

        {/* Modal window */}
        <motion.div
          className="relative z-10 w-[92vw] max-w-4xl h-[88vh] bg-[#1a1a2e] rounded-lg shadow-2xl overflow-hidden flex flex-col"
          initial={{ scale: 0.92, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0.92, opacity: 0 }}
          transition={{ duration: 0.25 }}
        >
          {/* Modal top bar */}
          <div className="flex items-center justify-between px-5 py-3 bg-[#111827] border-b border-white/10">
            <div className="flex items-center gap-2 text-gray-300 text-sm">
              <FileText size={15} />
              <span style={{ fontFamily: "'Raleway', sans-serif" }}>
                Curriculum Vitae — Vardhan Mistry
              </span>
            </div>
            <button
              onClick={onClose}
              className="text-gray-400 hover:text-white transition-colors p-1 rounded hover:bg-white/10"
            >
              <X size={18} />
            </button>
          </div>

          {/* PDF iframe */}
          <iframe
            src="/resume.pdf"
            className="flex-1 w-full"
            title="Curriculum Vitae"
            style={{ border: "none" }}
          />
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}

// ─── Hero ────────────────────────────────────────────────────────────────────
export default function Hero() {
  const [showCV, setShowCV] = useState(false);

  return (
    <>
      <section
        id="hero"
        className="relative text-white overflow-hidden bg-[#0d0f14]"
        style={{
          minHeight: "100vh",
          // Slanted bottom edge using clip-path — matches the reference diagonal cut
          clipPath: "polygon(0 0, 100% 0, 100% 88%, 0 100%)",
          paddingBottom: "12vh",
        }}
      >
        <ParticleCanvas />

        {/* Content — vertically centered in the visible area */}
        <div
          className="relative z-10 flex flex-col items-center justify-center text-center px-6"
          style={{ minHeight: "100vh" }}
        >
          {/* Name */}
          <motion.h1
            style={{
              fontFamily: "'Raleway', sans-serif",
              fontWeight: 800,
              fontSize: "clamp(2.4rem, 6vw, 4.2rem)",
              lineHeight: 1.15,
              marginBottom: "0.6rem",
              letterSpacing: "-0.01em",
            }}
            initial={{ opacity: 0, y: 22 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            Hi, I&apos;m{" "}
            <span style={{ color: "#4169e1" }}>Vardhan</span>
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            style={{
              fontFamily: "'Raleway', sans-serif",
              fontWeight: 700,
              fontSize: "clamp(1rem, 2.2vw, 1.4rem)",
              color: "#e2e8f0",
              marginBottom: "2rem",
              letterSpacing: "0.02em",
            }}
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.35 }}
          >
            MSc Mechatronics
          </motion.p>

          {/* CV Button */}
          <motion.button
            onClick={() => setShowCV(true)}
            style={{
              fontFamily: "'Raleway', sans-serif",
              fontWeight: 600,
              fontSize: "0.82rem",
              letterSpacing: "0.05em",
              display: "inline-flex",
              alignItems: "center",
              gap: "0.45rem",
              padding: "0.55rem 1.4rem",
              border: "1px solid rgba(65,105,225,0.7)",
              color: "#93b4ff",
              background: "rgba(65,105,225,0.08)",
              borderRadius: "4px",
              cursor: "pointer",
              transition: "background 0.2s, border-color 0.2s",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.background = "rgba(65,105,225,0.18)";
              e.currentTarget.style.borderColor = "rgba(65,105,225,1)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.background = "rgba(65,105,225,0.08)";
              e.currentTarget.style.borderColor = "rgba(65,105,225,0.7)";
            }}
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.5 }}
          >
            <FileText size={13} />
            Curriculum Vitae
          </motion.button>
        </div>
      </section>

      {/* CV Modal */}
      {showCV && <CVModal onClose={() => setShowCV(false)} />}
    </>
  );
}