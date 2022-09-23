import { Link } from "react-router-dom";
export default function Item(props) {
	console.log(props.id);
	return (
		<div className="aurisProduct animate__animated animate__fadeInLeft">
			<div className="aurisImg">
				<img src={props.img} alt="ipad" border="0" />
				{/* <img src="https://ibb.co/KsBQnCJ" alt="" /> */}
			</div>
			<div className="aurisTextContainer">
				<p className="aurisDescription"> {props.name} </p>
			</div>
			<div className="priceSection">
				<p className="aurisPrecio">${props.precio}</p>
				<Link to={`/ecomm-tadeomaddonni/item/${props.id}`}>
					<button className="detailBtn">Ver detalles</button>
				</Link>
			</div>
		</div>
	);
}
