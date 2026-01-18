import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-end justify-start text-white px-4 sm:px-8 md:px-16 lg:px-24 pb-20 sm:pb-28 md:pb-32 pt-[70px] sm:pt-[80px] md:pt-[90px] overflow-hidden"
    >
      {/* Background image with zoom animation */}
      <motion.img
        src="images/hero_image.png"
        alt="Hero Background"
        className="absolute inset-0 w-full h-full object-cover object-center md:object-top"
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

      {/* Text content */}
      <div className="relative z-10 max-w-2xl sm:max-w-3xl md:max-w-4xl text-left">
        <motion.h1
          className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-bold mb-4 leading-tight"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <span className="inline-block bg-gradient-to-r from-blue-400 via-white to-blue-400 bg-clip-text text-transparent pb-1 sm:pb-2 leading-relaxed">
            Vardhan Mistry
          </span>
        </motion.h1>

        <motion.div
          className="flex flex-wrap gap-2 sm:gap-3 mb-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          {["MSc Mechatronics", "Computer Vision Engineer", "AI / ML Engineer"].map((tag, i) => (
            <motion.span
              key={i}
              className="px-3 sm:px-4 py-1 sm:py-2 bg-blue-500/20 backdrop-blur-sm border border-blue-400/30 rounded-full text-blue-300 text-xs sm:text-sm md:text-base font-medium"
              whileHover={{ scale: 1.05, backgroundColor: "rgba(59, 130, 246, 0.3)" }}
              transition={{ duration: 0.2 }}
            >
              {tag}
            </motion.span>
          ))}
        </motion.div>

        <motion.p
          className="text-gray-200 text-sm sm:text-base md:text-lg leading-relaxed mb-6 sm:mb-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          I am a mechatronics engineer working on real-world AI and computer vision systems.
My experience ranges from industrial automation projects to building AI-based camera perception pipelines. I work with computer vision, deep learning, and GAN-based data generation, and I focus on deploying models that run reliably in real-time environments.

I have worked on projects involving large-scale industrial systems as well as high-volume synthetic image pipelines. I am currently open to roles in AI/ML, computer vision, robotics, and applied data science.
        </motion.p>

        {/* Tech Stack Icons */}
        <motion.div
          className="flex flex-wrap gap-2 sm:gap-3 mt-4 sm:mt-8 items-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 1 }}
        >
          <span className="text-gray-400 text-xs sm:text-sm">Tech Stack:</span>
          {["Python", "PyTorch", "OpenCV", "TensorFlow", "GANs", "YOLO", "ROS", "NLP"].map((tech, i) => (
            <motion.span
              key={i}
              className="text-xs sm:text-sm px-2 sm:px-3 py-1 bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded text-gray-300"
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 1 + i * 0.1 }}
              whileHover={{ scale: 1.1, borderColor: 'rgb(96, 165, 250)' }}
            >
              {tech}
            </motion.span>
          ))}
        </motion.div>
      </div>

      {/* Scroll down indicator */}
      <motion.div
        className="absolute bottom-6 sm:bottom-8 left-1/2 transform -translate-x-1/2 cursor-pointer"
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
          <span className="text-xs sm:text-sm mb-1 sm:mb-2">Scroll Down</span>
          <ChevronDown size={22} />
        </motion.a>
      </motion.div>
    </section>
  );
}