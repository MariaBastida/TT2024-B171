import { Link } from 'react-router-dom';
import style from './CardPlant.module.css';
import cacto from './imgs/cacto.png'

const CardPlant = (props) => {
    
    return(
        <Link to={`/Tipo-de-pinopsidas/${props.id}`}>
            <div className={style.divCard}>
                <img className={style.imageCard} src={cacto} alt="Foto de um Cacto"/>
                <div className={style.plantInfos}>
                    <p className={style.plantTitle}>{props.name}</p>
                    <label className={style.plantTag}>{props.label[0]}</label>
                </div>
            </div>
         </Link>
    )
}

export default CardPlant;