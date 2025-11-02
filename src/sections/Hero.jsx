import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-end justify-start text-white px-10 md:px-24 pb-32 pt-[90px] overflow-hidden"
    >
      {/* Background image with zoom animation */}
      <motion.img
        src="images/hero_image.png"
        alt="Hero Background"
        className="absolute inset-0 w-full h-full object-cover object-top"
        initial={{ scale: 1.1 }}
        animate={{ scale: 1 }}
        transition={{ duration: 1.5, ease: "easeOut" }}
      />

      {/* Enhanced gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-gray-900/70 via-gray-800/60 to-black/80"></div>

      {/* Animated floating particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-blue-400/30 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -30, 0],
              opacity: [0.2, 0.8, 0.2],
            }}
            transition={{
              duration: 3 + Math.random() * 2,
              repeat: Infinity,
              delay: Math.random() * 2,
            }}
          />
        ))}
      </div>

      {/* Text content with staggered animations */}
      <div className="relative z-10 max-w-4xl">
        <motion.h1
          className="text-6xl md:text-7xl font-bold mb-4"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <span className="inline-block bg-gradient-to-r from-white via-blue-100 to-white bg-clip-text text-transparent pb-2 leading-relaxed">
            Vardhan Mistry
          </span>
        </motion.h1>

        <motion.div
          className="flex flex-wrap gap-3 mb-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          {["AI/ML Engineer", "Computer Vision Specialist", "Mechatronics MSc"].map((tag, i) => (
            <motion.span
              key={i}
              className="px-4 py-2 bg-blue-500/20 backdrop-blur-sm border border-blue-400/30 rounded-full text-blue-300 text-sm md:text-base font-medium"
              whileHover={{ scale: 1.05, backgroundColor: "rgba(59, 130, 246, 0.3)" }}
              transition={{ duration: 0.2 }}
            >
              {tag}
            </motion.span>
          ))}
        </motion.div>

        <motion.p
          className="text-gray-200 max-w-3xl text-base md:text-lg leading-relaxed mb-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          Versatile engineer bridging mechanical systems and intelligent software 
          from managing industrial automation projects to pioneering AI-driven 
          camera perception systems. Experienced in <span className="text-blue-300 font-semibold">Computer Vision, GANs, Deep 
          Learning, Semantic Segmentation</span>, and Real-time ML deployment. With a 
          proven track record spanning <span className="text-blue-300 font-semibold">12,000-tonne steel structures to 80,000+ 
          synthetic image generation pipelines</span>, I bring both technical depth and 
          practical execution. Open to challenging roles in <span className="text-blue-300 font-semibold">AI/ML, Computer Vision, 
          NLP, Data Science, LLMs, and Robotics</span>.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          className="flex flex-wrap gap-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
        >
          
        </motion.div>

        {/* Tech Stack Icons */}
        <motion.div
          className="flex flex-wrap gap-4 mt-8 items-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 1 }}
        >
          <span className="text-gray-400 text-sm">Tech Stack:</span>
          {["Python", "PyTorch", "OpenCV", "TensorFlow", "GANs", "YOLO", "ROS", "NLP"].map((tech, i) => (
            <motion.span
              key={i}
              className="text-xs px-3 py-1 bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded text-gray-300"
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 1 + i * 0.1 }}
              whileHover={{ scale: 1.1, borderColor: "rgb(96, 165, 250)" }}
            >
              {tech}
            </motion.span>
          ))}
        </motion.div>
      </div>

      {/* Scroll down indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 cursor-pointer"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 1.2 }}
      >
        <motion.a
          href="#about"
          className="flex flex-col items-center text-gray-300 hover:text-white transition-colors"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <span className="text-sm mb-2">Scroll Down</span>
          <ChevronDown size={24} />
        </motion.a>
      </motion.div>
    </section>
  );
}