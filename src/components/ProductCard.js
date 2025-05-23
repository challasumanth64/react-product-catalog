import React from 'react';
import { useNavigate } from 'react-router-dom';
import './ProductCard.css';

function ProductCard({ product }) {
  const navigate = useNavigate();
  return (
    <div className="product-card" onClick={() => navigate(`/product/${product.id}`)}>
      <img src={product.image} alt={product.title} className="product-image" />
      <h3>{product.title}</h3>
      <p>{product.category}</p>
      <p>$ {product.price}</p>
      <p className="stars">{'★'.repeat(Math.round(product.rating.rate))}</p>
    </div>
  );
}

export default ProductCard;