const Footer = () => {
  return (
    <div className="pt-20 bg-white">
      <h2 className="text-3xl mb-1 font-bold text-center">Gadget Heaven</h2>
      <p className="text-center text-[#09080F99]">
        Leading the way in cutting-edge technology and innovation.
      </p>
      <hr className="bg-gray-400 my-5" />
      <footer className="footer flex justify-evenly px-10 pb-10">
        <nav>
          <h6 className="text-lg font-bold text-[#09080F]">Services</h6>
          <a className="link link-hover">Product Support</a>
          <a className="link link-hover">Order Tracking</a>
          <a className="link link-hover">Shipping & Delivery</a>
          <a className="link link-hover">Returns</a>
        </nav>
        <nav>
          <h6 className="text-lg font-bold text-[#09080F]">Company</h6>
          <a className="link link-hover">About us</a>
          <a className="link link-hover">Careers</a>
          <a className="link link-hover">Contact</a>
        </nav>
        <nav>
          <h6 className="text-lg font-bold text-[#09080F]">Legal</h6>
          <a className="link link-hover">Terms of Service</a>
          <a className="link link-hover">Privacy policy</a>
          <a className="link link-hover">Cookie policy</a>
        </nav>
      </footer>
    </div>
  );
};

export default Footer;
