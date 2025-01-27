import { useEffect, useState } from "react";
import {
  addProductToLS,
  getStoredWishList,
  removeWishlistProductToLS,
} from "../Utility/cart";
import { IoIosCloseCircleOutline } from "react-icons/io";
import toast from "react-hot-toast";

const Wishlist = () => {
  const [products, setProducts] = useState([]);
  const [carts, setCarts] = useState([]);
  const [totalCost, setTotalCost] = useState(0);
  useEffect(() => {
    fetch("./products.json")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);
  useEffect(() => {
    const storedProduct = getStoredWishList();
    const storedProductStr = storedProduct.map((id) => id);
    console.log(storedProductStr);
    const product = products.filter((product) =>
      storedProductStr.includes(product.product_id)
    );
    setCarts(product);
    carts.map((c) => setTotalCost(totalCost + c.price));
  }, [products]);
  const handleDelete = (id) => {
    const product = carts.filter((cart) => cart.product_id !== id);
    toast.success(`Deleted successfully to the Cart`);
    removeWishlistProductToLS(id);
    setCarts(product);
  };
  const handleProductAddToCart = (product) => {
    addProductToLS(product.product_id);
    toast.success(`${product.product_name} Successfully added to the Cart`);
    handleDelete(product.product_id);
  };
  return (
    <div className="bg-gray-100 pb-10">
      <div className="w-7xl mx-auto">
        <h4 className="text-2xl font-medium py-6">Cart</h4>
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
                  <div className="space-y-2">
                    <h3 className="text-xl font-bold mb-1">
                      {cart.product_name}
                    </h3>
                    <p className="text-[#09080F99] font-medium">
                      {cart.description}
                    </p>
                    <p className="text-lg text-[#09080FCC] font-medium">
                      Price: {cart.price}
                    </p>
                    <button
                      onClick={() => handleProductAddToCart(cart)}
                      className="flex cursor-pointer items-center gap-2 text-white bg-[#9538E2] py-1 px-4 rounded-full"
                    >
                      Add To Cart
                    </button>
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

export default Wishlist;
