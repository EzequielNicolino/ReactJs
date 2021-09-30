import { createContext } from "react";
import React, { useState } from "react";

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  const addToCart = (prod) => {
    setCart([...cart, prod]);
  };

  const cartQuantity = () => {
    return cart.reduce((acc, prod) => acc + prod.quantity, 0);
  };

  const eraseItem = (id) => {
    setCart(cart.filter((prod) => prod.id !== id));
  };

  const emptyCart = () => {
    setCart([]);
  };

  const isInCart = (id) => {
    return cart.some((el) => el.id == id);
  };

  const totalCart = () => {
    return cart.reduce((acc, prod) => acc + prod.price * prod.quantity, 0);
  };

  return (
    <CartContext.Provider
      value={{
        cart,
        totalCart,
        isInCart,
        addToCart,
        cartQuantity,
        emptyCart,
        eraseItem,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};
