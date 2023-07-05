import React from 'react';
import { Link } from 'react-router-dom';
import styles from '../styles/CoursesPage.module.css';
import htmlImage from '../storage/img/html5.png'
import cssImage from '../storage/img/CSS3_logo.svg.png'
import jsImage from '../storage/img/javascript.jpg'


const CoursesPage = () => {
    return (
        <div className={styles.coursesPage}>
            <div className={styles.content}>
                <h1 className={styles.title} style={{ color: 'white', textShadow: "1px 1px yellowgreen" }}>Nuestro Curso de Desarrollo Web</h1>
                <div className={styles.courseDescription}>
                    <p style={{ color: 'white', textShadow: "1px 1px darkred" }}>
                        En nuestro curso de desarrollo web, te ofrecemos la oportunidad de
                        aprender los fundamentos de la creación de páginas web con HTML, CSS
                        y JavaScript, todo en un solo curso integral.
                    </p>
                    <p style={{ color: 'white', textShadow: "1px 1px darkred" }}>
                        Aprenderás cómo utilizar HTML para crear la estructura básica de tus
                        páginas web, CSS para darles estilo y JavaScript para hacerlas
                        interactivas y dinámicas.
                    </p>
                </div>
                <div className={styles.courseImages}>
                    <div className={styles.courseImage}>
                        <img
                            src={htmlImage}
                            alt="HTML Course"
                            className={styles.image}
                        />
                        <h3>HTML</h3>
                    </div>
                    <div className={styles.courseImage}>
                        <img
                            src={cssImage}
                            alt="CSS Course"
                            className={styles.image}
                        />
                        <h3>CSS</h3>
                    </div>
                    <div className={styles.courseImage}>
                        <img
                            src={jsImage}
                            alt="JavaScript Course"
                            className={styles.image}
                        />
                        <h3>JavaScript</h3>
                    </div>
                </div>
                <Link to="/request" className={styles.btn}>
                    Pedi tu vacante!
                </Link>
            </div>
        </div>
    );
};

export default CoursesPage;
