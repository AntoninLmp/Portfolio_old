import React from "react";
import { Link } from "react-router-dom";
import './index.css';

function Navbar() {
    return (
        <nav className='Navbar'>
            <div className="d_flex mx-1e">
                <div class="container nav-container">
                    <input class="checkbox" type="checkbox" name="" id="" />
                    <div class="hamburger-lines">
                        <span class="line line1"></span>
                        <span class="line line2"></span>
                        <span class="line line3"></span>
                    </div>
                </div>
                <p className="text_menu">Menu</p>
            </div>
            <nav >
                <ul className="list_display">
                    <li>
                        <Link to={"/"} className="c_green">Home</Link>
                    </li>
                    <li>
                        <Link to={"/AntoninLampin"} className="c_black">Moi</Link>
                    </li>
                    <li >
                        <Link to={"/Study"} className="c_green">Etudes</Link>
                    </li>
                    <li>
                        <Link to={"/Project"} className="c_black">Projet</Link>
                    </li>
                    <li >
                        <Link to={"/parcoursProfessionnel"} className="c_green">Parcours pro.</Link>
                    </li>
                </ul>
            </nav>
        </nav>
    )
}

export default Navbar;
