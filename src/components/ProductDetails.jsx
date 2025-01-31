import { IoCartOutline } from "react-icons/io5";
import { CiHeart } from "react-icons/ci";
import { Link, useParams } from "react-router-dom";
import { addProductToLS, addWishListToLS } from "../Utility/cart";
import toast from "react-hot-toast";
import { useEffect, useState } from "react";
import { Helmet } from "react-helmet-async";

const ProductDetails = () => {
  const [products, setProducts] = useState([]);
  const [product, setProduct] = useState([]);
  const [isDisabled,setDisabled]= useState(false);
  const { productId } = useParams();
  useEffect(() => {
    const loadProducts = async () => {
      const res = await fetch("/products.json");
      const data = await res.json();
      setProducts(data);
    };
    loadProducts();
  }, []);
  useEffect(() => {
    const productIdStr = parseInt(productId);
    const targetProduct = products.find((p) => p.product_id === productIdStr);
    setProduct(targetProduct);
  }, [product, productId, products]);

  const handleProductAddToCart = (productId) => {
    addProductToLS(productId);
    toast.success(`${product?.product_name} Successfully added to the Cart`);
  };
  const handleProductAddToWishlist = (productId) => {
    addWishListToLS(productId);
    toast.success(
      `${product?.product_name} Successfully added to the Wishlist`
    );
    setDisabled(true);
  };

  return (
    <div className="">
      <Helmet>
        <title>{`Products | ${product?.product_name}`}</title>
      </Helmet>
      <div className="bg-[#9538E2] relative text-white pt-4 pb-40 ">
        <h2 className="text-3xl font-bold text-center">Product Details</h2>
        <p className="text-center">
          Explore the latest gadgets that will take your experience to the next
          level. From smart devices to <br /> the coolest accessories, we have
          it all!
        </p>
      </div>
      <div className="pb-96 bg-gray-100"></div>
      <div className="flex gap-6 mb-8 p-4 w-7xl mx-auto absolute left-0 right-0 bottom-28 bg-white rounded-2xl">
        <div className="bg-[#F3F3F3] flex justify-center items-center rounded-xl w-1/2">
          <img className="h-[400px]" src={product?.product_image} alt="" />
        </div>
        <div className="space-y-4">
          <h2 className="text-3xl font-medium">{product?.product_name}</h2>
          <p className="text-lg font-medium">Price: {product?.price}</p>
          <button className="text-[#309C08] text-sm bg-[#309C081A] border border-[#309C08] px-2 rounded-full">
            {product?.availability? 'In Stock' : 'Stock Out'}
          </button>
          <p className="text-[#09080F99]">{product?.description}</p>
          <p className="font-bold">Specification:</p>
          <ol>
            {product?.specification?.map((specific, idx) => (
              <li className="text-[#09080F99]" key={idx}>
                {idx + 1}. {specific}
              </li>
            ))}
          </ol>
          <p className="font-bold">Rating:</p>
          <div className="flex gap-4">
            <div className="rating">
              <input
                type="radio"
                name="rating-1"
                className="mask mask-star-2 bg-[#F9C004]"
              />
              <input
                type="radio"
                name="rating-1"
                className="mask mask-star-2 bg-[#F9C004]"
              />
              <input
                type="radio"
                name="rating-1"
                className="mask mask-star-2 bg-[#F9C004]"
              />
              <input
                type="radio"
                name="rating-1"
                className="mask mask-star-2 bg-[#F9C004]"
                defaultChecked
              />
              <input
                type="radio"
                name="rating-1"
                className="mask mask-star-2"
              />
            </div>
            <p className="bg-[#09080F0D] px-3 rounded-full">
              {product?.rating}
            </p>
          </div>
          <div className="flex gap-4">
            <button
              onClick={() => handleProductAddToCart(product?.product_id)}
              className="flex cursor-pointer items-center gap-2 text-white bg-[#9538E2] py-1 px-4 rounded-full"
            >
              Add To Cart
              <Link className="text-xl">
                <IoCartOutline></IoCartOutline>
              </Link>
            </button>
            <button
              onClick={() => handleProductAddToWishlist(product?.product_id)}
              disabled={isDisabled}
              className={`text-xl ${isDisabled? 'cursor-not-allowed' :'cursor-pointer'} border border-gray-300 bg-white p-2 rounded-full`}
            >
              <Link>
                <CiHeart></CiHeart>
              </Link>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
