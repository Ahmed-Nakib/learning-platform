import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <section className="py-20  max-w-6xl mx-auto grid md:grid-cols-2 items-center gap-10">
      
      {/* LEFT */}
      <div>
        <h1 className="text-4xl md:text-5xl font-bold mb-4">
          Start Learning <br />
          with <span className="text-primary">Nakib</span>
        </h1>

        <p className="text-gray-400 mb-6">
          Learn programming step by step with simple explanations and real projects.
        </p>

        <div className="flex flex-col md:flex-row gap-4">
          <Link
            to="/learn"
            className="bg-primary text-center text-white px-6 py-3 rounded-xl hover:bg-second-primary transition"
          >
            Start Learning
          </Link>

          <Link
            to="/about"
            className="border text-center border-primary text-primary px-6 py-3 rounded-xl hover:bg-second-primary hover:text-white transition"
          >
            About Me
          </Link>
        </div>
      </div>

      {/* RIGHT */}
      <div className="flex justify-center">
        <img
          src="/hero.jpg"
          alt="Nakib"
          className="w-64 h-64 object-cover rounded-2xl shadow-lg"
        />
      </div>

    </section>
  );
};

export default Hero;