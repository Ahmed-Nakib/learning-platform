import { Link } from "react-router-dom";

const Navbar = () => {
    return(
        <div className="bg-amber-400">
              <nav>
      <Link to="/">Home</Link>
      <Link to="/about">About</Link>
      <Link to="/courses">Courses</Link>
      <Link to="/login">Login</Link>
    </nav>
        </div>
    )
}

export default Navbar;