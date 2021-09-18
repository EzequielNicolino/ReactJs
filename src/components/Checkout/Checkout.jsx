import React, { useContext, useState } from "react";
import { Redirect } from "react-router";
import Swal from "sweetalert2";
import { CartContext } from "../../context/CartContext";
import { generateOrder } from "../../firebase/generateOrder";

export const Checkout = () => {
  const { cart, totalCart, emptyCart } = useContext(CartContext);

  const [values, setValues] = useState({
    name: "",
    tel: 0,
    email: "",
  });

  const handleInputChange = (e) => {
    setValues({
      ...values,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (
      values.name.length > 3 &&
      values.email.length > 3 &&
      values.tel.length > 5
    ) {
      generateOrder(values, cart, totalCart())
        .then((res) => {
          Swal.fire({
            icon: "success",
            title: "Compra realizada correctamente!",
            text: `Su numero de orden es ${res}`,
          });

          emptyCart();
        })
        .catch((err) => {
            Swal.fire({
                icon: "error",
                title: "Productos sin Stock",
              });
        });
    } else {
      Swal.fire({
        icon: "error",
        title: "Campos Invalidos",
        text: "Ajuste sus datos personales",
      });
    }
  };

  return (
    <div className="checkOut">
      {!cart.length ? (
        <Redirect to="/" />
      ) : (
        <div>
          <form onSubmit={handleSubmit}>

            <input
              type="text"
              value={values.name}
              onChange={handleInputChange}
              name="name"
              required
            />

            <input
              type="tel"
              value={values.tel}
              onChange={handleInputChange}
              name="tel"
              required
            />

            <input
              type="email"
              value={values.email}
              onChange={handleInputChange}
              name="email"
              required
            />

            <button type="submit">Finalizar</button>
          </form>
        </div>
      )}
    </div>
  );
};
