import React from 'react';
import '../global/index.css';
import Typewriter from 'typewriter-effect';

function HeaderHomePage() {
    return (
        <div className='w_100'>
            <section className='d_flex typewriter'>
                <div className='mr-1e'>Je suis</div> 
                <Typewriter 
                    options={{
                        strings: [' étudiant en alternance', ' développeur Logiciel junior', ' scouts et guides de France'],
                        autoStart: true,
                        loop: true,
                    }}
                />
            </section>
            <section className='font_cambria Header_desc'>
                <p>Bienvenue sur mon <span className='c_green bold oblique'>portfolio</span> !</p>
                <p>A travers ce site, vous pourrez en apprendre plus sur mes projets, mes études où sur moi </p>
            </section>
        </div>
    );
}
export default HeaderHomePage; 