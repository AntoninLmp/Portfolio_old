import React from 'react';
import { Link } from 'react-router-dom';
import '../global/index.css';
import './css/Home.css';

function HomePage() {
    return (
        <div className='police_raleway'>
            <div>
                <section className='d_flex justify_e'>
                    <div className='w_30 h_100'>
                        <div>
                            <h1 className='titleHomeBlock c_green'>Mes Projet</h1>
                            <h2 className='text_secondary'>Développement</h2>
                        </div>
                        <Link to={"/Project"}>
                            <article className='bg_img bg_projet border_rad w_100 h_70'></article>
                        </Link>
                    </div>
                    <div className='w_30 h_100'>
                        <div>
                            <h1 className='titleHomeBlock c_green'>Mon Parcours professionel</h1>
                            <h2 className='text_secondary'>Emploie effectuer</h2>
                        </div>
                        <Link to={"/parcoursProfessionnel"}>
                            <article className='bg_img bg_pro border_rad w_100 h_70'></article>
                        </Link>
                    </div>
                </section>
                <section className='d_flex justify_e mb_4'>
                    <div className='w_30 h_100'>
                        <div>
                            <h1 className='titleHomeBlock c_green'>Antonin Lampin</h1>
                            <h2 className='text_secondary'>Etudiant en Master (Apprentissage)</h2>
                        </div>
                        <Link to={"/AntoninLampin"}>
                            <article className='bg_img bg_antonin border_rad w_100 h_70'>
                            </article>
                        </Link>
                    </div>
                    <div className='w_30 h_100'>
                        <div>
                            <h1 className='titleHomeBlock c_green'>Etudes</h1>
                            <h2 className='text_secondary'>Ecole d'ingénieur du numérique</h2>
                        </div>
                        <Link to={"/Study"}>
                            <article className='bg_img bg_scool border_rad w_100 h_70'></article>
                            {/* <video loop autoPlay><source src={require('../video/efrei.mp4')} type="video/mp4" /></video> */}
                        </Link>
                    </div>

                </section>
                
            </div>
            <section className='mx_20 padding_1 align_center titleHomeBlock'>
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
        </div >
    );
}

export default HomePage; 