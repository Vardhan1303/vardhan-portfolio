import { motion } from "framer-motion";
import { Mail, Linkedin, Github, MapPin, ArrowRight } from "lucide-react";

export default function Contact() {
  const contactMethods = [
    {
      icon: Mail,
      label: "Email",
      value: "mistryvardhan@gmail.com",
      link: "mailto:mistryvardhan@gmail.com",
      color: "blue"
    },
    {
      icon: Linkedin,
      label: "LinkedIn",
      value: "Connect with me",
      link: "https://www.linkedin.com/in/vardhan-mistry",
      color: "blue"
    },
    {
      icon: Github,
      label: "GitHub",
      value: "Vardhan1303",
      link: "https://github.com/Vardhan1303",
      color: "purple"
    }
  ];

  return (
    <section id="contact" className="bg-slate-950 text-gray-200 relative overflow-hidden">
      {/* HEADING BAR */}
      <div className="relative w-full bg-gray-800 py-12">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white tracking-wide">
            Let's Connect
          </h2>
          <p className="text-gray-400 mt-3 max-w-2xl mx-auto">
            Open to opportunities in AI/ML, Computer Vision, NLP, Data Science, LLMs, and Robotics
          </p>
        </div>
      </div>

      {/* MAIN CONTENT */}
      <div className="relative max-w-5xl mx-auto px-6 py-20">
        {/* Contact Methods (including Location) */}
        <div className="space-y-4">
          {/* Location */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="block"
          >
            <div className="bg-gray-800/50 border border-gray-700 rounded-xl p-6">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-4">
                  <div className="w-14 h-14 bg-green-500/10 rounded-lg flex items-center justify-center border border-green-500/30">
                    <MapPin className="w-7 h-7 text-green-400" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-500 font-medium">Location</p>
                    <p className="text-lg text-white">
                      Chemnitz, Germany
                    </p>
                    <p className="text-xs text-gray-500 mt-1">
                      Available for remote and on-site opportunities
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Contact Methods */}
          {contactMethods.map((method, index) => {
            const Icon = method.icon;
            return (
              <motion.a
                key={index}
                href={method.link}
                target={method.link.startsWith('http') ? "_blank" : undefined}
                rel={method.link.startsWith('http') ? "noopener noreferrer" : undefined}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="block group"
              >
                <div className="bg-gray-800/50 border border-gray-700 rounded-xl p-6 hover:border-blue-500/50 hover:bg-gray-800/80 transition-all duration-300">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-4">
                      <div className={`w-14 h-14 bg-${method.color}-500/10 rounded-lg flex items-center justify-center border border-${method.color}-500/30 group-hover:scale-110 transition-transform duration-300`}>
                        <Icon className={`w-7 h-7 text-${method.color}-400`} />
                      </div>
                      <div>
                        <p className="text-sm text-gray-500 font-medium">{method.label}</p>
                        <p className="text-lg text-white group-hover:text-blue-400 transition-colors">
                          {method.value}
                        </p>
                      </div>
                    </div>
                    <ArrowRight className="w-5 h-5 text-gray-600 group-hover:text-blue-400 group-hover:translate-x-1 transition-all duration-300" />
                  </div>
                </div>
              </motion.a>
            );
          })}
        </div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-12 text-center"
        >
          <div className="bg-gradient-to-r from-blue-600/10 via-purple-600/10 to-blue-600/10 border border-blue-500/30 rounded-2xl p-8">
            <h3 className="text-2xl font-bold text-white mb-3">
              Ready to Work Together?
            </h3>
            <p className="text-gray-400 mb-6 max-w-2xl mx-auto">
              Whether you have a project in mind, want to discuss opportunities, or just want 
              to chat about AI/ML and Computer Vision, Let's connect!
            </p>
            <a
              href="mailto:mistryvardhan@gmail.com?subject=Hello%20from%20your%20portfolio&body=Hi%20Vardhan,%0A%0AI%20came%20across%20your%20portfolio%20and%20would%20like%20to%20discuss..."
              className="inline-flex items-center gap-2 bg-blue-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-blue-700 transition-all duration-300 shadow-lg shadow-blue-500/30 hover:shadow-blue-500/50 hover:scale-105"
            >
              <Mail className="w-5 h-5" />
              Start a Conversation
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}