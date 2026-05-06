const topics = [
  { name: "HTML", icon: "🌐" },
  { name: "CSS", icon: "🎨" },
  { name: "JavaScript", icon: "⚡" },
  { name: "React", icon: "⚛️" },
  { name: "TypeScript", icon: "🔷" },
  { name: "Node.js", icon: "🟢" },
];

const Topics = () => {
  return (
    <section className="py-20 ">
      
      {/* Title */}
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold mb-3">
          Explore Topics
        </h2>
        <p className="text-gray-400 max-w-xl mx-auto">
          Learn modern web development step by step.
        </p>
      </div>

      {/* Grid */}
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 max-w-6xl mx-auto">
        {topics.map((topic) => (
          <div
            key={topic.name}
            className="group relative backdrop-blur-lg border border-primary p-6 rounded-2xl text-center cursor-pointer transition duration-300 hover:scale-105 hover:-translate-y-2 hover:border-primary/40"
          >
            {/* Glow */}
            <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition bg-gradient-to-r from-blue-500/10 to-primary/10"></div>

            {/* Content */}
            <div className="relative z-10">
              <div className="text-3xl mb-3">
                {topic.icon}
              </div>
              <h3 className="font-semibold text-lg">
                {topic.name}
              </h3>
            </div>
          </div>
        ))}
      </div>

    </section>
  );
};

export default Topics;