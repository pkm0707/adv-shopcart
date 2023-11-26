import React, { useContext } from "react";
import { ShopContext } from "./Shop-context";
import { products } from "./Products";
import { CartItem } from "./Cart-item";
import { useNavigate } from "react-router-dom";
export const Cart = () => {
    const { cartItems, getTotalCartAmount, checkout } = useContext(ShopContext);
    const totalAmount = getTotalCartAmount();
  
    const navigate = useNavigate();
  
    return (
      <div className="cart">
        <div>
          <h2>Your Cart Items</h2>
        </div>
        <div className="cart">
          {products.map((product) => {
            if (cartItems[product.id] !== 0) {
              return <CartItem data={product} />;
            }
          })}
        </div>
  
        {totalAmount > 0 ? (
          <div className="checkout">
            <p style={{textAlign:"center",border:"2px solid black",backgroundColor:"green",color:"white",fontWeight:"20px"}}>Total Amount : Rs.{totalAmount} </p>
            <button onClick={() => navigate("/")}> Continue Shopping </button>
            <button
              onClick={() => {
                checkout();
                navigate("/checkout");
              }}
            >
              {" "}
              Checkout{" "}
            </button>
          </div>
        ) : (
          <h3> Your Shopping Cart is Empty</h3>
        )}
      </div>
    );
  };