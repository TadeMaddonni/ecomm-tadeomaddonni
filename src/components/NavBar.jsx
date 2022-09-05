import CartWidget from './CartWidget.jsx';
import { Link } from "react-router-dom";

function Navbar () {

    return(
            <nav className="navbar navbar-expand-lg bg-light">
                    <div className="container-fluid">
                        <Link className="navbar-brand brandName" to="/">TecnoArg</Link>
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarSupportedContent">
                            <ul className="navbar-nav me-auto mb-2 mb-lg-0">

                                <li className="nav-item">
                                    <Link to="/" className="nav-link  links">Inicio</Link>
                                </li>

                                <li className="nav-item">
                                    <Link to="/category/1" className="nav-link links">Auriculares</Link>
                                </li>
                                
                                <li className="nav-item">
                                    <Link className="nav-link" to="/category/2">Celulares</Link>
                                </li>

{/* 
                                <li className="nav-item dropdown">
                                    <a className="nav-link dropdown-toggle" href="index.html" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    Tienda
                                    </a>
                                    <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                                        <li><a className="dropdown-item" href="pages/celus.html">Celulares</a></li>
                                        <li><a className="dropdown-item" href="pages/auriculares.html">Auriculares</a></li>
                                        <li><a className="dropdown-item" href="pages/tienda.html">Ver todo</a></li>
                                    </ul>
                                </li> */}

                                <li className="nav-item">
                                    <button type="button" className="no-btn nav-link cartBtn">
                                        <span>0</span><CartWidget />
                                    </button>
                                </li>


                            </ul>
                            <div className="d-flex gap-3" role="search">
                                


                            </div>
                        </div>
                    </div>
                </nav>

    )
}

export default Navbar;
