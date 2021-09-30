import { directive } from "@babel/types";
import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "../../context/CartContext";

export const CartWidget = () => {
  const { cartQuantity } = useContext(CartContext);

  return (
    <div className="cartContainer">
      <Link to="/cart">
        <ul className="cartLogoContainer">
          <li>
            <img src="https://i.ibb.co/86rStkW/shopping-icon-shopping-cart-icon-dark-background-simple-vector-icon-shopping-icon-shopping-cart-icon.jpg" />
          </li>
          <li>
            <span className="cartNumber">Items: {cartQuantity()}</span>
          </li>
        </ul>
      </Link>
    </div>
  );
};
