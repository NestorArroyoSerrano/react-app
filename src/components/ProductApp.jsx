import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import { listProduct } from '../services/ProductService';
import { ProductGrid } from './ProductGrid';


export const ProductApp = () => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        const result = listProduct();
        setProducts(result);
    }, []);

    return (
        <>
            <h1>Productos!</h1>
            <ProductGrid products={products}/>
        </>
    );
};

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ProductApp />
  </React.StrictMode>,
);