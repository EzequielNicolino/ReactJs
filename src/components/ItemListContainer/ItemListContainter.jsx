import { directive } from '@babel/types'
import React from 'react'


export const ItemListContainer = ( {msg} ) => {

    return (

        <div className="message">

            <h2>{msg}</h2>

        </div>

    )

}