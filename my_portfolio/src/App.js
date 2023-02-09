import React from 'react';
import { useState } from 'react';
import './App.css';
import HeaderHomePage from './components/HeaderHomePage';
import HomePage from './components/HomePage';
import Navbar from './components/Navbar';
import StartName from './components/StartName';

function App() {
  const [App, setApp] = useState('');
  const [Main, setMain] = useState('d_none');

  setTimeout(() => {
    setApp('App bg_black c_white');
    setMain('d_content')
  }, 7100);

  return (
    <div className={App}>
      <StartName></StartName>
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
  );
}

export default App;
