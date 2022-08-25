import ItemCount from "./ItemCount";

const ItemListContainer = (props) => {

    return(
        <div className="listContainer">
            <h1 className="listTitle">
                {props.greeting}
            </h1>
            <ItemCount Stock={5} initial={1}/>
        </div>
    )
}

export default ItemListContainer;