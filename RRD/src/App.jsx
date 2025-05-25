import React from 'react';
import {Route, Routes} from 'react-router';
import Home from './pages/home';
import About from './pages/about';
import Product from './pages/Product';
import Contact from './pages/contact.jsx';
import NotFound from './pages/NotFound.jsx';
import Nav from './components/nav.jsx';
import Details from './pages/Details.jsx';
import MainRoutes from './Routes/MainRoutes.jsx';
const App = () => {
  return (
    <div>
      <Nav />
      <MainRoutes />
    </div>
  );
}

export default App;
