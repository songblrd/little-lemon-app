import React from "react";



const Footer = () => {
    return (
        <footer>
            <section>
                <div className="info">
                    <img src='logo.png' alt='logo two'/>
                    <p>We are a family owned restaurant based in Chicago.</p>
                </div>
                <div className="details">
                    <ul>
                     <li><a href='/'>Home</a></li>
                     <li><a href='/'>About</a></li>
                     <li><a href='/'>Menu</a></li>
                     <li><a href='/'>Reservations</a></li>
                     <li><a href='/'>Order Online</a></li>
                     <li><a href='/'>Login</a></li>
                    </ul>
                </div>

            </section>
            <div className="copyright">
            <p>Little Lemon 2024 © All rights reserved</p>
            </div>
        </footer>
    )
}

export default Footer