import { useSelector, useDispatch } from "react-redux";
import { removeItem, updateQuantity } from "./CartSlice";

function CartItem() {
  const cart = useSelector((state) => state.cart.items);
  const dispatch = useDispatch();

  const getTotal = () => {
    return cart.reduce((acc, item) => acc + item.price * item.quantity, 0);
  };

  return (
    <div style={{ padding: "20px" }}>
      <h2>🛒 Shopping Cart</h2>

      {cart.length === 0 ? (
        <p>Your cart is empty</p>
      ) : (
        <>
          {cart.map((item) => (
            <div
              key={item.id}
              style={{
                display: "flex",
                alignItems: "center",
                gap: "15px",
                borderBottom: "1px solid #ccc",
                padding: "10px 0",
              }}
            >
              {/* Imagen del producto */}
              <img
                src={item.image}
                alt={item.name}
                width="80"
                height="80"
              />

              {/* Info */}
              <div style={{ flex: 1 }}>
                <h4>{item.name}</h4>
                <p>Price: ${item.price}</p>
                <p>Subtotal: ${item.price * item.quantity}</p>
              </div>

              {/* Controles cantidad */}
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

              {/* Botón eliminar */}
              <button
                onClick={() => dispatch(removeItem(item.id))}
                style={{ marginLeft: "10px" }}
              >
                Remove
              </button>
            </div>
          ))}

          {/* TOTAL GENERAL */}
          <h3 style={{ marginTop: "20px" }}>
            Total: ${getTotal()}
          </h3>
        </>
      )}
    </div>
  );
}

export default CartItem;