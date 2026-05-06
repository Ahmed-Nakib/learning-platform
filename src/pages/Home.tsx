import { Link } from "react-router-dom";
import Hero from "../components/Hero";
import Topics from "../components/Topics";
import PopularLessons from "../components/PopularLessons";

export default function Home() {
  return (
    <div className="">

      {/* HERO */}
      <section>
        <Hero />
      </section>

      {/* TOPICS */}
      <section >
        <Topics />
      </section>

      {/* POPULAR */}
      <section >
        <PopularLessons />
      </section>

      {/* FEATURES */}
      <section className="py-16 px-6">
        <h2 className="text-2xl font-semibold mb-8 text-center">Why Learn With Us</h2>
        <div className="grid md:grid-cols-3 gap-6 text-center">
          <div className="bg-gray-900 p-6 rounded-2xl">
            <h3 className="font-semibold mb-2">Beginner Friendly</h3>
            <p className="text-gray-400">Easy explanations for everyone</p>
          </div>
          <div className="bg-gray-900 p-6 rounded-2xl">
            <h3 className="font-semibold mb-2">Real Projects</h3>
            <p className="text-gray-400">Practice with real examples</p>
          </div>
          <div className="bg-gray-900 p-6 rounded-2xl">
            <h3 className="font-semibold mb-2">Free Content</h3>
            <p className="text-gray-400">Learn without paying</p>
          </div>
        </div>
      </section>

      {/* ROADMAP */}
      <section className="py-16 px-6 bg-gray-900 text-center">
        <h2 className="text-2xl font-semibold mb-4">Learning Path</h2>
        <p className="text-gray-400 mb-6">Beginner → Intermediate → Advanced</p>
      </section>

      {/* BLOG */}
      <section className="py-16 px-6">
        <h2 className="text-2xl font-semibold mb-8 text-center">Latest Articles</h2>
        <div className="grid md:grid-cols-3 gap-6">
          {[1, 2, 3].map((item) => (
            <div key={item} className="bg-gray-900 p-6 rounded-2xl">
              <h3 className="font-semibold mb-2">Blog Post {item}</h3>
              <p className="text-gray-400 text-sm">Short blog description...</p>
            </div>
          ))}
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="py-16 px-6 bg-gray-900">
        <h2 className="text-2xl font-semibold mb-8 text-center">What Students Say</h2>
        <div className="grid md:grid-cols-3 gap-6">
          {[1, 2, 3].map((item) => (
            <div key={item} className="bg-gray-800 p-6 rounded-2xl">
              <p className="text-gray-400">"Great platform for learning!"</p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="text-center py-20 px-6">
        <h2 className="text-3xl font-bold mb-4">Start Learning Today</h2>
        <Link
          to="/learn"
          className="bg-blue-600 px-6 py-3 rounded-xl hover:bg-blue-500 transition"
        >
          Get Started
        </Link>
      </section>

      {/* FOOTER */}
      <footer className="bg-black py-6 text-center text-gray-500">
        © 2026 Learning Platform
      </footer>

    </div>
  );
}
