import React, { useState } from 'react';
import styles from '../styles/RegistrationForm.module.css';

const RegistrationForm = () => {
    const [formData, setFormData] = useState({
        nombre: '',
        apellido: '',
        telefono: '',
        email: '',
        mensaje: '',
    });

    const handleChange = (event) => {
        const { name, value } = event.target;
        setFormData((prevFormData) => ({
            ...prevFormData,
            [name]: value,
        }));
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        // Aquí puedes agregar la lógica para enviar los datos del formulario al servidor
        // por ejemplo, utilizando una llamada a una API
        console.log(formData);
        // Redirigir a una página de éxito después del registro
        // Aquí puedes utilizar react-router-dom o cualquier otra solución de enrutamiento que estés utilizando en tu proyecto
    };

    return (
        <div className={styles.container}>
            <h2 className={styles.title}>Solicitud de vacante</h2>
            <form className={styles.form} onSubmit={handleSubmit}>
                <div className={styles.formGroup}>
                    <input
                        type="text"
                        id="nombre"
                        name="nombre"
                        placeholder="Ingrese su nombre"
                        value={formData.nombre}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div className={styles.formGroup}>
                    <input
                        type="text"
                        id="apellido"
                        name="apellido"
                        placeholder="Ingrese su apellido"
                        value={formData.apellido}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div className={styles.formGroup}>
                    <input
                        type="tel"
                        id="telefono"
                        name="telefono"
                        placeholder="Ingrese su teléfono"
                        value={formData.telefono}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div className={styles.formGroup}>
                    <input
                        type="email"
                        id="email"
                        name="email"
                        placeholder="Ingrese su email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div className={styles.formGroup}>
                    <textarea
                        id="mensaje"
                        name="mensaje"
                        placeholder="Dinos por que te gustaria unirtenos!"
                        value={formData.mensaje}
                        onChange={handleChange}
                        required
                    />
                </div>
                <button type="submit">Enviar</button>
            </form>
        </div>
    );
};

export default RegistrationForm;
