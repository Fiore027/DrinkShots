import React from "react";
import styles from "./Contact.module.css";

const Contact = () => {
  return (
   <div name="Contact" className={styles.Contact}>
    <h2>Contacto</h2>
        <form className={styles.form}
        method="POST"
        action="https://getform.io/f/46219ebf-ac01-4fc8-954b-fe9818956d5f"
        >
            <label for="Nombre">Nombre</label>
            <input id="Nombre" name="Nombre" className={styles.input}></input>
            <label for="Correo">Correo</label>
            <input 
                id="Correo" 
                name="Correo"
                type="Correo" 
                className={styles.input}
            ></input>
            <label for="Mensaje">Que te gustaría probar?</label>
            <textarea id="Mensaje" className={styles.textArea}></textarea>
            <button type="Enviar">Enviar</button>
        </form>
  </div>
  );
};

export default Contact;