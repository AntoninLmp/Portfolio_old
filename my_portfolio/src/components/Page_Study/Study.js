import React from "react";
import { Outlet } from "react-router-dom";
import "../global/index.css"

import Header from "../global/Header";
import Navbar from "../global/Navbar";

const Study = () => {
    return (
        <>
            <Header></Header>
            <div className="d_flex">
                <Navbar></Navbar>
                <section>
                    <article>
                        STUDY
                    </article>
                </section>
            </div>
        </>
    );
};

export default Study;