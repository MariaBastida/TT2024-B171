import classes from "./SecondSection.module.css";
import { useNavigate } from "react-router-dom";
import nutrientsIcon from "./Images/Property 1=bag.svg";
import wateringIcon from "./Images/Property 1=water.svg";
import sunlightIcon from "./Images/Property 1=sun.svg";
import firstImg from "../../../public/images/pino_sempervirens.jpeg";
import secondImg from "../../../public/images/pino_macrocarpa.jpeg";
import thirdImg from "../../../public/images/pino_base.jpeg";


const SecondSection = () => {
  const navigate =useNavigate();
  return (
    <section className={classes.moreInfo}>
      <span className={classes.titleItem}>
        <h2>
          Recomendaciones para los <em>pinopsidas</em>
        </h2>
        <p>
          Los árboles Pinopsida, como el Macrocarpa y el Sempervirens, requieren cuidados especiales para mantenerse saludables. Es fundamental mantener un equilibrio en el riego, prevenir enfermedades como Phytophthora, y realizar una poda adecuada para promover un crecimiento fuerte. Aquí algunas recomendaciones clave para cuidar estos árboles y asegurar su bienestar.
        </p>

      </span>
      <div className={classes.firstStep}>
        <img src={wateringIcon} className={classes.wateringIcon} />
        <h3>Riego adecuado</h3>
        <p>
          Provee un suministro controlado de agua, evitando excesos. Riega profundamente y con moderación para desarrollar raíces fuertes, aumentando la frecuencia en temporadas secas sin encharcar.
        </p>
      </div>
      <div className={classes.secondStep}>
        <img src={sunlightIcon} className={classes.sunlightIcon} />
        <h3>Inspección regular</h3>
        <p>
          Revisa periódicamente hojas, tronco y raíces para detectar signos de enfermedades como manchas, marchitez o cambios de color. Actúa rápido ante cualquier anomalía para prevenir daños mayores.
        </p>
      </div>
      <div className={classes.thirdStep}>
        <img src={nutrientsIcon} className={classes.nutrientsIcon} />
        <h3>Poda y mantenimiento</h3>
        <p>
          Elimina ramas muertas o enfermas para mejorar la ventilación y evitar infecciones. Hazlo en invierno o primavera con herramientas limpias para promover un crecimiento saludable y fuerte.
        </p>
      </div>

      <img src={firstImg} className={classes.firstImg} draggable="false" />
      <img src={secondImg} className={classes.secondImg} draggable="false" />
      <div className={classes.websiteInfo}>
        <img src={thirdImg} className={classes.thirdImg} draggable="false" />
        <p>
          En nuestra página web, ofrecemos una herramienta innovadora para detectar enfermedades en dos tipos de Pinopsidas: Sempervirens y Macrocarpa. A través de un modelo de aprendizaje automático, podemos identificar tres estados clave en cada especie de árbol, lo que permite a los usuarios detectar problemas comunes y tomar medidas preventivas o correctivas a tiempo.
        </p>
        <p>Tipos de enfermedades que detectamos:
        <ul>
          <li>Phytophtora</li>
          <li>Estrés Hídrico</li>
        </ul></p>
        <p></p>
        <button className={classes.seeMoreButton} onClick={() => navigate("/Tipo-de-pinopsidas")}>
      <span className={classes.buttonText}>Saber más</span>
    </button>
      </div>

    </section>
  );
};

export default SecondSection;
