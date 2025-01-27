import { Link, NavLink } from "react-router-dom";
import { IoCartOutline } from "react-icons/io5";
import { CiHeart } from "react-icons/ci";
import { useEffect, useState } from "react";
import { getStoredProduct } from "../Utility/cart";

const Navbar = () => {
  const [products, setProducts] = useState([]);
  const [carts, setCarts] = useState([]);
  useEffect(() => {
    fetch("./products.json")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);
  useEffect(() => {
    const storedProduct = getStoredProduct();
    const storedProductStr = storedProduct.map((id) => id);
    // console.log(storedProductStr);
    const product = products.filter((product) =>
      storedProductStr.includes(product.product_id)
    );
    setCarts(product);
    
  }, [products]);
  return (
    <div className="bg-[#9538E2]">
      <div className="navbar w-7xl mx-auto  rounded-t-xl text-white">
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
          <Link to='/dashboard' className="text-xl relative text-black bg-white p-2 rounded-full">
            <IoCartOutline></IoCartOutline>
            <span className="absolute bg-white text-red-400 right-0 -top-2 text-sm px-1 rounded-full">{carts.length}</span>
          </Link>
          <Link className="text-xl relative text-black bg-white p-2 rounded-full">
            <CiHeart></CiHeart>
          <span className="absolute bg-white text-red-400 right-0 -top-2 text-sm px-1 rounded-full">{carts.length}</span>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
