import React from "react";
import { useState } from 'react';
import { Outlet } from "react-router-dom";
import './HomePage.css';
import HeaderHomePage from './HeaderHomePage';
import HomePage from './HomePage';
import Navbar from '../global/Navbar';
import StartName from '../Home/StartName';
import Footer from "../global/Footer";


const MainPage = () => {

    const [Home, setHome] = useState('Home');
    const [Main, setMain] = useState('d_none');

    setTimeout(() => {
        setHome('d_none');
        setMain('Main'); 
    }, 6100);
    return (
        <>
            <div className={Home}>
                {<StartName></StartName>}
            </div>
            <div className={Main}>
                <header className='d_flex'> 
                    <Navbar></Navbar>
                    <HeaderHomePage></HeaderHomePage>
                </header>
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