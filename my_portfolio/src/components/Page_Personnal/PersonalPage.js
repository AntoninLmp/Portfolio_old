import React from "react";
import { Outlet } from "react-router-dom";
import "../global/index.css"

const PersonalPage = () => {
    return (
        <>
            <h1>PersonalPage</h1>
            <Outlet />
        </>
    );
};

export default PersonalPage;