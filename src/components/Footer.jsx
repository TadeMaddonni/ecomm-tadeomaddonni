
import React from 'react'
import { Link } from 'react-router-dom'

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footerTextContainer">
                <p className="footerText">Todos los derechos reservados @2022</p>
            </div>

            <div className="footerListContainer">
                <ul className="footerList">
                    <li><Link to="/" className="footer-link" >Inicio</Link></li>
                    <li><Link to="/category/1" className="footer-link">Auriculares</Link></li>
                    <li><Link to="/category/2" className="footer-link">Celulares</Link></li>
                </ul>
            </div>
        </footer>
    )
}

export default Footer