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
            { id: 1, name: "Sempervirens", label:["Ver más"],image: "/images/pino_sempervirens.jpeg" },
            { id: 2, name: "Macrocarpa", label:["Ver más"], image: "/images/pino_macrocarpa.jpeg" },
            { id: 3, name: "Sempervirens con Phytophthora", label: ["Ver más"], image: "/images/sempervirens_ph.jpg" },
            { id: 4, name: "Sempervirens con estrés hídrico", label: ["Ver más"], image: "/images/sempervirens_eh.jpg" },
            { id: 5, name: "Macrocarpa con estrés hídrico", label: ["Ver más"], image: "/images/macrocarpa_eh.jpg" },
            { id: 6, name: "Macrocarpa con Phytophthora", label: ["Ver más"], image: "/images/macrocarpa_ph.jpg" },
        ];

        setPlants(mockPlants); // Establece los datos locales
    }, []);

    return (
        <div className={style.divCarousel}>
            <section className={style.sectionCarousel}>
                <p>ㅤ</p>
                <h6 className={style.sectionTitle}>
                    Familia Pinopsida <strong className={style.titleStrong}>Reconoce las especies </strong> y enfermedades <strong className={style.titleStrong}>que puedes consultar</strong>
                </h6>
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
                                image={plant.image}
                            />
                        </SplideSlide>
                    ))}
                </Splide>
            </section>
        </div>
    );
};

export default CarouselCards;
