const projects = [
  {
    id: 1,
    title: "Brain Tumor Detection Using CNN and Transfer Learning",
    subtitle: "Extracurricular Project",
    date: "Aug 2025",
    bullets: [
      "Developed binary classification system for brain MRI scans using custom CNN and MobileNet-based transfer learning.", 
      "Achieved 97.24% test accuracy with transfer learning model, significantly outperforming CNN from scratch (91.74%).", 
      "Implemented complete ML pipeline including data splitting, model optimization with EarlyStopping/ModelCheckpoint callbacks, and comprehensive performance visualization.",
    ],
    technologies: ["Medical Imaging", "Python", "TensorFlow", "Keras", "CNN", "MobileNet", "Transfer Learning", "OpenCV", "Kaggle Datasets"],
    image: "/images/proj_med.png",
    githubUrl: "https://github.com/Vardhan1303/MedVisionAI"
  },
  {
    id: 2,
    title: "Platooning Autonomous Following Robot",
    subtitle: "Master's Compulsory Scientific Project (GPA: 1.4/5.0)",
    date: "March 2024 - August 2024",
    bullets: [
      "Developed cost-effective autonomous following robot using Raspberry Pi 4 and ArUco marker detection, eliminating the need for expensive LiDAR systems while achieving reliable visual tracking.",
      "Implemented comprehensive camera calibration pipeline using checkerboard patterns to correct lens distortions, ensuring precise marker detection and pose estimation accuracy.",
      "Designed multi-marker detection system with three ArUco markers for continuous tracking during turns, combined with cv2.solvePnP() for real-time position and orientation estimation.",
      "Integrated Kalman filtering for sensor fusion and noise reduction, achieving distance estimation accuracy with average error less than 2 cm across diverse lighting and surface conditions.",
      "Engineered dynamic motor control system with PID algorithms for smooth following behavior, including intelligent recovery mechanisms for marker loss situations based on last known position."
    ],
    technologies: ["Python", "OpenCV", "Raspberry Pi 4", "ArUco Markers", "Kalman Filter", "PID Control", "Computer Vision", "GPIO", "Pose Estimation"],
    image: "/images/proj_sci.jpg",
    githubUrl: "https://github.com/Vardhan1303/Scientific_project/blob/main/docs/details.md"
  },
  {
    id: 3,
    title: "Robot Car Racing Competition",
    subtitle: "5.0 Credit Course Project (GPA: 1.3/5.0)",
    date: "December 2024 - January 2025",
    bullets: [
      "Developed autonomous robot car integrating computer vision and sensor fusion to complete four complex navigation tasks: line following, LiDAR-based obstacle avoidance, color cube detection, and ArUco marker recognition.",
      "Implemented real-time line following system using Pi Camera with adaptive thresholding and image processing, enabling precise navigation through complex paper-based track layouts.",
      "Engineered RPLidar-based obstacle detection with distance-specific stopping behavior (20cm and 40cm thresholds) for colored cubes (green/red) and ArUco markers (ID 0/ID 1).",
      "Designed intelligent target prioritization algorithm for multi-object scenarios, automatically selecting and navigating toward the closest detected marker or cube.",
      "Integrated motor control system with GPIO interfacing and feedback mechanisms for responsive autonomous navigation across diverse robotic tasks."
    ],
    technologies: ["Python", "OpenCV", "Raspberry Pi 4", "RPLidar", "Pi Camera", "ArUco Markers", "Computer Vision", "GPIO", "Image Processing", "Adaptive Thresholding", "L298N Motor Driver"],
    image: "/images/proj_rc.jpg",
    githubUrl: "https://github.com/Vardhan1303/Robot-Car-Racing-Competition"
  },
  {
    id: 4,
    title: "Food Classification Using EfficientNetB0",
    subtitle: "Extracurricular Project - TensorFlow Deep Learning Bootcamp",
    date: "March 2025",
    bullets: [
      "Built end-to-end deep learning pipeline for Food-101 dataset (101 food categories) using TensorFlow 2.8 and EfficientNetB0 architecture with transfer learning approach.",
      "Implemented feature extraction workflow with frozen base model layers and custom classification head using GlobalAveragePooling2D and Dense layers for multi-class classification.",
      "Applied fine-tuning strategy by unfreezing EfficientNetB0 layers and training with reduced learning rate (0.0001), significantly improving model accuracy beyond initial feature extraction results.",
      "Developed comprehensive data preprocessing pipeline including image resizing (224x224), float32 casting, and TensorFlow Dataset (tfds) integration for efficient batch processing.",
      "Integrated model persistence with save/load functionality and mixed precision training for optimized inference, enabling deployment-ready food classification system."
    ],
    technologies: ["Python", "TensorFlow", "Keras", "EfficientNetB0", "Transfer Learning", "TensorFlow Datasets", "NumPy", "Matplotlib", "Feature Extraction", "Fine-Tuning"],
    image: "/images/proj_food.png",
    githubUrl: "https://github.com/Vardhan1303/tensorflow/tree/main/1-food-vision"
  },
  {
    id: 5,
    title: "Computer Vision",
    subtitle: "Academic Course Project (5.0 Credits)",
    date: "March 2024 - June 2024",
    bullets: [
      "Developed augmented reality system using ArUco marker detection with OpenCV, successfully overlaying poster images onto real-world scenes with perspective-correct transformation in 10 out of 11 test images.",
      "Implemented YOLOv8-based object detection pipeline on KITTI dataset with IoU filtering (>0.5 threshold) for accurate bounding box validation against ground truth labels.",
      "Engineered depth estimation system using camera calibration matrices and bounding box geometry, calculating real-world distances to detected objects and achieving 85% accuracy within 5-meter range.",
      "Created comprehensive visualization framework generating Bird's Eye View (BEV) representations with annotated bounding boxes, distance measurements, and performance metrics (Precision/Recall).",
      "Applied homography transformation and warp perspective techniques for seamless image integration, utilizing masking and blending for photorealistic AR poster placement on detected markers."
    ],
    technologies: ["Python", "OpenCV", "YOLOv8", "ArUco Markers", "NumPy", "Matplotlib", "KITTI Dataset", "Computer Vision", "Homography", "Camera Calibration", "Object Detection"],
    image: "/images/proj_cv.jpg",
    githubUrl: "https://github.com/Vardhan1303/Computer_Vision"
  },
  {
    id: 6,
    title: "Lidar and Radar Systems",
    subtitle: "Academic Course Project (5.0 Credits)",
    date: "October 2023 - January 2024",
    bullets: [
      "Conducted comprehensive sensor performance analysis evaluating three sensors (Blickfeld Cube, Velodyne Puck, MMWAVCAS-RF-EVM Radar) under clear and foggy conditions using 500+ CSV files per scenario.",
      "Developed automated data processing pipeline merging and preprocessing large-scale sensor datasets, computing Root Mean Square (RMS) values for statistical analysis of fog-induced performance degradation.",
      "Analyzed Velodyne Puck LiDAR performance showing effective object detection up to 5 meters in fog with challenges beyond 10 meters, while Blickfeld Cube exhibited wider RMS distribution due to scattered reflections.",
      "Implemented YOLOv8 object detection evaluation framework on KITTI dataset with IoU-based bounding box filtering, calculating precision/recall metrics across diverse scenes with Bird's Eye View visualization.",
      "Generated comprehensive performance visualizations including histogram distributions, scatter plots comparing estimated vs ground truth distances, and annotated BEV images with detection metrics."
    ],
    technologies: ["Python", "NumPy", "Matplotlib", "Pandas", "LiDAR", "Radar", "YOLOv8", "KITTI Dataset", "OpenCV", "Sensor Fusion", "Data Analysis", "Statistical Analysis"],
    image: "/images/proj_lidar.jpg",
    githubUrl: "https://github.com/Vardhan1303/Lidar_Radar"
  }
];

export default projects;
