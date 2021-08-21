import React from 'react'

export const Item= ( { item } ) => {



    return (
        <div>
            <img src={item.img} alt={item.nombre}/>
            <h3>{item.nombre}</h3>
            <p>{item.desc}</p>
            <p>${item.precio}</p>
        </div>
    )

}