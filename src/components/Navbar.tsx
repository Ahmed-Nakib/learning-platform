import { useState } from "react";
import { Link, NavLink } from "react-router-dom";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  const linkClass = ({isActive}:any) =>
     isActive
     ?  "border-b-2 border-primary text-primary"
     : "bg-white text-primary"

  return (
    <nav className="bg-white shadow-md shadow-primary/15 py-4">
      
      <div className="primary-container flex items-center justify-between">

        {/* Logo */}
        <div className="text-2xl font-bold text-primary">
          Logo
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-8 text-primary font-medium">
          <NavLink className={linkClass} to="/">Home</NavLink>
          <NavLink className={linkClass} to="/about">About</NavLink>
          <NavLink className={linkClass} to="/learn">Learn</NavLink>
        </div>

        {/* Contact Button (Desktop) */}
        <div className="hidden md:block">
          <button className="bg-primary text-white px-4 py-2 rounded-lg hover:bg-second-primary transition">
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