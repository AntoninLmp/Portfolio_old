import { useState } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import StartName from './components/StartName';

function App() {
  const [App, setApp] = useState('')
  const [displayNone, setdisplayNone] = useState('')

  setTimeout(() => {
    setApp('App bg_black')
    setdisplayNone('display_none')
  }, 7100);

  return (
    <div className={App}>
      <StartName></StartName>
      <Navbar></Navbar>
    </div>
  );
}

export default App;
