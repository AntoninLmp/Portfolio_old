import React from "react";
import { Outlet } from "react-router-dom";
import "../index.css"

const PersonalPage = () => {
    return (
        <>
            <h1>PersonalPage</h1>
            <Outlet />
        </>
    );
};

export default PersonalPage;