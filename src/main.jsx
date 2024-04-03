import React from 'react';
import ReactDOM from 'react-dom';
import { ProductApp } from './components/ProductApp.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ProductApp title={'Lista de productos!'}/>
  </React.StrictMode>,
);