import React from 'react';
import { Link } from 'react-router-dom';
import styles from '../styles/Navbar.module.css';


const Navbar = () => {
  return (
    <nav className={styles.navbar}>
      <ul className={styles.navLinks}>
        <li>
          <Link to="/" className={styles.navLink}>
            Inicio
          </Link>
        </li>
        <li>
          <Link to="/cursos" className={styles.navLink}>
            Cursos
          </Link>
        </li>
        <li>
          <Link to="/sobre" className={styles.navLink}>
            Sobre el curso
          </Link>
        </li>
        <li>
          <Link to="/contacto" className={styles.navLink}>
            Contacto
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
