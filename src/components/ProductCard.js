import React from 'react';
import { Link } from 'react-router-dom';
import './ProductCard.css';

const ProductCard = ({ product }) => (
  <Link to={`/product/${product.id}`} className="product-card">
    <img src={product.image} alt={product.title} />
    <h3>{product.title}</h3>
    <p>${product.price}</p>
    <small>{product.category}</small>
  </Link>
);

export default ProductCard;
