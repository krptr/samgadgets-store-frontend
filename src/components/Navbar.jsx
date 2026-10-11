import { Link, NavLink } from "react-router";

function Navbar() {
  return (
    <header className="flex justify-between gap-6 mx-32">
      <div>
        <Link to="/">
          <span>SAM.GADGETS</span>
        </Link>
      </div>
      <nav className="">
        <NavLink></NavLink>
        <NavLink></NavLink>
        <NavLink></NavLink>
        <NavLink></NavLink>
      </nav>
    </header>
  );
}

export { Navbar };
