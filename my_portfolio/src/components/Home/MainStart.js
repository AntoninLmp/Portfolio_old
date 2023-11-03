import React from "react";
import { useState } from 'react';
import { Outlet } from "react-router-dom";
import './css/Home.css';
import HeaderHomePage from './HeaderHomePage';
import HomePage from './Home';
import Navbar from '../global/Navbar';
import StartName from './Starter';
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
                <div className="fullscreen">
                    <section className='name'>Antonin lampin</section>
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