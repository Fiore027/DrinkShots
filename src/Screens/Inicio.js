import React from 'react';
import { Link } from 'react-scroll'; 
import styles from "./Inicio.module.css";

const Inicio = () => {
  return (
    <div name="Inicio" className={styles.Inicio}>
      <div className={styles.TitleContainer}>

      <p>
        Cocktails: donde los sueños se mezclan.<br />
        <b>"Sabores que te dejarán sin palabras."</b>
      </p>

      <p>
        "Saborea el mundo,<br />
        <b> trago a trago."</b>
      </p>
      </div>
      <div className={styles.CTAContainer}>
        <Link 
         to="Contact"
         smooth duration={500}
         className={styles.CallToAction}
        >
          Probar Ahora
        </Link>
      </div>
    </div>
  );
};

export default Inicio;
