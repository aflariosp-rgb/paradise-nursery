import { useState } from "react";
import ProductList from "./ProductList";
import CartItem from "./CartItem";
import Navbar from "./Navbar";
import AboutUs from "./AboutUs";

function App() {
  const [showProducts, setShowProducts] = useState(false);
  const [showCart, setShowCart] = useState(false);

  return (
    <div style={{ padding: "20px" }}>

      {/* 🏠 LANDING PAGE */}
      {!showProducts && !showCart && (
        <div>
          <h1>🌿 Paradise Nursery</h1>

          <AboutUs />

          <button onClick={() => setShowProducts(true)}>
            Get Started
          </button>
        </div>
      )}

      {/* 🌱 PRODUCTOS */}
      {showProducts && !showCart && (
        <div>
          <Navbar
            setShowCart={setShowCart}
            setShowProducts={setShowProducts}
          />

          <ProductList />
        </div>
      )}

      {/* 🛒 CARRITO */}
      {showCart && (
        <div>
          <Navbar
            setShowCart={setShowCart}
            setShowProducts={setShowProducts}
          />

          <CartItem />
        </div>
      )}

    </div>
  );
}

export default App;