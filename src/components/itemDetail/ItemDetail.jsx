import ItemCount from '../ItemCount';

const ItemDetail = ({item}) => {
    console.log(item.stock)
    return (

        <div className="productSection">
        <div className="imgContainer">
            <img className="individualImg" src={item.Img} alt=""/>
        </div>

        <div className="infoContainer">
            <h2 className="productTitle">{item.name}</h2>
            <p className="productPrice">${item.price}</p>
            <p className="productDescription">{item.desc}</p>
            <div className="paymentSection">
                <div>
                    <div className="addToCartSection">
                        <ItemCount Stock={item.stock} initial={item.quantity} />
                    </div>
                </div>
            </div>
        </div>
    </div>  



    )
}


export default ItemDetail