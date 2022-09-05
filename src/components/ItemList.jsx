import {useState, useEffect } from 'react';
import getData from '../utils/promise'
import Data from '../utils/data';
import Item from './Item'
import {useParams}from 'react-router-dom'


const ItemList = () => {
    const [products, setProducts] = useState([])
    const {id} = useParams()

    useEffect(() =>{
        if(id){
            getData(Data.filter(prod => prod.categoryId === parseInt(id)))
            .then(res => setProducts(res));
        }else{
            getData(Data)
            .then(res => setProducts(res));
        };
    }, [id])

    const itemElements = products.map(product => {
        return <Item key={product.id} img={product.Img} id={product.id} name={product.nombre} precio={product.precio} stock={product.stock} initial={product.cantidad} />
    })


    return(

        <div id="sectionProductos" className='animate__animated animate__fadeInLeft'>
            {itemElements}
        </div>
    )
}

export default ItemList