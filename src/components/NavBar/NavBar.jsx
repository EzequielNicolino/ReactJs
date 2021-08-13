import { directive } from '@babel/types'
import React from 'react'
import { CartWidget } from '../CartWidget/CartWidget'

export const NavBar = () => {


    return (

        <header className="header">

            <img src="https://i.ibb.co/59cF2sJ/N2.png"/>

            <nav>

                <ul>
                    <li><a href="#">Home</a></li>
                    <li><a href="#">Servicios</a></li>
                    <li><a href="#">Sobre Nosotros</a></li>
                    <li><a href="#">Contacto</a></li>
                </ul>
                
            </nav>

            <CartWidget/>

        </header>
    )
}