import { Link, useOutletContext } from 'react-router-dom';
import '../Styles/Cart.css';

const Cart = () => {
  const { cartState, setCartState } = useOutletContext(); // Access cart state from the context
  const { setCartCounter } = useOutletContext();

  // Calculate the total price of items in the cart
  const calculateTotalPrice = () => {
    return Object.values(cartState).reduce((total, item) => {
      return total + item.productInfo.price * item.numOfProduct;
    }, 0).toFixed(2); // Keep 2 decimal places
  };

  const handleCheckout = () => {
    setCartCounter(0);
    setCartState({});
  }
  

  return (
    <div className="cartProductContainer">
      <h2>Shopping Cart</h2>
      {Object.keys(cartState).length > 0 ? (
        <div className='cartProduct'>
          {Object.values(cartState).map(({ productInfo, numOfProduct }) => (
            <div className="cartItem" key={productInfo.id}>
              <img className="checkoutImg" src={productInfo.image} alt={productInfo.title} />
              <div className="cartDetails">
                <h5>{productInfo.title}</h5>
                <p>Price: ${productInfo.price.toFixed(2)}</p>
                <p>Quantity: {numOfProduct}</p>
                <p className='subtotal'>Subtotal: ${(productInfo.price * numOfProduct).toFixed(2)}</p>
              </div>
            </div>
          ))}
          <div className="cartTotal">
            <h3>Total Price: ${calculateTotalPrice()}</h3>
          </div>
          <Link to='/'><button 
            className="checkoutButton" 
            type="button"
            onClick={handleCheckout}
            >
                Proceed to Checkout
                
          </button>
          </Link>
        </div>
      ) : (
        <h3>Your cart is empty</h3>
      )}
    </div>
  );
};

export default Cart;
