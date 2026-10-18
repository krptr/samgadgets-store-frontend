import { NavLink } from "react-router";
import { Logo } from "./Logo";
import {
  LuSun,
  LuMoon,
  LuShoppingBag,
  LuX,
  LuHouse,
  LuSmartphone,
  LuLaptop,
  LuHeadphones,
  LuWatch,
  LuMonitorSmartphone,
  LuLogIn,
} from "react-icons/lu";
import { useTheme } from "../hooks/useTheme";

function MobileNavBar({
  isOpen,
  closeMobileNav,
}: {
  isOpen: boolean;
  closeMobileNav: () => void;
}) {
  const { theme, toggleTheme } = useTheme();

  return (
    <div className="absolute xl:hidden">
      <div
        onClick={closeMobileNav}
        className={`fixed inset-0 bg-black/50  ${isOpen ? "opacity-100" : "pointer-events-none opacity-0"}`}
      />
      <nav
        className={`fixed left-0 transition-transform duration-300 w-17/20 inset-y-0 px-4 pt-4 bg-background flex gap-5 flex-col [&_svg]:text-primary xl:hidden ${isOpen ? "translate-x-0" : "-translate-x-full"}`}
      >
        <button
          onClick={closeMobileNav}
          className="absolute top-4 right-4"
          aria-label="Close Menu"
        >
          <LuX size={24} />
        </button>

        <Logo className="text-3xl" />

        <div className="flex flex-col border-b-2 gap-4 pb-4 font-bold">
          <NavLink
            to="/"
            end
            onClick={closeMobileNav}
            className={({ isActive }) => (isActive ? "bg-primary/15" : "")}
          >
            <div className="flex items-center gap-3 pl-1 py-2">
              <LuHouse size={22} />
              <span>Home</span>
            </div>
          </NavLink>

          <NavLink
            to="/products"
            onClick={closeMobileNav}
            className={({ isActive }) => (isActive ? "bg-primary/15" : "")}
          >
            <div className="flex items-center gap-3 pl-1 py-2">
              <LuLaptop size={22} />
              <span>Laptops</span>
            </div>
          </NavLink>

          <NavLink
            to="/products"
            onClick={closeMobileNav}
            className={({ isActive }) => (isActive ? "bg-primary/15" : "")}
          >
            <div className="flex items-center gap-3 pl-1 py-2">
              <LuSmartphone size={22} />
              <span>Phones</span>
            </div>
          </NavLink>

          <NavLink
            to="/products"
            onClick={closeMobileNav}
            className={({ isActive }) => (isActive ? "bg-primary/15" : "")}
          >
            <div className="flex items-center gap-3 pl-1 py-2">
              <LuHeadphones size={22} />
              <span>Audio</span>
            </div>
          </NavLink>

          <NavLink
            to="/products"
            onClick={closeMobileNav}
            className={({ isActive }) => (isActive ? "bg-primary/15" : "")}
          >
            <div className="flex items-center gap-3 pl-1 py-2">
              <LuWatch size={24} />
              <span>Wearables</span>
            </div>
          </NavLink>

          <NavLink
            to="/products"
            onClick={closeMobileNav}
            className={({ isActive }) => (isActive ? "bg-primary/15" : "")}
          >
            <div className="flex items-center gap-3 pl-1 py-2">
              <LuMonitorSmartphone size={22} />
              <span>All Devices</span>
            </div>
          </NavLink>
        </div>

        <div className="flex flex-col gap-4 font-bold">
          <button onClick={toggleTheme} className="cursor-pointer">
            {theme === "dark" ? (
              <div className="flex items-center gap-3 pl-1 py-2">
                <LuMoon size={22} />
                <span>Dark Mode</span>
              </div>
            ) : (
              <div className="flex items-center gap-3 pl-1 py-2">
                <LuSun size={22} />
                <span>Light Mode</span>
              </div>
            )}
          </button>

          <NavLink
            to="/login"
            className={({ isActive }) => (isActive ? "bg-primary/15" : "")}
          >
            <div
              onClick={closeMobileNav}
              className="flex items-center gap-3 pl-1 py-2"
            >
              <LuLogIn size={22} />
              <span>Sign in</span>
            </div>
          </NavLink>

          <button>
            <div className="flex items-center gap-3 pl-1 py-2">
              <LuShoppingBag size={20} />
              <span>Cart</span>
            </div>
          </button>
        </div>
      </nav>
    </div>
  );
}

export { MobileNavBar };
