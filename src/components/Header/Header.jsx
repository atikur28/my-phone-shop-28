import { Link, NavLink } from "react-router-dom";

const Header = () => {
  return (
    <div className="navbar bg-base-100 container mx-auto">
      <div className="flex-1">
        <Link className="normal-case text-2xl font-bold">Phone Shop</Link>
      </div>
      <div className="flex-none">
        <ul className="flex gap-10 py-5 px-1">
          <li className="text-xl font-semibold">
            <NavLink
              to="/"
              className={({ isActive, isPending }) =>
                isPending
                  ? "pending"
                  : isActive
                  ? "text-green-400 underline"
                  : ""
              }
            >
              Home
            </NavLink>
          </li>
          <li className="text-xl font-semibold">
            <NavLink
              to="/favorites"
              className={({ isActive, isPending }) =>
                isPending
                  ? "pending"
                  : isActive
                  ? "text-green-400 underline"
                  : ""
              }
            >
              Favorites
            </NavLink>
          </li>
          <li className="text-xl font-semibold">
            <NavLink
              to="/login"
              className={({ isActive, isPending }) =>
                isPending
                  ? "pending"
                  : isActive
                  ? "text-green-400 underline"
                  : ""
              }
            >
              Login
            </NavLink>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
