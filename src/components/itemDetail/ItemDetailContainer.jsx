import ItemDetail from './ItemDetail'
import { useState, useEffect } from 'react'
import getData from '../../utils/promise'
import Data from '../../utils/data';


const ItemDetailContainer  = () => {
    const [dato, setDato] = useState({})

    useEffect(() => {
        getData(Data)
        .then(res => setDato(res[1]));
    }, [])
    
    return(
        <div className="mainProductPage">
            <ItemDetail item={dato} />
        </div>
    )
}

export default ItemDetailContainer