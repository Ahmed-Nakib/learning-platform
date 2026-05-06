const lessons = [
  {
    title: "HTML Basics",
    desc: "Learn the structure of web pages.",
  },
  {
    title: "CSS Flexbox",
    desc: "Master layout with flexbox.",
  },
  {
    title: "JavaScript DOM",
    desc: "Control web pages dynamically.",
  },
];

const PopularLessons = () => {
  return (
    <section className="py-20">
      
      {/* Title */}
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold mb-3">
          Popular Lessons
        </h2>
        <p className="text-gray-400">
          Start with the most loved lessons
        </p>
      </div>

      {/* Grid */}
      <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
        {lessons.map((lesson, index) => (
          <div
            key={index}
            className="group relative bg-white/70 backdrop-blur-lg border-b border-r shadow-sm shadow-primary border-primary p-6 rounded-2xl cursor-pointer transition duration-300 hover:scale-105 hover:-translate-y-2 hover:border-blue-500/40"
          >
            
            {/* Glow */}
            <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition bg-gradient-to-r from-blue-500/10 to-purple-500/10"></div>

            {/* Content */}
            <div className="relative z-10">
              <h3 className="font-semibold text-lg mb-2">
                {lesson.title}
              </h3>

              <p className="text-gray-400 text-sm mb-4">
                {lesson.desc}
              </p>

              {/* CTA */}
              <span className="text-blue-400 text-sm font-medium">
                Start Lesson →
              </span>
            </div>
          </div>
        ))}
      </div>

    </section>
  );
};

export default PopularLessons;