/* eslint-disable react-hooks/rules-of-hooks */
/* eslint-disable no-unused-vars */
import { connect } from 'react-redux';
import { useParams } from 'react-router-dom';
import { getProductById } from '../../store/products';

const ProductDetails = ({ product }) => {
  const { productId } = useParams();

  if (!product) {
    return <div>Product not found.</div>;
  }

  return (
    <div className="product-details">
      <h2>{product.name}</h2>
      <p>{product.description}</p>
      <p>Price: ${product.price}</p>
      <p>Inventory: {product.inventoryCount}</p>
    </div>
  );
};

const mapStateToProps = (state, props) => {
  const productId = parseInt(useParams().productId);
  const product = getProductById(state, productId);
  return {
    product,
  };
};

export default connect(mapStateToProps)(ProductDetails);
