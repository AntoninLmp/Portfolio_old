import React from "react";
import { Outlet } from "react-router-dom";
import "./index.css"

const Footer = () => {
    return (
        <footer>
            <div className="d_flex">
                <div className="d_flex flex_column">
                    <a href='https://www.linkedin.com/in/antonin-lampin-346a2a1a4/' className="mx_10 c_green">Linkedin</a>
                    <a href='https://gitlab.com/AntoninLmp' className="mx_10 c_green">Gitlab</a>
                    <a href='https://github.com/AntoninLmp' className="mx_10 c_green">GitHub</a>
                </div>
                <div className="d_flex flex_column">
                    <a href="mailto:lampinantonin@gmail.com" className="mx_10 c_green">lampinantonin@gmail.com</a>
                    <a href="telephone:+33635387313" className="mx_10 c_green">+33 6 35 38 73 13</a>

                </div>
            </div>
            <Outlet />
        </footer>
    );
};

export default Footer;