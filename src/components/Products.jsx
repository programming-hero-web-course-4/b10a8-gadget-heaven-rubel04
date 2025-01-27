import { useEffect, useState } from "react";
import Product from "./Product";

const Products = () => {
  const [products, setProducts] = useState([]);
  const [allProducts, setAllProducts] = useState([]);
  useEffect(() => {
    fetch("./products.json")
      .then((res) => res.json())
      .then((data) => {
        setProducts(data);
        setAllProducts(data);
      });
  }, []);
  const handleCategoryProduct = (categoryType) => {
    if (categoryType === "All") {
      setProducts(allProducts);
      return;
    } else if (categoryType === "") {
      setProducts([]);
    }
    const category = allProducts.filter(
      (product) => product.category === categoryType
    );
    setProducts(category);
  };
  return (
    <div className="bg-gray-100 pb-14">
      <div className="w-7xl mx-auto">
        <h2 className="text-3xl text-center font-bold pt-12 pb-6">
          Explore Cutting-Edge Gadgets
        </h2>
        <div className="grid grid-cols-6 gap-4">
          {/* sidebar menu */}
          <div>
            <div className="bg-white p-4 rounded-xl space-y-4">
              <button
                onClick={() => handleCategoryProduct("All")}
                className="flex cursor-pointer items-center gap-2 font-medium bg-[#09080F0D] py-1 px-4 rounded-full w-full"
              >
                All Products
              </button>
              <button
                onClick={() => handleCategoryProduct("Laptops")}
                className="flex cursor-pointer items-center gap-2 font-medium bg-[#09080F0D] py-1 px-4 rounded-full w-full"
              >
                Laptops
              </button>
              <button
                onClick={() => handleCategoryProduct("Phones")}
                className="flex cursor-pointer items-center gap-2 font-medium bg-[#09080F0D] py-1 px-4 rounded-full w-full"
              >
                Phones
              </button>
              <button
                onClick={() => handleCategoryProduct("Smartwatches")}
                className="flex cursor-pointer items-center gap-2 font-medium bg-[#09080F0D] py-1 px-4 rounded-full w-full"
              >
                Smart Watches
              </button>
              <button
                onClick={() => handleCategoryProduct("")}
                className="flex cursor-pointer items-center gap-2 font-medium bg-[#09080F0D] py-1 px-4 rounded-full w-full"
              >
                Accessories
              </button>
              <button
                onClick={() => handleCategoryProduct("")}
                className="flex cursor-pointer items-center gap-2 font-medium bg-[#09080F0D] py-1 px-4 rounded-full w-full"
              >
                MacBook
              </button>
              <button
                onClick={() => handleCategoryProduct("")}
                className="flex cursor-pointer items-center gap-2 font-medium bg-[#09080F0D] py-1 px-4 rounded-full w-full"
              >
                Iphones
              </button>
            </div>
          </div>
          {/* all products */}
          {products.length !== 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 col-span-5 gap-4">
              {products.map((product) => (
                <Product key={product.product_id} product={product}></Product>
              ))}
            </div>
          ) : (
            <div className="col-span-5 flex justify-center">
              <img
                src="https://res.cloudinary.com/daxjoqam6/image/upload/v1737840470/no-product_ebgqos.png"
                alt=""
              />
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Products;
