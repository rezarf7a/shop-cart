import React from 'react';
import {Route, Routes, Navigate } from 'react-router-dom';
import { Provider } from 'react-redux';

import "./App.module.css"

// components
import Store from './components/Store';
import ProductDetails from './components/ProductDetails';
import Navbar from './components/shared/Navbar';
import ShopCart from './components/ShopCart';

//redux
import store from './redux/store';

const App = () => {
  return (
    <Provider store={store}>
        <Navbar />
        <Routes>
          <Route path='/products/:id' element={<ProductDetails />} />
          <Route path='/products' element={<Store />} />
          <Route path='/cart' element={<ShopCart />} />
          <Route path='/*' element={<Navigate to='/products' />} />
        </Routes>
    </Provider>
  );
};

export default App;