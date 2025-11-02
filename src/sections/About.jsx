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
              className="w-full h-64 object-cover"
              loading="lazy"
            />
          </div>

          {/* Main Content */}
          <div className="space-y-6 text-lg leading-relaxed font-light text-justify">

            {/* Background and Early Career */}
            <p>
              I began my journey as a <span className="font-medium">Mechanical Engineer</span>, earning my Bachelor's degree in Mechanical Engineering.
              Over the years, I gained diverse experience across the <span className="font-medium">food industry, electric vehicle sector,
              pharmaceutical projects, greenfield developments, and manufacturing environments</span>.
              This solid foundation shaped my technical adaptability and problem-solving approach by providing me with practical experience in <span className="font-medium">
              design, simulation, project management, manufacturing, and maintenance</span>.
            </p>

            {/* Transition to Mechatronics */}
            <p>
              My interest in automation and intelligent systems led me to pursue a
              <span className="font-medium"> Master's in Mechatronics</span>, which is the ideal fusion of computer, electronics, and mechanical engineering.
              I chose <span className="font-medium">Germany</span> for its world-class engineering education and innovation culture.
              I am currently in the final semester of my master's and completing my thesis at
              <span className="font-medium"> IAV GmbH, Chemnitz</span>, an automotive company,
              where I work as an <span className="font-medium">Automotive Software Engineer</span>.
            </p>

            {/* Current Technical Focus */}
            <p>
              Throughout this journey, I have developed strong expertise in <span className="font-medium">
              autonomous driving, computer vision, artificial intelligence, machine learning, robotics, and automation</span>.
              The combination of mechanical accuracy, computational intelligence, and electronic control in my work enables me to tackle problems from a really interdisciplinary standpoint.
            </p>

            {/* Personal Philosophy */}
            <p>
              I see myself as a lifelong student even beyond university, every challenge is a lesson and every project an opportunity to grow.
              This belief keeps me curious, open-minded, and eager to explore new technologies and collaborations.
            </p>

            {/* Future Goals */}
            <p>
              I am now stepping into the professional field permanently, aiming to contribute to innovative projects in Germany, a country I want to call home. I am <span className="font-medium">open to opportunities</span> across
              <span className="font-medium"> AI, robotics, automation, or mechatronics</span> domains where I can bring together my
              mechanical background and modern intelligent systems expertise.
            </p>
          </div>
        </div>
      </div>

      {/* Right column - 40% - Photo (Desktop Only) */}
      <div className="hidden md:block md:w-[40%] bg-gray-300 relative overflow-hidden">
        <img 
          src="/images/about_me.jpg"
          alt="Vardhan Mistry"
          className="w-full h-full object-cover"
        />
      </div>
    </section>
  );
}