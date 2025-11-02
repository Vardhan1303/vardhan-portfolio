import { motion } from "framer-motion";

export default function Hobbies() {
  const hobbies = [
    {
      id: 1,
      title: "Cooking",
      subtitle: "Precision meets intuition",
      description:
        "I love experimenting with flavors and cuisines from around the world. Whether it's perfecting traditional Indian dishes or trying European recipes, cooking is my creative outlet much like training a good model!",
      image: "/images/hobby_food.jpg",
    },
    {
      id: 2,
      title: "Traveling",
      subtitle: "Curiosity & perspective",
      description:
        "Exploring new places and cultures fuels my curiosity and broadens my perspective. From historic European/Indain streets to scenic mountain trails, each journey inspires my engineering problem-solving.",
      image: "/images/hobby_travel.jpg",
    },
    {
      id: 3,
      title: "Watching Anime",
      subtitle: "Stories that recharge me",
      description:
        "Anime is my go-to for unwinding after a long day of coding. I enjoy everything from sci-fi thrillers to slice-of-life — great storytelling, memorable characters, and creative worlds.",
      image: "/images/hobby_anime.jpg",
    },
  ];

  return (
    <section id="hobbies" className="bg-gray-200 text-gray-900">
      {/* HEADER: Simple centered layout */}
      <div className="max-w-5xl mx-auto px-6 py-16 text-center">
        <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
          Beyond the Code
        </h2>
        <div className="w-16 h-1 bg-blue-500 mx-auto mb-6" />
        <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
          When I'm not training neural networks, I'm exploring the world, experimenting in the kitchen, and diving into immersive anime worlds.
        </p>
      </div>

      {/* GRID: 3 equal sections spanning full width with shared borders */}
      <div className="w-full">
        <div className="grid grid-cols-1 md:grid-cols-3">
          {hobbies.map((hobby, idx) => (
            <motion.article
              key={hobby.id}
              className="relative h-96 md:h-[32rem] border-r border-gray-200 last:border-r-0"
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.6, delay: idx * 0.06 }}
            >
              {/* Background image */}
              <div
                className="absolute inset-0 bg-center bg-cover transition-transform duration-700 group-hover:scale-105"
                style={{
                  backgroundImage: `url(${hobby.image})`,
                  backgroundPosition: "center",
                  backgroundSize: "cover",
                }}
              />

              {/* Dark overlay for readability */}
              <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/30 to-black/70" />

              {/* Foreground content */}
              <div className="relative z-10 h-full flex flex-col justify-end p-8 md:p-10">
                <h3 className="text-3xl md:text-4xl font-bold text-white mb-3">{hobby.title}</h3>
                <p className="text-blue-200 font-medium mb-4 text-lg">{hobby.subtitle}</p>
                <p className="text-white/90 text-base leading-relaxed">{hobby.description}</p>
              </div>

              {/* Hover overlay */}
              <div className="absolute inset-0 bg-blue-500/0 hover:bg-blue-500/10 transition-colors duration-300" />
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}