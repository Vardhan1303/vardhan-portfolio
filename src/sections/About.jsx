const fontLink = document.createElement("link");
fontLink.rel = "stylesheet";
fontLink.href =
  "https://fonts.googleapis.com/css2?family=Raleway:wght@400;500;600;700;800&display=swap";
if (!document.head.querySelector('link[href*="Raleway"]')) {
  document.head.appendChild(fontLink);
}

export default function About() {
  return (
    <section
      id="about"
      style={{
        background: "#ffffff",
        fontFamily: "'Raleway', sans-serif",
        padding: "80px 0 90px",
      }}
    >
      <div
        style={{
          maxWidth: "860px",
          margin: "0 auto",
          padding: "0 2rem",
        }}
      >
        {/* Section label */}
        <p
          style={{
            fontSize: "0.75rem",
            letterSpacing: "0.25em",
            textTransform: "uppercase",
            color: "#9ca3af",
            marginBottom: "2.5rem",
            fontWeight: 600,
          }}
        >
          About Me
        </p>

        {/* Main card — photo left, text right */}
        <div
          style={{
            display: "flex",
            gap: "3rem",
            alignItems: "flex-start",
          }}
        >
          {/* ── Photo ───────────────────────────────── */}
          <div
            style={{
              flexShrink: 0,
              width: "168px",   /* ~3.5 units */
            }}
          >
            <img
              src="/images/about_me.png"
              alt="Vardhan Mistry"
              style={{
                width: "168px",
                height: "216px",   /* 3.5 × 4.5 ratio */
                objectFit: "cover",
                objectPosition: "center top",
                borderRadius: "6px",
                display: "block",
                boxShadow: "0 4px 20px rgba(0,0,0,0.10)",
              }}
              loading="lazy"
            />
          </div>

          {/* ── Text ────────────────────────────────── */}
          <div style={{ flex: 1 }}>
            <h2
              style={{
                fontSize: "clamp(1.7rem, 3vw, 2.4rem)",
                fontWeight: 800,
                color: "#0d0f14",
                marginBottom: "0.4rem",
                lineHeight: 1.15,
              }}
            >
              Vardhan Mistry
            </h2>

            {/* Accent line */}
            <div
              style={{
                width: "40px",
                height: "3px",
                background: "#4169e1",
                borderRadius: "2px",
                marginBottom: "1.4rem",
              }}
            />

            <div
              style={{
                fontSize: "1rem",
                lineHeight: 1.85,
                color: "#374151",
                fontWeight: 400,
                display: "flex",
                flexDirection: "column",
                gap: "0.75rem",
              }}
            >
              <p>
                I hold a Bachelor's in <strong style={{ fontWeight: 600, color: "#111827" }}>Mechanical Engineering</strong> and a Master's in <strong style={{ fontWeight: 600, color: "#111827" }}>Mechatronics</strong> from TU Chemnitz, Germany.
              </p>
              <p>
                My work spans <strong style={{ fontWeight: 600, color: "#111827" }}>computer vision, deep learning, robotics, and automation</strong> — combining mechanical foundations with intelligent software systems.
              </p>
              <p>
                I completed my thesis at <strong style={{ fontWeight: 600, color: "#111827" }}>IAV GmbH</strong>, contributing to automotive software and perception engineering in an industrial setting.
              </p>
              <p>
                I thrive in interdisciplinary teams and enjoy building applied solutions where hardware and AI intersect.
              </p>
              <p>
                Currently seeking a <strong style={{ fontWeight: 600, color: "#111827" }}>full-time role in Germany</strong> in AI/ML, computer vision, or mechatronics.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}