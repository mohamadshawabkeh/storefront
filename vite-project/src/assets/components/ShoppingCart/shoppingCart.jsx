/* eslint-disable no-unused-vars */
import { useState } from 'react';

const ShoppingCart = () => {
  const [billingInfo, setBillingInfo] = useState({});
  const [cartItems, setCartItems] = useState([]); 

  const calculateTotal = () => {
    return cartItems.reduce((total, item) => total + item.price, 0);
  };

  const addToCart = (item) => {
    setCartItems([...cartItems, item]);
  };

  const removeFromCart = (itemId) => {
    const updatedCartItems = cartItems.filter((item) => item.id !== itemId);
    setCartItems(updatedCartItems);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Thank you for your purchase');
  };

  return (
    <div className="shopping-cart-container">
      <h1>Shopping Cart</h1>
      {cartItems.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <div>
          <table>
            <thead>
              <tr>
                <th>Product Name</th>
                <th>Price</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {cartItems.map((item) => (
                <tr key={item.id}>
                  <td>{item.name}</td>
                  <td>${item.price}</td>
                  <td>
                    <button onClick={() => removeFromCart(item.id)}>
                      Remove
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          <p>Total: ${calculateTotal()}</p>
          <form onSubmit={handleSubmit}>
            <h2>Checkout</h2>
            <label>
              Billing/Shipping Address:
              <input
                type="text"
                required
                onChange={(e) =>
                  setBillingInfo({ ...billingInfo, address: e.target.value })
                }
              />
            </label>
            <label>
              Credit Card Information:
              <input
                type="text"
                required
                onChange={(e) =>
                  setBillingInfo({ ...billingInfo, creditCard: e.target.value })
                }
              />
            </label>
            <button type="submit">Submit</button>
          </form>
        </div>
      )}
    </div>
  );
};

export default ShoppingCart;
