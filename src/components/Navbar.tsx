import { NavLink } from "react-router";
import { Logo } from "./Logo";
import { LuSun, LuMoon, LuShoppingBag, LuMenu } from "react-icons/lu";
import { MobileNavBar } from "./MobileNavBar";
import { useTheme } from "../hooks/useTheme";
import { useMobileNav } from "../hooks/useMobileNav";

function Navbar() {
  const { theme, toggleTheme } = useTheme();
  const { isMobileNavOpen, updateMobileNav, closeMobileNav } = useMobileNav();

  return (
    <header className="absolute flex justify-between py-2 mx-4 xl:flex xl:items-center xl:justify-center xl:gap-46 inset-x-0 top-full z-50">
      <Logo className="md:text-3xl" />

      <nav className="hidden xl:flex gap-6 py-4 font-sans font-bold">
        <NavLink
          to="/products"
          className={({ isActive }) => (isActive ? "text-primary" : "")}
        >
          Laptops
        </NavLink>

        <NavLink
          to="/products"
          className={({ isActive }) => (isActive ? "text-primary" : "")}
        >
          Phones
        </NavLink>

        <NavLink
          to="/products"
          className={({ isActive }) => (isActive ? "text-primary" : "")}
        >
          Audio
        </NavLink>

        <NavLink
          to="/products"
          className={({ isActive }) => (isActive ? "text-primary" : "")}
        >
          Wearables
        </NavLink>

        <NavLink
          to="/products"
          className={({ isActive }) => (isActive ? "text-primary" : "")}
        >
          All Devices
        </NavLink>

        <button onClick={toggleTheme} className="cursor-pointer">
          {theme === "dark" ? <LuMoon /> : <LuSun />}
        </button>
        <NavLink to="/login">Sign in</NavLink>
        <button>
          <LuShoppingBag />
        </button>
      </nav>
      <button onClick={updateMobileNav} className=" xl:hidden">
        <LuMenu size={24} />
      </button>
      <MobileNavBar isOpen={isMobileNavOpen} closeMobileNav={closeMobileNav} />
    </header>
  );
}

export { Navbar };
