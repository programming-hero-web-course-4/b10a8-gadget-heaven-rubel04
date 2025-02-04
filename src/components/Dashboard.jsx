import { useState } from "react";
import Cart from "./Cart";
import Wishlist from "./Wishlist";
import { Helmet } from "react-helmet-async";

const Dashboard = () => {
  const [active, setActive] = useState(true);
  const handleStatus = (status) => {
    if (status === "cart") {
      setActive(true);
    } else {
      setActive(false);
    }
  };
  return (
    <div>
      <Helmet>
        <title>Gadget Heaven | Dashboard</title>
      </Helmet>
      <div className="bg-[#9538E2] text-white pt-4 pb-10">
        <h2 className="text-3xl font-bold text-center">Dashboard</h2>
        <p className="text-center mt-4 mb-6 w-3/6 mx-auto">
        Welcome to the Gadget Heaven Dashboard! Manage your products, track orders, and customize your store effortlessly. Stay updated with the latest trends, analyze sales, and enhance your gadget shopping experience—all in one place
        </p>
        <div className="flex justify-center gap-6">
          <button
            onClick={() => handleStatus("cart")}
            className={`${
              active
                ? "text-[#9538E2] font-bold bg-white py-1 px-8 rounded-full"
                : "text-white border font-bold border-white py-1 px-8 rounded-full"
            }`}
          >
            Cart
          </button>
          <button
            onClick={() => handleStatus("wishlist")}
            className={`${
              active
                ? "text-white border font-bold border-white py-1 px-8 rounded-full"
                : "text-[#9538E2] font-bold bg-white py-1 px-8 rounded-full"
            }`}
          >
            Wishlist
          </button>
        </div>
      </div>
      {active ? <Cart></Cart> : <Wishlist></Wishlist>}
    </div>
  );
};

export default Dashboard;
