import { Link, NavLink } from "react-router";
import { LuSun, LuMoon, LuShoppingBag } from "react-icons/lu";
import { useTheme } from "../hooks/useTheme";

function Navbar() {
  const { theme, toggleTheme } = useTheme();

  return (
    <header className="flex items-center justify-center gap-46 mx-32">
      <div>
        <Link to="/">
          <span className="font-tech">
            <span className="text-primary">SAM</span>
            <span className="text-foreground">GADGETS</span>
          </span>
        </Link>
      </div>
      <nav className="hidden md:flex gap-6 py-4 font-sans">
        <NavLink to="/products">Laptops</NavLink>
        <NavLink to="/products">Phones</NavLink>
        <NavLink to="/products">Audio</NavLink>
        <NavLink to="/products">Wearables</NavLink>
        <NavLink to="/products">All Devices</NavLink>
        <button onClick={toggleTheme} className="cursor-pointer">
          {theme === "dark" ? <LuMoon /> : <LuSun />}
        </button>
        <NavLink to="/login">Login</NavLink>
        <button>
          <LuShoppingBag />
        </button>
      </nav>
    </header>
  );
}

export { Navbar };
