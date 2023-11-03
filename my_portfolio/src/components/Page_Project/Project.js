import React from "react";
import { Outlet } from "react-router-dom";
import "../global/index.css"
import Navbar from "../global/Navbar";

const Project = () => {
    return (
        <>
            <Navbar></Navbar>
            <section>
                <article>
                    Bonjour
                </article>
            </section>
            <Outlet />
        </>
    );
};

export default Project;