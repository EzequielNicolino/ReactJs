import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { UIContext } from "../../context/UIContext";
import { getFireStore } from "../../firebase/firebase";
import { ItemDetail } from "./ItemDetail";
import { Redirect } from "react-router";

export const ItemDetailContainer = () => {
  const { loading, setLoading } = useContext(UIContext);

  const { itemId } = useParams();

  const [item, setItem] = useState(null);

  const [notFound, setNotFound] = useState(false);

  useEffect(() => {
    setLoading(true);

    const db = getFireStore();

    const productos = db.collection("productos");

    const item = productos.doc(itemId);

    item
      .get()
      .then((doc) => {
        if (doc.data() !== undefined) {
          setItem({ ...doc.data(), id: doc.id });
        } else {
          setNotFound(true);
        }
      })
      .finally(() => {
        setLoading(false);
      });
  }, [itemId]);

  return (
    <div>
      {loading && (
        <div className="loading">
          <img
            src="https://i.ibb.co/9gZhPv0/Top-30-Barik-GIFs-Find-the-best-GIF-on-Gfycat.gif"
            alt="loading"
          />
          <h2 className="loadingDetail">Cargando...</h2>
        </div>
      )}

      {!loading && notFound && <Redirect to="/" />}

      {!loading && !notFound && <ItemDetail {...item} />}
    </div>
  );
};
