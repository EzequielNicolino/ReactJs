import React from "react";
import { Link } from "react-router-dom";

export const Item = ({ item }) => {
  return (
    <div className="productList">
      <img className="productHomeImg" src={item.img} alt={item.name} />
      <h3>{item.name}</h3>
      <p>Precio: ${item.price}</p>
      <Link to={`/detail/${item.id}`} className="productButton">
        Mas Información
      </Link>
    </div>
  );
};
