import React from "react";
import { useState } from 'react';
import { Outlet } from "react-router-dom";
import './MainPage.css';
import HeaderHomePage from './HeaderHomePage';
import HomePage from './HomePage';
import Navbar from './Navbar';
import StartName from './StartName';


const MainPage = () => {

    const [App, setApp] = useState('App');
    const [Main, setMain] = useState('d_content');
    // const [App, setApp] = useState('');
    // const [Main, setMain] = useState('d_none');

    // setTimeout(() => {
    //     setApp('App');
    //     setMain('d_content')
    // }, 7100);
    return (
        <>
            <div className={App}>
                {/* <StartName></StartName> */}
                <div className={Main}>
                    <header className='d_flex'>
                        <Navbar></Navbar>
                        <HeaderHomePage></HeaderHomePage>
                    </header>
                    <main>
                        <HomePage></HomePage>
                    </main>
                </div>
            </div>
            <Outlet />
        </>
    );
};

export default MainPage;