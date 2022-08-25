import { useState } from "react"

const ItemCount= ({Stock, initial, OnAdd}) => {
    console.log(Stock)
    const [count, setCount] = useState(initial)
    const [stock, setStock] = useState(Stock)

    const plusCount = () => {
        if(count === stock) {
            setCount(stock)
        }else{
            setCount(prevCount => prevCount +1)
        }
    }

    const minusCount = () => {
        if(count === initial) {
            setCount(1)
        }else if(count > stock){
            setCount(0)
        }
        else{
            setCount(prevCount => prevCount - 1)
        }
    }

    const onAdd = () => {
        alert(`Agregaste ${count} productos al carrito!`)
        setStock (stock => stock - count)
        setCount (1)
    };
    return(
        <div className="itemContainer">
            <div className="item">
                <button className="btn-cant" onClick={plusCount}> 
                <svg className="icon" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"  viewBox="0 0 16 16">
                    <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM8.5 4.5a.5.5 0 0 0-1 0v3h-3a.5.5 0 0 0 0 1h3v3a.5.5 0 0 0 1 0v-3h3a.5.5 0 0 0 0-1h-3v-3z"/>
                </svg>
                </button>
                <span className="itemCount">{count > stock ? "No disponible " : count}</span>
                <button className="btn-cant" onClick={minusCount}>
                    <svg className="icon" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                        <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM4.5 7.5a.5.5 0 0 0 0 1h7a.5.5 0 0 0 0-1h-7z"/>
                    </svg>
                </button>
                <button className="btnComprar" onClick={onAdd}>Agregar al carrito!</button>
            </div>
            <div>
                    <p className="itemDescription">Disponibles: {stock}</p>
            </div>
        </div>
    );
};

export default ItemCount;