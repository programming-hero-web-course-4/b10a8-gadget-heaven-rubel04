const getStoredProduct = () => {
  const storedProductStr = localStorage.getItem("cart-list");
  if (storedProductStr) {
    const storedProduct = JSON.parse(storedProductStr);
    return storedProduct;
  }
  return [];
};

const getStoredWishList = () => {
  const storedProductStr = localStorage.getItem("wish-list");
  if (storedProductStr) {
    const storedProduct = JSON.parse(storedProductStr);
    return storedProduct;
  }
  return [];
};


const addProductToLS = (productId) => {
  const storedProduct = getStoredProduct();
  if (!storedProduct.includes(productId)) {
    storedProduct.push(productId);
    const storedProductStr = JSON.stringify(storedProduct);
    localStorage.setItem("cart-list", storedProductStr);
  }
};

const addWishListToLS = (productId) => {
  const storedProduct = getStoredWishList();
  if (!storedProduct.includes(productId)) {
    storedProduct.push(productId);
    const storedProductStr = JSON.stringify(storedProduct);
    localStorage.setItem("wish-list", storedProductStr);
  }
};




const removeProductToLS = (productId) => {
    if (productId === "") {
      localStorage.removeItem('cart-list')
  } else {
    const storedProduct = getStoredProduct();
    const UpdateProduct = storedProduct.filter((p) => p !== productId);
    localStorage.setItem("cart-list", JSON.stringify(UpdateProduct));
  }
};
const removeWishlistProductToLS = (productId) => {
    if (productId === "") {
      localStorage.removeItem('wish-list')
  } else {
    const storedProduct = getStoredWishList();
    const UpdateProduct = storedProduct.filter((p) => p !== productId);
    localStorage.setItem("wish-list", JSON.stringify(UpdateProduct));
  }
};

export {
  getStoredProduct,
  addProductToLS,
  removeProductToLS,
  getStoredWishList,
  addWishListToLS,
  removeWishlistProductToLS,
};
