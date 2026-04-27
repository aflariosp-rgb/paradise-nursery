import { useSelector, useDispatch } from "react-redux";
import { removeItem, updateQuantity } from "./CartSlice";

function CartItem() {
  const cart = useSelector((state) => state.cart.items);
  const dispatch = useDispatch();

  const total = cart.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  return (
    <div>
      <h2>🛒 Shopping Cart</h2>

      {cart.length === 0 ? (
        <p>Your cart is empty</p>
      ) : (
        <>
          {cart.map((item) => (
            <div key={item.id} style={{ marginBottom: "15px" }}>
              <h4>{item.name}</h4>
              <p>Price: ${item.price}</p>

              <p>Quantity: {item.quantity}</p>

              <button
                onClick={() =>
                  dispatch(updateQuantity({ id: item.id, type: "decrease" }))
                }
              >
                -
              </button>

              <button
                onClick={() =>
                  dispatch(updateQuantity({ id: item.id, type: "increase" }))
                }
              >
                +
              </button>

              <button onClick={() => dispatch(removeItem(item.id))}>
                Remove
              </button>
            </div>
          ))}

          <h3>Total: ${total}</h3>
        </>
      )}
    </div>
  );
}

export default CartItem;