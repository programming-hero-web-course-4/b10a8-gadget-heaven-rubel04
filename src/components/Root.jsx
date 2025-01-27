import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";
import Footer from "./Footer";
import { Toaster } from 'react-hot-toast';

const Root = () => {
  return (
    <div className="bg-gray-100">
      <Navbar></Navbar>
      <Outlet></Outlet>
      <Toaster></Toaster>
      <Footer></Footer>
    </div>
  );
};

export default Root;