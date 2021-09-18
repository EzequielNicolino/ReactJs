import React, { useContext } from "react";
import { CartContext } from "../../context/CartContext";
import { Link } from "react-router-dom";

export const CartDisplay = () => {
  const { cart, emptyCart, eraseItem } = useContext(CartContext);

  return (
    <div className="cartDisplay">
      {cart.map((prod) => (
        <div key={prod.id}>
          <br />
          <ul className="finalCart">
            <li>
              <h3>{prod.name}</h3>
            </li>
            <li>
              <p>Cantidad: {prod.quantity}</p>
            </li>
            <li>
              <p>Precio: ${prod.price * prod.quantity}</p>
            </li>
            <li>
              <p onClick={() => eraseItem(prod.id)}>X</p>
            </li>
          </ul>
        </div>
      ))}
      <br />
      <button className="emptyCart" onClick={emptyCart}>
        Vaciar Carrito
      </button>
      <Link to="/checkout">
        <button className="emptyCart">
          Terminar Compra
        </button>
      </Link>
    </div>
  );
};
