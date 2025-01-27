import { Link, NavLink, useLocation } from "react-router-dom";
import { IoCartOutline } from "react-icons/io5";
import { CiHeart } from "react-icons/ci";

const Navbar = () => {
  const {pathname} = useLocation()
  return (
    <div className={`${pathname === "/" ? 'bg-[#9538E2] text-white' : "text-black"}`}>
      <div className="navbar w-7xl mx-auto  rounded-t-xl">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
            >
              <li>
                <NavLink
                  className={({ isActive }) => isActive && " underline"}
                  to="/"
                >
                  Home
                </NavLink>
              </li>
              <li className="mx-4">
                <NavLink
                  className={({ isActive }) => isActive && " underline"}
                  to="/statistics"
                >
                  Statistics
                </NavLink>
              </li>
              <li>
                <NavLink
                  className={({ isActive }) => isActive && " underline"}
                  to="/dashboard"
                >
                  Dashboard
                </NavLink>
              </li>
              <li>
              <NavLink
                className={({ isActive }) => isActive && " underline"}
                to="/contactUs"
              >
                Contact Us
              </NavLink>
            </li>
            </ul>
          </div>
          <a className="text-xl font-bold">Gadget Heaven</a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
            <li>
              <NavLink
                className={({ isActive }) => isActive && " underline"}
                to="/"
              >
                Home
              </NavLink>
            </li>
            <li className="mx-4">
              <NavLink
                className={({ isActive }) => isActive && " underline"}
                to="/statistics"
              >
                Statistics
              </NavLink>
            </li>
            <li>
              <NavLink
                className={({ isActive }) => isActive && " underline"}
                to="/dashboard"
              >
                Dashboard
              </NavLink>
            </li>
            <li>
              <NavLink
                className={({ isActive }) => isActive && " underline"}
                to="/contactUs"
              >
                Contact Us
              </NavLink>
            </li>
          </ul>
        </div>
        <div className="navbar-end gap-4">
          <Link to='/dashboard' className="text-xl text-black bg-white p-2 rounded-full">
            <IoCartOutline></IoCartOutline>
          </Link>
          <Link className="text-xl text-black bg-white p-2 rounded-full">
            <CiHeart></CiHeart>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
