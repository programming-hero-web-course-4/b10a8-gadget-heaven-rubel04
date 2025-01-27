import { useState } from "react";
import Cart from "./Cart";
import Wishlist from "./Wishlist";

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
      <div className="bg-[#9538E2] text-white pt-4 pb-10">
        <h2 className="text-3xl font-bold text-center">Dashboard</h2>
        <p className="text-center mt-4 mb-6">
          Explore the latest gadgets that will take your experience to the next
          level. From smart devices to <br /> the coolest accessories, we have
          it all!
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
