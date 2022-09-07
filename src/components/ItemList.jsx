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
            getData(Data.filter(prod => prod.categoryId === parseInt(id)), 400)
            .then(res => setProducts(res));
        }else{
            getData(Data, 600)
            .then(res => setProducts(res));
        };
    }, [id])

    const itemElements = products.map(product => {
        return <Item key={product.id} img={product.Img} id={product.id} name={product.name} precio={product.price} stock={product.stock} initial={product.quantity} />
    })


    return(

        <div id="sectionProductos">
            
            {products.length > 0 ? itemElements : <p className='loader'>Cargando...</p>}       
        </div>
    )
}

export default ItemList