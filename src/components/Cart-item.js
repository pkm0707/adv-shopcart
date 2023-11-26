import React, { useContext } from "react";
import { ShopContext } from "./Shop-context";
export const CartItem = (props) => {
    const { id, title, price, images, rating} = props.data;
    const { cartItems, addToCart, removeFromCart, updateCartItemCount } =
      useContext(ShopContext);
  
    return (
      <div className="cartItem">
        <img src={images} alt={title}/>
        <div className="description">
          <p>
            <p><b>{title}</b></p>
          </p>
          <p>⭐{rating}</p>
          <p style={{fontSize:"20px"}}>Rs.{price}</p>
          <div className="countHandler">
            <button onClick={() => removeFromCart(id)}> - </button>
            <input
              value={cartItems[id]}
              onChange={(e) => updateCartItemCount(Number(e.target.value), id)}
            />
            <button onClick={() => addToCart(id)}> + </button>
          </div>
        </div>
      </div>
    );
  };