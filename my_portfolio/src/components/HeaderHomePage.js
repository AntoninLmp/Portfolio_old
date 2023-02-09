import React from 'react';
import './index.css';
import Typewriter from 'typewriter-effect';

function HeaderHomePage() {
    return (
        <div className='w_100 typewriter'>
            <Typewriter
                options={{
                    strings: ['Etudiant en alternance', 'Développeur Logiciel junior', 'Scout'],
                    autoStart: true,
                    loop: true,
                }}
            />
        </div>
    );
}
export default HeaderHomePage; 