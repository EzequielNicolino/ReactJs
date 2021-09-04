import React, { useContext, useState } from "react";
import { CartContext } from "../../context/CartContext";
import { Counter } from "../Counter/Counter";

export const ItemDetail = ({ id, name, category, price, desc, img, stock }) => {
  const { addToCart, isInCart } = useContext(CartContext);

  const [quantity, setQuantity] = useState(1);

  const handleAdd = () => {
    addToCart({
      id,
      name,
      category,
      img,
      price,
      quantity,
    });
  };

  return (
    <div className="productDetail">
      <h2 className="productDetailName">{name}</h2>
      <p className="productDetailPrice">Precio: ${price}</p>
      <img className="productDetailImg" src={img} alt={name} />
      <p className="productDetailDesc">{desc}</p>
      <Counter
        max={stock}
        quantity={quantity}
        setQuantity={setQuantity}
        add={handleAdd}
        added={isInCart(id)}
      />
    </div>
  );
};
