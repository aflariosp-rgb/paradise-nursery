import { useSelector, useDispatch } from "react-redux";
import { removeItem, updateQuantity } from "./CartSlice";

function CartItem() {
  const cart = useSelector((state) => state.cart.items);
  const dispatch = useDispatch();

  const totalPrice = cart.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  return (
    <div style={{ padding: "20px" }}>
      <h2>🛒 Shopping Cart</h2>

      {cart.length === 0 ? (
        <p>No items in cart</p>
      ) : (
        <>
          {cart.map((item) => (
            <div
              key={item.id}
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                borderBottom: "1px solid #ddd",
                padding: "10px 0",
              }}
            >
              <img
                src={item.image}
                alt={item.name}
                width="70"
                height="70"
              />

              <div>
                <h4>{item.name}</h4>
                <p>${item.price}</p>
              </div>

              <div>
                <button
                  onClick={() =>
                    dispatch(updateQuantity({ id: item.id, type: "decrease" }))
                  }
                >
                  -
                </button>

                <span style={{ margin: "0 10px" }}>
                  {item.quantity}
                </span>

                <button
                  onClick={() =>
                    dispatch(updateQuantity({ id: item.id, type: "increase" }))
                  }
                >
                  +
                </button>
              </div>

              <p>${item.price * item.quantity}</p>

              <button onClick={() => dispatch(removeItem(item.id))}>
                Remove
              </button>
            </div>
          ))}

          <h3 style={{ marginTop: "20px" }}>
            Total: ${totalPrice}
          </h3>
        </>
      )}
    </div>
  );
}

export default CartItem;