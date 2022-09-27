import { useState, useEffect } from "react";
import Item from "./Item";
import { useParams } from "react-router-dom";

import { firestoreFetch } from "../utils/firebaseConfig";
import Spinner from "./Spinner";

const ItemList = () => {
	const [products, setProducts] = useState([]);
	const { catId } = useParams();

	useEffect(() => {
		if (catId) {
			firestoreFetch(catId).then((res) => setProducts(res));
		} else {
			firestoreFetch().then((res) => setProducts(res));
		}
	}, [catId]);

	const itemElements = products.map((product) => {
		return (
			<Item
				key={product.id}
				img={product.img}
				id={product.id}
				name={product.name}
				precio={product.price}
				stock={product.stock}
				initial={product.quantity}
			/>
		);
	});

	return (
		<div id="sectionProductos">
			{products.length > 0 ? (
				itemElements
			) : (
				<div className="loaderContainer">
					<Spinner />
					<p className="loader">Cargando...</p>
				</div>
			)}
		</div>
	);
};

export default ItemList;
