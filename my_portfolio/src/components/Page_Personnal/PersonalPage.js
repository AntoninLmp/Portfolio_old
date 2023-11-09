import React from "react";
import { Outlet } from "react-router-dom";
import "../global/index.css"

import Header from "../global/Header";
import Navbar from "../global/Navbar";

const PersonalPage = () => {
    return (
        <>
            <Header></Header>
            <Navbar></Navbar>
        </>
    );
};

export default PersonalPage;