import  { useEffect } from 'react';
import { connect } from 'react-redux';
import { fetchProducts } from '../../store/products';
import { addToCart } from '../../store/cart';
import { Link } from 'react-router-dom';
import './products.scss';

const Products = ({ activeCategory, products, addToCart, fetchProducts }) => {
  useEffect(() => {
    fetchProducts();
  }, [fetchProducts]);

  const filteredProducts = products.filter(
    (product) => product.category === activeCategory
  );

  return (
    <div className="products-container">
      <h1>{activeCategory}</h1>
      <div className="products">
        {filteredProducts.map((product) => (
          <div className="product-card" key={product.id}>
            <img src={product.imgPath} alt={product.name} />
            <h3>{product.name}</h3>
            <p>Description: {product.description}</p>
            <p>Price: ${product.price}</p>
            <p>Inventory: {product.inventoryCount}</p>
            <div className="buttons">
              <button className="add-to-cart" onClick={() => addToCart(product)}>
                Add to Cart
              </button>
              {/* Use Link to route to ProductDetails */}
              <Link to={`/products/${product.id}`} className="view-details">
                View Details
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
const mapStateToProps = (state) => ({
  activeCategory: state.categories.activeCategory,
  products: state.products,
});

const mapDispatchToProps = {
  addToCart,
  fetchProducts,
};

export default connect(mapStateToProps, mapDispatchToProps)(Products);
