import { Link, NavLink } from "react-router-dom";
import { Button } from "../ui/button";

const Navbar = () => {
  return (
    <header className="h-16">
      <nav className="w-full max-w-[1230px] mx-auto flex justify-between items-center h-full px-[20px]">
        <Link to="/">
          <span className="text-3xl">iReapir</span>
        </Link>

        <ul className=" space-x-5 font-semibold">
          <NavLink to="/">Home</NavLink>
          <NavLink to="/about">About</NavLink>
          <NavLink to="/services">Services</NavLink>
          <Button>
            <NavLink to="/login">Login</NavLink>
          </Button>
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;
