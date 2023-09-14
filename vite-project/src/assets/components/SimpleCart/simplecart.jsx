import { useSelector, useDispatch } from 'react-redux';
import request from 'superagent';
import { removeFromCart } from '../../store/actions/cart';

const SimpleCart = () => {
  const cartItems = useSelector((state) => state.cart.cartItems);
  const dispatch = useDispatch();

  // Function to check if an item is in the cart
  const itemInCart = (productId) =>
    cartItems.some((item) => item.id === productId);

  const handleRemoveFromCart = async (productId) => {
    try {
      // Send a DELETE request to your API to remove the product from the cart
      await request.delete(`http://localhost:3000/cart/${productId}`);

      // Dispatch the removeFromCart action to remove the product from the Redux store
      dispatch(removeFromCart(productId));
    } catch (error) {
      console.error('Error removing from cart:', error);
    }
  };

  return (
    <div>
      <ul style={{ margin: '4px' }}>
        {cartItems.length > 0 ? (
          cartItems.map((item) => (
            <li style={{ marginRight: '10px' }} key={item.id}>
              {item.name} ({item.quantity})
              <button
                style={{ padding: '1px', marginLeft: '10px' }}
                onClick={() => handleRemoveFromCart(item.id)}
                disabled={!itemInCart(item.id)} 
              >
                Remove
              </button>
            </li>
          ))
        ) : (
          <li style={{ margin: '10px' }}>Your cart is empty</li>
        )}
      </ul>
    </div>
  );
};

export default SimpleCart;
