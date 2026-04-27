import { useState } from "react";
import ProductList from "./ProductList";
import CartItem from "./CartItem";
import Navbar from "./Navbar";
import AboutUs from "./AboutUs";

function App() {
  const [showProducts, setShowProducts] = useState(false);
  const [showCart, setShowCart] = useState(false);

  return (
    <div>

      {/* LANDING PAGE */}
      {!showProducts && !showCart && (
        <div style={{ padding: "20px", textAlign: "center" }}>
          <h1>🌿 Paradise Nursery</h1>

          <AboutUs />

          <button
            onClick={() => setShowProducts(true)}
            style={{ marginTop: "20px" }}
          >
            Get Started
          </button>
        </div>
      )}

      {/* PRODUCTS PAGE */}
      {showProducts && !showCart && (
        <div>
          <Navbar
            setShowCart={setShowCart}
            setShowProducts={setShowProducts}
          />
          <ProductList />
        </div>
      )}

      {/* CART PAGE */}
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