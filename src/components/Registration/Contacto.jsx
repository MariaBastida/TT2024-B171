import React from "react";
import { useNavigate } from "react-router-dom";
import styles from "./PlantRegistration.module.css";
import background from "../../../public/images/fondo2.png";
import { toast } from "react-toastify";
import { useState } from "react";
import emailjs from "@emailjs/browser";

function Contacto() {
  const [plantData, setPlantData] = useState({
    name: "",
    type: "",
    label: "",
    description: "",
  });

  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();

    // Configurar parámetros para enviar con EmailJS
    const templateParams = {
      to_email: "kiefer.nature@gmail.com", // Correo de destino
      from_name: plantData.name,
      from_email: plantData.type, // Correo ingresado por el usuario
      label: plantData.label,
      message: plantData.description,
    };

    // Enviar el correo usando EmailJS
    emailjs
      .send(
        "service_c7s6bml", // Reemplaza con tu Service ID
        "template_nxw8gjm", // Reemplaza con tu Template ID
        templateParams,
        "Xxm4eGk44RIZgo2Qt" // Reemplaza con tu Public Key
      )
      .then(
        (response) => {
          console.log("Correo enviado con éxito!", response.status, response.text);
          toast.success("¡Comentario enviado correctamente!", {
            position: toast.POSITION.TOP_CENTER,
            autoClose: 3000,
          });
          // Resetear el formulario
          setPlantData({
            name: "",
            type: "",
            label: "",
            description: "",
          });
          navigate("/");
        },
        (err) => {
          console.error("Error al enviar el correo: ", err);
          toast.error("Hubo un error al enviar tu comentario. Inténtalo de nuevo.");
        }
      );
  };

  return (
    <div className={styles.regContainer}>
      <form className={styles.formContainer} onSubmit={handleSubmit}>
        <span className={styles.formTitle}>
          <h1>
            Contacto <hr />
          </h1>
        </span>
        <label htmlFor="name">Nombre</label>
        <input
          type="text"
          placeholder="Escribe aquí tu nombre completo"
          value={plantData.name}
          onChange={(e) => setPlantData({ ...plantData, name: e.target.value })}
          className={styles.wideInput}
        />
        <label htmlFor="type">Correo</label>
        <input
          type="email"
          placeholder="Escribe aquí tu correo electrónico (opcional)"
          value={plantData.type}
          onChange={(e) => setPlantData({ ...plantData, type: e.target.value })}
          className={styles.wideInput}
        />
        <label>Quiero recibir respuesta:</label>
        <div className={styles.formLabelRadio}>
          <span>
            <input
              type="radio"
              value="Si"
              checked={plantData.label === "Si"}
              onChange={(e) => setPlantData({ ...plantData, label: e.target.value })}
            />
            Si
          </span>
          <span>
            <input
              type="radio"
              value="No"
              checked={plantData.label === "No"}
              onChange={(e) => setPlantData({ ...plantData, label: e.target.value })}
            />
            No
          </span>
        </div>
        <div className={styles.formTextInput}>
          <label htmlFor="description">Comentario:</label>
          <textarea
            className={`${styles.formDescriptionInput} ${styles.wideInput}`}
            id="description"
            placeholder="Escribe aquí tu comentario, opinión o sugerencia sobre la página."
            value={plantData.description}
            onChange={(e) => setPlantData({ ...plantData, description: e.target.value })}
          />
        </div>
        <div>
          <button className={styles.registerButton} type="submit">
            <span className={styles.registerButtonText}>Enviar</span>
          </button>
        </div>
      </form>

      <span className={styles.formImage}>
        <img src={background} alt="background image" draggable="false" />
      </span>
    </div>
  );
}

export default Contacto;
