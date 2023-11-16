import React from "react";
import "../global/index.css"
import "./Studies.css"

import Header from "../global/Header";
import Navbar from "../global/Navbar";
import Footer from "../global/Footer";

const Study = () => {
    return (
        <>
            <Header></Header>
            <section className="d_flex h_252">
                <Navbar></Navbar>
                <h1>My studies</h1>
            </section>
            <section className="d_flex justify_b justify_e mb_4">
                <article className="text_center">
                    <h1 className="text_center nameBase title">Lycée René Cassin,<br/> Arpajon</h1>
                    <img src="https://cet-ingenierie.fr/wp-content/uploads/2017/03/89_principale.jpg" alt="Highscool" className="img_school"/>
                    {/* <p className="point">.</p> */}
                    <p className="school_text">J'ai effectuer mes années de lycée en region parisienne dans le 91 où j'ai pu obtenir mon baccalauréat scientifique avec mention</p>
                </article>
                <article  className="text_center mt-150">
                    <h1 className="text_center nameBase title">Université Paris <br/>Diderot, Paris</h1>
                    <img src="https://upload.wikimedia.org/wikipedia/commons/2/2b/Universite-Paris-Rive-Gauche.JPG" alt="Highscool" className="img_school"/>
                </article>
                <article  className="text_center mt-300">
                    <h1 className="text_center nameBase title">Efrei Paris, <br/>Villejuif</h1>
                    <img src="https://file.diplomeo-static.com/crop/576x324/00/00/02/34/23491.jpg" alt="Highscool" className="img_school"/>
                </article>
                <article  className="text_center mt-450">
                    <h1 className="text_center nameBase title">Essca Budapest, <br/>Hongrie</h1>
                    <img src="https://assets.essca.fr/wp-content/uploads/2015/10/acces-campus-budapest-650.jpg" alt="Highscool" className="img_school"/>
                </article>
            </section>
            <Footer></Footer>
        </>
    );
};

export default Study;