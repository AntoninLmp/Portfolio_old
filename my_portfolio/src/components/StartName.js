import { useState } from 'react';
import './StartName.css';


function StartName() {
    const [className, setclassName] = useState('start-div');

    setTimeout(() => {
        setclassName('start-div blackwindow')
    }, 7000);

    return (
        <div className={className}>
            <h1 className='nameStart animation_text'>Antonin Lampin</h1>
            <h2 className='descriptionStart animation_text'>Software Engeenier</h2>
        </div >
    );
}

export default StartName