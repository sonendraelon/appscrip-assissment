import React from "react";
import "./ProductCard.css";

const ProductCard = ({ product }) => (
  <div className="product-card">
    <img
      src={product.image}
      alt={product.title}
      className="product-image"
    />
    <h3 className="product-name">{product.title}</h3>
    <p className="product-price">${product.price}</p>
  </div>
);

export default ProductCard;
