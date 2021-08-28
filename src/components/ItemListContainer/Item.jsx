import React from 'react'
import {Link} from 'react-router-dom'

export const Item= ( { item } ) => {

    console.log(item)

    return (
        <div className="productList">
            <img className="productHomeImg" src={item.img} alt={item.nombre}/>
            <h3>{item.nombre}</h3>
            <p>Precio: ${item.precio}</p>
            <Link to={`/detail/${item.id}`} className="productButton">Mas Información</Link>
        </div>
    )

}