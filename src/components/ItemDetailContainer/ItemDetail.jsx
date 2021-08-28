import React from 'react'

export const ItemDetail = ({nombre, precio, desc, img}) => {




    return(
        <div className="productDetail">
            <h2 className="productDetailName">{nombre}</h2>
            <p className="productDetailPrice">Precio: ${precio}</p>
            <img className="productDetailImg" src={img} alt={nombre}/>
            <p className="productDetailDesc">{desc}</p>
        </div>
    )
}