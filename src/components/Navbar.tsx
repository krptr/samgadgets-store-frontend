import { NavLink } from "react-router";
import { Logo } from "./Logo";
import { LuSun, LuMoon, LuShoppingBag, LuMenu } from "react-icons/lu";
import { MobileNavBar } from "./MobileNavBar";
import { useTheme } from "../hooks/useTheme";
import { useMobileNav } from "../hooks/useMobileNav";
import { useState, useEffect } from "react";

function Navbar() {
  const { theme, toggleTheme } = useTheme();
  const { isMobileNavOpen, updateMobileNav, closeMobileNav } = useMobileNav();
  const [onScrolled, setOnScrolled] = useState<boolean>(false);

  useEffect(() => {
    const handleUserScroll = () => {
      if (window.scrollY > 50) {
        setOnScrolled(true);
      } else {
        setOnScrolled(false);
      }
    };

    window.addEventListener("scroll", handleUserScroll);

    return () => window.removeEventListener("scroll", handleUserScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 z-50 ${onScrolled ? "bg-surface-variant top-0" : "top-10"}`}
    >
      <div className="flex justify-between py-2 mx-4 md:mx-12 lg:mx-24 xl:mx-32 xl:flex xl:items-center xl:gap-46">
        <Logo className="md:text-3xl" />

        <nav className="hidden xl:flex xl:items-center gap-6 py-4 font-sans font-bold">
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
        </nav>

        <div className="hidden xl:flex gap-4 ">
          <button onClick={toggleTheme} className="cursor-pointer">
            {theme === "dark" ? <LuMoon /> : <LuSun />}
          </button>

          <NavLink
            to="/login"
            className={`py-2 px-3 text-on-primary bg-primary rounded-2xl`}
          >
            Sign in
          </NavLink>

          <button>
            <LuShoppingBag />
          </button>
        </div>

        <button onClick={updateMobileNav} className=" xl:hidden">
          <LuMenu size={24} />
        </button>
        <MobileNavBar
          isOpen={isMobileNavOpen}
          closeMobileNav={closeMobileNav}
        />
      </div>
    </header>
  );
}

export { Navbar };
