import { useDispatch } from "react-redux";
import { addItem } from "./CartSlice";
import { useState } from "react";

function ProductList() {
  const dispatch = useDispatch();
  const [added, setAdded] = useState({});

  const products = [
    { id: 1, name: "Aloe Vera", price: 10, category: "Succulents", image: "https://via.placeholder.com/100" },
    { id: 2, name: "Snake Plant", price: 15, category: "Succulents", image: "https://via.placeholder.com/100" },
    { id: 3, name: "Peace Lily", price: 20, category: "Flowering", image: "https://via.placeholder.com/100" },
    { id: 4, name: "Orchid", price: 25, category: "Flowering", image: "https://via.placeholder.com/100" },
    { id: 5, name: "Ficus", price: 30, category: "Indoor Trees", image: "https://via.placeholder.com/100" },
    { id: 6, name: "Palm", price: 35, category: "Indoor Trees", image: "https://via.placeholder.com/100" },
  ];

  const categories = [...new Set(products.map(p => p.category))];

  return (
    <div>
      <h2>Plants</h2>
      {categories.map((cat) => (
        <div key={cat}>
          <h3>{cat}</h3>
          {products.filter(p => p.category === cat).map(product => (
            <div key={product.id}>
              <img src={product.image} width="100" />
              <h4>{product.name}</h4>
              <p>${product.price}</p>
              <button
                disabled={added[product.id]}
                onClick={() => {
                  dispatch(addItem(product));
                  setAdded({ ...added, [product.id]: true });
                }}
              >
                {added[product.id] ? "Added" : "Add to Cart"}
              </button>
            </div>
          ))}
        </div>
      ))}
    </div>
  );
}

export default ProductList;
