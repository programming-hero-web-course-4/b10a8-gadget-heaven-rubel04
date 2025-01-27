import banner from "../assets/banner.jpg";

import { Link } from "react-router-dom";

const Banner = () => {
  return (
    <div className="relative">
      <div className="bg-[#9538E2] text-white space-y-6 pt-4 pb-50 mb-80 ">
        <h1 className="text-5xl font-bold text-center">
          Upgrade Your Tech Accessorize with <br /> Gadget Heaven Accessories
        </h1>
        <p className="text-center">
          Explore the latest gadgets that will take your experience to the next
          level. From smart devices to <br /> the coolest accessories, we have
          it all!
        </p>
        <div className="flex justify-center">
          <button className="text-[#9538E2] font-bold bg-white py-1 px-4 rounded-full">
            <Link to="/dashboard">Shop Now</Link>
          </button>
        </div>
      </div>
      <div className="absolute top-70 right-56">
        <div className="w-6xl h-[500px] border-2 border-gray-100 bg-transparent rounded-2xl p-4">
          <img
            className="w-full h-full object-fill mx-auto rounded-2xl"
            src={banner}
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

export default Banner;
