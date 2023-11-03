import React from 'react';
import '../global/index.css';
import Typewriter from 'typewriter-effect';

function HeaderHomePage() {
    return (
        <div className='w_100 ml_10 typewriter'>
            <Typewriter
                options={{
                    strings: ['Etudiant en alternance', 'Développeur Logiciel junior', 'Scouts et guides de France'],
                    autoStart: true,
                    loop: true,
                }}
            />
        </div>
    );
}
export default HeaderHomePage; 