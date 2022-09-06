import ItemCount from '../ItemCount';

const ItemDetail = ({item}) => {
    console.log(item.stock)
    return (

        <div className="productSection">
            <div className="imgContainer">
                <img className="individualImg" src={item.Img} alt=""/>
            </div>

            <div className="infoContainer">
                <h2 className="productTitle">{item.nombre}</h2>
                <p className="productPrice">${item.precio}</p>
                <p className="productDescription">{item.descripcion}</p>
                <div className="paymentSection">
                    <div>
                        <div className="addToCartSection">
                            <ItemCount Stock={item.stock} initial={item.cantidad} />
                        </div>
                    </div>
                </div>
            </div>
        </div>  
    )
}


export default ItemDetail