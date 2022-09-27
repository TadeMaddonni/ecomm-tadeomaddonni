import { useEffect } from "react";
import { useContext } from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "../../context/CartContext";
import ItemCount from "../ItemCount";
import Swal from "sweetalert2";

const ItemDetail = ({ item }) => {
	const cart = useContext(CartContext);
	const [itemCount, setItemCount] = useState(1);
	const [itemStock, setItemStock] = useState(1);
	const [added, setAdded] = useState(false);

	useEffect(() => {
		setItemCount(item.quantity);

		if (cart.cartList.find((prod) => prod.id === item.id)) {
			setItemStock(cart.countStock(item.id));
		} else {
			setItemStock(item.stock);
		}
	}, [item, cart]);

	const onAdd = (stock, count) => {
		if (stock < 1) {
			Swal.fire({
				title: "Error!",
				text: `No hay suficiente stock!`,
				icon: "error",
				confirmButtonText: "Volver",
			});
		} else {
			Swal.fire({
				title: "Genial!",
				text: `Has agregado ${
					count > 1 ? `${count} productos` : `${count} producto`
				} al carrito`,
				icon: "success",
				confirmButtonText: "Continuar",
			});
			setItemStock(stock - count);
			setAdded(true);
			cart.addItem(item, count);
		}
	};

	return (
		<div className="productSection">
			<div className="imgContainer">
				<img className="individualImg" src={item.img} alt="" />
			</div>

			<div className="infoContainer">
				<h2 className="productTitle">{item.name}</h2>
				<p className="productPrice">${item.price}</p>
				<p className="productDescription">{item.desc}</p>
				<div className="paymentSection">
					<div>
						<div className="addToCartSection">
							{added === false ? (
								<ItemCount
									Stock={itemStock}
									initial={itemCount}
									onAdd={onAdd}
								/>
							) : (
								<Link
									to="/ecomm-tadeomaddonni/cart"
									className="checkoutBtn noUnderline"
								>
									Finalizar compra
								</Link>
							)}
						</div>
						<div>
							<p className="itemDescription">
								Disponibles: {itemStock}
							</p>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default ItemDetail;
