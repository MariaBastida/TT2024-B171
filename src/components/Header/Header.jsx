import {
  NavLink
} from 'react-router-dom';
import styles from './Header.module.css';
import logoHeader from '../../../images/footer_logo.png'

export function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.imgVetor}>
        <img src={logoHeader} alt="logotipo" />
      </div>

      <div className={styles.links}>
        <NavLink to="/" activeclassname={styles.activeLink} exact="true">Home</NavLink>
        <NavLink to="/Tipo-de-pinopsidas" activeclassname={styles.activeLink}>Arboles</NavLink>
        <NavLink to="/about-us" activeclassname={styles.activeLink}>Sobre Nosotros</NavLink>
        <NavLink to="/contacto" activeclassname={styles.activeLink}>Contacto</NavLink>
      </div>

    </header>
  );
}

export default Header;
