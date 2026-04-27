import { useSelector } from "react-redux";

function Navbar({ setShowCart, setShowProducts }) {
  const items = useSelector((state) => state.cart.items);

  const total = items.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <div style={{ display: "flex", gap: "10px", marginBottom: "20px" }}>
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
  );
}

export default Navbar;