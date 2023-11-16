import React from "react";
import { Link } from "react-router-dom";
import { useState } from "react";
import './index.css';

function Navbar() {
    const [menuOpen, setMenuOpen] = useState(false); 
    const [transitionMenu, setTransitionMenu] = useState(null)

    
    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
        if (menuOpen) {setTransitionMenu('list_item')}
      };

    return (
        <nav className='Navbar'>
            <div className="d_flex mx-1e">
                <div class="container nav-container">
                    <input class="checkbox" type="checkbox" name="" id="" onClick={toggleMenu}/>
                    <div class="hamburger-lines">
                        <span class="line line1"></span>
                        <span class="line line2"></span>
                        <span class="line line3"></span>
                    </div>
                </div>
                <p className="text_menu">Menu</p>
            </div>

            {/* Afficher les liens si le menu est ouvert */}
            <nav>
                { menuOpen ? (
                    <ul className="list_display">
                        <li className={transitionMenu}>
                            <Link to={"/Home"} className="c_green">Home</Link>
                        </li>
                        <li className={transitionMenu}>
                            <Link to={"/AntoninLampin"} className="c_black">Moi</Link>
                        </li>
                        <li className={transitionMenu}>
                            <Link to={"/Study"} className="c_green">Etudes</Link>
                        </li>
                        <li className={transitionMenu}>
                            <Link to={"/Project"} className="c_black">Projet</Link>
                        </li>
                        <li className={transitionMenu}>
                            <Link to={"/parcoursProfessionnel"} className="c_green">Parcours pro.</Link>
                        </li>
                    </ul>
                ) : null }
            </nav>
        </nav>
    )
}

export default Navbar;
