import React from "react";
import "./Style-Header.css";

export default function Header() {
    return(
        <div className="container">
            <div className="Header">
                <div className="Header_logo">
                <img
                src="https://www.instagram.com/static/images/web/mobile_nav_type_logo.png/735145cfe0a4.png"
                alt="Logo"
                />
                </div>
                <div className="header_search">
                    <input type="text" placeholder="Search"></input>
                    <i className='bx bx-search-alt-2' ></i>
                </div>
                <div className="header_login">
                    <button className="btn btn-login">Login</button>
                </div>
            </div>
        </div>
    );
}