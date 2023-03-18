import React from "react";
import { useState } from 'react';
import { Outlet } from "react-router-dom";
import './HomePage.css';
import HeaderHomePage from './HeaderHomePage';
import HomePage from './HomePage';
import Navbar from '../Navbar';
import StartName from '../StartName';
import Footer from "../Footer";


const MainPage = () => {

    const [Home, setHome] = useState('Home');
    const [Main, setMain] = useState('d_content');
    // const [Home, setHome] = useState('');
    // const [Main, setMain] = useState('d_none');

    // setTimeout(() => {
    //     setHome('Home');
    //     setMain('d_content')
    // }, 7100);
    return (
        <>
            <div className={Home}>
                {/* <StartName></StartName> */}
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
            </div>
            <Outlet />
        </>
    );
};

export default MainPage;