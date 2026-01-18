// About Me section – with Mechanical to Mechatronics journey and 60-40 split layout
export default function About() {
  return (
    <section id="about" className="min-h-screen bg-gray-200 text-gray-800 flex flex-col md:flex-row items-stretch">
      {/* Left column - 60% - Information */}
      <div className="w-full md:w-[60%] flex items-center px-10 md:px-24 py-16">
        <div className="max-w-2xl space-y-8">
          {/* Header */}
          <div className="space-y-2">
            <h2 className="text-5xl font-bold tracking-tight">About Me</h2>
            <div className="h-1 w-24 bg-gray-800 rounded-full"></div>
          </div>

          {/* Photo - Mobile Only */}
          <div className="md:hidden w-full rounded-lg overflow-hidden shadow-lg">
            <img 
              src="/images/about_me.jpg"
              alt="Vardhan Mistry"
              className="w-full h-auto object-contain"
              loading="lazy"
            />
          </div>

          {/* Main Content */}
          <div className="space-y-6 text-lg leading-relaxed font-light text-justify">

            {/* Background and Early Career */}
            <p>
              I hold a Bachelor's degree in <span className="font-medium">Mechanical Engineering</span> and recently completed my <span className="font-medium">Master's degree in Mechatronics</span>.
              My academic and professional background combines <span className="font-medium">mechanical engineering with software, electronics, and automation</span>.
            </p>

            {/* Transition to Mechatronics */}
            <p>
              Before and during my studies, I gained practical experience in different industrial environments, including the 
              <span className="font-medium"> food industry, electric vehicle projects, pharmaceutical facilities, and manufacturing plants</span>. 
              Through this work, I developed a solid foundation in engineering design, simulation, project coordination, manufacturing processes, and maintenance.
            </p>

            {/* Current Technical Focus */}
            <p>
              During my Master’s studies in Germany, I focused on automation, robotics, and intelligent systems. I completed my master’s thesis at <span className="font-medium">
              IAV GmbH in Stollberg</span>, working as a <span className="font-medium">Master’s Thesis Student in automotive software engineering</span>, where I contributed to software and perception-related topics in an industrial context.
            </p>

            {/* Personal Philosophy */}
            <p>
              My technical interests and experience are mainly in <span className="font-medium">computer vision, machine learning, deep learning, robotics, and automation</span>, with a strong focus on practical and applied solutions. 
              I enjoy working in interdisciplinary environments where mechanical systems and software come together.
            </p>

            {/* Future Goals */}
            <p>
              I am currently seeking a <span className="font-medium">full-time position in Germany</span> and am open to roles in <span className="font-medium">AI/ML, computer vision, robotics, automation, or mechatronics</span>, 
              where I can apply my engineering background and continue to grow as a professional.
            </p>
          </div>
        </div>
      </div>

      {/* Right column - 40% - Photo (Desktop Only) */}
      <div className="hidden md:block md:w-[50%] bg-gray-300 relative overflow-hidden">
        <img 
          src="/images/about_me.jpg"
          alt="Vardhan Mistry"
          className="w-full h-full object-cover"
        />
      </div>
    </section>
  );
}