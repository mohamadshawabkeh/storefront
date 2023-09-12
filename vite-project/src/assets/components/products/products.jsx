/* eslint-disable no-unused-vars */
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import './products.scss'; // Keep the SCSS import
import { addToCart } from '../../store/cart';
import { decreaseInventory } from '../../store/products';

const Products = () => {
  const activeCategory = useSelector((state) => state.categories.activeCategory);
  const dummyText = useSelector((state) => state.categories.dummyText);

  const products = useSelector((state) =>
    state.products
      .filter((product) => product.category === activeCategory)
      .filter((product) => product.inventoryCount > 0)
  );

  const dispatch = useDispatch();
  
  const handleAddToCart = (product) => {
    dispatch(addToCart(product));
    dispatch(decreaseInventory(product.id));
  };

  return (
    <div className="products-container">
      <h1>{activeCategory}</h1>
      <h3>{dummyText}</h3>

      <div className="products"> {/* Keep the "products" class */}
        {products.map((product) => (
          <div className="product-card" key={product.id}> {/* Keep the "product-card" class */}
            <img src={product.imgPath} alt={product.name} />
            <h3>{product.name}</h3>
            <p>Description: {product.description}</p>
            <p>Price: ${product.price}</p>
            <p>Inventory: {product.inventoryCount}</p>
            <div className="buttons"> {/* Keep the "buttons" class */}
              <button
                className="add-to-cart" // Keep the "add-to-cart" class
                onClick={() => handleAddToCart(product)}
              >
                Add to Cart
              </button>
              <button className="view-details">View Details</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Products;
