import React from 'react'
import styles from "./Bocas.module.css";

const Bocas = () => {
  return (
    <div name= "Bocas" className={styles.Title}>
      <p>
        <b>Bocas</b>
      </p>
    
  <div className={styles.contenedor}>
    <div className={styles.item}>
      <img
      src={require('../Componentes/Fotos/pan2.jpg')}
      alt='Imagen1'/>
      <p><b>MixSnacks</b></p>
    </div>

    <div className={styles.item}>
      <img
      src={require('../Componentes/Fotos/atun.jpg')}
      alt='Imagen2'/>
      <p><b>JoyBoy</b></p>
     </div>

     <div className={styles.item}>
      <img
      src={require('../Componentes/Fotos/queso.jpg')}
      alt='Imagen3'/>
      <p><b>SipFusion</b></p>
      </div>

    <div className={styles.item}>
      <img
      src={require('../Componentes/Fotos/camarones.jpg')}
      alt='Imagen4'/>
      <p><b>BiteBliss</b></p>
      </div>
      </div>
  </div>
  );
};

export default Bocas;