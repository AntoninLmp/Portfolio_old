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
                        <a href="#" className="c_black">Moi</a>
                    </li>
                    <li >
                        <a href="#" className="c_green">Etudes</a>
                    </li>
                    <li>
                        <a href="#" className="c_black">Projet</a>
                    </li>
                    <li >
                        <Link to={"/parcoursProfessionnel"} className="c_green">Parcours professionel</Link>
                    </li>
                </ul>
            </nav>
        </nav>
    )
}

export default Navbar;
