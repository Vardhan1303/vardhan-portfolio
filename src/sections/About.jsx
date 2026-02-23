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
        overflow: "hidden",
      }}
    >
      {/* ── Two rectangles edge-to-edge, full viewport height ── */}
      <div
        style={{
          display: "flex",
          minHeight: "100vh",
          alignItems: "stretch",
        }}
      >
        {/* ── LEFT: Photo panel ─────────────────────────────────── */}
        <div
          style={{
            width: "42%",
            flexShrink: 0,
            position: "relative",
            overflow: "hidden",
            background: "#0d0f14",
          }}
        >
          <img
            src="/images/about_me.png"
            alt="Vardhan Mistry"
            style={{
              width: "100%",
              height: "100%",
              objectFit: "cover",
              objectPosition: "center top",
              display: "block",
            }}
            loading="lazy"
          />
          {/* Subtle dark fade at the bottom edge */}
          <div
            style={{
              position: "absolute",
              bottom: 0,
              left: 0,
              right: 0,
              height: "20%",
              background:
                "linear-gradient(to top, rgba(13,15,20,0.45), transparent)",
              pointerEvents: "none",
            }}
          />
        </div>

        {/* ── RIGHT: Content panel ──────────────────────────────── */}
        <div
          style={{
            flex: 1,
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            padding: "4rem 5rem",
            background: "#ffffff",
          }}
        >
          {/* Section label */}
          <p
            style={{
              fontSize: "0.75rem",
              letterSpacing: "0.25em",
              textTransform: "uppercase",
              color: "#9ca3af",
              marginBottom: "1.6rem",
              fontWeight: 600,
            }}
          >
            About Me
          </p>

          {/* Name */}
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
              marginBottom: "1.6rem",
            }}
          />

          {/* Bio */}
          <div
            style={{
              fontSize: "1rem",
              lineHeight: 1.85,
              color: "#374151",
              fontWeight: 400,
              display: "flex",
              flexDirection: "column",
              gap: "0.75rem",
              maxWidth: "500px",
            }}
          >
            <p>
              I hold a Bachelor&apos;s in{" "}
              <strong style={{ fontWeight: 600, color: "#111827" }}>
                Mechanical Engineering
              </strong>{" "}
              and a Master&apos;s in{" "}
              <strong style={{ fontWeight: 600, color: "#111827" }}>
                Mechatronics
              </strong>{" "}
              from TU Chemnitz, Germany.
            </p>
            <p>
              My work spans{" "}
              <strong style={{ fontWeight: 600, color: "#111827" }}>
                computer vision, deep learning, robotics, and automation
              </strong>{" "}
              — combining mechanical foundations with intelligent software systems.
            </p>
            <p>
              I completed my thesis at{" "}
              <strong style={{ fontWeight: 600, color: "#111827" }}>
                IAV GmbH
              </strong>
              , contributing to automotive software and perception engineering in
              an industrial setting.
            </p>
            <p>
              I thrive in interdisciplinary teams and enjoy building applied
              solutions where hardware and AI intersect.
            </p>
            <p>
              Currently seeking a{" "}
              <strong style={{ fontWeight: 600, color: "#111827" }}>
                full-time role in Germany
              </strong>{" "}
              in AI/ML, computer vision, or mechatronics.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}