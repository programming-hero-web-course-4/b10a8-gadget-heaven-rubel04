import { useEffect, useState } from "react";
import { getStoredProduct, removeProductToLS } from "../Utility/cart";
import { IoIosCloseCircleOutline } from "react-icons/io";
import { BsSortNumericUpAlt } from "react-icons/bs";
import toast from "react-hot-toast";

const Cart = () => {
  const [products, setProducts] = useState([]);
  const [carts, setCarts] = useState([]);
  const [totalCost, setTotalCost] = useState(0);
  useEffect(() => {
    fetch("./products.json")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);
  useEffect(() => {
    const storedProduct = getStoredProduct();
    const storedProductStr = storedProduct.map((id) => id);
    console.log(storedProductStr);
    const product = products.filter((product) =>
      storedProductStr.includes(product.product_id)
    );
    setCarts(product);
    carts.map((c) => setTotalCost(totalCost + c.price));
  }, [products]);
  const handleSortProduct = () => {
    const sort = [...carts].sort((a, b) => b.price - a.price);
    setCarts(sort);
  };
  const handlePurchase = () => {
    removeProductToLS("");
    const total = carts.map((c) => setTotalCost(totalCost - c.price));
    setCarts([]);
    toast.success("Payment succesfully", total);
  };
  const handleDelete = (id) => {
    const product = carts.filter((cart) => cart.product_id !== id);
    removeProductToLS(id);
    toast.success("Deleted succesfully to the Cart");
    setCarts(product);
  };
  return (
    <div className="bg-gray-100 pb-10">
      <div className="w-7xl mx-auto">
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
