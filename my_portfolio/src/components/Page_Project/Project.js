import React from "react";
import { Outlet } from "react-router-dom";
import "../global/index.css"

import Navbar from "../global/Navbar";
import Header from "../global/Header";
import Footer from "../global/Footer";

const Project = () => {
    return (
        <>
            <Header></Header>
            <div className="d_flex">
                <Navbar></Navbar>
                <section>
                    <article>
                        Bonjour
                    </article>
                </section>
            </div>
            <Footer></Footer>
        </>
    );
};

export default Project;