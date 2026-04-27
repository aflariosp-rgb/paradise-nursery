import { useSelector, useDispatch } from "react-redux";
import { removeItem, updateQuantity } from "./CartSlice";

function CartItem() {
  const dispatch = useDispatch();
  const items = useSelector((state) => state.cart.items);

  const totalCost = items.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  return (
    <div>
      <h2>Shopping Cart</h2>

      {items.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        items.map((item) => (
          <div key={item.id} style={{ marginBottom: "15px" }}>
            <h3>{item.name}</h3>
            <p>
              ${item.price} x {item.quantity}
            </p>

            {/* AUMENTAR */}
            <button
              onClick={() =>
                dispatch(
                  updateQuantity({
                    id: item.id,
                    quantity: item.quantity + 1,
                  })
                )
              }
            >
              +
            </button>

            {/* DISMINUIR (CORREGIDO) */}
            <button
              onClick={() => {
                if (item.quantity > 1) {
                  dispatch(
                    updateQuantity({
                      id: item.id,
                      quantity: item.quantity - 1,
                    })
                  );
                }
              }}
            >
              -
            </button>

            {/* ELIMINAR */}
            <button onClick={() => dispatch(removeItem(item.id))}>
              Remove
            </button>
          </div>
        ))
      )}

      <h3>Total: ${totalCost.toFixed(2)}</h3>

      <button onClick={() => alert("Checkout coming soon 🚧")}>
        Checkout
      </button>
    </div>
  );
}

export default CartItem;