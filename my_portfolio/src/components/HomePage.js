import React from 'react';
import './index.css';

function HomePage() {
    return (
        <div className='police_raleway'>
            <section className='d_flex justify_e mb_4'>
                <div className='w_30 h_100'>
                    <article className='bg_img bg_antonin border_rad w_100 h_70'>
                    </article>
                    <div>
                        <h1 className='titleHomeBlock c_green'>Antonin Lampin</h1>
                        <h2 className='text_secondary_2'>Etudiant en Master (Apprentissage)</h2>
                    </div>
                </div>
                <div className='w_30 h_100'>
                    <article className='bg_img bg_scool border_rad w_100 h_70'></article>
                    {/* <video loop autoPlay>
                        <source src={require('../video/efrei.mp4')} type="video/mp4" />
                    </video> */}
                    <div>
                        <h1 className='titleHomeBlock c_green'>Etudes</h1>
                        <h2 className='text_secondary'>Ecole d'ingénieur du numérique</h2>
                    </div>
                </div>
            </section>
            <section className='d_flex justify_e mb_4'>
                <div className='w_30 h_100'>
                    <article className='bg_img bg_projet border_rad w_100 h_70'></article>
                    <div>
                        <h1 className='titleHomeBlock c_green'>Projet</h1>
                        <h2 className='text_secondary'>Développement</h2>
                    </div>
                </div>
                <div className='w_30 h_100'>
                    <article className='bg_img bg_pro border_rad w_100 h_70'></article>
                    <div>
                        <h1 className='titleHomeBlock c_green'>Parcours professionel</h1>
                        <h2 className='text_secondary_2'>Emploie effectuer</h2>
                    </div>
                </div>


            </section>
            <section className='mx_20 padding_1'>
                <p id='p_homepage'>Ils m'ont fait confiance alors pourquoi pas vous : </p>
                <div className='d_flex align_center flex_wrap justify_c'>
                    <img src='https://upload.wikimedia.org/wikipedia/commons/thumb/4/43/Thales.svg/2560px-Thales.svg.png' alt='Thales Logo' className='img_logo_entreprise' />
                    <img src='https://upload.wikimedia.org/wikipedia/fr/thumb/0/09/Logo_Weldom_2012.svg/1280px-Logo_Weldom_2012.svg.png' alt='Weldom Logo' className='img_logo_entreprise' />
                    <img src='https://www.restalliance.fr/wp-content/themes/restalliance/assets/img/logo.png' alt='Restalliance Logo' className='img_logo_entreprise' />
                    <img src='https://cdn.pixabay.com/photo/2021/09/22/17/17/mcdonalds-6647433_960_720.png' alt='Macdonald Logo' id='mcdonald' />
                </div>
                <div className='mx_20'>
                    <p className='btn_voir'>Voir plus</p>
                </div>
            </section>
            <section className='mx_20 padding_1 lign_green'>
                <p className='text_end'>Travaillons <span className='c_green'>ensemble</span> !</p>
                <div className='d_flex'>
                    <a href='https://www.linkedin.com/in/antonin-lampin-346a2a1a4/'>
                        <img src='https://cdn-icons-png.flaticon.com/512/174/174857.png' alt='Linkedin Logo' className='img_logo_footer' />
                    </a>
                    <a href='https://gitlab.com/AntoninLmp'>
                        <img src='https://cdn4.iconfinder.com/data/icons/logos-and-brands/512/144_Gitlab_logo_logos-512.png' alt='Gitlab Logo' className='img_logo_footer' />
                    </a>
                    <a href='https://github.com/AntoninLmp'>
                        <img src='https://cdn-icons-png.flaticon.com/512/25/25231.png' alt='GitHub Logo' className='img_logo_footer' />
                    </a>

                </div>
            </section >
        </div >
    );
}

export default HomePage; 