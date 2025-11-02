import { motion } from "framer-motion";

export default function Education() {
  // === EDIT YOUR DEGREES HERE ===
  const educationData = [
    {
      id: 1,
      date: "Oct 2023 – Feb 2026",
      degree: "Master of Science (M.Sc.) in Mechatronics",
      institution: "Hochschule Ravensburg-Weingarten University of Applied Sciences (RWU), Germany",
      description:
        "Specialized in Automation, Robotics, Embedded Systems, Control Theory, and Computer Vision with focus on AI/ML applications in automotive systems.",
      gpa: "1.7/5.0 (Expected)",
      thesis: "Master Thesis: 1.5/5.0 (Expected) | Topic: \"Flexible Soiling Detection on Automotive Cameras\"",
      coursework: "Advanced Mathematics, Advanced Control Systems, Embedded Systems, AI for Mechatronics, Computer Vision, Deep Learning",
      image: "/images/edu_rwu.jpg",
      bullets: ["Machine Learning", "Computer Vision", "Deep Learning", "PyTorch", "MATLAB", "Control Systems", "Robotics", "ROS", "Autonomous Systems", "Embedded Systems"],
    },
    {
      id: 2,
      date: "Jul 2018 – Jul 2022",
      degree: "Bachelor of Engineering (B.E.) in Mechanical Engineering",
      institution: "The Maharaja Sayajirao University of Baroda (MSU), India",
      accreditation: "NAAC Accredited A+ Grade",
      description:
        "Graduated with First Class with Distinction, ranking in Top 10% of class. Strong foundation in core mechanical engineering principles with hands-on experience in design, manufacturing, and industrial systems.",
      gpa: "CGPA: 8.81/10.0 | First Class with Distinction",
      coursework: "Thermodynamics, Fluid Mechanics, Material Science, CAD/CAM, Manufacturing Processes, Strength of Materials, Machine Design",
      image: "/images/edu_msu.jpg",
      bullets: ["SolidWorks", "Siemens NX", "ANSYS", "CAD/CAM", "MATLAB", "FEA", "Manufacturing", "Design"],
    },
  ];

  return (
    <section id="education" className="bg-blue-50 text-gray-800 relative overflow-hidden">
      {/* HEADING BAR */}
      <div className="relative w-full bg-blue-100 py-12">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 tracking-wide">
            Education
          </h2>
        </div>
      </div>

      {/* MAIN CONTENT */}
      <div className="relative w-full py-20">
        {/* CENTER TIMELINE LINE - HIDDEN ON MOBILE */}
        <div className="hidden md:block absolute top-0 bottom-0 left-1/2 w-[4px] bg-blue-200 transform -translate-x-1/2 z-0"></div>

        <div className="space-y-32 relative z-10">
          {educationData.map((edu, index) => {
            const isReversed = index % 2 !== 0;
            return (
              <div
                key={edu.id}
                className={`flex flex-col md:flex-row items-stretch relative min-h-[400px] md:min-h-[500px] ${
                  isReversed ? "md:flex-row-reverse" : ""
                }`}
              >
                {/* IMAGE SIDE - VISIBLE ON BOTH MOBILE AND DESKTOP */}
                <motion.div
                  className="md:w-1/2 relative"
                  initial={{ opacity: 0, x: isReversed ? 100 : -100 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, amount: 0.3 }}
                  transition={{ duration: 0.8, ease: "easeOut" }}
                >
                  {edu.image ? (
                    <img
                      src={edu.image}
                      alt={`${edu.institution} campus`}
                      loading="lazy"
                      className="w-full h-full object-cover"
                    />
                  ) : (
                    <div className="hidden md:flex w-full h-full bg-blue-100 items-center justify-center text-gray-500 italic">
                      No image available
                    </div>
                  )}
                </motion.div>

                {/* CENTER DOT - DESKTOP ONLY */}
                <div className="hidden md:flex items-center justify-center absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 z-20">
                  <div className="w-6 h-6 bg-gray-500 border-4 border-blue-400 rounded-full shadow-md"></div>
                </div>

                {/* TEXT SIDE */}
                <motion.div
                  className="md:w-1/2 text-center md:text-left space-y-4 flex flex-col justify-center px-6 md:px-12 py-8"
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.3 }}
                  transition={{ duration: 0.8, ease: "easeOut" }}
                > 
                  {/* DATE */}
                  <span className="text-sm font-semibold text-gray-500">
                    {edu.date}
                  </span>

                  <h3 className="text-2xl md:text-3xl font-bold text-gray-900">
                    {edu.degree}
                  </h3>

                  {edu.institution && (
                    <p className="text-lg text-blue-700 font-medium">{edu.institution}</p>
                  )}

                  {edu.accreditation && (
                    <p className="text-sm text-gray-600 italic">{edu.accreditation}</p>
                  )}

                  {edu.description && (
                    <p className="text-gray-700 leading-relaxed">{edu.description}</p>
                  )}

                  {/* GPA */}
                  {edu.gpa && (
                    <p className="text-sm font-semibold text-gray-800">
                      <span className="text-blue-600">📊 </span>{edu.gpa}
                    </p>
                  )}

                  {/* Thesis */}
                  {edu.thesis && (
                    <p className="text-sm text-gray-700">
                      <span className="font-semibold text-blue-600">🎓 </span>{edu.thesis}
                    </p>
                  )}

                  {/* Coursework */}
                  {edu.coursework && (
                    <div className="text-sm text-gray-600">
                      <span className="font-semibold">Relevant Coursework:</span> {edu.coursework}
                    </div>
                  )}

                  {/* Tech Badges */}
                  {edu.bullets && edu.bullets.length > 0 && (
                    <div className="pt-4 border-t border-blue-200">
                      <p className="text-xs font-semibold text-gray-500 mb-3 uppercase tracking-wide">
                        Technical Skills
                      </p>
                      <div className="flex flex-wrap gap-2">
                        {edu.bullets.map((b, i) => (
                          <motion.span
                            key={i}
                            className="text-xs px-3 py-1.5 rounded-lg bg-gradient-to-r from-blue-500 to-blue-600 text-white shadow-sm hover:shadow-md transition-all duration-300 cursor-default"
                            initial={{ opacity: 0, scale: 0.8 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.3, delay: i * 0.05 }}
                            whileHover={{ scale: 1.05 }}
                          >
                            {b}
                          </motion.span>
                        ))}
                      </div>
                    </div>
                  )}
                </motion.div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}