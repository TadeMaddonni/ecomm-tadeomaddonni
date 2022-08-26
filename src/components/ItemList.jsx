import {useState, useEffect } from 'react';
import getData from '../utils/promise'
import Data from '../utils/data';
import Item from './Item'

const ItemList = () => {
    const [products, setProducts] = useState([])

    useEffect(() =>{
        getData(Data)
        .then(res => setProducts(res));
    }, [])

    const itemElements = products.map(product => {
        return <Item key={product.id} img={product.Img} id={product.id} name={product.nombre} precio={product.precio} stock={product.stock} initial={product.cantidad} />
    })


    return(

        <div id="sectionProductos">
            {itemElements}
        </div>
    )
}

export default ItemList