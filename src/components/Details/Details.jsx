import React from 'react';
import { plants } from '../../../server.json';
import { useParams } from 'react-router-dom';
import styles from './Details.module.css';

const Details = () => {
    const parametros = useParams();
    const props = plants.find((plant) => plant.id === Number(parametros.id));


    return (
        <div className={styles.container}>
            <img src="https://images.unsplash.com/photo-1509587584298-0f3b3a3a1797?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1426&q=80" 
                alt="Echinocereus Cactus" 
                className={styles.image}
            />
            <div className={styles.content}>        
                <h1 className={styles.title}>{props.name}</h1>
                <span className={styles.title_description}>{props.subtitle}</span>
                {props.label.length > 1 ?
                    <div className={styles.tags}>
                        <p className={styles.tag}>{props.label[0]}</p>
                        <p className={styles.tag}>{props.label[1]}</p>
                    </div> 
                :   <div className={styles.tags}>
                        <p className={styles.tag}>{props.label[0]}</p>
                    </div> 
                }              

                <h2 className={styles.subtitle}>Características</h2>
                <ul className={styles.features}>
                    <li className={styles.features}>{props.features}</li>           
                </ul>
                <h2 className={styles.subtitle}>Descripción</h2>
                <p className={styles.description}>{props.description}</p>                
            </div>
        </div>

    );
}

export default Details;