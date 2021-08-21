import { directive } from '@babel/types'
import React, { useEffect, useState } from 'react'
import { pedirDatos } from '../../helpers/pedirDatos'
import { ItemList } from './ItemList'


export const ItemListContainer = ( {msg} ) => {

    const[data, setData] = useState([])
    const[loading, setLoading] = useState(false)

    useEffect( ()=> {
        
        setLoading(true)

        pedirDatos()
            .then(res => setData(res))
            .catch(err => console.log(err))
            .finally( () => {
                setLoading(false)
            })

    }, [])

    return (

        <div className="message">
            <h2>{msg}</h2>

            {loading ? <h2>Cargando...</h2> 
            
            : <ItemList productos={data}/>
        
            } 

        </div>

    )

}