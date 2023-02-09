import React from 'react';
import './index.css';

function HomePage() {
    return (
        <div>
            <section className='d_flex jutify_a mb_4'>
                <article>
                    <div className='bg_yellow border_rad'>
                        {/* <img src='https://cdn-icons-png.flaticon.com/512/2317/2317981.png' className='img_home' alt='icon_eng' /> */}
                        <img src='https://cdn-icons-png.flaticon.com/512/1688/1688502.png' className='img_home' alt='icon_eng' />
                    </div>
                    <h1 className='titleHomeBlock'>Antonin Lampin</h1>
                    <h2 className='text_secondary'>Etudiant en Master (Apprentissage)</h2>
                </article>
                <article>
                    <div className='bg_green border_rad'>
                        {/* <img src='https://cdn-icons-png.flaticon.com/512/1567/1567068.png' className='img_home' alt='icon_degree' /> */}
                        <img src='https://cdn-icons-png.flaticon.com/512/2997/2997321.png' className='img_home' alt='icon_degree' />
                    </div>
                    <h1 className='titleHomeBlock'>Etudes</h1>
                    <h2 className='text_secondary'>Ecole d'ingénieur du numérique</h2>
                </article>
            </section>
            <section className='d_flex jutify_a mb_4'>
                <article>
                    <div className='bg_blue border_rad'>
                        {/* <img src='https://cdn-icons-png.flaticon.com/512/3310/3310063.png' className='img_home' alt='icon_projet' /> */}
                        <img src='https://cdn-icons-png.flaticon.com/512/4844/4844346.png' className='img_home' alt='icon_projet' />
                    </div>
                    <h1 className='titleHomeBlock'>Projet</h1>
                    <h2 className='text_secondary'>Développement de différentes technologies</h2>
                </article>
                <article>
                    <div className='bg_white border_rad'>
                        <img src='https://cdn-icons-png.flaticon.com/512/1264/1264748.png' className='img_home' alt='icon_way' />
                    </div>
                    <h1 className='titleHomeBlock'>Parcours professionel</h1>
                    <h2 className='text_secondary'>Emploie effectuer</h2>
                </article>
            </section>
        </div >
    );
}

export default HomePage; 