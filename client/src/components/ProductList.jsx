import React, { Fragment, useState, useEffect } from "react";
import axios from "axios";

const ProductList = () => {
  const [products, setProducts] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const getProducts = async () => {
      const response = await axios({ url: "http://localhost:3010/products" });
      const {
        data: { success, data },
      } = response;

      if (success) {
        setProducts(data);
        setError(null);
      } else {
        setError("An error occured");
      }
    };
    getProducts();
  }, []);

  return (
    <div>
      <h2>List of products</h2>
      <ul>
        {products.map((product, idx) => (
          <Fragment key={idx}>
            <li>{product.name}</li>
            <li>{product.price}</li>
          </Fragment>
        ))}
      </ul>
      {error && <div>{error}</div>}
    </div>
  );
};

export default ProductList;
