import React from "react";
import { useNavigate } from "react-router-dom";
import styles from "./PlantRegistration.module.css";
import imageForm from "./imgs/image_Form.png";
import { toast } from "react-toastify";
import { useState } from "react";

function Contacto() {
  const [plantData, setPlantData] = useState({
    name: "",
    type: "",
    price: "",
    discount: "",
    label: "",
    features: "",
    description: ""
  });

  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();

    // Obtener datos existentes de localStorage
    const storedData = JSON.parse(localStorage.getItem("plants")) || [];

    // Agregar los nuevos datos
    const updatedData = [...storedData, plantData];

    // Guardar en localStorage
    localStorage.setItem("plants", JSON.stringify(updatedData));

    alert("Comentario enviado!");

    // Resetear el formulario
    setPlantData({
      name: "",
      type: "",
      price: "",
      discount: "",
      label: "",
      features: "",
      description: ""
    });

    toast.success("Tu comentario fue enviado!", {
      position: toast.POSITION.TOP_CENTER,
      autoClose: 3000,
    });
    navigate("/");
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
          className={styles.wideInput} // Clase para mayor ancho
        />
        <label htmlFor="type">Correo</label>
        <input
          type="text"
          placeholder="Escribe aquí tu correo electrónico (opcional)"
          value={plantData.type}
          onChange={(e) => setPlantData({ ...plantData, type: e.target.value })}
          className={styles.wideInput} // Clase para mayor ancho
        />
        <label>Quiero recibir respuesta:</label>
        <div className={styles.formLabelRadio}>
          <span>
            <input
              type="radio"
              id="indoor"
              value="Si"
              checked={plantData.label === "Si"}
              onChange={(e) => setPlantData({ ...plantData, label: e.target.value })}
            />
            Si
          </span>
          <span>
            <input
              type="radio"
              id="outdoor"
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
          <button className={styles.registerButton} type="submit" value="Register">
            <span className={styles.registerButtonText}>Enviar</span>
          </button>
        </div>
      </form>

      <span className={styles.formImage}>
        <img src={imageForm} alt="background image" draggable="false" />
      </span>
    </div>

  );
};

// <ViewPlants/>
export default Contacto;
