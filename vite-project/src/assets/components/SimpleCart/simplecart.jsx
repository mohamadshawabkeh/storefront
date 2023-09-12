import { useSelector } from 'react-redux';

const SimpleCart = () => {
  const cartItems = useSelector((state) => state.cart.cartItems);


  return (
    <div>
      <ul style={{ margin: '4px' }}>
        {cartItems.length > 0 ? (
          cartItems.map((item) => (
            <li style={{ marginRight: '10px' }} key={item.id}>
              {item.name} ({item.quantity})
              <button style={{ padding: '1px' , marginLeft:'10px'}}>
            Remove
              </button>
            </li>
          ))
        ) : (
          <li style={{ margin: '10px' }} >Your cart is empty</li>
        )}
      </ul>
    </div>
  );
};

export default SimpleCart;