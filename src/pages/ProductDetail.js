import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import Loader from '../components/Loader';
import './ProductDetail.css';

const ProductDetail = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    fetch(`https://fakestoreapi.com/products/${id}`)
      .then(res => {
        if (!res.ok) throw new Error('Product not found');
        return res.json();
      })
      .then(data => {
        setProduct(data);
        setLoading(false);
      })
      .catch(err => {
        setError('Failed to fetch product');
        setLoading(false);
      });
  }, [id]);

  if (loading) return <Loader />;
  if (error) return <p>{error}</p>;

  return (
    <div className="product-detail">
      <img src={product.image} alt={product.title} />
      <div>
        <h1>{product.title}</h1>
        <p>${product.price}</p>
        <p>{product.description}</p>
        <span>{product.category}</span>
        <br />
        <Link to="/">← Back to Products</Link>
      </div>
    </div>
  );
};

export default ProductDetail;
