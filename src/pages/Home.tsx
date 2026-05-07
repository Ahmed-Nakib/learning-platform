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

      {/* CTA */}
      <section className="text-center py-20 px-6">
        <h2 className="text-3xl font-bold mb-4">Start Learning Today</h2>
        <Link
          to="/learn"
          className="bg-primary text-white px-6 py-3 rounded-xl hover:bg-second-primary transition"
        >
          Get Started
        </Link>
      </section>
    </div>
  );
}
