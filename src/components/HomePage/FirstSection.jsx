import { useState, useEffect } from 'react';
import classes from "./FirstSection.module.css";
import background from "../../../public/images/fondo1.png";
import * as tmImage from '@teachablemachine/image';
import '@tensorflow/tfjs';
import { useNavigate } from "react-router-dom";

const modelURL = "https://teachablemachine.withgoogle.com/models/T_EK8dLqI/";

const FirstSection = () => {
  const [imagePreview, setImagePreview] = useState(null);
  const [result, setResult] = useState("");
  const [model, setModel] = useState(null);
  const [maxPredictions, setMaxPredictions] = useState(0);
  const [showModal, setShowModal] = useState(false);
  const [isModelLoading, setIsModelLoading] = useState(true);
  const navigate = useNavigate();

  const getFriendlyMessage = (className) => {
    const messages = {
      "Macrocarpa_Phytophtora": "una\nMacrocarpa con Phytophtora",
      "Sempervirens_Sana": "un\nSempervirens sano",
      "Macrocarpa_Sana": "una\nMacrocarpa sana",
      "Sempervirens_Phytophtora": "un\nSempervirens con Phytophtora",
      "Sempervirens_Estrés_Hídrico": "un\nSempervirens con estrés hídrico",
      "Macrocarpa_Estrés_Hídrico": "una\nMacrocarpa con estrés hídrico",
    };

    return messages[className] || "un\nresultado desconocido";
  };

  useEffect(() => {
    const loadModel = async () => {
      try {
        console.log("Cargando modelo...");
        const modelData = await tmImage.load(modelURL + "model.json", modelURL + "metadata.json");
        setMaxPredictions(modelData.getTotalClasses());
        setModel(modelData);
        console.log("Modelo cargado con éxito.");
      } catch (error) {
        console.error("Error al cargar el modelo:", error);
        setModel(null);
      } finally {
        setIsModelLoading(false);
      }
    };

    loadModel();
  }, []);

  const loadImage = async (event) => {
    const file = event.target.files[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onload = function () {
      const img = new Image();
      img.src = reader.result;
      img.onload = async function () {
        setImagePreview(img);
        setResult("");
        setShowModal(true);

        if (!model) {
          console.error("El modelo no está disponible.");
          setResult("Error: el modelo no está cargado. Inténtalo de nuevo.");
          return;
        }

        try {
          console.log("Realizando predicción...");
          const prediction = await model.predict(img);
          let highestProbability = 0;
          let className = '';

          for (let i = 0; i < maxPredictions; i++) {
            if (prediction[i].probability > highestProbability) {
              highestProbability = prediction[i].probability;
              className = prediction[i].className.trim();
            }
          }

          const friendlyMessage = getFriendlyMessage(className);
          setResult(friendlyMessage);
          console.log("Resultado obtenido:", { friendlyMessage, className });
        } catch (error) {
          console.error("Error durante la predicción:", error);
          setResult("Hubo un problema al analizar la imagen. Inténtalo nuevamente.");
        }
      };
    };
    reader.readAsDataURL(file);
  };

  const handleRecommendations = () => {
    const routes = {
      "un\nSempervirens sano": "/Tipo-de-pinopsidas/1",
      "una\nMacrocarpa sana": "/Tipo-de-pinopsidas/2",
      "un\nSempervirens con Phytophtora": "/Tipo-de-pinopsidas/3",
      "un\nSempervirens con estrés hídrico": "/Tipo-de-pinopsidas/4",
      "una\nMacrocarpa con estrés hídrico": "/Tipo-de-pinopsidas/5",
      "una\nMacrocarpa con Phytophtora": "/Tipo-de-pinopsidas/6",
    };

    const cleanResult = Object.keys(routes).find((key) =>
      result.includes(key)
    );

    if (cleanResult) {
      console.log("Navegando a la ruta:", routes[cleanResult]);
      navigate(routes[cleanResult]);
    } else {
      console.log("No se encontró una ruta para el resultado:", result);
    }
  };

  return (
    <div className={classes.homeMain}>
      <div className={classes.mainContent}>
        <span className={classes.homeMainText}>
          <p>ㅤ</p>
          <article className={classes.subtitle}>
            <svg
              className={classes.rectangle}
              width="32"
              height="3"
              viewBox="0 0 32 3"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <rect width="32" height="3" fill="#1E1E24" />
            </svg>
            <p className={classes.subtitleText}>Ama la naturaleza</p>
          </article>

          <h1>
            Detecta Enfermedades en tus <em>Pinopsida</em> aquí
          </h1>
          <p>
            Carga la imagen y obtén un diagnóstico inmediato de posibles enfermedades en tus plantas.
          </p>

          <input
            type="file"
            id="upload-image"
            accept="image/*"
            onChange={loadImage}
            className={classes.uploadInput}
            style={{ display: 'none' }}
            disabled={isModelLoading}
          />
          <button
            className={classes.buttonShopNow}
            onClick={() => document.getElementById('upload-image').click()}
            disabled={isModelLoading}
          >
            <span className={classes.buttonText}>
              {isModelLoading ? "Cargando modelo..." : "Elegir Imagen"}
            </span>
          </button>

          {showModal && (
  <div
    className={classes.modalOverlay}
    onClick={(e) => {
      if (e.target.className.includes('modalOverlay')) {
        setShowModal(false);
      }
    }}
  >
    <div className={classes.modal}>
      <button
        className={classes.closeButton}
        onClick={() => setShowModal(false)}
      >
        ✖
      </button>
      <h2>RESULTADO</h2>
      <div className={classes.imageContainer}>
        <img
          src={imagePreview?.src}
          alt="Vista previa"
          style={{ width: '300px', height: '300px', objectFit: 'cover' }}
        />
        {result && (
          <p className={`${classes.resultText} ${classes.resultHighlight}`}>
            Tu imagen corresponde a
            <br />
            {result}
          </p>
        )}
        <button
          className={classes.buttonShopNow}
          onClick={handleRecommendations}
        >
          <span className={classes.buttonText}>Recomendaciones</span>
        </button>
      </div>
    </div>
  </div>
)}

        </span>
      </div>
      <span className={classes.backgroundImage}>
        <img src={background} alt="background image" draggable="false" />
      </span>
    </div>
  );
};

export default FirstSection;
