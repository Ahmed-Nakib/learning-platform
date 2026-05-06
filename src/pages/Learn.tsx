const categories = [
  { id: 1, title: "Web Development", desc: "HTML, CSS, JS, React" },
  { id: 2, title: "App Development", desc: "Android & iOS Apps" },
  { id: 3, title: "UI/UX Design", desc: "Figma, Design System" },
  { id: 4, title: "Data Science", desc: "Python, ML, AI" },
  { id: 5, title: "Data Science", desc: "Python, ML, AI" },
  { id: 6, title: "Digital Marketing", desc: "SEO, Ads, Social Media" },
  { id: 6, title: "Cyber Security", desc: "Ethical Hacking Basics" },
];

const Learn = () => {
  return (
    <div className="py-10">
      <h1 className="text-2xl font-bold mb-6">Categories</h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {categories.map((cat) => (
          <div
            key={cat.id}
            className="p-6 rounded-xl shadow shadow-primary hover:shadow-lg transition bg-white hover:-translate-y-1"
          >
            <h2 className="text-lg font-semibold mb-2">{cat.title}</h2>
            <p className="text-gray-500 text-sm">{cat.desc}</p>

            <button className="mt-4 text-sm text-primary font-medium">
              Explore →
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Learn;