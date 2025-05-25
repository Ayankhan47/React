import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from '../pages/home';
import About from '../pages/about';
import Product from '../pages/Product';
import Contact from '../pages/contact.jsx';
import NotFound from '../pages/NotFound.jsx';

const MainRoutes = () => {
    return (
        <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/About" element={<About />} />
        <Route path="/products" element={<Product />} />
        <Route path="/Contact" element={<Contact />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    );
}

export default MainRoutes;
