import { directive } from '@babel/types'
import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { CartContext } from '../../context/CartContext'

export const CartWidget = () => {

    const { cartQuantity } = useContext(CartContext)

    return (
        
        <div className="cartContainer">
            <Link to="/cart">
                <ul className="cartLogoContainer">
                    <li><img src="https://i.ibb.co/yRmmch4/cart.png"/></li>
                    <li><span className="cartNumber">Items: {cartQuantity()}</span></li>
                </ul> 
            </Link>
        </div>

    )

 }