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
      <style>{`
        .about-card {
          max-width: 900px;
          margin: 0 auto;
          overflow: hidden;
          display: flex;
          flex-direction: row;
        }

        .about-photo {
          width: 300px;
          flex-shrink: 0;
          position: relative;
          overflow: hidden;
          background: #0d0f14;
        }

        .about-photo img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          object-position: center top;
          display: block;
        }

        .about-content {
          flex: 1;
          padding: 2.2rem 2.5rem;
          display: flex;
          flex-direction: column;
          justify-content: center;
        }

        @media (max-width: 600px) {
          .about-card {
            flex-direction: column;
          }

          .about-photo {
            width: 100%;
            height: 260px;
          }

          .about-content {
            padding: 1.6rem 1.4rem;
          }
        }
      `}</style>

      {/* Section label */}
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

      {/* Card */}
      <div className="about-card">
        {/* LEFT — Photo */}
        <div className="about-photo">
          <img
            src="/images/about_me.png"
            alt="Vardhan Mistry"
            loading="lazy"
          />
        </div>

        {/* RIGHT — Content */}
        <div className="about-content">
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

          {/* Paragraph */}
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
            MSc Mechatronics graduate with over two years of industrial experience and a strong research driven computational background in AI, machine learning, deep learning, computer vision, and image processing. I design scalable and reproducible data pipelines, develop and fine tune models, and perform rigorous experimental evaluation. I have hands on experience optimizing inference and deploying models on embedded and edge hardware, transforming research concepts into reliable production ready systems. I work independently on complex technical problems with both academic rigor and industrial focus.
          </p>
        </div>
      </div>
    </section>
  );
}

