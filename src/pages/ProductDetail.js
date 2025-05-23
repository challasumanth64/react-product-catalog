import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import './ProductDetail.css';

function ProductDetail() {
  const { id } = useParams();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    fetch(`https://fakestoreapi.com/products/${id}`)
      .then(res => res.json())
      .then(data => setProduct(data));
  }, [id]);

  if (!product) return <p>Loading...</p>;

  return (
    <div className="product-detail">
      <img src={product.image} alt={product.title} className="detail-image" />
      <div className="detail-info">
        <h2>{product.title}</h2>
        <p className="category">{product.category}</p>
        <p className="description">{product.description}</p>
        <p className="price">$ {product.price}</p>
        <p className="stars">{'★'.repeat(Math.round(product.rating.rate))}</p>
        <button className="btn">Add to Cart</button>
      </div>
    </div>
  );
}

export default ProductDetail;
