import React from "react";
import { useState } from 'react';
import { Outlet } from "react-router-dom";
import './css/Home.css';
import '../global/index.css';
import HeaderHomePage from './HeaderHomePage';
import HomePage from './Home';
import Navbar from '../global/Navbar';
import Footer from "../global/Footer";


const MainPage = () => {
    return (
        <>
            <div>
                <div className="fullscreen">
                    <section>
                        <div className="nameBase" id="FirstLastName">Antonin lampin</div>
                        <div className="nameBase" id="DescriptionName">Software engineer</div>
                    </section>
                    <header className='d_flex h_100'> 
                        <Navbar></Navbar>
                        <HeaderHomePage></HeaderHomePage>
                    </header>
                </div>
                <main>
                    <HomePage></HomePage>
                </main>
                <Footer></Footer>
            </div>
            <Outlet />
        </>
    );
};

export default MainPage;