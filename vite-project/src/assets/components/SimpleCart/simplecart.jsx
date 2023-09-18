import { useSelector, useDispatch } from 'react-redux';
import { removeFromCart } from '../../store/cart'; 

const SimpleCart = () => {
  const cartItems = useSelector((state) => state.cart.cartItems);
  const dispatch = useDispatch();

  const handleRemoveFromCart = (productId) => {
    dispatch(removeFromCart(productId));
  };

  return (
    <div>
      <ul className="cart-list">
        {cartItems.length > 0 ? (
          cartItems.map((item) => (
            <li className="cart-item" key={item.id}>
              {item.name} ({item.quantity})
              <button
                className="remove-button"
                onClick={() => handleRemoveFromCart(item.id)}
              >
                Remove
              </button>
            </li>
          ))
        ) : (
          <li className="empty-cart">Your cart is empty</li>
        )}
      </ul>
    </div>
  );
};

export default SimpleCart;
