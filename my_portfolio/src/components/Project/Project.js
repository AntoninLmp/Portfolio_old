import React from "react";
import { Outlet } from "react-router-dom";
import "../index.css"
import Navbar from "../Navbar";

const Project = () => {
    return (
        <>
            <Navbar></Navbar>
            <section>
                <article>

                </article>
            </section>
            <Outlet />
        </>
    );
};

export default Project;