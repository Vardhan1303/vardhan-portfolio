import { motion } from "framer-motion";
import { Code, Brain, Cpu, Camera } from "lucide-react";

const skills = {
  "Programming": ["Python", "C++", "SQL"],
  "AI/ML": ["TensorFlow", "PyTorch", "Scikit-learn", "Keras", "Pandas"],
  "Hardware": ["Raspberry Pi", "Arduino", "NVIDIA Jetson", "Sensors"],
  "Vision": ["OpenCV", "YOLO", "Detectron2", "MediaPipe", "TensorRT", "CUDA", "ONNX", "OpenVINO"],
  "Data & NLP": ["NumPy", "NLTK", "spaCy", "Transformers", "Expanding..."]
};

const iconMap = {
  "Programming": Code,
  "AI/ML": Brain,
  "Hardware": Cpu,
  "Vision": Camera,
  "Data & NLP": Brain
};

export default function Skills() {
  return (
    <section 
      id="skills" 
      className="py-24 px-6 bg-gradient-to-b from-slate-50 to-white overflow-hidden"
    >
      <div className="max-w-7xl mx-auto">
        {/* Header with connection point */}
        <motion.div
          className="text-center mb-20 relative"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Technical Skills
          </h2>
          <div className="w-20 h-1 bg-blue-600 mx-auto mb-6" />
          
        </motion.div>

        {/* Horizontal connecting line */}
        <div className="relative mb-16">
          <motion.div 
            className="absolute left-0 right-0 top-0 h-0.5 bg-gradient-to-r from-transparent via-blue-400 to-transparent"
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            transition={{ duration: 1, delay: 0.3 }}
            viewport={{ once: true }}
          />
          
          {/* Vertical lines connecting to each skill card */}
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 relative">
            {Object.keys(skills).map((category, index) => (
              <motion.div
                key={category}
                className="flex justify-center relative"
                initial={{ opacity: 0, scaleY: 0 }}
                whileInView={{ opacity: 1, scaleY: 1 }}
                transition={{ duration: 0.5, delay: 0.5 + index * 0.1 }}
                viewport={{ once: true }}
                style={{ transformOrigin: "top" }}
              >
                <div className="w-0.5 h-16 bg-gradient-to-b from-blue-400 to-blue-600" />
                <div className="absolute bottom-0 w-3 h-3 bg-blue-600 rounded-full" />
              </motion.div>
            ))}
          </div>
        </div>

        {/* Skills Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-6">
          {Object.entries(skills).map(([category, skillList], index) => {
            const Icon = iconMap[category];
            const isExpanding = category === "Data & NLP";
            
            return (
              <motion.div
                key={category}
                className={`bg-white rounded-xl p-8 shadow-lg border-2 transition-all duration-300 ${
                  isExpanding 
                    ? 'border-amber-200 hover:border-amber-400 hover:shadow-amber-100' 
                    : 'border-blue-100 hover:border-blue-300'
                } hover:shadow-xl`}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.7 + index * 0.1, duration: 0.5 }}
                viewport={{ once: true, amount: 0.3 }}
              >
                {/* Icon and Title */}
                <div className="flex flex-col items-center text-center mb-6">
                  <div className={`p-3 rounded-full mb-3 border-2 ${
                    isExpanding 
                      ? 'bg-amber-50 border-amber-200' 
                      : 'bg-blue-50 border-blue-200'
                  }`}>
                    <Icon className={`w-7 h-7 ${
                      isExpanding ? 'text-amber-600' : 'text-blue-600'
                    }`} />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900">{category}</h3>
                  {isExpanding && (
                    <span className="text-xs text-amber-600 font-semibold mt-1 px-2 py-0.5 bg-amber-50 rounded-full">
                      Growing
                    </span>
                  )}
                  <div className={`w-12 h-0.5 mt-2 ${
                    isExpanding ? 'bg-amber-600' : 'bg-blue-600'
                  }`} />
                </div>

                {/* Skills List */}
                <div className="space-y-2">
                  {skillList.map((skill, i) => (
                    <motion.div
                      key={i}
                      className="flex items-center gap-2 text-gray-700"
                      initial={{ opacity: 0, x: -10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.9 + index * 0.1 + i * 0.05, duration: 0.3 }}
                      viewport={{ once: true }}
                    >
                      <div className={`w-1.5 h-1.5 rounded-full ${
                        isExpanding ? 'bg-amber-600' : 'bg-blue-600'
                      }`} />
                      <span className={`text-sm ${
                        skill === "Expanding..." ? 'italic text-amber-600 font-medium' : ''
                      }`}>{skill}</span>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Footer note */}
        <motion.div
          className="mt-16 text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 1.2, duration: 0.6 }}
          viewport={{ once: true }}
        >
          <p className="text-gray-500 text-sm">
            Continuously expanding expertise through hands-on projects and research
          </p>
        </motion.div>
      </div>
    </section>
  );
}