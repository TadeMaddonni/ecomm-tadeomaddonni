import CartWidget from "./CartWidget.jsx";
import { NavLink } from "react-router-dom";

function Navbar() {
	return (
		<nav className="navbar navbar-expand-lg bg-light">
			<div className="container-fluid">
				<NavLink
					className="navbar-brand brandName"
					to="ecomm-tadeomaddonni/"
				>
					TecnoArg
				</NavLink>
				<button
					className="navbar-toggler"
					type="button"
					data-bs-toggle="collapse"
					data-bs-target="#navbarSupportedContent"
					aria-controls="navbarSupportedContent"
					aria-expanded="false"
					aria-label="Toggle navigation"
				>
					<span className="navbar-toggler-icon"></span>
				</button>
				<div
					className="collapse navbar-collapse"
					id="navbarSupportedContent"
				>
					<ul className="navbar-nav me-auto mb-2 mb-lg-0">
						<li className="nav-item">
							<NavLink
								to="ecomm-tadeomaddonni/"
								className="nav-link  links"
							>
								Inicio
							</NavLink>
						</li>

						<li className="nav-item">
							<NavLink
								to="ecomm-tadeomaddonni/category/1"
								className="nav-link links"
							>
								Auriculares
							</NavLink>
						</li>

						<li className="nav-item">
							<NavLink
								className="nav-link"
								to="ecomm-tadeomaddonni/category/2"
							>
								Celulares
							</NavLink>
						</li>

						<li className="nav-item">
							<NavLink
								className="nav-link"
								to="ecomm-tadeomaddonni/category/3"
							>
								Relojes
							</NavLink>
						</li>

						<li className="nav-item">
							<NavLink
								to="ecomm-tadeomaddonni/cart"
								className="noUnderline"
							>
								<button
									type="button"
									className="no-btn nav-link cartBtn"
								>
									<CartWidget />
								</button>
							</NavLink>
						</li>
					</ul>
					<div className="d-flex gap-3" role="search"></div>
				</div>
			</div>
		</nav>
	);
}

export default Navbar;
