const ItemListContainer = (props) => {

    return(
        <div className="listContainer">
            <h1 className="listTitle">
                {props.greeting}
            </h1>
        </div>
    )
}

export default ItemListContainer;