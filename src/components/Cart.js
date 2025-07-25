import { useSelector, useDispatch } from "react-redux";
import ItemCards from "./ItemCards";
import { clearCart } from "../utils/cartSlice";

const Cart = () => {
  const cartItems = useSelector((store) => store.cart.items);

  // *** NEVER SUBSCRIBE TO THE WHOLE STORE LIKE BELOW IT WILL REDUCE THE PERFORMANCE ***
  // const store = useSelector((state) => state)
  // const cartItem = store.cart.items
  const dispatch = useDispatch();
  const clearItems = () => {
    dispatch(clearCart());
  };
  return (
    <div className="text-center m-4 p-4">
      <h1 className="text-2xl font-bold">Cart</h1>
      <div className="w-6/12 m-auto">
        <button
          className="p-2 m-2 bg-black rounded-lg text-white"
          onClick={clearItems}
        >
          Clear Cart
        </button>
        {cartItems.length === 0 && (
          <h1>Your Cart is empty! Add item to Cart!</h1>
        )}
        <ItemCards items={cartItems} />
      </div>
    </div>
  );
};

export default Cart;
