import React from 'react';
import { Link } from 'react-router-dom';
import styles from '../styles/HomePage.module.css';

const HomePage = () => {
    return (
        <div className={styles.homepage}>
            <div className={styles.content}>
                <h1 style={{ color: 'white', textShadow: "1px 1px magenta"}}>Bienvenido al curso de desarrollo web de BasilOrien</h1>
                <p style={{ color: 'white', textShadow: "1px 1px magenta"}}>
                    Aprende las bases y fundamentos para convertirte en desarrollador Full-Stack.
                </p>
                <Link to="/cursos" className={styles.btn}>
                    Explora nuestros cursos
                </Link>
            </div>

        </div>
    );
};

export default HomePage;
