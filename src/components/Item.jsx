import ItemCount from "./ItemCount";

export default function (props ){
    return(

        <div className="aurisProduct">
            <div className="aurisImg">
                <img src={`/imgs/productos/${props.img}`} alt="" />
            </div>
            <div className="aurisTextContainer">
                <p className="aurisDescription"> {props.name} </p>
            </div>
            <div className="priceSection">
                <p className="aurisPrecio">${props.precio}</p>
                <ItemCount Stock={props.stock} initial={props.initial} />
            </div>
        </div>
    )
}