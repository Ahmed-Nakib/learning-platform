import { useState } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <nav className="bg-white shadow-md px-6 py-4">
      
      <div className="flex items-center justify-between">

        {/* Logo */}
        <div className="text-2xl font-bold text-blue-600">
          Logo
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-8 text-gray-700 font-medium">
          <Link className="hover:text-blue-600 transition" to="/">Home</Link>
          <Link className="hover:text-blue-600 transition" to="/about">About</Link>
          <Link className="hover:text-blue-600 transition" to="/courses">Courses</Link>
        </div>

        {/* Contact Button (Desktop) */}
        <div className="hidden md:block">
          <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition">
            Contact
          </button>
        </div>

        {/* Mobile Button */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden text-3xl text-gray-700"
        >
          ☰
        </button>

      </div>

      {/* Mobile Menu */}
      {open && (
        <div className="md:hidden mt-4 flex flex-col gap-4 text-gray-700 font-medium">
          <Link onClick={() => setOpen(false)} to="/">Home</Link>
          <Link onClick={() => setOpen(false)} to="/about">About</Link>
          <Link onClick={() => setOpen(false)} to="/courses">Courses</Link>

          <button className="bg-blue-600 text-white px-4 py-2 rounded-lg w-fit">
            Contact
          </button>
        </div>
      )}

    </nav>
  );
};

export default Navbar;