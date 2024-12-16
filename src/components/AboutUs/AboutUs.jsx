import { useState, useEffect } from "react";
import styles from "./AboutUs.module.css";
import LogoLinkedin from "./images/linkedin.svg";
import LogoGithub from "./images/github 1.svg";
import Plant from "./images/plant.png";
import developersData from "../../../developers.json"; 

const AboutUs = () => {
  const [developers, setDevelopers] = useState([]);

  useEffect(() => {
    // Simula la carga de datos
    setDevelopers(developersData);
  }, []);

  return (
    <div className={styles.main}>
      <section className={styles.Container}>
        <div className={styles.content}>
          <div className="Sobre Nosotros">
            <h2 className={styles.titles}>Sobre Nosotros</h2>
            <hr className={styles.hairline} />
            <p className={styles.aboutText}>
            Somos un equipo de estudiantes de la Escuela Superior de Cómputo (ESCOM) del Instituto Politécnico Nacional, dedicados a fusionar la tecnología con la botánica para abordar las enfermedades en pinopsidas. Nuestro proyecto se centra en utilizar un enfoque multidisciplinario, integrando biología y TI, para desarrollar herramientas de diagnóstico avanzadas y proporcionar soluciones efectivas en la gestión de estas enfermedades arbóreas.
            </p>
          </div>

          <img className={styles.Plant} src={Plant} alt="plant" />
        </div>
      </section>

      <section className={styles.DevelopersBody}>
        <h2 className={styles.titles}>Developers</h2>

        <div className={styles.Body}>
          {developers.map((developer) => (
            <div className={styles.Developers} key={developer.id}>
              <div className={styles.block} />
              <div className={styles.blockGreen} />
              <div className={styles.rest}>
                <div className={styles.firstblock}>
                  <h3 className={styles.name}>{developer.name}</h3>
                  <p className={styles.description}>{developer.description}</p>
                </div>
                <div className={styles.Logos}>
                  <a
                    className={styles.Logo}
                    href={developer.github}
                    target="_blank"
                    rel="noreferrer"
                  >
                    <img
                      className={styles.Logo}
                      src={LogoGithub}
                      alt="logoGitHub"
                    />
                  </a>
                  <a
                    className={styles.Logo}
                    href={developer.linkedin}
                    target="_blank"
                    rel="noreferrer"
                  >
                    <img
                      className={styles.Logo}
                      src={LogoLinkedin}
                      alt="logoLinkedin"
                    />
                  </a>
                </div>
                <img
                  className={styles.Photo}
                  src={developer.photo}
                  alt={developer.name}
                />
              </div>
            </div>
          ))}
        </div>
      </section>
      <section className={styles.Container}>
        <div className={styles.content}>
          <div className="Importancia">
            <h2 className={styles.titles}>Importancia</h2>
            <hr className={styles.hairline} />
            <p className={styles.aboutText}>
            Desarrollar una página web en la ESCOM para detectar 
            enfermedades en pinopsidas es vital para proteger estas 
            coníferas, esenciales para el equilibrio ecológico y económico. 
            Este proyecto refleja el compromiso de la ESCOM con la innovación 
            y la sostenibilidad ambiental, además de capacitar a los estudiantes 
            en la aplicación práctica de la tecnología para resolver problemas 
            ambientales significativos.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutUs;
