import { useSelector } from "react-redux";

function Navbar({ setShowCart, setShowProducts }) {
  const items = useSelector((state) => state.cart.items);

  const total = items.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        padding: "15px",
        backgroundColor: "green",
        color: "white"
      }}
    >
      <h2>🌿 Paradise Nursery</h2>

      <div>
        <button onClick={() => { setShowCart(false); setShowProducts(false); }}>
          Home
        </button>

        <button onClick={() => { setShowCart(false); setShowProducts(true); }}>
          Plants
        </button>

        <button onClick={() => setShowCart(true)}>
          Cart 🛒 ({total})
        </button>
      </div>
    </div>
  );
}

export default Navbar;