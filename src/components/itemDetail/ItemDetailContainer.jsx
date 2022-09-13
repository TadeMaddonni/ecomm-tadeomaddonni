import ItemDetail from "./ItemDetail";
import { useState, useEffect } from "react";
import getData from "../../utils/promise";
import Data from "../../utils/data";
import { useParams } from "react-router-dom";

const ItemDetailContainer = () => {
    const [dato, setDato] = useState({});

    const { id } = useParams();

    useEffect(() => {
        getData(
            Data.find((item) => item.id === parseInt(id)),
            1000
        ).then((res) => setDato(res));
    }, [id]);

    return (
        <div className="mainProductPage">
            {dato.name ? (
                <ItemDetail item={dato} />
            ) : (
                <p className="loader">Cargando...</p>
            )}

            {/* <ItemDetail item={dato} /> */}
        </div>
    );
};

export default ItemDetailContainer;
