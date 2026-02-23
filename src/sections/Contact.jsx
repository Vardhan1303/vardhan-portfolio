import { motion } from "framer-motion";
import { Mail, Linkedin, Github, MapPin, ArrowRight, Instagram } from "lucide-react";

// ─── Fixed Social Sidebar ─────────────────────────────────────────────────────
function SocialSidebar() {
  const socials = [
    {
      icon: (
        // LinkedIn
        <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
          <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
        </svg>
      ),
      href: "https://www.linkedin.com/in/vardhan-mistry",
      bg: "#0077B5",
      label: "LinkedIn",
    },
    {
      icon: (
        // GitHub
        <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
        </svg>
      ),
      href: "https://github.com/Vardhan1303",
      bg: "#1a1a1a",
      label: "GitHub",
    },
    {
      icon: (
        // Instagram
        <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324zM12 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm6.406-11.845a1.44 1.44 0 1 0 0 2.881 1.44 1.44 0 0 0 0-2.881z" />
        </svg>
      ),
      href: "https://instagram.com/yourprofile",
      bg: "#E1306C",
      label: "Instagram",
    },
    {
      icon: (
        // Mail
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <rect x="2" y="4" width="20" height="16" rx="2" />
          <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
        </svg>
      ),
      href: "mailto:mistryvardhan@gmail.com",
      bg: "#2563eb",
      label: "Email",
    },
  ];

  return (
    <div
      style={{
        position: "fixed",
        left: 0,
        top: "50%",
        transform: "translateY(-50%)",
        zIndex: 100,
        display: "flex",
        flexDirection: "column",
        gap: "2px",
      }}
    >
      {socials.map((s, i) => (
        <motion.a
          key={i}
          href={s.href}
          target={s.href.startsWith("http") ? "_blank" : undefined}
          rel={s.href.startsWith("http") ? "noopener noreferrer" : undefined}
          aria-label={s.label}
          title={s.label}
          initial={{ x: -48 }}
          animate={{ x: 0 }}
          transition={{ delay: 0.2 + i * 0.1, duration: 0.4, type: "spring", stiffness: 120 }}
          whileHover={{ x: 6 }}
          style={{
            width: "44px",
            height: "44px",
            background: s.bg,
            color: "#fff",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            textDecoration: "none",
            boxShadow: "2px 2px 8px rgba(0,0,0,0.3)",
          }}
        >
          {s.icon}
        </motion.a>
      ))}
    </div>
  );
}

// ─── Contact Section ──────────────────────────────────────────────────────────
export default function Contact() {
  const contactMethods = [
    {
      icon: Mail,
      label: "Email",
      value: "mistryvardhan@gmail.com",
      link: "mailto:mistryvardhan@gmail.com",
      color: "blue",
    },
    {
      icon: Linkedin,
      label: "LinkedIn",
      value: "Connect with me",
      link: "https://www.linkedin.com/in/vardhan-mistry",
      color: "blue",
    },
    {
      icon: Github,
      label: "GitHub",
      value: "Vardhan1303",
      link: "https://github.com/Vardhan1303",
      color: "purple",
    },
  ];

  return (
    <>
      <SocialSidebar />

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
                      <p className="text-lg text-white">Chemnitz, Germany</p>
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
                  target={method.link.startsWith("http") ? "_blank" : undefined}
                  rel={method.link.startsWith("http") ? "noopener noreferrer" : undefined}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="block group"
                >
                  <div className="bg-gray-800/50 border border-gray-700 rounded-xl p-6 hover:border-blue-500/50 hover:bg-gray-800/80 transition-all duration-300">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-4">
                        <div
                          className={`w-14 h-14 bg-${method.color}-500/10 rounded-lg flex items-center justify-center border border-${method.color}-500/30 group-hover:scale-110 transition-transform duration-300`}
                        >
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
                Whether you have a project in mind, want to discuss opportunities, or just want to
                chat about AI/ML and Computer Vision, Let's connect!
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
    </>
  );
}