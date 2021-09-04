import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { UIContext } from "../../context/UIContext";
import { requestData } from "../../helpers/requestData";
import { ItemDetail } from "./ItemDetail";

export const ItemDetailContainer = () => {
  const { loading, setLoading } = useContext(UIContext);

  const { itemId } = useParams();

  const [item, setItem] = useState(null);

  useEffect(() => {
    setLoading(true);

    requestData()
      .then((res) => {
        setItem(res.find((prod) => prod.id === parseInt(itemId)));
      })
      .finally(() => {
        setLoading(false);
      });
  }, [itemId]);

  return (
    <div>
      {loading ? (
        <div className="loading">
          <img src="https://i.ibb.co/QQbB5f0/200.gif" alt="loading" />
          <h2>Cargando...</h2>
        </div>
      ) : (
        <ItemDetail {...item} />
      )}
    </div>
  );
};
