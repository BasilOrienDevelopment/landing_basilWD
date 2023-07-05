import React from 'react';
import { FaWhatsapp, FaFacebookF, FaInstagram, FaLinkedinIn, FaTiktok } from 'react-icons/fa';
import styles from '../styles/Contact.module.css';


const Contact = () => {
  const mensajeWhatsApp = encodeURIComponent('Estoy interesado en el curso de desarrollo web');

  return (
    <div className={styles.contactComponent}>
      <h3 className={styles.title}>Contacto</h3>
      <ul className={styles.contactList}>
        <li>
          <a
            href={`https://wa.me/+541170835651/?text=${mensajeWhatsApp}`}
            target="_blank"
            rel="noopener noreferrer"
            className={styles.contactLink}
            style={{ backgroundColor: '#25D366' }}
          >
            <FaWhatsapp className={styles.icon} style={{ color: '#fff' }} />
            WhatsApp
          </a>
        </li>
        <li>
          <a
            href="https://www.facebook.com/profile.php?id=100093670361155"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.contactLink}
            style={{ backgroundColor: '#3B5998' }}
          >
            <FaFacebookF className={styles.icon} style={{ color: '#fff' }} />
            Facebook
          </a>
        </li>
        <li>
          <a
            href="https://www.instagram.com/basilorien_w_d"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.contactLink}
            style={{ backgroundColor: '#C13584' }}
          >
            <FaInstagram className={styles.icon} style={{ color: '#fff' }} />
            Instagram
          </a>
        </li>
        <li>
          <a
            href="https://www.linkedin.com/in/federico-carusso-177407276"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.contactLink}
            style={{ backgroundColor: '#0077B5' }}
          >
            <FaLinkedinIn className={styles.icon} style={{ color: '#fff' }} />
            LinkedIn
          </a>
        </li>
        <li>
          <a
            href="https://www.tiktok.com/@federicocarusso"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.contactLink}
            style={{ backgroundColor: '#000' }}
          >
            <FaTiktok className={styles.icon} style={{ color: '#fff' }} />
            TikTok
          </a>
        </li>
      </ul>
    </div>
  );
};

export default Contact;
