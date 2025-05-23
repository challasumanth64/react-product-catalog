import React, { useEffect, useState } from 'react';
import ProductCard from '../components/ProductCard';
import Loader from '../components/Loader';
import './ProductList.css';

const ProductList = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    fetch('https://fakestoreapi.com/products')
      .then(res => {
        if (!res.ok) throw new Error('Network response was not ok');
        return res.json();
      })
      .then(data => {
        setProducts(data);
        setLoading(false);
      })
      .catch(err => {
        setError('Failed to load products');
        setLoading(false);
      });
  }, []);

  if (loading) return <Loader />;
  if (error) return <p>{error}</p>;

  return (
    <div className="product-list">
      {products.map(product => (
        <ProductCard product={product} key={product.id} />
      ))}
    </div>
  );
};

export default ProductList;
