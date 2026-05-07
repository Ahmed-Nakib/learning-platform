const About = () => {
  return (
    <div className="py-20 ">

      {/* HERO + PHOTO */}
      <section className="max-w-5xl mx-auto grid md:grid-cols-2 items-center gap-10">

        {/* TEXT */}
        <div>
          <h1 className="text-4xl font-bold mb-3">
            Hi, I’m <span className="text-primary">Nakib</span>
          </h1>

          <p className="text-gray-400 mb-6">
            A passionate self-taught developer focused on building simple, practical and beginner-friendly learning experiences.
          </p>

          {/* SIGNATURE */}
          <div className="text-xl font-semibold text-gray-300">
            — Nakib ✍️
          </div>
        </div>

        {/* IMAGE */}
        <div className="flex justify-center">
          <div className="relative">
            <img
              src="/hero.jpg"
              alt="Nakib"
              className="w-72 h-72 object-cover rounded-2xl border border-gray-800 shadow-xl"
            />

            {/* glow effect */}
            <div className="absolute inset-0 rounded-2xl bg-blue-500/10 blur-2xl -z-10"></div>
          </div>
        </div>
      </section>

      {/* MISSION */}
      <section className="max-w-5xl mx-auto mt-20">
        <div className="bg-primary/5 border border-second-primary rounded-2xl p-8">
          <h2 className="text-2xl font-semibold mb-3">My Mission</h2>
          <p className="text-gray-400">
            I aim to simplify programming for beginners by breaking complex topics into easy, structured lessons with real-world projects.
          </p>
        </div>
      </section>

      {/* SKILLS BAR */}
      <section className="max-w-5xl mx-auto mt-20">
        <h2 className="text-2xl font-semibold mb-6">Skills</h2>

        {[
          { name: "HTML", level: 90 },
          { name: "CSS", level: 85 },
          { name: "JavaScript", level: 80 },
          { name: "React", level: 75 },
          { name: "TypeScript", level: 70 },
        ].map((skill) => (
          <div key={skill.name} className="mb-4">
            <div className="flex justify-between text-sm mb-1">
              <span>{skill.name}</span>
              <span>{skill.level}%</span>
            </div>

            <div className="w-full bg-gray-800 h-2 rounded-full">
              <div
                className="bg-primary h-2 rounded-full"
                style={{ width: `${skill.level}%` }}
              />
            </div>
          </div>
        ))}
      </section>

      {/* TIMELINE */}
      <section className="max-w-5xl mx-auto mt-20">
        <h2 className="text-2xl font-semibold mb-6">Experience Timeline</h2>

        <div className="border-l border-gray-800 pl-6 space-y-6">

          <div>
            <h3 className="font-semibold">2024 - Started Web Development</h3>
            <p className="text-gray-400 text-sm">
              Began learning HTML, CSS and JavaScript.
            </p>
          </div>

          <div>
            <h3 className="font-semibold">2025 - React & Projects</h3>
            <p className="text-gray-400 text-sm">
              Built multiple real-world projects using React.
            </p>
          </div>

          <div>
            <h3 className="font-semibold">2026 - Teaching Platform</h3>
            <p className="text-gray-400 text-sm">
              Started building learning platform for beginners.
            </p>
          </div>

        </div>
      </section>

    </div>
  );
};

export default About;