import { useState, useEffect } from "react";
import { motion } from "framer-motion";

const fontLink = document.createElement("link");
fontLink.rel = "stylesheet";
fontLink.href =
  "https://fonts.googleapis.com/css2?family=Raleway:wght@400;500;600;700;800&display=swap";
if (!document.head.querySelector('link[href*="Raleway"]')) {
  document.head.appendChild(fontLink);
}

// ── Projects data — reverse chronological ────────────────────────────────────
const projects = [
  {
    id: 1,
    image: "/images/proj_med.png",
    date: "August 2025",
    title: "Brain Tumor Detection Using CNN and Transfer Learning",
    subtitle: "Extracurricular Project",
    summary:
      "A binary classification system for brain MRI scans built using a custom CNN and MobileNet-based transfer learning. The transfer learning model achieved 97.24% test accuracy, significantly outperforming the CNN trained from scratch (91.74%). The project covers a complete ML pipeline including data splitting, model optimisation with EarlyStopping and ModelCheckpoint callbacks, and comprehensive performance visualisation.",
    technologies: ["Python", "TensorFlow", "Keras", "CNN", "MobileNet", "Transfer Learning", "OpenCV", "Medical Imaging"],
    githubUrl: "https://github.com/Vardhan1303/MedVisionAI",
    videoUrl: null,
  },
  {
    id: 2,
    image: "/images/proj_food.png",
    date: "March 2025",
    title: "Food Classification Using EfficientNetB0",
    subtitle: "Extracurricular Project — TensorFlow Deep Learning Bootcamp",
    summary:
      "An end-to-end deep learning pipeline for the Food-101 dataset (101 food categories) built with TensorFlow 2.8 and EfficientNetB0 transfer learning. The workflow covers feature extraction with frozen base layers and a custom classification head, followed by fine-tuning with a reduced learning rate (0.0001) to push accuracy beyond the initial extraction results. A TensorFlow Dataset (tfds) integration handles efficient batch processing with image resizing and float32 casting, and mixed precision training optimises inference for a deployment-ready system.",
    technologies: ["Python", "TensorFlow", "Keras", "EfficientNetB0", "Transfer Learning", "NumPy", "Matplotlib"],
    githubUrl: "https://github.com/Vardhan1303/tensorflow/tree/main/1-food-vision",
    videoUrl: null,
  },
  {
    id: 3,
    image: "/images/rcrc.png",
    date: "December 2024 – January 2025",
    title: "Robot Car Racing Competition",
    subtitle: "Course Project — GPA: 1.3",
    summary:
      "An autonomous robot car integrating computer vision and sensor fusion to complete four navigation tasks: line following, LiDAR-based obstacle avoidance, colour cube detection, and ArUco marker recognition. A Pi Camera with adaptive thresholding enables precise line following, while RPLidar detects obstacles at defined distance thresholds (20 cm and 40 cm). An intelligent prioritisation algorithm selects the closest detected target in multi-object scenarios, and a GPIO-interfaced motor control system provides responsive autonomous navigation throughout all tasks.",
    technologies: ["Python", "OpenCV", "Raspberry Pi 4", "RPLidar", "Pi Camera", "ArUco Markers", "Computer Vision", "Image Processing"],
    githubUrl: "https://github.com/Vardhan1303/Robot-Car-Racing-Competition",
    videoUrl: null,
  },
  {
    id: 4,
    image: "/images/platooning.jpeg",
    date: "March 2024 – August 2024",
    title: "Platooning Autonomous Following Robot",
    subtitle: "Master's Scientific Project — GPA: 1.4",
    summary:
      "A cost-effective autonomous following robot built on Raspberry Pi 4 using ArUco marker detection, eliminating the need for expensive LiDAR systems. A comprehensive camera calibration pipeline using checkerboard patterns corrects lens distortions for precise pose estimation. A multi-marker detection system with cv2.solvePnP() enables real-time position tracking, and Kalman filtering reduces sensor noise to achieve a distance estimation error below 2 cm across varied lighting and surface conditions. Dynamic PID-based motor control provides smooth following behaviour with intelligent recovery for marker loss situations.",
    technologies: ["Python", "OpenCV", "Raspberry Pi 4", "ArUco Markers", "Kalman Filter", "PID Control", "Computer Vision", "Pose Estimation"],
    githubUrl: "https://github.com/Vardhan1303/Scientific_project/blob/main/docs/details.md",
    videoUrl: null,
  },
  {
    id: 5,
    image: "/images/cv_2.png",
    date: "May 2024 – June 2024",
    title: "Object Detection and Depth Estimation",
    subtitle: "Computer Vision — Task 2",
    summary:
      "A YOLOv8-based object detection pipeline evaluated on the KITTI dataset, with IoU-based bounding box filtering above a 0.5 threshold for ground truth validation. Depth estimation is computed from camera calibration matrices and bounding box geometry, achieving 85% accuracy within a 5-metre range. Results are visualised through Bird's Eye View (BEV) representations with annotated bounding boxes, distance measurements, and precision/recall metrics for comprehensive performance analysis.",
    technologies: ["Python", "OpenCV", "YOLOv8", "NumPy", "KITTI Dataset", "Object Detection", "Camera Calibration"],
    githubUrl: "https://github.com/Vardhan1303/Computer_Vision/tree/main/Task_2_Object_Detection_and_Depth_Estimation",
    videoUrl: null,
  },
  {
    id: 6,
    image: "/images/cv_1.png",
    date: "March 2024 – April 2024",
    title: "Augmented Reality with ArUco Markers",
    subtitle: "Computer Vision — Task 1",
    summary:
      "An augmented reality system that detects ArUco markers in real-world scenes and overlays custom poster images with perspective-correct homography transformation. The pipeline uses OpenCV for marker detection, computes the homography matrix between the marker corners and the target poster, and applies warp perspective with masking and blending for photorealistic integration. The system successfully processed 10 out of 11 test images with seamless AR placement.",
    technologies: ["Python", "OpenCV", "ArUco Markers", "NumPy", "Homography", "Computer Vision"],
    githubUrl: "https://github.com/Vardhan1303/Computer_Vision/tree/main/Task_1_Augmented_Reality",
    videoUrl: null,
  },
  {
    id: 7,
    image: "/images/lidar_radar_2.png",
    date: "December 2023 – January 2024",
    title: "Object Detector Evaluation on KITTI Dataset",
    subtitle: "LiDAR & Radar Systems — Task 2",
    summary:
      "An evaluation framework for a YOLOv8 object detection model applied to the KITTI dataset, focusing on precision, recall, and IoU-based bounding box assessment. The pipeline generates Bird's Eye View (BEV) visualisations with annotated detections, overlaying estimated versus ground truth bounding boxes for spatial accuracy analysis. Comprehensive histogram distributions and scatter plots quantify detection performance across diverse driving scenes, providing detailed insights into the model's real-world reliability.",
    technologies: ["Python", "YOLOv8", "OpenCV", "NumPy", "Matplotlib", "KITTI Dataset", "Object Detection"],
    githubUrl: "https://github.com/Vardhan1303/Lidar_Radar/tree/main/Task_2_Evaluation_of_an_object_detector",
    videoUrl: null,
  },
  {
    id: 8,
    image: "/images/lidar_radar_1.png",
    date: "October 2023 – November 2023",
    title: "Influence of Fog on LiDAR and Radar Sensors",
    subtitle: "LiDAR & Radar Systems — Task 1",
    summary:
      "A sensor performance study evaluating three sensors — Blickfeld Cube LiDAR, Velodyne Puck LiDAR, and MMWAVCAS-RF-EVM Radar — under clear and simulated foggy conditions using over 500 CSV files per scenario. An automated pipeline merges and preprocesses large-scale sensor datasets, computing RMS values to statistically quantify fog-induced signal degradation. Analysis reveals that the Velodyne Puck reliably detects objects up to 5 metres in fog with performance challenges beyond 10 metres, while the Blickfeld Cube shows a wider RMS distribution due to scattered laser reflections.",
    technologies: ["Python", "NumPy", "Matplotlib", "Pandas", "LiDAR", "Radar", "Sensor Fusion", "Statistical Analysis"],
    githubUrl: "https://github.com/Vardhan1303/Lidar_Radar/tree/main/Task_1_Influence_of_Fog_on_the_Sensors",
    videoUrl: null,
  },
];

