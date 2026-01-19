const experiences = [
  {
    id: 1,
    company: "IAV GmbH – Stollberg, Germany",
    image: "/images/experience_iav.gif",
    positions: [
      {
        date: "Apr 2025 – Dec 2025",
        title: "Master's Thesis Student",
        bullets: [
          "**Thesis Title**: \"Flexible Soiling Detection on Automotive Cameras\" – Extended thesis opportunity awarded based on consistent performance and deep technical expertise demonstrated during internship",
          "Engineered an end-to-end **flexible soiling detection pipeline** capable of handling diverse camera types (fisheye, pinhole) and variable environmental conditions with **state machine-based algorithm** for real-time detection and cleaning system activation",
          "Implemented **DirtyGAN architecture** (CycleGAN with 4-channel generator + VAE) to generate **unlimited realistic soiled images with pixel-perfect binary masks**, eliminating manual annotation costs and enabling **80,000+ training images** generation",
          "Designed and trained **Variational Autoencoder (VAE)** on real soiling mask datasets to synthesize diverse, photorealistic contamination patterns, achieving production-grade synthetic data quality",
          "Developed comprehensive **binary segmentation models** for lens contamination detection: **DeepLabv3+ (ResNet-101)** for accuracy, **SegFormer (MiT-B1)** for balanced performance, and **PIDNet-Small** for edge deployment with **7ms latency**",
          "Conducted rigorous **4-case comparative analysis**: real-only, synthetic-only, mixed dataset, and real+synthetic+clean images, achieving **93% recall** on soiling detection with **0.01% false positive rate** on clean images",
          
          "Fine-tuned models on **60,000+ images** with hyperparameter optimization, achieving **Dice coefficient: 0.90-0.94** across test scenarios and validating generalization across camera types",
          "Implemented **real-time inference pipeline** (on system) with state machine logic for automated cleaning system triggering (water spray + air pressure), validated on unseen video streams, live webcam feeds, and production test scenarios",
          "Achieved deployment-ready performance: **DeepLabv3+ (35ms)**, **SegFormer (25ms)**, **PIDNet (7ms)** latency, enabling flexible model selection based on accuracy-speed trade-offs for different vehicle platforms",
          "Key Technologies: Python, PyTorch, CycleGAN, DirtyGAN, VAE, DeepLabv3+ (CNN), ViT (Vision Transformer), SegFormer, PIDNet, Computer Vision, Semantic Segmentation, GANs, Raspberry Pi, Real-time Inference, ADAS"
        ]
      },
      {
        date: "Dec 2024 – Feb 2025",
        title: "Software Development Intern – Camera Quality (ADAS)",
        bullets: [
          "Developed a **modular procedural generation system** for realistic automotive camera lens soiling simulation, enabling **unlimited synthetic image generation** with automatic pixel-level annotations, eliminating dependency on costly real-world datasets",
          "Engineered a **flexible raindrop simulation script** with **10+ configurable parameters** (ROI, wind direction/strength, adhesion factors, drop radius/density), generating both synthetic images and corresponding **binary mask annotations** for automated model training",
          "**Reduced annotation costs and time to zero** by implementing automated mask generation pipeline, replacing manual labeling processes and expensive real-world data collection campaigns",
          "Conducted **comparative analysis** of **Stable Diffusion 2.5** using **10 distinct prompt variations**, performing qualitative evaluation against procedural methods to assess generative AI feasibility for camera soiling effects",
          "Researched and analyzed **15+ academic papers** on image augmentation, synthetic data generation, and **GAN architectures** (Pix2Pix, CycleGAN) to identify optimal approaches for photorealistic lens contamination synthesis",
          "Designed and implemented **procedural mud/dirt generation module** with modular architecture, establishing foundation for multi-condition weather/soiling simulation framework",
          "Key Technologies: Python, Computer Vision, Image Processing, GANs, Stable Diffusion, Pix2Pix, CycleGAN, Procedural Generation, ADAS Testing, OpenCV"
        ]
      }
    ]
  },
  {
    id: 2,
    company: "Adani Group – Gujarat, India",
    image: "/images/experience_adani.jpg",
    positions: [
      {
        date: "Apr 2023 – Aug 2023",
        title: "Assistant Manager – Mechanical Engineering (Natural Resources)",
        bullets: [
          "Managed end-to-end **SAP MM/FM module operations** including PR/PO creation, material clearance, billing, and contractor payment processing, coordinating across **5+ departments** (HR, Techno-Commercial, Finance, Project Management, Assurance)",
          "Led **Fanuc 400i robotic system installation** in refinery plant, conducting technical drawing verification, design reviews, and cross-functional coordination with Electrical, Civil, Instrumentation, and Metallurgy teams to resolve integration challenges and critical path issues",
          "Successfully executed **12,000 tonnes steel structure installation** with **zero safety incidents**, managing on-site operations across extreme weather conditions (45°C summer heat, heavy monsoons) while ensuring compliance with safety protocols",
          "Oversaw **150-600 MT crane operations** and supervised contractor teams for safe, timely execution of structural erection activities, reporting daily progress to HOD through custom PowerBI dashboards and progress sheets",
          "Designed and delivered **GET training and development programs**, mentoring new graduate engineer trainees and coordinating technical training sessions to enhance workforce capability and knowledge transfer",
          "Streamlined project communication and documentation workflows, ensuring timely resolution of cross-departmental dependencies and maintaining critical path schedule for **1.5 MTPA Copper greenfield project**",
          "Key Technologies: SAP MM, SAP FM, PowerBI, Project Management, MS Excel, AutoCAD, Technical Drawing Review, Fanuc Robotics, Heavy Crane Operations, Industrial Automation"
        ]
      },
      {
        date: "Aug 2022 – Mar 2023",
        title: "GET – Graduate Engineer Trainee (Mechanical)",
        bullets: [
          "Selected through **campus placement from MSU** (top-tier Gujarat university) to join inaugural GET batch for **1.5 MTPA Copper greenfield project**, encompassing Smelter, Refinery, Sulfuric Acid Plant, CCR Plant, and Precious Metal facility (Gold/Silver)",
          "Completed comprehensive **2-month intensive training program** covering end-to-end plant operations, business development, project lifecycle, and production phase planning from industry professionals and department heads",
          "Assigned to **M1A Package (Mechanical Department)** managing critical-path activities following civil works completion, responsible for system documentation, data management, and cross-functional project coordination",
          "**Sole company representative** deployed to contractor office for **steel structure manufacturing oversight**, managing timely delivery of design drawings, production coordination, and communication bridge between stakeholders",
          "Successfully delivered **steel structure drawings and designs on schedule**, coordinating manufacturing phase and initial deployment at production facility before transitioning to on-site execution",
          "Managed **on-site steel structure installation** logistics and contractor workforce, preparing daily progress reports and PowerBI dashboards for HOD visibility, ensuring alignment with project milestones",
          "Gained hands-on experience in **multi-disciplinary project execution** including civil works observation, electronics installation, and project management methodologies in large-scale industrial construction",
          "Key Technologies: Project Management, PowerBI, MS Excel, Technical Documentation, Steel Structure Design, Manufacturing Coordination, Site Supervision"
        ]
      }
    ]
  },
  {
    id: 3,
    company: "Farmson Basic Drugs Private Limited – Gujarat, India",
    image: "/images/experience_farm.jpg",
    positions: [
      {
        date: "May 2021 – Jul 2021",
        title: "Mechanical Intern – Maintenance Department",
        bullets: [
          "Conducted comprehensive **plant operations study** across **12+ facilities** including Paracetamol Production, Water Treatment, HVAC, RO Plant, Boilers, ETP, MEE, Distillation, and GA Plant, mastering Standard Operating Procedures (SOPs) for each unit",
          "Gained hands-on experience in **industrial pump systems maintenance** (centrifugal, axial, propeller, reciprocating) with expertise in impeller configurations (open, semi-closed, closed) in metal and plastic variants, performing breakdown and preventive maintenance on ETP plant pumps",
          "Performed **mechanical equipment maintenance** including gearbox overhaul, boiler servicing, and critical component inspection, understanding preventive maintenance schedules and breakdown troubleshooting procedures across pharmaceutical manufacturing equipment",
          "Observed **Quality Control Lab operations** studying pharmaceutical testing equipment, quality assurance protocols, and parameter validation processes for Paracetamol production including expiry date determination and batch quality certification",
          "Implemented **5S methodology** in Engineering Store management, maintaining organized inventory of mechanical components (shafts, ball bearings, pump impellers, keys, pipes, joints) and learning industrial spare parts management systems",
          "Key Technologies: Centrifugal Pumps, Boilers, HVAC Systems, ETP (Effluent Treatment), Water Treatment, MEE (Multiple Effect Evaporator), Distillation Systems, Preventive Maintenance, 5S Methodology, Quality Control"
        ]
      }
    ]
  },
  {
    id: 4,
    company: "The Akshaya Patra Foundation – Gujarat, India",
    image: "/images/experience_tapf.jpg",
    positions: [
      {
        date: "Apr 2019 – Jun 2019",
        title: "Mechanical Design Intern",
        bullets: [
          "Led technical documentation projects **\"Know Your Roti Machine Equipment\"** and **\"Know Your Biogas Plant Equipment\"**, conducting comprehensive equipment analysis, component identification, and operational workflow documentation for large-scale food production systems",
          "Completed professional development training in **Six Sigma methodology**, **7 QC Tools**, Vehicle Maintenance protocols, Cyber Crime awareness, and Food Safety Management, demonstrating commitment to quality assurance and operational excellence",
          "Awarded **\"Best Intern Runner-Up\"** recognition for outstanding performance, technical contributions, and proactive engagement across multiple departments including Water Treatment Plant, boiler operations, and vehicle maintenance teams",
          "Gained cross-functional experience in **industrial kitchen equipment**, biogas energy systems, water treatment operations, and fleet maintenance, supporting India's largest NGO mid-day meal program serving millions of children daily",
          "Key Technologies: Roti Manufacturing Equipment, Biogas Plant Systems, Water Treatment Plant (WTP), Industrial Boilers, Six Sigma, 7 QC Tools, Food Safety Management, Vehicle Maintenance, Technical Documentation"
        ]
      }
    ]
  },
];
export default experiences;
