import { Link } from "react-router-dom";
import { FaFacebookF, FaGithub, FaLinkedinIn } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gray-950 text-gray-400">

      {/* 🔥 Top Gradient Line */}
      <div className="h-[1px] bg-gradient-to-r from-transparent via-primary to-transparent"></div>

      <div className="primary-container py-14 grid gap-10 md:grid-cols-4">

        {/* Brand */}
        <div>
          <h2 className="text-2xl font-bold text-white mb-3">
            YourBrand
          </h2>
          <p className="text-sm leading-relaxed">
            A modern learning platform for developers. Learn, build and grow your skills with real-world projects.
          </p>

          {/* Social Icons */}
          <div className="flex gap-3 mt-5">
            <a
              href="#"
              className="w-9 h-9 flex items-center justify-center rounded-full bg-gray-800 hover:bg-primary hover:-translate-y-1 transition duration-300"
            >
              <FaFacebookF size={16} />
            </a>

            <a
              href="#"
              className="w-9 h-9 flex items-center justify-center rounded-full bg-gray-800 hover:bg-primary hover:-translate-y-1 transition duration-300"
            >
              <FaGithub size={16} />
            </a>

            <a
              href="#"
              className="w-9 h-9 flex items-center justify-center rounded-full bg-gray-800 hover:bg-primary hover:-translate-y-1 transition duration-300"
            >
              <FaLinkedinIn size={16} />
            </a>
          </div>
        </div>

        {/* Links 1 */}
        <div>
          <h3 className="text-white font-semibold mb-4">Product</h3>
          <ul className="space-y-2 text-sm">
            <li><Link to="/learn" className="hover:text-white transition hover:translate-x-1 inline-block">Courses</Link></li>
            <li><Link to="/" className="hover:text-white transition hover:translate-x-1 inline-block">Features</Link></li>
            <li><Link to="/" className="hover:text-white transition hover:translate-x-1 inline-block">Pricing</Link></li>
            <li><Link to="/" className="hover:text-white transition hover:translate-x-1 inline-block">Updates</Link></li>
          </ul>
        </div>

        {/* Links 2 */}
        <div>
          <h3 className="text-white font-semibold mb-4">Company</h3>
          <ul className="space-y-2 text-sm">
            <li><Link to="/about" className="hover:text-white transition hover:translate-x-1 inline-block">About</Link></li>
            <li><Link to="/" className="hover:text-white transition hover:translate-x-1 inline-block">Careers</Link></li>
            <li><Link to="/" className="hover:text-white transition hover:translate-x-1 inline-block">Blog</Link></li>
            <li><Link to="/" className="hover:text-white transition hover:translate-x-1 inline-block">Contact</Link></li>
          </ul>
        </div>

        {/* Newsletter */}
        <div>
          <h3 className="text-white font-semibold mb-4">Stay Updated</h3>
          <p className="text-sm mb-4">
            Get the latest courses and updates straight to your inbox.
          </p>

          <form className="flex flex-col gap-3">
            <input
              type="email"
              placeholder="Enter your email"
              className="px-4 py-2 rounded-lg bg-gray-800 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-primary"
            />
            <button
              type="submit"
              className="bg-primary text-white py-2 rounded-lg hover:opacity-90 hover:scale-[1.02] transition"
            >
              Subscribe
            </button>
          </form>
        </div>
      </div>

      {/* 🔥 Bottom Gradient Line */}
      <div className="h-[1px] bg-gradient-to-r from-transparent via-primary to-transparent"></div>

      {/* Bottom */}
      <div className="primary-container py-5 flex flex-col md:flex-row justify-between items-center gap-3 text-sm">
        <p>© {new Date().getFullYear()} YourBrand. All rights reserved.</p>

        <div className="flex gap-4">
          <Link to="/" className="hover:text-white transition">Privacy</Link>
          <Link to="/" className="hover:text-white transition">Terms</Link>
          <Link to="/" className="hover:text-white transition">Security</Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;