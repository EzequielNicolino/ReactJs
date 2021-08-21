import React from 'react'
import { Item } from './Item'

export const ItemList = ( { productos } ) => {



    return(
        <section>

            <div>

                {productos.map((prod) => <Item key={prod.id} item={prod}/>)}

            </div>

        </section>
    )
}
