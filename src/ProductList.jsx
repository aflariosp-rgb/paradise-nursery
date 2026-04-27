import { useDispatch } from "react-redux";
import { addItem } from "./CartSlice";
import { useState } from "react";

function ProductList() {
  const dispatch = useDispatch();
  const [added, setAdded] = useState({});

  const products = [
    {
      id: 1,
      name: "Aloe Vera",
      price: 10,
      category: "Succulents",
      image: "https://cdn.pixabay.com/photo/2016/10/06/22/29/aloe-vera-1720122_1280.jpg"
    },
    {
      id: 2,
      name: "Snake Plant",
      price: 15,
      category: "Succulents",
      image: "https://cdn.pixabay.com/photo/2018/05/01/21/47/plant-3369797_1280.jpg"
    },
    {
      id: 3,
      name: "Peace Lily",
      price: 20,
      category: "Flowering",
      image: "https://cdn.pixabay.com/photo/2017/08/01/08/29/flower-2568863_1280.jpg"
    },
    {
      id: 4,
      name: "Orchid",
      price: 25,
      category: "Flowering",
      image: "https://cdn.pixabay.com/photo/2016/03/27/22/16/orchid-1281747_1280.jpg"
    },
    {
      id: 5,
      name: "Ficus",
      price: 30,
      category: "Indoor Trees",
      image: "https://cdn.pixabay.com/photo/2017/06/20/19/22/ficus-2426623_1280.jpg"
    },
    {
      id: 6,
      name: "Palm",
      price: 35,
      category: "Indoor Trees",
      image: "https://cdn.pixabay.com/photo/2016/03/05/19/02/palm-1238322_1280.jpg"
    },
  ];

  const categories = [...new Set(products.map((p) => p.category))];

  return (
    <div>
      <h2>🌱 Plant Catalog</h2>

      {categories.map((cat) => (
        <div key={cat}>
          <h3>{cat}</h3>

          <div style={{ display: "flex", gap: "15px", flexWrap: "wrap" }}>
            {products
              .filter((p) => p.category === cat)
              .map((product) => (
                <div key={product.id} style={{ border: "1px solid #ddd", padding: "10px", width: "180px" }}>
                  
                  <img
                    src={product.image}
                    alt={product.name}
                    width="150"
                    height="120"
                  />

                  <h4>{product.name}</h4>
                  <p>${product.price}</p>

                  <button
                    disabled={added[product.id]}
                    onClick={() => {
                      dispatch(addItem(product));
                      setAdded({ ...added, [product.id]: true });
                    }}
                  >
                    {added[product.id] ? "Added ✔" : "Add to Cart"}
                  </button>
                </div>
              ))}
          </div>
        </div>
      ))}
    </div>
  );
}

export default ProductList;