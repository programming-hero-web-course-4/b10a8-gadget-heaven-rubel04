import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const Product = ({ product }) => {
    const { product_id, product_name, product_image, price } = product;
    return (
      <div className="card card-compact bg-base-100">
        <figure className=''>
          <img
            src={product_image}
            alt={`${product_name} image`}
          />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{product_name}</h2>
          <p>price: {price}tk</p>
          <div className="card-actions">
            <Link to={`/products/${product_id}`} className="text-[#9538E2] bg-white border-2 border-[#9538E2] py-1 px-4 rounded-full font-medium cursor-pointer">View Details</Link>
          </div>
        </div>
      </div>
    );
  };
  
  Product.propTypes = {
    product: PropTypes.object
  };
  export default Product;