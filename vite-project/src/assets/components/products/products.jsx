import { useSelector } from 'react-redux';
import './products.scss'; 

const Products = () => {
  const activeCategory = useSelector((state) => state.categories.activeCategory); 

  const products = useSelector((state) =>
    state.products.filter((product) => product.category === activeCategory)
  );

  return (
    <div className="products-container">
      <h2>Products</h2>
      <div className="products">
        {products.map((product) => (
          <div className="product-card" key={product.id}>
            <img src={product.imgPath} alt={product.name} />
            <h3>{product.name}</h3>
            <p>Description: {product.description}</p>
            <p>Price: ${product.price}</p>
            <p>Inventory: {product.inventoryCount}</p>
            <div className="buttons">
              <button className="add-to-cart">Add to Cart</button>
              <button className="view-details">View Details</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Products;
