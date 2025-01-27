import banner from "../assets/banner.jpg";

import { Link } from "react-router-dom";

const Banner = () => {
  return (
    <div className="">
      <div className="bg-[#9538E2] relative text-white space-y-6 pt-4 pb-50 mb-60 ">
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
      {/* <div className="w-7xl  absolute left-0 right-0 bottom-28 rounded-2xl">
        <div className="h-[500px] border-2 border-gray-100 bg-transparent rounded-2xl p-4">
          <img
            className="w-full h-full object-fill mx-auto rounded-2xl"
            src={banner}
            alt=""
          />
        </div>
      </div> */}
      <div className="flex mb-8 p-4 w-7xl mx-auto absolute left-0 right-0 bottom-0 bg-transparent border border-white rounded-2xl">
        <img className="h-[400px] rounded-2xl w-full" src={banner} alt="" />
      </div>
    </div>
  );
};

export default Banner;
