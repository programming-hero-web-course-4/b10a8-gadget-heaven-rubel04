import { useEffect, useState } from "react";
import { getStoredProduct, removeProductToLS } from "../Utility/cart";
import { IoIosCloseCircleOutline } from "react-icons/io";
import { BsSortNumericUpAlt } from "react-icons/bs";
import toast from "react-hot-toast";
import { Helmet } from "react-helmet-async";
import group from "../assets/Group.png";
import { useNavigate } from "react-router-dom";

const Cart = () => {
  const [products, setProducts] = useState([]);
  const [carts, setCarts] = useState([]);
  const [totalCost, setTotalCost] = useState(0);
  const navigate = useNavigate();
  useEffect(() => {
    fetch("./products.json")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);

  useEffect(() => {
    const storedProduct = getStoredProduct();
    const storedProductStr = storedProduct.map((id) => id);
    const product = products.filter((product) =>
      storedProductStr.includes(product.product_id)
    );
    setCarts(product);
    const total = product.reduce((sum, cart) => sum + cart.price, 0);
    console.log(total);
    setTotalCost(total.toFixed(2));
  }, [products]);
  console.log(totalCost);

  const handleSortProduct = () => {
    const sort = [...carts].sort((a, b) => b.price - a.price);
    setCarts(sort);
  };

  const handlePurchase = () => {
    removeProductToLS("");
    document.getElementById("my_modal_5").showModal();
    setCarts([]);

    // toast.success("Payment succesfully", total);
  };
  const handleDelete = (id) => {
    const product = carts.filter((cart) => cart.product_id !== id);
    removeProductToLS(id);
    toast.success("Deleted succesfully to the Cart");
    setCarts(product);
  };
  return (
    <div className="bg-gray-100 pb-10">
      <Helmet>
        <title>Gadget Heaven | Cart</title>
      </Helmet>
      <div className="w-7xl mx-auto">
        <dialog
          id="my_modal_5"
          className="modal md:w-74 mx-auto modal-bottom sm:modal-middle"
        >
          <div className="modal-box">
            <div className="flex justify-center">
              <img src={group} alt="img" />
            </div>
            <h3 className="font-bold text-xl text-center py-2">
              Payment Successfully
            </h3>
            <p className="text-center text-[#09080F99]">
              Thanks for purchasing.
            </p>
            <p className="text-center text-[#09080F99]">Total: {totalCost}</p>
            <div className="modal-action">
              <form method="dialog" className="w-full">
                <button
                  onClick={() => navigate("/")}
                  className="bg-[#11000011] py-1 font-medium cursor-pointer rounded-2xl w-full"
                >
                  Close
                </button>
              </form>
            </div>
          </div>
        </dialog>
        <div className="flex justify-between items-center py-6">
          <h4 className="text-2xl font-medium">Cart</h4>
          <div className="flex gap-6">
            <h5 className="text-2xl font-medium">Total Cost: {totalCost}</h5>
            <button
              onClick={handleSortProduct}
              className="text-[#9538E2] flex items-center gap-1 cursor-pointer font-bold border-2 border-[#9538E2] bg-white py-1 px-8 rounded-full"
            >
              Sort By Price
              <BsSortNumericUpAlt></BsSortNumericUpAlt>
            </button>
            <button
              onClick={handlePurchase}
              className="bg-[#9538E2] font-bold border-2 cursor-pointer border-[#9538E2] text-white py-1 px-8 rounded-full"
            >
              Purchase
            </button>
          </div>
        </div>
        {carts.length !== 0 ? (
          <div className="space-y-4">
            {carts.map((cart, idx) => (
              <div
                key={idx}
                className="flex justify-between bg-white p-4 rounded-lg"
              >
                <div className="flex gap-4">
                  <img
                    className="w-20 h-20 object-cover"
                    src={cart.product_image}
                    alt=""
                  />
                  <div>
                    <h3 className="text-xl font-bold mb-1">
                      {cart.product_name}
                    </h3>
                    <p className="text-[#09080F99] font-medium">
                      {cart.description}
                    </p>
                    <p className="text-lg text-[#09080FCC] font-medium">
                      Price: {cart.price}
                    </p>
                  </div>
                </div>
                <div>
                  <button
                    onClick={() => handleDelete(cart.product_id)}
                    className=" text-red-300 cursor-pointer md:mr-10"
                  >
                    <IoIosCloseCircleOutline className="text-3xl"></IoIosCloseCircleOutline>
                  </button>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="flex justify-center">
            <img
              src="https://res.cloudinary.com/daxjoqam6/image/upload/v1737840470/no-product_ebgqos.png"
              alt=""
            />
          </div>
        )}
      </div>
    </div>
  );
};

export default Cart;
