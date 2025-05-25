import React from "react";
import { Link, Outlet } from "react-router-dom";
import Details from "./Details";

const Product = () => {
  return (
    <div className="bg-cyan-50 h-[45vw] w-full text-blue-950 font-[monument] px-8">
      <h1 className="text-[4vw]">Product Page</h1>
      <div className="products p-4 px-8 bg-blue-400 flex items-center justify-between">
        <h1>product1</h1>
        <Link to="/products/Details/Product-1">Show more</Link>
      </div>
      <div className="products p-4 px-8 bg-blue-400 flex items-center justify-between">
        <h1>product2</h1>
        <Link to="/products/Details/Product-2">Show more</Link>
      </div>
      <div className="products p-4 px-8 bg-blue-400 flex items-center justify-between">
        <h1>product3</h1>
        <Link to="/products/Details/Product-3">Show more</Link>
      </div>
      <Outlet />
    </div>
  );
};

export default Product;
