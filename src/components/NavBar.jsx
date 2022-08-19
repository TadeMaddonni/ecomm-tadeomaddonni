import '../App.css';
import CartWidget from './CartWidget.jsx';

function Navbar () {

    return(
            <nav className="navbar navbar-expand-lg bg-light">
                    <div className="container-fluid">
                        <a className="navbar-brand brandName" href="index.html">TecnoArg</a>
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarSupportedContent">
                            <ul className="navbar-nav me-auto mb-2 mb-lg-0">

                                <li className="nav-item">
                                    <a className="nav-link  links" aria-current="page" href="index.html">Inicio</a>
                                </li>

                                <li className="nav-item">
                                    <a className="nav-link" href="#nosotros">Nosotros</a>
                                </li>

                                <li className="nav-item dropdown">
                                    <a className="nav-link dropdown-toggle" href="index.html" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    Tienda
                                    </a>
                                    <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                                        <li><a className="dropdown-item" href="pages/celus.html">Celulares</a></li>
                                        <li><a className="dropdown-item" href="pages/auriculares.html">Auriculares</a></li>
                                        <li><a className="dropdown-item" href="pages/tienda.html">Ver todo</a></li>
                                    </ul>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="pages/contacto.html">Contacto</a>
                                </li>

                                <li className="nav-item">
                                    <button type="button" className="no-btn nav-link cartBtn">
                                        <span>0</span><CartWidget />
                                    </button>
                                </li>
                            </ul>
                            <div className="d-flex gap-3" role="search">

                                <div className="btn-group loggedInBtn" >
                                    <button type="button" className="btn LoggedInIconContainer dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
                                        <svg className="loggedIn bi bi-person-circle" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor"  viewBox="0 0 16 16">
                                            <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0z"/>
                                            <path fillRule="evenodd" d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8zm8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1z"/>
                                        </svg>
                                    </button>
                                    <ul className="dropdown-menu">
                                        <li><span className="mensajePersonalizado"></span></li>
                                        <li><button className="dropdown-item btnDatos" type="button">Mis datos</button></li>
                                        <li><button className="dropdown-item cerrarSesion" >Cerrar sesión</button></li>
                                    </ul>
                                </div>
                                <div>


                                </div>

                                <div className="loginBg" id="logInBtn">
                                    <button type="button" className="btn nav-link login-btn">
                                        Iniciar
                                    </button>
                                </div>
                                <div className="loginBg" id="signUpBtn">
                                
                                    <button type="button " className="btn nav-link login-btn">
                                        Registrarse 
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </nav>

    )
}

export default Navbar;