// ── Project Card ──────────────────────────────────────────────────────────────
function ProjectCard({ project, index }) {
  const [isMobile, setIsMobile] = useState(
    typeof window !== "undefined" && window.innerWidth < 768
  );

  useEffect(() => {
    const handler = () => setIsMobile(window.innerWidth < 768);
    window.addEventListener("resize", handler);
    return () => window.removeEventListener("resize", handler);
  }, []);

  const isReversed = !isMobile && index % 2 !== 0;

  return (
    <motion.div
      style={{
        maxWidth: "1200px",
        margin: "0 auto 2.5rem",
        display: "flex",
        flexDirection: isMobile ? "column" : isReversed ? "row-reverse" : "row",
        borderRadius: "14px",
        overflow: "hidden",
        boxShadow: "0 4px 32px rgba(0,0,0,0.09)",
        background: "#fff",
      }}
      initial={{ opacity: 0, y: 32 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.1 }}
      transition={{ duration: 0.55, delay: index * 0.06 }}
    >
      {/* Screenshot side */}
      <div
        style={{
          width: isMobile ? "100%" : "48%",
          height: isMobile ? "220px" : "auto",
          flexShrink: 0,
          background: "#f3f4f6",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          alignSelf: "stretch",
          padding: isMobile ? "12px" : "16px",
          boxSizing: "border-box",
          borderBottom: isMobile ? "1px solid #e5e7eb" : "none",
          borderRight: !isMobile && !isReversed ? "1px solid #e5e7eb" : "none",
          borderLeft: !isMobile && isReversed ? "1px solid #e5e7eb" : "none",
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
              objectFit: "contain",
              objectPosition: "center center",
              display: "block",
              transition: "transform 0.4s ease",
              borderRadius: "6px",
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
          padding: isMobile ? "1.5rem" : "2.2rem 2.6rem",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
        }}
      >
        {/* Date + subtitle row */}
        <div style={{
          display: "flex",
          alignItems: isMobile ? "flex-start" : "center",
          flexDirection: isMobile ? "column" : "row",
          flexWrap: "wrap",
          gap: isMobile ? "0.2rem" : "0.5rem",
          marginBottom: "0.5rem",
        }}>
          <p style={{
            fontSize: "0.78rem",
            color: "#9ca3af",
            fontWeight: 600,
            letterSpacing: "0.04em",
            margin: 0,
          }}>
            {project.date}
          </p>
          {project.subtitle && (
            <>
              {!isMobile && (
                <span style={{ color: "#d1d5db", fontSize: "0.75rem" }}>·</span>
              )}
              <p style={{
                fontSize: "0.75rem",
                color: "#6b7280",
                fontWeight: 600,
                fontStyle: "italic",
                margin: 0,
              }}>
                {project.subtitle}
              </p>
            </>
          )}
        </div>

        {/* Title */}
        <h3
          style={{
            fontSize: isMobile ? "1rem" : "1.15rem",
            fontWeight: 800,
            color: "#0d0f14",
            margin: "0 0 0.4rem 0",
            lineHeight: 1.3,
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
            marginBottom: "1rem",
          }}
        />

        {/* Summary */}
        <p
          style={{
            fontSize: isMobile ? "0.84rem" : "0.875rem",
            lineHeight: 1.85,
            color: "#374151",
            fontWeight: 400,
            margin: "0 0 1.1rem 0",
            textAlign: "justify",
          }}
        >
          {project.summary}
        </p>

        {/* Tech badges */}
        {project.technologies?.length > 0 && (
          <div
            style={{
              display: "flex",
              alignItems: "center",
              flexWrap: "wrap",
              gap: "0.4rem",
              marginBottom: project.githubUrl || project.videoUrl ? "1rem" : 0,
            }}
          >
            <span style={{
              fontSize: "0.74rem",
              fontWeight: 600,
              color: "#6b7280",
              marginRight: "0.1rem",
            }}>
              Developed using:
            </span>
            {project.technologies.map((tech, ti) => (
              <span
                key={ti}
                style={{
                  fontSize: "0.72rem",
                  fontWeight: 600,
                  color: "#4169e1",
                  background: "rgba(65,105,225,0.07)",
                  border: "1px solid rgba(65,105,225,0.2)",
                  borderRadius: "5px",
                  padding: "0.18rem 0.55rem",
                  whiteSpace: "nowrap",
                }}
              >
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
              Code Repository
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
              Watch Demo
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
        background: "#f9fafb",
        fontFamily: "'Raleway', sans-serif",
        padding: "50px 2rem",
      }}
    >
      <p
        style={{
          fontSize: "1.25rem",
          letterSpacing: "0.25em",
          textTransform: "uppercase",
          color: "#696969",
          fontWeight: 800,
          textAlign: "center",
          marginTop: 0,
          marginBottom: "10px",
        }}
      >
        Projects
      </p>
      <div
        style={{
          width: "56px",
          height: "2px",
          background: "#4f8eff",
          borderRadius: "2px",
          margin: "0 auto 40px",
        }}
      />

      {projects.map((project, i) => (
        <ProjectCard key={project.id} project={project} index={i} />
      ))}
    </section>
  );
}