import { useState } from 'react';
import classes from "./FirstSection.module.css";
import background from "../../../public/images/fondo1.png";
import * as tmImage from '@teachablemachine/image';
import '@tensorflow/tfjs'; // Importar TensorFlow.js


// URL del modelo proporcionado por Teachable Machine
const modelURL = "https://teachablemachine.withgoogle.com/models/T_EK8dLqI/";

const FirstSection = () => {
  const [imagePreview, setImagePreview] = useState(null);
  const [result, setResult] = useState("");
  const [model, setModel] = useState(null);
  const [maxPredictions, setMaxPredictions] = useState(0);
  const [imageSelected, setImageSelected] = useState(false); // Estado para controlar si se seleccionó una imagen

  // Cargar el modelo de Teachable Machine
  const loadModel = async () => {
    const modelData = await tmImage.load(modelURL + "model.json", modelURL + "metadata.json");
    const maxPreds = modelData.getTotalClasses();
    setMaxPredictions(maxPreds);
    setModel(modelData);
  };

  // Manejar la carga de la imagen
  const loadImage = async (event) => {
    const file = event.target.files[0];
    const reader = new FileReader();
    reader.onload = function () {
      const img = new Image();
      img.src = reader.result;
      img.onload = async function () {
        setImagePreview(img); // Mostrar la imagen cargada
        setImageSelected(true); // Imagen seleccionada
        setResult(""); // Limpiar resultado anterior
        if (!model) {
          await loadModel(); // Cargar el modelo si aún no está cargado
        }
      };
    };
    reader.readAsDataURL(file);
  };

  // Predicción usando la imagen cargada
  const predictImage = async () => {
    if (!model) {
      setResult("El modelo no está cargado.");
      return;
    }
    const prediction = await model.predict(imagePreview);
    let highestProbability = 0;
    let className = '';

    for (let i = 0; i < maxPredictions; i++) {
      if (prediction[i].probability > highestProbability) {
        highestProbability = prediction[i].probability;
        className = prediction[i].className.trim(); // Limpiar espacios en blanco
      }
    }
  
    // Mostrar el resultado final
    setResult(`Resultado: ${className} (${(highestProbability * 100).toFixed(2)}%)`);


  };

  return (
    <div className={classes.homeMain}>
      <div className={classes.mainContent}>
        <span className={classes.homeMainText}>
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

          {!imageSelected && (
            <>
              <input
                type="file"
                id="upload-image"
                accept="image/*"
                onChange={loadImage}
                className={classes.uploadInput}
                style={{ display: 'none' }}
              />
              <button
                className={classes.buttonShopNow}
                onClick={() => document.getElementById('upload-image').click()}
              >
                <span className={classes.buttonText}>Elegir Imagen</span>
              </button>
            </>
          )}

          {imagePreview && (
            <div id="image-preview">
              <img
                src={imagePreview.src}
                alt="Imagen cargada"
                style={{ width: '300px', height: '300px', objectFit: 'cover' }}
              />
            </div>
          )}

          {imagePreview && !result && (
            <button
              className={classes.buttonShopNow}
              onClick={predictImage}
            >
              <span className={classes.buttonText}>Predecir Resultado</span>
            </button>
          )}

          {result && (
            <div id="result-container" className={classes.resultContainer}>
              <p>{result}</p>
            </div>
          )}

          {result && (
            <button
              className={classes.buttonShopNow}
              onClick={() => {
                setImagePreview(null);
                setImageSelected(false);
                setResult(""); // Limpiar el resultado
              }}
            >
              <span className={classes.buttonText}>Elegir Otra Imagen</span>
            </button>
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
