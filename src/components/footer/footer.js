import React from "react";
import { Link } from "react-router-dom/cjs/react-router-dom.min";
import "./footer.sass";

export default function Footer() {

    return (
        <div className="footer">
            <div className="footer-content">
                <div className="footer-content-privacidad">
                    <Link to="/privacity">Aviso de privacidad</Link>
                    <p>/</p>
                    <Link to="/contact">Contacto</Link>
                </div>

                <div className="footer-content-logo">
                    <Link to="/">
                        <img src="/img/logo-sochi.png" alt="logo-sochi"></img>
                    </Link>
                </div>

                <div className="footer-content-redes">
                    <ul>
                        <li>
                            <Link to="/"><div className="logo-mobile"></div></Link>
                        </li>
                        <li><Link to="/"><img src="/img/twitter.png" alt="logo-twitter"></img></Link>
                        </li>
                        <li>
                            <Link to="/"><img src="/img/facebook.png" alt="logo-facebook"></img></Link>
                        </li>
                        <li>
                            <Link to="/"><img src="/img/youtube.png" alt="logo-youtube"></img></Link>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    )
}
