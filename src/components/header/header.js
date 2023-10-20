import React from "react";
import { Link } from "react-router-dom/cjs/react-router-dom.min";
import "./header.sass";

export default function Header() {

    return (
        <div className="header">
            <div className="header-content-left">
                <Link to="/">
                    <img src="/img/logo-sochi.png" alt="logo-sochi"></img>
                </Link>
            </div>
            
            <div className="header-content-rigth">
                <img src="/img/logo-claro-sports.png" alt="logo-claro-sports"></img>
            </div>
        </div>
    )
}
