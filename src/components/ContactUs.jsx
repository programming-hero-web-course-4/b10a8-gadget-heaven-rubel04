// import { IoLocationSharp, IoCallSharp } from "react-icons/io5";
// import { MdOutlineFax, MdOutlineMailLock } from "react-icons/md";
import { Helmet } from "react-helmet-async";
import messeage from "../assets/messeage.png";
const ContactUs = () => {
  return (
    <div>
      <Helmet>
        <title>Gadget Heaven | Contact Us</title>
      </Helmet>
      <div className="bg-[#9538E2] text-white pt-4 pb-10 ">
        <h2 className="text-3xl mb-2 font-bold text-center">Contact Us</h2>
        <p className="text-center w-3/7 mx-auto">
        Have questions or need assistance? Reach out to Gadget Heaven! Our team is here to help with product inquiries, orders, and support. Contact us via email, phone, or our online form—we’d love to hear from you
        </p>
      </div>
      <div className="w-7xl mx-auto my-10 flex justify-between items-center">
        <div className="w-full space-y-6">
          <h3 className="text-3xl font-bold mb-4 text-[#9538E2]">{`Let's Talk`}</h3>
          <input
            className="w-1/2 p-3 rounded-lg border-0 bg-white"
            type="text"
            placeholder="Enter Your Name"
          />
          <br />
          <input
            className="w-1/2 p-3 rounded-lg border-0 bg-white"
            type="text"
            placeholder="Enter Your Email"
          />
          <br />
          <textarea
            className="w-1/2 p-3 rounded-lg border-0 bg-white"
            name=""
            id=""
            placeholder="Your Message"
          ></textarea>
          <br />
          <button className="bg-[#9538E2] mt-2 font-bold border-2 cursor-pointer border-[#9538E2] text-white py-1 px-8 rounded-3xl">
            Submit
          </button>
        </div>
        <div>
          <img src={messeage} alt="" />
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
