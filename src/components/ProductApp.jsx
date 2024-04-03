import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import { listProduct } from '../services/ProductService';
import { ProductGrid } from './ProductGrid';
import { ProductForm } from './ProductForm';

export const ProductApp = ({ title }) => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const result = await listProduct();
        setProducts(result);
      } catch (error) {
        console.error('Error fetching products:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      <h1>{title}</h1>
      <div>
        <div>

            <ProductForm/>
        </div>
        <div>
      <ProductGrid products={products} />
      </div>     
    </div>
    </div>
  );
};

ProductApp.propTypes = {
  title: PropTypes.string.isRequired,
};

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ProductApp title={'Lista de productos!'} />
  </React.StrictMode>
);
