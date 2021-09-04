import React, { useState } from "react";
import { Link } from "react-router-dom";

export const Counter = ({ max, quantity, setQuantity, add, added }) => {
  const handleAdd = () => {
    if (quantity < max) {
      setQuantity(quantity + 1);
    }
  };

  const handleSubtract = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  return (
    <div>
      {added ? (
        <Link to="/cart">
          <button className="endPurchase">Terminar Compra</button>
        </Link>
      ) : (
        <div>
          <ul className="addToCart">
            <li>
              <button className="cartMinus" onClick={handleSubtract}>
                -
              </button>
            </li>
            <li>
              <p>{quantity}</p>
            </li>
            <li>
              <button className="cartPlus" onClick={handleAdd}>
                +
              </button>
            </li>
          </ul>
          <br />
          <button className="addProduct" onClick={add}>
            Agregar al carrito
          </button>
        </div>
      )}
    </div>
  );
};
