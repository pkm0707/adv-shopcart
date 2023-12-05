import React from "react";
import { products } from "./Products";
import { Product } from "./Product";
import LinearProgress from '@mui/material/LinearProgress';
export const Shop = () => {
    return (
      <div className="shop">
        <div className="shopTitle">
          <LinearProgress color="secondary" />
          <h2>GUVI Cart</h2>
          <LinearProgress color="inherit" />
        </div>
        <div className="products">
          {products.map((product,index) => (
            <Product data={product} key={index}/>
          ))}
        </div>
      </div>
    );
  };