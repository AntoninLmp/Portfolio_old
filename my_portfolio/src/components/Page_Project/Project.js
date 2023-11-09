import React from "react";
import { Outlet } from "react-router-dom";
import "../global/index.css"

import Navbar from "../global/Navbar";
import Header from "../global/Header";

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
            <Outlet />
        </>
    );
};

export default Project;