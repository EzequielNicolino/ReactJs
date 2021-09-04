import { directive } from "@babel/types";
import React from "react";
import { CartWidget } from "../CartWidget/CartWidget";
import { Link } from "react-router-dom";

export const NavBar = () => {
  return (
    <header className="header">
      <Link to={"/"}>
        <img className="logo" src="https://i.ibb.co/59cF2sJ/N2.png" />
      </Link>

      <CartWidget />

      <nav>
        <ul>
          <li>
            <Link to={"/"}>Home</Link>
          </li>
          <li>
            <Link to={"/servicios"}>Servicios</Link>
          </li>
          <li>
            <Link to={"/sobreNosotros"}>Sobre Nosotros</Link>
          </li>
          <li>
            <Link to={"/contacto"}>Contacto</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};
