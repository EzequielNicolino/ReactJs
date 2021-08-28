import { directive } from '@babel/types'
import React, { useEffect, useState } from 'react'
import { useParams, Link } from 'react-router-dom'
import { pedirDatos } from '../../helpers/pedirDatos'
import { ItemList } from './ItemList'


export const ItemListContainer = ( {msg} ) => {

    const { catId } = useParams()

    const[data, setData] = useState([])
    const[loading, setLoading] = useState(false)

    useEffect( ()=> {
        
        setLoading(true)

        pedirDatos()
            .then(res => {

                if (catId){
                    const arrayFilter = res.filter (prod => prod.category === catId)
                    setData(arrayFilter)
                } else {
                    setData(res)
                }
                
            })
            .catch(err => console.log(err))
            .finally( () => {
                setLoading(false)
            })

    }, [catId])

    return (

        <div className="message">
            <h2>{msg}</h2>

            <ul className="productNav">
                <li><Link to={"/category/mother"}>Placa Madre</Link></li>
                <li><Link to={"/category/cpu"}>Procesador</Link></li>
                <li><Link to={"/category/ram"}>Ram</Link></li>
                <li><Link to={"/category/psu"}>Fuente</Link></li>
            </ul>

            {loading ? <h2>Cargando...</h2> 
            
            : <ItemList productos={data}/>
        
            } 

        </div>

    )

}