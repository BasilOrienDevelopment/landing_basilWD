import React from 'react';
import styles from '../styles/AboutPage.module.css';

const AboutPage = () => {
    return (
        <div className={styles.aboutCoursePage}>
            <div className={styles.content}>
                <h1 className={styles.title}>Sobre el Curso</h1>
                <div className={styles.courseDescription}>
                    <p>
                        ¡Bienvenido a nuestro curso de desarrollo web! Aquí, nos tomamos
                        muy en serio el aprendizaje, pero también creemos en disfrutar del
                        proceso. Nuestro objetivo es brindarte una experiencia educativa
                        divertida y dinámica mientras te sumerges en el emocionante mundo
                        del desarrollo web.
                    </p>
                    
                    <p>
                        En este curso, aprenderás los fundamentos de HTML, CSS y JavaScript,
                        los lenguajes clave para construir sitios web increíbles. No te
                        preocupes si eres un principiante completo; diseñamos el curso para
                        ser accesible y comprensible para todos.
                    </p>
                    <p>
                        Nuestro enfoque práctico te permitirá aplicar lo que aprendes en
                        proyectos emocionantes y desafiantes. Queremos que te sientas
                        inspirado y motivado mientras desarrollas tus habilidades y
                        construyes tu propio sitio web desde cero.
                    </p>
                    <p>
                        Además, tendrás acceso a un equipo de instructores apasionados que
                        estarán encantados de ayudarte en cada paso del camino. Estamos
                        aquí para responder tus preguntas, brindarte apoyo y compartir
                        nuestra experiencia en el desarrollo web.
                    </p>
                    <p>
                        Así que, prepárate para sumergirte en un viaje de aprendizaje
                        emocionante. Estamos emocionados de tener la oportunidad de
                        enseñarte las habilidades necesarias para convertirte en un
                        desarrollador web talentoso. ¡Vamos a comenzar!
                    </p>
                </div>
            </div>
        </div>
    );
};

export default AboutPage;
