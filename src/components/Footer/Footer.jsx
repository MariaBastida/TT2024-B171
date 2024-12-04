import React from "react";
import { Helmet } from "react-helmet";
import styles from "./Footer.module.css";
import { Link } from "react-router-dom";

const Footer = (props) => {
  return (
    <footer className={styles.footer}>
      <Helmet>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link
          href="https://fonts.googleapis.com/css2?family=EB+Garamond:wght@700&family=Lato:wght@700&family=Raleway&display=swap"
          rel="stylesheet"
        />
      </Helmet>
      <div className={styles.top}>
        <div className={styles.main}>
          <h1>Kiefer</h1>
          <a href="mailto:compassinhos@gmail.com">compassinhos@gmail.com</a>
          <a href="tel:+5541999999999">+55 41 99999-9999</a>
        </div>
        <div className={styles.aside}>
          <div className={styles.links}>
            <h2>Recursos</h2>
            <a href="https://www.freepik.es" target="_blank" rel="noopener noreferrer">Logo</a>
            <Link to="/product">Imagenes</Link>
            <a href="#">Blogs</a>
          </div>
          <div className={styles.community}>
            <h2>Comunidad</h2>
            <Link to="/about-us">Sobre Nosotros</Link>
            <Link to="/Tipo-de-pinopsidas">Especies de Arboles</Link>
            <a href="/contacto">Contacto</a>
          </div>
        </div>
      </div>
      <div className={styles.base}>
        <img src="../../../images/footer_logo.png" alt="logo" />
        <p> &copy;. Todos los derechos Reservados.</p>
      </div>
    </footer>
  );
};

export default Footer;
