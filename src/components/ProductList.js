import React from "react";
import "../styles/ProductList.css";

const ProductList = ({ products, addToCart }) => {
  return (
    <div className="products">
      {products.map((product) => (
        <div key={product.id} className="product">
          <h3>{product.name}</h3>
          <p>&#8377;{product.price}</p>
          <button onClick={() => addToCart(product)}>Add to Cart</button>
        </div>
      ))}
    </div>
  );
};

export default ProductList;