import { Link, NavLink } from "react-router-dom";
import { Button } from "../ui/button";
import { motion } from "framer-motion";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "../theme-provider";

const Navbar = () => {
  const { setTheme } = useTheme();
  return (
    <motion.header
      className="h-16 fixed w-full backdrop-blur-xl bg-white/30 z-10 dark:bg-black/30"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1, delay: 1 }}
    >
      <nav className="w-full max-w-[1230px] mx-auto flex justify-between items-center h-full px-[20px]">
        <Link to="/">
          <span className="text-3xl">iReapir</span>
        </Link>

        <ul className="space-x-5 font-semibold flex items-center">
          <NavLink to="/">Home</NavLink>
          <NavLink to="/about">About</NavLink>
          <NavLink to="/services">Services</NavLink>
          <Button>
            <NavLink to="/login">Login</NavLink>
          </Button>
          <div className="size-6">
            <Sun
              className="absolute h-[1.25rem] w-[1.25rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0 cursor-pointer"
              onClick={() => setTheme("dark")}
            />
            <Moon
              className="absolute h-[1.25rem] w-[1.25rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100 cursor-pointer"
              onClick={() => setTheme("light")}
            />
            
          </div>
        </ul>
      </nav>
    </motion.header>
  );
};

export default Navbar;
