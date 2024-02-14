import React from "react";
import Nav from './Nav';


const Header = () => {
    return (
        <header>
            <div className="header-wrapper">
                <img src='logo.jpg' alt='logo'></img>
                <Nav />
            </div>
        </header>
    )
}

export default Header