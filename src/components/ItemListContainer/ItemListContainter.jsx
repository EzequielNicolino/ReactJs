import React, { useContext, useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { UIContext } from "../../context/UIContext";
import { ItemList } from "./ItemList";
import { getFireStore } from "../../firebase/firebase";

export const ItemListContainer = ({ msg }) => {
  const { loading, setLoading } = useContext(UIContext);

  const { catId } = useParams();

  const [data, setData] = useState([]);

  useEffect(() => {
    setLoading(true);

    const db = getFireStore();

    const productos = db.collection("productos");

    if (catId) {
      const filtrado = productos.where("category", "==", catId);
      filtrado
        .get()
        .then((response) => {
          const data = response.docs.map((doc) => ({
            ...doc.data(),
            id: doc.id,
          }));
          setData(data);
        })
        .finally(() => {
          setLoading(false);
        });
    } else {
      productos
        .get()
        .then((response) => {
          const data = response.docs.map((doc) => ({
            ...doc.data(),
            id: doc.id,
          }));
          setData(data);
        })
        .finally(() => {
          setLoading(false);
        });
    }
  }, [catId]);

  return (
    <div className="message">
      <h2>{msg}</h2>

      <ul className="productNav">
        <li>
          <Link to={"/category/mother"}>Placa Madre</Link>
        </li>
        <li>
          <Link to={"/category/cpu"}>Procesador</Link>
        </li>
        <li>
          <Link to={"/category/ram"}>Ram</Link>
        </li>
        <li>
          <Link to={"/category/psu"}>Fuente</Link>
        </li>
      </ul>

      {loading ? <h2>Cargando...</h2> : <ItemList products={data} />}
    </div>
  );
};
