import { useState } from 'react';
import './App.css';
import HomePage from './components/HomePage';
import Navbar from './components/Navbar';
import StartName from './components/StartName';

function App() {
  const [App, setApp] = useState('')

  setTimeout(() => {
    setApp('App bg_black c_white')
  }, 7100);

  return (
    <div className={App}>
      <StartName></StartName>
      <main className='d_flex'>
        <Navbar></Navbar>
        <HomePage></HomePage>
      </main>
    </div>
  );
}

export default App;
