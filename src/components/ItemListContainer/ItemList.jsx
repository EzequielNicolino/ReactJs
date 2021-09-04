import React from "react";
import { Item } from "./Item";

export const ItemList = ({ products }) => {
  return (
    <section>
      <div className="productContainer">
        {products.map((prod) => (
          <Item key={prod.id} item={prod} />
        ))}
      </div>
    </section>
  );
};
