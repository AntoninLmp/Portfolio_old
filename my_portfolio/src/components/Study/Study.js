import React from "react";
import { Outlet } from "react-router-dom";
import "../index.css"

const Study = () => {
    return (
        <>
            <h1>Study</h1>
            <Outlet />
        </>
    );
};

export default Study;