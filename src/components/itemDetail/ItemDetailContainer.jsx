import ItemDetail from './ItemDetail'
import { useState, useEffect } from 'react'
import getData from '../../utils/promise'
import Data from '../../utils/data';
import {useParams} from 'react-router-dom'

const ItemDetailContainer  = () => {
    const [dato, setDato] = useState({})

    const  { id } = useParams();
    
    
    useEffect(() => {
        getData(Data.find(item => item.id === parseInt(id)))
        .then(res => setDato(res));
    }, [id])
    
    return(
        <div className="mainProductPage">
            <ItemDetail item={dato} />
        </div>
    )
}

export default ItemDetailContainer