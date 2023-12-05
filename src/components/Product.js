import React, { useContext } from "react";
import { ShopContext } from "./Shop-context";
export const Product = (props) => {
    const { id, title, price, images,rating,discountPercentage,description} = props.data;
    const { addToCart, cartItems } = useContext(ShopContext);
  
    const cartItemCount = cartItems[id];
  
    return (
      <div className="product">
        <img src={images} alt={title}/>
        <div className="description">
          <div style={{display:"flex",flexWrap:"wrap",justifyContent:"space-between",alignItems:"center"}}>
            <b>{title}</b>
            <p>⭐{rating}</p>
          </div>
          <p>Discount : {discountPercentage}% </p>
          <p>Rs.{price}</p>
          <p style={{fontSize:"15px"}}>Discription : {description}</p>
        </div>
        <button className="addToCartBttn" onClick={() => addToCart(id)}>
          Add To Cart {cartItemCount > 0 && <> ({cartItemCount})</>}
        </button>
      </div>
    );
  };