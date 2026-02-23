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
        padding: "80px 2rem",
      }}
    >
      {/* Section label centered above */}
      <p
        style={{
          fontSize: "1.2rem",
          letterSpacing: "0.25em",
          textTransform: "uppercase",
          color: "#9ca3af",
          fontWeight: 600,
          textAlign: "center",
          marginBottom: "2rem",
        }}
      >
        About Me
      </p>

      {/* Small centered card */}
      <div
        style={{
          maxWidth: "820px",
          margin: "0 auto",
          overflow: "hidden",
          display: "flex",
        }}
      >
        {/* LEFT — Photo */}
        <div
          style={{
            width: "220px",
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
        </div>

        {/* RIGHT — Content */}
        <div
          style={{
            flex: 1,
            padding: "2.2rem 2.5rem",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
          }}
        >
          {/* Name */}
          <h2
            style={{
              fontSize: "1.6rem",
              fontWeight: 800,
              color: "#0d0f14",
              marginBottom: "0.35rem",
              lineHeight: 1.15,
            }}
          >
            Vardhan Mistry
          </h2>

          {/* Blue accent line */}
          <div
            style={{
              width: "36px",
              height: "3px",
              background: "#4169e1",
              borderRadius: "2px",
              marginBottom: "1.2rem",
            }}
          />

          {/* Single paragraph */}
          <p
            style={{
              fontSize: "0.95rem",
              lineHeight: 1.85,
              color: "#374151",
              fontWeight: 400,
              margin: 0,
              textAlign: "justify",
            }}
          >
            MSc Mechatronics graduate with a strong research-oriented and
            computational background in{" "}
            <strong style={{ fontWeight: 600, color: "#111827" }}>
              machine learning, computer vision, and image-based data analysis
            </strong>
            . Experienced in designing reproducible pipelines, analyzing complex
            visual data, and independently executing research-driven projects
            with academic rigor.
          </p>
        </div>
      </div>
    </section>
  );
}