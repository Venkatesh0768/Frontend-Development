import axios from "axios";
import React, { useEffect, useState } from "react";

function Show() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getProducts = () => {
      const api = "https://dummyjson.com/products";

      axios
        .get(api)
        .then((res) => {
          console.log(res);
          setProducts(res.data.products);
          setLoading(false);
        })
        .catch((err) => {
          console.log(err);
        });
    };

    getProducts();

    return () => {
      console.log("Component Unmounted");
    };
  }, []);

  return (
    <div>
      <h1>Product Name List</h1>
      <hr />
      <ul>
        {loading ? (
          <h1>Loading...</h1>
        ) : (
          products.map((p) => <li key={p.id}>{p.title}</li>)
        )}
      </ul>
    </div>
  );
}

export default Show;
