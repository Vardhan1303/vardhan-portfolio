import { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FileText, X } from "lucide-react";

const fontLink = document.createElement("link");
fontLink.rel = "stylesheet";
fontLink.href =
  "https://fonts.googleapis.com/css2?family=Raleway:wght@400;600;700;800&family=Share+Tech+Mono&display=swap";
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
    const clearMouse = () => { mouse.x = null; mouse.y = null; };
    window.addEventListener("mousemove", handleMouse);
    window.addEventListener("mouseleave", clearMouse);

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
      window.removeEventListener("mousemove", handleMouse);
      window.removeEventListener("mouseleave", clearMouse);
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

// ─── Hacker Typewriter ───────────────────────────────────────────────────────
const CHARS = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789@#$%^&*<>/\\|[]{}";

function HackerTypewriter({ text, highlightWord, delay = 0 }) {
  const [displayed, setDisplayed] = useState("");
  const [scrambleMap, setScrambleMap] = useState({});
  const [done, setDone] = useState(false);

  useEffect(() => {
    const timeout = setTimeout(() => {
      let i = 0;
      const revealInterval = setInterval(() => {
        if (i >= text.length) {
          clearInterval(revealInterval);
          setDone(true);
          return;
        }
        let frame = 0;
        const scramble = setInterval(() => {
          setScrambleMap((prev) => ({
            ...prev,
            [i]: CHARS[Math.floor(Math.random() * CHARS.length)],
          }));
          frame++;
          if (frame >= 4) {
            clearInterval(scramble);
            setDisplayed((prev) => prev + text[i]);
            setScrambleMap((prev) => {
              const next = { ...prev };
              delete next[i];
              return next;
            });
            i++;
          }
        }, 35);
      }, 55);
    }, delay);
    return () => clearTimeout(timeout);
  }, [text, delay]);

  const fullText = displayed + (scrambleMap[displayed.length] || "");

  return (
    <span style={{ fontFamily: "'Share Tech Mono', monospace", letterSpacing: "0.04em" }}>
      {fullText.split("").map((char, idx) => {
        const isScrambled = idx >= displayed.length;
        const isHighlight =
          !isScrambled &&
          idx >= text.indexOf(highlightWord) &&
          idx < text.indexOf(highlightWord) + highlightWord.length;
        return (
          <span
            key={idx}
            style={{
              color: isScrambled
                ? "rgba(65,105,225,0.5)"
                : isHighlight
                ? "#4f8eff"
                : "#e2e8f0",
              textShadow: isScrambled
                ? "0 0 8px rgba(65,105,225,0.8)"
                : isHighlight
                ? "0 0 12px rgba(79,142,255,0.7)"
                : "none",
            }}
          >
            {char}
          </span>
        );
      })}
      {!done && (
        <span
          style={{
            display: "inline-block",
            width: "2px",
            height: "1em",
            background: "#4169e1",
            marginLeft: "3px",
            verticalAlign: "middle",
            animation: "blink 0.7s step-end infinite",
          }}
        />
      )}
      <style>{`@keyframes blink { 0%,100%{opacity:1} 50%{opacity:0} }`}</style>
    </span>
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
          className="absolute inset-0 bg-black/75 backdrop-blur-sm"
          onClick={onClose}
        />

        {/* Modal window */}
        <motion.div
          className="relative z-10 flex flex-col rounded-lg shadow-2xl overflow-hidden"
          style={{
            width: "90vw",
            maxWidth: "900px",
            height: "88vh",
            background: "#111827",
            border: "1px solid rgba(255,255,255,0.08)",
          }}
          initial={{ scale: 0.93, opacity: 0, y: 20 }}
          animate={{ scale: 1, opacity: 1, y: 0 }}
          exit={{ scale: 0.93, opacity: 0, y: 20 }}
          transition={{ duration: 0.25 }}
        >
          {/* Top bar */}
          <div
            className="flex items-center justify-between px-5 py-3"
            style={{
              background: "#0d111a",
              borderBottom: "1px solid rgba(255,255,255,0.08)",
              flexShrink: 0,
            }}
          >
            <div className="flex items-center gap-2 text-gray-300 text-sm">
              <FileText size={15} />
              <span style={{ fontFamily: "'Raleway', sans-serif" }}>
                Curriculum Vitae — Vardhan Mistry
              </span>
            </div>
            <button
              onClick={onClose}
              style={{
                color: "#9ca3af",
                background: "transparent",
                border: "none",
                cursor: "pointer",
                padding: "4px",
                borderRadius: "4px",
                display: "flex",
                alignItems: "center",
              }}
              onMouseEnter={(e) => (e.currentTarget.style.color = "#fff")}
              onMouseLeave={(e) => (e.currentTarget.style.color = "#9ca3af")}
            >
              <X size={18} />
            </button>
          </div>

          {/* PDF viewer */}
          <iframe
            src="/Resume_Vardhan_Mistry.pdf"
            style={{ flex: 1, width: "100%", border: "none" }}
            title="Curriculum Vitae"
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
        className="relative text-white bg-[#0d0f14]"
        style={{ minHeight: "100vh", overflow: "hidden" }}
      >
        <ParticleCanvas />

        {/* Centered content */}
        <div
          className="relative z-10 flex flex-col items-center justify-center text-center px-6"
          style={{ minHeight: "100vh", paddingBottom: "8vh" }}
        >
          {/* Name with hacker typewriter */}
          <motion.h1
            style={{
              fontWeight: 800,
              fontSize: "clamp(2.4rem, 6vw, 4.2rem)",
              lineHeight: 1.15,
              marginBottom: "0.55rem",
            }}
            initial={{ opacity: 0, y: 22 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.1 }}
          >
            <HackerTypewriter
              text="Hi! I'm Vardhan"
              highlightWord="Vardhan"
              delay={400}
            />
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
              e.currentTarget.style.background = "rgba(65,105,225,0.2)";
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

        {/* Diagonal slant at the bottom */}
        <svg
          viewBox="0 0 100 12"
          preserveAspectRatio="none"
          xmlns="http://www.w3.org/2000/svg"
          style={{
            position: "absolute",
            bottom: 0,
            left: 0,
            width: "100%",
            height: "12vh",
            display: "block",
            zIndex: 5,
          }}
        >
          <polygon points="0,12 100,0 100,12" fill="#ffffff" />
        </svg>
      </section>

      {showCV && <CVModal onClose={() => setShowCV(false)} />}
    </>
  );
}