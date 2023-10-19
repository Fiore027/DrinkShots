import React from 'react'
import styles from"./Tipos.module.css";

const Tipos = () => {
  return (
     <div name= "Tipos" className={styles.Title}> 
      <p>
        <b>Tipos de Cocteles<br/>
          Michirilito</b>
      </p>
    
  <div className={styles.contenedor}>
    <div className={styles.item}>
      <img
      src={require('../Componentes/Fotos/Fto2.jpg')}
      alt='Imagen1'/>
      <p><b>Chao Margarita</b></p>
    </div>

    <div className={styles.item}>
      <img
      src={require('../Componentes/Fotos/titi.jpg')}
      alt='Imagen2'/>
      <p><b>Piña Vodkada</b></p>
     </div>

     <div className={styles.item}>
      <img
      src={require('../Componentes/Fotos/Fto3.jpg')}
      alt='Imagen3'/>
      <p><b>Yiguirro</b></p>
      </div>

    <div className={styles.item}>
      <img
      src={require('../Componentes/Fotos/fto4.jpg')}
      alt='Imagen4'/>
      <p><b>Zacate Limon</b></p>
      </div>
      </div>
  </div>
  );
};

export default Tipos;