import { useEffect, useState } from 'react';
import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/react-splide/css/sea-green';
import style from './CarouselCards.module.css';
import CardPlant from './Card/CardPlant';

const CarouselCards = () => {
    const [plants, setPlants] = useState([]);

    useEffect(() => {
        // Datos de prueba locales
        const mockPlants = [
            { id: 1, name: "Sempervirens", label:["Ver más"] },
            { id: 2, name: "Macrocarpa", label:["Ver más"] },
        ];

        setPlants(mockPlants); // Establece los datos locales
    }, []);

    return (
        <div className={style.divCarousel}>
            <section className={style.sectionCarousel}>
                <h2 className={style.sectionTitle}>
                    Familia Pinopsida <strong className={style.titleStrong}>Reconoce las especies que puedes consultar</strong>
                </h2>
                <Splide
                    options={{
                        type: 'loop',
                        perPage: 4,
                        perMove: 1,
                        gap: '2rem',
                        speed: 3000,
                        breakpoints: {
                            768: {
                                perPage: 3,
                            },
                            425: {
                                perPage: 1,
                            },
                        },
                    }}
                >
                    {plants.map((plant) => (
                        <SplideSlide key={plant.id}>
                            <CardPlant
                                id={plant.id}
                                name={plant.name}
                                label={plant.label}
                            />
                        </SplideSlide>
                    ))}
                </Splide>
            </section>
        </div>
    );
};

export default CarouselCards;
